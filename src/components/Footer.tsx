import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 style={{ color: 'var(--white)' }}>Mitra Finance</h4>
            <p className="footer-text">
              Your trusted loan agent connecting you with 95+ banks and NBFCs for fast, transparent approvals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://www.instagram.com/rdk_finance_tn" target="_blank" rel="noreferrer" style={{ color: 'var(--white)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} className="text-brand" />
              18*25 K Sub Court Back Side, Avinashi, Tirupur
            </p>
            <p className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} className="text-brand" />
              <a href="mailto:rdkfs22@gmail.com">rdkfs22@gmail.com</a>
            </p>
            <p className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} className="text-brand" />
              <a href="tel:+918870534301">+91 88705 34301</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mitra Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
