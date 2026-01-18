/**
 * =====================================================
 * FOOTER COMPONENT
 * Site footer with copyright and back-to-top
 * =====================================================
 */

import { motion } from 'framer-motion';
import { FiArrowUp, FiHeart, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import './Footer.css';

function Footer() {
  const { data } = usePortfolio();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const name = data?.personal?.FULL_NAME || "Prayas Mazumder";
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  const socialLinks = [
    { icon: FiGithub, URL: data?.contact?.GITHUB_URL || "https://github.com/", label: "GitHub" },
    { icon: FiLinkedin, URL: data?.contact?.LINKEDIN_URL || "https://linkedin.com/in/", label: "LinkedIn" },
    { icon: FiTwitter, URL: data?.contact?.TWITTER_URL || "https://twitter.com/", label: "Twitter" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Branding */}
          <div className="footer-brand">
            <span className="footer-logo">{initials}</span>
            <span className="footer-name">{name}</span>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
            {socialLinks.map((social) => (
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
            © {currentYear} {name}. All rights reserved.
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
