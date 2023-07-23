import React from 'react';

const SupportPage = () => {
  return (
    <div>
      <section id="customer-support" className="support-section">
        <h2>Customer Support</h2>
        <p>
          Need assistance? Our dedicated support team is here to help. Contact us through one of the following channels:
        </p>
        <ul>
          <li>Phone: 123-456-7890</li>
          <li>Email: support@example.com</li>
          <li>Live Chat: Visit our website and click on the chat icon</li>
        </ul>
      </section>

      <section id="faq" className="support-section">
        <h2>FAQ</h2>
        <p>Here are some frequently asked questions:</p>
        <ul>
          <li>
            <strong>Question 1?</strong>
            <br />
            Answer 1.
          </li>
          <li>
            <strong>Question 2?</strong>
            <br />
            Answer 2.
          </li>
          <li>
            <strong>Question 3?</strong>
            <br />
            Answer 3.
          </li>
        
        </ul>
      </section>

      <section id="contact-us" className="support-section">
        <h2>Contact Us</h2>
        <p>
          Have any questions or feedback? Reach out to us using the contact information below:
        </p>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Phone: 987-654-3210</li>
          <li>Address: 123 Street, City, Country</li>
        </ul>
      </section>

      <section id="our-details" className="support-section">
        <h2>Our Details</h2>
        <p>
          Learn more about our company and services:
        </p>
        <ul>
          <li>About Us</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
          {/* Add more details as needed */}
        </ul>
      </section>
    </div>
  );
};

export default SupportPage;
