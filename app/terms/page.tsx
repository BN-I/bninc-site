import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms and conditions that govern your use of the BNinc website and our communications with you.",
  alternates: { canonical: `${siteConfig.url}/terms` },
  openGraph: {
    title: "Terms and Conditions | BNinc",
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="// legal"
      title="Terms and Conditions"
      lastUpdated="October 4, 2026"
    >
      <p>
        These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to
        and use of <Link href="/">bitnetinc.com</Link> (the &ldquo;Site&rdquo;),
        operated by BNinc (&ldquo;BNinc&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By using the Site, you agree to
        these Terms. If you do not agree, please do not use the Site.
      </p>

      <h2>1. Use of the Site</h2>
      <p>
        You may use the Site only for lawful purposes and in accordance with
        these Terms. You agree not to:
      </p>
      <ul>
        <li>Use the Site in any way that violates applicable law</li>
        <li>
          Try to gain unauthorized access to the Site, its servers, or any
          connected systems
        </li>
        <li>
          Interfere with or disrupt the Site, including by introducing malware
          or sending automated or excessive requests
        </li>
        <li>
          Submit false, misleading, or someone else&rsquo;s information through
          our contact form
        </li>
      </ul>

      <h2>2. Information on the Site</h2>
      <p>
        Content on the Site, including blog posts, case studies, and service
        descriptions, is provided for general information only. It is not
        professional advice and does not create a contract or client
        relationship. Any engagement for services is governed by a separate
        written agreement between you and BNinc.
      </p>

      <h2>3. Contact form and communications</h2>
      <p>
        When you submit our contact form, you confirm that the information you
        provide is accurate and that you are authorized to use the phone
        number and email address you provide. You agree that BNinc may contact
        you by phone call or email about your inquiry. If you check the SMS
        consent box, you also agree to receive text messages as described
        below.
      </p>

      <h2>4. SMS terms</h2>
      <ul>
        <li>
          <strong>Program:</strong> If you opt in by checking the SMS consent
          box on our contact form, BNinc may send text messages about your
          project inquiry, scheduling, and follow-ups to the phone number you
          provide.
        </li>
        <li>
          <strong>Frequency:</strong> Message frequency varies.
        </li>
        <li>
          <strong>Cost:</strong> Message and data rates may apply.
        </li>
        <li>
          <strong>Opt out:</strong> Reply <strong>STOP</strong> to any message
          to stop receiving texts. You will get one confirmation message, and
          then no more texts unless you opt in again.
        </li>
        <li>
          <strong>Help:</strong> Reply <strong>HELP</strong> for help, or email{" "}
          <a href="mailto:support@bitnetinc.com">support@bitnetinc.com</a>.
        </li>
        <li>
          Carriers are not liable for delayed or undelivered messages.
        </li>
        <li>
          Consent to receive text messages is not a condition of purchasing
          any service.
        </li>
      </ul>
      <p>
        For details on how we handle your phone number, see our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The Site and its content, including text, graphics, logos, and code,
        are owned by BNinc or its licensors and are protected by intellectual
        property laws. You may not copy, reproduce, distribute, or create
        derivative works from the Site&rsquo;s content without our prior
        written permission, except for personal, non-commercial use.
      </p>

      <h2>6. Third-party links and services</h2>
      <p>
        The Site may contain links to third-party websites or use third-party
        services, such as live chat and analytics. We are not responsible for
        the content, policies, or practices of third parties, and your use of
        them is at your own risk.
      </p>

      <h2>7. Disclaimer of warranties</h2>
      <p>
        The Site is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo;, without warranties of any kind, express or implied.
        Those include warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We do not guarantee that the Site will
        be uninterrupted, error-free, or free of harmful components.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, BNinc will not be liable for
        any indirect, incidental, special, consequential, or punitive damages,
        or for any loss of profits, data, or goodwill, arising from your use of
        or inability to use the Site.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless BNinc and its team from any
        claims, damages, or expenses arising from your violation of these Terms
        or your misuse of the Site.
      </p>

      <h2>10. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &ldquo;Last updated&rdquo; date at the top of this page. Your
        continued use of the Site after any change means you accept the
        updated Terms.
      </p>

      <h2>11. Contact us</h2>
      <p>
        If you have questions about these Terms, contact us at{" "}
        <a href="mailto:support@bitnetinc.com">support@bitnetinc.com</a>.
      </p>
    </LegalPage>
  );
}
