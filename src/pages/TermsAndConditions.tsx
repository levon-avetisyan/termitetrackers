import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <section className="container my-5">
        <h1 className="text-center mb-4">Welcome to Termite Trackers Pest Control Services</h1>
        <p className="text-muted">
          Welcome to Source MRKTG! These Terms and Conditions outline the rules and regulations for
          using our website and services. By accessing our website, you accept these terms in full.
          If you disagree with these terms, you should not use our website or services.
        </p>

        <h3 className="mt-4">1. Definitions</h3>
        <ul>
          <li>
            <strong>"We," "Our," or "Us"</strong> refers to Source MRKTG, the termite extermination
            company.
          </li>
          <li>
            <strong>"You" or "Your"</strong> refers to the user or visitor of our website or the
            individual engaging our services.
          </li>
          <li>
            <strong>"Services"</strong> refers to termite extermination and related pest control
            services provided by us.
          </li>
        </ul>

        <h3 className="mt-4">2. Website Use</h3>
        <ul>
          <li>The content on this website is for general informational purposes only.</li>
          <li>
            Unauthorized use of this website or any part of its content may give rise to a claim for
            damages or be considered a criminal offense.
          </li>
        </ul>

        <h3 className="mt-4">3. Services</h3>
        <ul>
          <li>
            All services are subject to availability and require an assessment of your property.
          </li>
          <li>
            While we aim to provide effective solutions, results may vary depending on the nature
            and extent of the termite infestation.
          </li>
          <li>It is your responsibility to provide accurate information about your property.</li>
        </ul>

        <h3 className="mt-4">4. Payments and Fees</h3>
        <ul>
          <li>
            Payment terms will be outlined in your service agreement. Full payment is required to
            initiate or complete the service.
          </li>
          <li>
            Additional services or treatments not covered in the initial agreement will incur extra
            charges.
          </li>
        </ul>

        <h3 className="mt-4">5. Cancellations and Refunds</h3>
        <ul>
          <li>Cancellations made within 48 hours of your scheduled appointment may incur a fee.</li>
          <li>
            Refunds will only be issued for services not rendered due to reasons on our part,
            processed at our discretion.
          </li>
        </ul>

        <h3 className="mt-4">6. Warranties and Liability</h3>
        <ul>
          <li>
            We aim to provide high-quality termite extermination services but do not guarantee
            permanent eradication unless specified in a written warranty.
          </li>
          <li>
            We are not liable for damages to your property resulting from pre-existing conditions or
            factors beyond our control.
          </li>
        </ul>

        <h3 className="mt-4">7. Intellectual Property</h3>
        <ul>
          <li>
            All materials on this website, including logos, images, and content, are the
            intellectual property of Source MRKTG. Unauthorized reproduction is prohibited.
          </li>
        </ul>

        <h3 className="mt-4">8. Privacy</h3>
        <ul>
          <li>
            Your privacy is important to us. Please refer to our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link> for details on how we collect, use, and
            protect your personal information.
          </li>
        </ul>

        <h3 className="mt-4">9. External Links</h3>
        <ul>
          <li>
            Our website may include links to other websites. We are not responsible for the content
            or privacy practices of these external sites.
          </li>
        </ul>

        <h3 className="mt-4">10. Changes to Terms</h3>
        <ul>
          <li>
            We reserve the right to modify these terms at any time. Updated terms will be posted on
            this page, and continued use of our website or services constitutes acceptance of those
            changes.
          </li>
        </ul>

        <h3 className="mt-4">Consent to Communications</h3>
        <p>
          You consent to receive communications from us through emails, autodialed and/or
          pre-recorded telemarketing calls, AI calls, and text messages from or on behalf of Source
          MRKTG and our partners. Standard message and data rates may apply.
        </p>
        <p>
          You may opt out anytime by replying STOP to a text message or by contacting us at{' '}
          <a href="mailto:nicolaas.vanleeuwen@sourcemrktg.com">
            nicolaas.vanleeuwen@sourcemrktg.com
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default TermsAndConditions;
