/**
 * =====================================================
 * HERO SECTION COMPONENT
 * Landing section with name, title, and call-to-action
 * =====================================================
 */

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowDown } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import './Hero.css';

function Hero() {
  const { data } = usePortfolio();

  // Fallback data if API not yet loaded
  const personal = data?.personal || {
    FULL_NAME: "Prayas Mazumder",
    PROFESSIONAL_TITLE: "Junior Software Developer",
    TAGLINE: "Building innovative stuffs with modern technologies. Passionate about Sports and Tech."
  };

  const contact = data?.contact || {
    GITHUB_URL: "https://github.com/captainprice27",
    LINKEDIN_URL: "https://linkedin.com/in/prayas-mazumder",
    INSTAGRAM_URL: "https://instagram.com/captainprice_27",
  };

  // Scroll to about section
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background Image Container */}
      <div 
        className="hero-bg-container"
        style={{
          backgroundImage: personal.HERO_BG_IMAGE ? `url(${personal.HERO_BG_IMAGE})` : 'none'
        }}
      >
        <div className="hero-bg-overlay"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <motion.div 
          className="bg-circle circle-1"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-circle circle-2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-circle circle-3"
          animate={{ 
            y: [0, -30, 0],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container hero-container">
        {/* Main Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Greeting */}
          <motion.span 
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hi I'm
          </motion.span>

          {/* Name - IMPORTANT: This displays your name */}
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {personal.FULL_NAME}
          </motion.h1>

          {/* Professional Title */}
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="title-highlight">{personal.PROFESSIONAL_TITLE}</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {personal.TAGLINE}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a 
              href={contact.GITHUB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a 
              href={contact.LINKEDIN_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
            <a 
              href={contact.INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram Profile"
            >
              <FiInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          className="scroll-indicator"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.5 },
            y: { delay: 1.2, duration: 1.5, repeat: Infinity }
          }}
          aria-label="Scroll to about section"
        >
          <FiArrowDown />
          <span>Scroll Down</span>
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;

