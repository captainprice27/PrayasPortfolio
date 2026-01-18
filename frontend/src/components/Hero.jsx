/**
 * =====================================================
 * HERO SECTION COMPONENT
 * Landing section with name, title, and call-to-action
 * =====================================================
 */

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

// =====================================================
// CONFIGURATION - Replace these with your actual links
// =====================================================
const SOCIAL_LINKS = {
  GITHUB_URL: "https://github.com/YOUR_GITHUB_USERNAME",
  LINKEDIN_URL: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  EMAIL_ADDRESS: "your.email@example.com",
};

function Hero() {
  // Scroll to about section
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
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
            Hello, I'm
          </motion.span>

          {/* Name - IMPORTANT: This displays your name */}
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Prayas Mazumder
          </motion.h1>

          {/* Professional Title */}
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="title-highlight">Software Developer</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Building innovative solutions with modern technologies.
            <br />
            B.Tech CST graduate passionate about clean code and great user experiences.
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
              href={SOCIAL_LINKS.GITHUB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a 
              href={SOCIAL_LINKS.LINKEDIN_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
            <a 
              href={`mailto:${SOCIAL_LINKS.EMAIL_ADDRESS}`}
              className="social-link"
              aria-label="Email Me"
            >
              <FiMail />
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
