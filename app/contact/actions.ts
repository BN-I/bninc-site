"use server";

import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { db } from "@/lib/db";
import { getRequestMeta } from "@/lib/request-meta";

export type SubmitContactResult = { ok: true } | { ok: false; error: string };

export async function submitContact(
  values: ContactFormValues,
): Promise<SubmitContactResult> {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { ok: false, error: "Please check the form and try again." };
  }

  const data = parsed.data;
  // Bots fill the hidden honeypot field; pretend it worked and drop it.
  if (data.website) return { ok: true };

  try {
    const { ip, userAgent } = await getRequestMeta();
    const sql = await db();
    await sql`
      INSERT INTO contact_submissions
        (first_name, last_name, email, phone, company, service, budget,
         message, sms_consent, ip, user_agent)
      VALUES
        (${data.firstName}, ${data.lastName}, ${data.email}, ${data.phone},
         ${data.company || null}, ${data.service}, ${data.budget},
         ${data.message}, ${data.smsConsent ?? false}, ${ip}, ${userAgent})`;
    return { ok: true };
  } catch (err) {
    console.error("Failed to save contact submission", err);
    return {
      ok: false,
      error:
        "Something went wrong sending your message. Please try again or email support@bitnetinc.com.",
    };
  }
}
