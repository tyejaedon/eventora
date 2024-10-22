import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>© 2024 Eventora. All rights reserved.</h4>
        </div>
        <div className="footer-section">
          <h4>FAQs</h4>
          <ul>
            <li><a href="/faqs">How do I register for events?</a></li>
            <li><a href="/faqs">How do I contact support?</a></li>
            <li><a href="/faqs">What are the refund policies?</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: contact@strahmore.edu</p>
          <p>Phone: +254 1042034321</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
