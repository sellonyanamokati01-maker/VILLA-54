import React from 'react';

export default function Footer() {
  return (
    <>
      <a href="https://wa.me/27623926399" target="_blank" rel="noopener noreferrer" className="whatsapp-sticky">
        <img src="/images/whatsapp.png" alt="WhatsApp" />
      </a>

      <footer className="reveal site-footer">
        <div className="footer-grid">
          <div>
            <h3>Villa54</h3>
            <p>NSFAS-accredited student accommodation.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="/" className="footer-link">Home</a><br />
            <a href="/about" className="footer-link">About</a><br />
            <a href="/contact" className="footer-link">Contact</a><br />
            <a href="/apply" className="footer-link">Apply / NSFAS</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>062 392 6399</p>
            <a href="mailto:info@stayvilla54.com" className="footer-link">info@stayvilla54.com</a><br />
            <a href="https://wa.me/27623926399" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
          </div>
        </div>
        <div className="footer-credit">Website created by <span>Sellonyana Mokati</span></div>
      </footer>
    </>
  );
}
