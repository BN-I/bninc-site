import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BNinc collects, uses, and protects the personal information you share with us, including phone numbers and SMS consent.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  openGraph: {
    title: "Privacy Policy | BNinc",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="// legal"
      title="Privacy Policy"
      lastUpdated="October 4, 2026"
    >
      <p>
        This Privacy Policy explains how BNinc (&ldquo;BNinc&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects,
        uses, and protects information when you visit{" "}
        <Link href="/">bitnetinc.com</Link> (the &ldquo;Site&rdquo;), submit our
        contact form, or otherwise communicate with us. By using the Site, you
        agree to the practices described in this policy.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you provide</h3>
      <p>When you submit our contact form or reach out to us, we may collect:</p>
      <ul>
        <li>Your first and last name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company name</li>
        <li>
          Project details, including the services you are interested in and
          your budget range
        </li>
        <li>Any other information you choose to include in your message</li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        When you visit the Site, we and our service providers may automatically
        collect technical information such as your IP address, browser type,
        device information, pages viewed, referring URLs, and the dates and
        times of your visits. This is collected through cookies and similar
        technologies, as described below.
      </p>

      <h2>2. How we use your information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your inquiries and requests</li>
        <li>
          Contact you by phone call or email about your project inquiry, and by
          text message (SMS) if you have opted in
        </li>
        <li>Prepare proposals, estimates, and provide our services</li>
        <li>Operate, maintain, and improve the Site</li>
        <li>Understand how visitors use the Site and measure our marketing</li>
        <li>Comply with legal obligations and protect our rights</li>
      </ul>

      <h2>3. Phone calls and text messages (SMS)</h2>
      <p>
        If you provide your phone number through our contact form, BNinc may
        call you at that number about your inquiry. We will send you text
        messages only if you check the SMS consent box on our contact form.
        SMS consent is optional and is not a condition of purchase. Message
        frequency varies. Message and data rates may apply. You can reply <strong>STOP</strong> to any
        text message to opt out, or <strong>HELP</strong> for help. You can also
        ask us to stop contacting you by phone at any time by emailing{" "}
        <a href="mailto:support@bitnetinc.com">support@bitnetinc.com</a>.
      </p>
      <p>
        <strong>
          We do not sell, rent, or share your mobile phone number or SMS opt-in
          consent with third parties or affiliates for their marketing or
          promotional purposes.
        </strong>{" "}
        Text messaging originator opt-in data and consent will not be shared
        with any third parties, except with service providers that help us
        deliver messages on our behalf.
      </p>

      <h2>4. Cookies, analytics, and third-party services</h2>
      <p>
        The Site uses cookies and similar technologies provided by third
        parties, including:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> to understand how visitors use the
          Site
        </li>
        <li>
          <strong>Meta Pixel</strong> to measure the effectiveness of our
          advertising
        </li>
        <li>
          <strong>Tawk.to</strong> to provide live chat. Messages you send
          through the chat widget are processed by Tawk.to
        </li>
      </ul>
      <p>
        These providers may collect information about your use of the Site
        under their own privacy policies. You can control or delete cookies
        through your browser settings. Blocking cookies may affect how parts of
        the Site work.
      </p>

      <h2>5. How we share your information</h2>
      <p>We do not sell your personal information. We may share it only:</p>
      <ul>
        <li>
          With service providers that host the Site, store data, deliver
          communications, or provide analytics for us. They may use it only to
          perform services on our behalf
        </li>
        <li>
          When required by law, or to protect the rights, property, or safety
          of BNinc, our clients, or others
        </li>
        <li>
          In connection with a merger, acquisition, or sale of all or part of
          our business
        </li>
        <li>With your consent</li>
      </ul>

      <h2>6. Data retention</h2>
      <p>
        We keep personal information only as long as we need it for the
        purposes described in this policy. That includes keeping it to respond
        to your inquiry, to maintain our business relationship, and to meet
        legal, accounting, or reporting requirements.
      </p>

      <h2>7. Data security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to
        protect your information. However, no method of transmission over the
        internet or of electronic storage is completely secure, so we cannot
        guarantee absolute security.
      </p>

      <h2>8. Your rights and choices</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        or delete your personal information, or to object to or restrict
        certain processing. To make a request, email us at{" "}
        <a href="mailto:support@bitnetinc.com">support@bitnetinc.com</a>. We
        will respond within the time required by applicable law.
      </p>

      <h2>9. Children&rsquo;s privacy</h2>
      <p>
        The Site is not directed to children under 13, and we do not knowingly
        collect personal information from children. If you believe a child has
        given us personal information, please contact us and we will delete
        it.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we
        will revise the &ldquo;Last updated&rdquo; date at the top of this
        page. Your continued use of the Site after any change means you accept
        the updated policy.
      </p>

      <h2>11. Contact us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{" "}
        <a href="mailto:support@bitnetinc.com">support@bitnetinc.com</a>.
      </p>
    </LegalPage>
  );
}
