/**
 * =====================================================
 * FOOTER COMPONENT
 * Site footer with copyright and back-to-top
 * =====================================================
 */

import { motion } from 'framer-motion';
import { FiArrowUp, FiHeart, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

// =====================================================
// FOOTER CONFIGURATION
// =====================================================
const FOOTER_CONFIG = {
  // REPLACE: Your name for copyright
  NAME: "Prayas Mazumder",
  
  // Social Links - Same as in other components
  SOCIAL_LINKS: [
    { icon: FiGithub, URL: "https://github.com/YOUR_USERNAME", label: "GitHub" },
    { icon: FiLinkedin, URL: "https://linkedin.com/in/YOUR_USERNAME", label: "LinkedIn" },
    { icon: FiTwitter, URL: "https://twitter.com/YOUR_HANDLE", label: "Twitter" },
  ],
};

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Branding */}
          <div className="footer-brand">
            <span className="footer-logo">PM</span>
            <span className="footer-name">{FOOTER_CONFIG.NAME}</span>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
            {FOOTER_CONFIG.SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {FOOTER_CONFIG.NAME}. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FiHeart className="heart-icon" /> using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
