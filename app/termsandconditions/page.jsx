// app/terms/page.js

export const metadata = {
  title: "Terms & Conditions | BlueCo Media",
  description:
    "BlueCo Media Terms & Conditions — service terms, pricing, billing, termination, and policies.",
};

const EFFECTIVE_DATE = "16th October, 2025";
const LAST_UPDATED = "20th October, 2025";

const SECTIONS = [
  { id: "service-agreement", title: "1. Service Agreement & Campaign Period" },
  { id: "termination-policy", title: "2. Termination Policy" },
  { id: "termination-fee", title: "3. Termination Fee" },
  { id: "payment-terms", title: "4. Payment Terms" },
  { id: "pricing", title: "5. Pricing & Ad Spend Adjustment Clause" },
  { id: "crm", title: "6. CRM Usage & Billing" },
  { id: "guarantee", title: "7. Performance Guarantee (If Applicable)" },
  { id: "referral", title: "8. Referral Bonus" },
  { id: "confidentiality", title: "9. Confidentiality" },
  { id: "chargebacks", title: "10. Chargebacks & Disputes" },
  { id: "disclaimer", title: "11. Service Disclaimer" },
  { id: "liability", title: "12. Limitation of Liability" },
  { id: "law", title: "13. Governing Law" },
  { id: "contact", title: "15. Contact Information" },
];

function Anchor({ href, children }) {
  return (
    <a
      href={href}
      className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-600"
    >
      {children}
    </a>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-neutral-600">
            Effective Date: {EFFECTIVE_DATE}
            <br />
            Last Updated: {LAST_UPDATED}
          </p>
        </header>

        {/* Intro */}
        <section className="mb-12 text-neutral-700 leading-relaxed">
          <p>
            Welcome to <strong>BlueCo Media</strong>. These Terms & Conditions
            outline the policies governing the services provided by BlueCo Media
            (“we,” “our,” or “us”) to our clients (“you,” “your,” or “the
            Client”). By using our services, you agree to comply with these
            terms.
          </p>
        </section>

        {/* Table of contents */}
        <nav className="mb-16 border-t border-b border-neutral-200 py-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 mb-4">
            Contents
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Anchor href={`#${s.id}`}>{s.title}</Anchor>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="space-y-14 leading-relaxed">
          <section id="service-agreement">
            <h2 className="text-2xl font-semibold mb-4">
              1. Service Agreement & Campaign Period
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                All service agreements begin with a minimum term of three (3)
                months, unless otherwise stated in your signed agreement.
              </li>
              <li>
                Your 30-day campaign period starts from the ad campaign launch
                date, confirmed via email or WhatsApp.
              </li>
              <li>
                After the initial term, services renew on a rolling monthly basis
                until cancelled.
              </li>
            </ul>
          </section>

          <section id="termination-policy">
            <h2 className="text-2xl font-semibold mb-4">
              2. Termination Policy
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>A 30-day written notice is required to cancel services.</li>
              <li>
                Final monthly payment remains applicable during the notice
                period.
              </li>
              <li>
                Clients may continue using the services throughout the notice
                period.
              </li>
            </ul>
          </section>

          <section id="termination-fee">
            <h2 className="text-2xl font-semibold mb-4">
              3. Termination Fee
            </h2>
            <p>
              If services are cancelled before the minimum term, a termination
              fee equal to one month’s service fee may apply. This covers
              offboarding, data handover, and reallocation of resources.
            </p>
          </section>

          <section id="payment-terms">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>First month and setup fee charged upfront.</li>
              <li>
                Monthly service fees billed automatically on sign-up
                anniversary.
              </li>
              <li>
                You authorize BlueCo Media to store and charge your card for
                services and add-ons.
              </li>
              <li>
                Ad spend is paid directly to platforms and not included in
                service fees.
              </li>
              <li>All payments are non-refundable.</li>
            </ul>
          </section>

          <section id="pricing">
            <h2 className="text-2xl font-semibold mb-4">
              5. Pricing & Ad Spend Adjustment Clause
            </h2>

            <h3 className="font-medium mt-4">Program Tiers</h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border border-neutral-200 text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="border px-3 py-2 text-left">Program</th>
                    <th className="border px-3 py-2 text-left">Ad Spend</th>
                    <th className="border px-3 py-2 text-left">Monthly Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Accelerator</td>
                    <td className="border px-3 py-2">Up to $1,500</td>
                    <td className="border px-3 py-2">$997</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Power</td>
                    <td className="border px-3 py-2">Up to $3,000</td>
                    <td className="border px-3 py-2">$1,800</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Growth</td>
                    <td className="border px-3 py-2">Up to $5,000</td>
                    <td className="border px-3 py-2">$2,800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="crm">
            <h2 className="text-2xl font-semibold mb-4">
              6. CRM Usage & Billing
            </h2>
            <p>
              CRM setup and reporting are included. SMS and call usage is billed
              separately by the platform (typically $15–$20/month).
            </p>
          </section>

          <section id="guarantee">
            <h2 className="text-2xl font-semibold mb-4">
              7. Performance Guarantee
            </h2>
            <p>
              Only monthly service fees are refundable if eligible and requested
              within 3 days of the 30-day period ending.
            </p>
          </section>

          <section id="referral">
            <h2 className="text-2xl font-semibold mb-4">
              8. Referral Bonus
            </h2>
            <p>
              Earn $300/month for each active client referral, paid or deducted
              from your invoice.
            </p>
          </section>

          <section id="confidentiality">
            <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
            <p>
              All materials and strategies are confidential for 3 years after
              service termination.
            </p>
          </section>

          <section id="chargebacks">
            <h2 className="text-2xl font-semibold mb-4">
              10. Chargebacks & Disputes
            </h2>
            <p>
              You agree not to initiate chargebacks. Fraudulent disputes may lead
              to legal action.
            </p>
          </section>

          <section id="disclaimer">
            <h2 className="text-2xl font-semibold mb-4">
              11. Service Disclaimer
            </h2>
            <p>No guarantees of financial results are made.</p>
          </section>

          <section id="liability">
            <h2 className="text-2xl font-semibold mb-4">
              12. Limitation of Liability
            </h2>
            <p>
              Liability is limited to the most recent month’s service fee.
            </p>
          </section>

          <section id="law">
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p>These terms are governed by the laws of the USA.</p>
          </section>

      

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">
              14. Contact Information
            </h2>
            <p>
              BlueCo Media
              <br />
              Email:{" "}
              <Anchor href="mailto:haroon@bluecomedia.com">
                haroon@bluecomedia.com
              </Anchor>
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-neutral-200 text-sm text-neutral-500">
          © {new Date().getFullYear()} BlueCo Media. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
