import LegalLayout from "../../components/layout/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we handle your data with transparency and integrity."
      lastUpdated="Feb 16, 2026"
    >
      <section>
        <h2>
          <span className="text-blue-600/20 text-4xl italic">01.</span> The Big
          Picture
        </h2>
        <p>
          We aren't in the business of selling data. We're in the business of
          building high-performance websites. Any information we collect is
          strictly to improve your experience or fulfill our service obligations
          to you.
        </p>

        <h2>
          <span className="text-blue-600/20 text-4xl italic">02.</span>{" "}
          Information Capture
        </h2>
        <p>
          We collect information that you voluntarily provide to us when you
          express an interest in obtaining information about us or our products,
          such as:
        </p>
        <ul>
          <li>
            <strong>Contact Details:</strong> Names, email addresses, and phone
            numbers.
          </li>
          <li>
            <strong>Project Briefs:</strong> Business details and digital goals
            shared via contact forms.
          </li>
          <li>
            <strong>Device Metadata:</strong> IP addresses and browser types via
            Google Analytics to help us optimize site speed for Kenyan networks.
          </li>
        </ul>

        <h2>
          <span className="text-blue-600/20 text-4xl italic">03.</span> Security
          Measures
        </h2>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information. Your data is contained behind secured
          networks and is only accessible by a limited number of persons who
          have special access rights to such systems.
        </p>
      </section>
    </LegalLayout>
  );
}
