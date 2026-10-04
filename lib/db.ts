import "server-only";
import { neon } from "@neondatabase/serverless";

export type Submission = {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string | null;
  service: string;
  budget: string;
  message: string;
  sms_consent: boolean;
  ip: string | null;
  user_agent: string | null;
};

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return neon(url);
}

let schemaReady: Promise<void> | null = null;

// Creates the tables on first use so no manual migration step is needed.
export function db() {
  const sql = getSql();
  schemaReady ??= (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        company TEXT,
        service TEXT NOT NULL,
        budget TEXT NOT NULL,
        message TEXT NOT NULL,
        sms_consent BOOLEAN NOT NULL DEFAULT false,
        ip TEXT,
        user_agent TEXT
      )`;
    await sql`
      CREATE TABLE IF NOT EXISTS admin_login_failures (
        id SERIAL PRIMARY KEY,
        ip TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`;
  })().catch((err) => {
    schemaReady = null;
    throw err;
  });
  return schemaReady.then(() => sql);
}
