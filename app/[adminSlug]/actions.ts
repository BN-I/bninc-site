"use server";

import {
  createSession,
  destroySession,
  getAdminPath,
  isAuthenticated,
  verifyCredentials,
} from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { getRequestMeta } from "@/lib/request-meta";

export type LoginState = { error: string | null };

const MAX_FAILURES = 5;

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  if (!getAdminPath()) return { error: "Admin access is not configured." };

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const { ip } = await getRequestMeta();
  const clientIp = ip ?? "unknown";
  const sql = await db();

  const [{ count }] = (await sql`
    SELECT count(*)::int AS count FROM admin_login_failures
    WHERE ip = ${clientIp} AND created_at > now() - interval '15 minutes'`) as {
    count: number;
  }[];
  if (count >= MAX_FAILURES) {
    return { error: "Too many failed attempts. Try again in 15 minutes." };
  }

  if (!(await verifyCredentials(email, password))) {
    await sql`INSERT INTO admin_login_failures (ip) VALUES (${clientIp})`;
    await sql`DELETE FROM admin_login_failures WHERE created_at < now() - interval '1 day'`;
    return { error: "Invalid email or password." };
  }

  await sql`DELETE FROM admin_login_failures WHERE ip = ${clientIp}`;
  await createSession();
  return { error: null };
}

export async function logout() {
  if (await isAuthenticated()) await destroySession();
}
