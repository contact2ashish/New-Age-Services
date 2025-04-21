import React from "react";

const PrivacyPolicy = () => {
  return (
    <section id="PrivacyPolicy" className="PrivacyPolicy">
      <div className="container mt-5">
        <div className="card shadow-sm p-4">
          <h2 className="text-center mb-4">Privacy Policy</h2>

          <div className="mb-3">
            <h5>Introduction</h5>
            <p>
              At <strong>New Age Services</strong>, we are dedicated to protecting your personal information and ensuring transparency about how we collect, use, and share your data.
            </p>
          </div>

          <div className="mb-3">
            <h5>Information We Collect</h5>
            <ul>
              <li>Personal details such as your name, phone number, and email address.</li>
              <li>Information submitted through contact forms or service inquiries.</li>
              <li>Technical data like IP address, browser type, and interaction logs.</li>
            </ul>
          </div>

          <div className="mb-3">
            <h5>Use of Information</h5>
            <ul>
              <li>To provide and improve our services.</li>
              <li>To respond to inquiries and provide customer support.</li>
              <li>To communicate updates, newsletters, and offers (with consent).</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>

          <div className="mb-3">
            <h5>Data Sharing</h5>
            <p>
              We do not sell your personal data. We may share data with trusted third-party partners solely to perform services on our behalf, under confidentiality agreements.
            </p>
          </div>

          <div className="mb-3">
            <h5>Cookies</h5>
            <p>
              Our website may use cookies to enhance your browsing experience and collect usage data. You can control cookie settings through your browser.
            </p>
          </div>

          <div className="mb-3">
            <h5>Data Security</h5>
            <p>
              We implement appropriate technical and organizational safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="mb-3">
            <h5>Your Rights</h5>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Correct or update your personal details.</li>
              <li>Request deletion of your data (subject to legal obligations).</li>
            </ul>
          </div>

          <div className="mb-3">
            <h5>Changes to This Policy</h5>
            <p>
              We may update our Privacy Policy from time to time. Any major changes will be communicated through our website.
            </p>
          </div>

          <div className="mb-3">
            <h5>Contact Information</h5>
            <p>
              If you have questions or concerns about our Privacy Policy, please contact us at: <strong>contact@newageservice.in</strong>
            </p>
          </div>

          <p className="text-muted mt-4"><em>Last updated: April 18, 2025</em></p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
