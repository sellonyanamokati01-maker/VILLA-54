import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Footer() {
  const footerRef = useScrollReveal<HTMLElement>();

  return (
    <footer ref={footerRef} className="reveal site-footer">
      <div className="footer-grid">
        <div>
          <h3>Villa54</h3>
          <p>NSFAS-accredited student accommodation.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <br />
          <Link to="/about" className="footer-link">
            About
          </Link>
          <br />
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <br />
          <Link to="/apply" className="footer-link">
            Apply / NSFAS
          </Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>062 392 6399</p>
          <a href="mailto:info@stayvilla54.com" className="footer-link">
            info@stayvilla54.com
          </a>
          <br />
          <a
            href="https://wa.me/27623926399"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-credit">
        Website created by <span>Sellonyana Mokati</span>
      </div>
    </footer>
  );
}
