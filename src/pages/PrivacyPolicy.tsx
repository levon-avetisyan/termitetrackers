import Navbar from '../components/Navbar/Navbar';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="container my-5">
        <h1 className="text-center mb-4">Privacy Policy</h1>
        <p className="text-muted text-center">
          <em>Last updated Dec 3, 2024</em>
        </p>
        <p>
          This privacy notice for Source MRKTG (“we,” “us,” or “our”) describes how and why we might
          collect, store, use, and/or share (“process”) your information when you use our services
          (“Services”), such as when you: Visit our website at{' '}
          <a href="https://www.sourcemrktg.com/" target="_blank" rel="noopener noreferrer">
            https://www.sourcemrktg.com/
          </a>{' '}
          or any website of ours that links to this privacy notice. Engage with us in other related
          ways, including any sales, marketing, or events. If you do not agree with our policies and
          practices, please do not use our Services. Questions? Contact us at{' '}
          <a href="mailto:nicolaas.vanleeuwen@sourcemrktg.com">
            nicolaas.vanleeuwen@sourcemrktg.com
          </a>
          .
        </p>

        <h2 className="mt-5">Summary of Key Points</h2>
        <p>
          This summary provides key points from our privacy notice. For more details, use the table
          of contents below or follow the relevant links.
        </p>

        <h3>What personal information do we process?</h3>
        <p>
          When you visit, use, or navigate our Services, we may process personal information
          depending on how you interact with us and the Services, the choices you make, and the
          products and features you use.
        </p>

        <h3>Do we process any sensitive personal information?</h3>
        <p>We do not process sensitive personal information.</p>

        <h3>Do we receive any information from third parties?</h3>
        <p>We do not receive any information from third parties.</p>

        <h3>How do we process your information?</h3>
        
        <p>
          We process your information to provide, improve, and administer our Services, communicate
          with you, ensure security, and comply with the law. Learn more about how we process your
          information.
        </p>

        <h3>How do we keep your information safe?</h3>
        <p>
          We implement organizational and technical measures to protect your personal information.
          However, no method can guarantee 100% security.
        </p>

        <h3>What are your rights?</h3>
        <p>
          Depending on your location, privacy laws may grant you rights regarding your personal
          information.
        </p>

        <h3>How do you exercise your rights?</h3>
        <p>
          To exercise your rights, submit a data subject access request or contact us. We will act
          on your request in accordance with applicable laws.
        </p>

        <h3>Consent to Communication</h3>
        <p>
          <strong>Scope of Consent:</strong> By submitting your personal information on our website,
          you agree that Source MRKTG, its subsidiaries, affiliates, and trusted third-party
          partners may contact you via email, phone calls, text messages, and postal mail.
        </p>
        <p>
          <strong>Automated Calls and Messages:</strong> Consent includes receiving autodialed and
          prerecorded messages or calls delivered via automated technology.
        </p>
        <p>
          <strong>Third-Party Communication:</strong> We may share your information with trusted
          third parties for them to contact you with relevant offers and services.
        </p>
        <p>
          <strong>Voluntary Nature of Consent:</strong> Providing consent is voluntary, and you may
          withdraw it at any time. Follow the opt-out instructions in our communications or contact
          our customer service.
        </p>

        <h3>Data Protection and Privacy</h3>
        <p>
          <strong>Use of Information:</strong> Your information helps us tailor our communication
          with you, improve your experience, and meet legal obligations.
        </p>
        <p>
          <strong>Sharing and Disclosure:</strong> We do not sell your personal data. We share your
          data only with trusted third parties under strict conditions.
        </p>
        <p>
          <strong>Data Security:</strong> We implement technical and organizational measures to
          protect against unauthorized or unlawful processing.
        </p>
        <p>
          <strong>Rights of Individuals:</strong> You have rights regarding your data, including
          access, correction, deletion, and restriction. Contact us to exercise these rights.
        </p>
        <p className='mt-5'>
          <b>
          All the above categories exclude text messaging originator opt-in data and consent; 
          this information will not be shared with any third parties.
          </b>
        </p>
        <p>
          <b>
            We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. 
            We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, 
            including but not limited to platform providers, 
            phone companies, and any other vendors who assist us in the delivery of text messages.
          </b>
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
