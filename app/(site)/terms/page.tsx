import LegalLayout from "../../components/layout/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The rules of engagement for our digital partnership."
      lastUpdated="Feb 16, 2026"
    >
      <section>
        <h2>
          <span className="text-blue-600/20 text-4xl italic">01.</span>{" "}
          Engagement
        </h2>
        <p>
          By interacting with SleekSites Agency, you're entering a professional
          ecosystem designed for growth. We agree to provide excellence; you
          agree to provide the necessary feedback and assets to make that
          happen.
        </p>

        <h2>
          <span className="text-blue-600/20 text-4xl italic">02.</span>{" "}
          Ownership & IP
        </h2>
        <p>
          Once final payment is made, the code, design, and assets created
          specifically for your project belong to you. We retain the right to
          showcase the work in our portfolio (unless a specific NDA is signed).
        </p>

        <h2>
          <span className="text-blue-600/20 text-4xl italic">03.</span> Payment
          Terms
        </h2>
        <p>
          Projects generally require a 50% commitment fee to begin. The
          remaining balance is due upon project milestone completion or final
          deployment.
        </p>

        <h2>
          <span className="text-blue-600/20 text-4xl italic">04.</span>{" "}
          Liability
        </h2>
        <p>
          While we build "bulletproof" sites, we are not responsible for lost
          revenue due to third-party outages (like hosting providers or API
          failures) beyond our control.
        </p>
      </section>
    </LegalLayout>
  );
}
