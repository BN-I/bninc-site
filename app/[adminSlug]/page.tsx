import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdminPath, isAuthenticated } from "@/lib/admin-auth";
import { db, type Submission } from "@/lib/db";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { SubmissionsTable } from "@/components/admin/SubmissionsTable";

// The admin dashboard lives at the secret path in the ADMIN_PATH env var, so
// the URL never appears in the codebase. Every other path here is a 404.

type Props = { params: Promise<{ adminSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { adminSlug } = await params;
  if (adminSlug !== getAdminPath()) return {};
  return {
    title: "Admin",
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function AdminPage({ params }: Props) {
  const { adminSlug } = await params;
  const adminPath = getAdminPath();
  if (!adminPath || adminSlug !== adminPath) notFound();

  if (!(await isAuthenticated())) return <AdminLogin />;

  const sql = await db();
  const rows = (await sql`
    SELECT * FROM contact_submissions
    ORDER BY created_at DESC
    LIMIT 1000`) as Submission[];

  return (
    <SubmissionsTable
      rows={rows.map((r) => ({
        ...r,
        created_at: new Date(r.created_at).toISOString(),
      }))}
    />
  );
}
