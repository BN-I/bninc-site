import "server-only";
import { createHmac, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";

const scryptAsync = promisify(scrypt) as (
  password: string,
  salt: Buffer,
  keylen: number,
) => Promise<Buffer>;

export const SESSION_COOKIE = "bn_admin";
const SESSION_TTL_SECONDS = 8 * 60 * 60;

export function getAdminPath() {
  return process.env.ADMIN_PATH || null;
}

// ADMIN_PASSWORD_HASH is "<salt hex>:<scrypt hash hex>", produced by
// scripts/hash-password.mjs.
export async function verifyCredentials(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const [saltHex, hashHex] = process.env.ADMIN_PASSWORD_HASH?.split(":") ?? [];

  const configured =
    /^[0-9a-f]{32,}$/i.test(saltHex ?? "") && /^[0-9a-f]{64,}$/i.test(hashHex ?? "");

  // Always run scrypt so a wrong email takes as long as a wrong password.
  const salt = configured ? Buffer.from(saltHex, "hex") : Buffer.alloc(16);
  const expected = configured ? Buffer.from(hashHex, "hex") : Buffer.alloc(64);
  const actual = await scryptAsync(password, salt, expected.length);
  const passwordOk = timingSafeEqual(actual, expected);

  const emailOk =
    !!adminEmail && email.trim().toLowerCase() === adminEmail.trim().toLowerCase();

  return configured && emailOk && passwordOk;
}

function sign(value: string) {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be set to at least 32 characters");
  }
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export async function createSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const value = `${expiresAt}.${sign(String(expiresAt))}`;
  (await cookies()).set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: `/${getAdminPath()}`,
    maxAge: SESSION_TTL_SECONDS,
  });
}

export async function destroySession() {
  (await cookies()).delete({ name: SESSION_COOKIE, path: `/${getAdminPath()}` });
}

export async function isAuthenticated() {
  const value = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!value) return false;

  const [expiresAt, signature] = value.split(".");
  if (!expiresAt || !signature) return false;
  if (Number(expiresAt) < Date.now() / 1000) return false;

  const expected = Buffer.from(sign(expiresAt));
  const actual = Buffer.from(signature);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
