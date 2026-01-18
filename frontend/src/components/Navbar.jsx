/**
 * =====================================================
 * NAVBAR COMPONENT
 * Navigation bar with links and theme toggle
 * =====================================================
 */

import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Clock from './Clock';
import AnalyticsModal from './AnalyticsModal';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

// Navigation links configuration
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  // Handle scroll effect for navbar background & Record Visit
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Record visit on mount
    const recordVisit = async () => {
        try {
            // Simple platform detection
            const platform = navigator.platform;
            
            await fetch('http://localhost:5000/api/analytics/visit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ platform })
            });
        } catch (e) {
            console.error("Failed to record visit", e);
        }
    };
    // Check if we already recorded this session to avoid duplicates on re-renders (optional but good)
    if (!sessionStorage.getItem('visitRecorded')) {
        recordVisit();
        sessionStorage.setItem('visitRecorded', 'true');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-container">
        {/* Logo / Name */}
        <motion.a
          href="#home"
          className="navbar-logo"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="logo-text">PM</span>
          <span className="logo-full">Prayas Mazumder</span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Theme Toggle + Clock + Analytics + Mobile Menu */}
        <div className="navbar-actions">
           {/* Clock */}
           <Clock />
           
           {/* Analytics Button */}
           <button 
             className="analytics-btn"
             onClick={() => setIsAnalyticsOpen(true)}
             aria-label="View Analytics"
             title="Visitor Analytics"
           >
             <FiGlobe style={{ fontSize: '1.2rem' }} />
           </button>

          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className="mobile-nav-link"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

    {/* Analytics Modal */}
    <AnalyticsModal 
      isOpen={isAnalyticsOpen} 
      onClose={() => setIsAnalyticsOpen(false)} 
    />
    </>
  );
}


export default Navbar;
