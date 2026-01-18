/**
 * =====================================================
 * ABOUT SECTION COMPONENT
 * Personal introduction and background
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiBriefcase, FiBook } from 'react-icons/fi';
import './About.css';

// =====================================================
// CONFIGURATION - Replace with your actual information
// =====================================================
const ABOUT_CONFIG = {
  // Replace with your actual profile photo path
  PROFILE_IMAGE_URL: "/assets/images/profile-photo.jpg",
  
  // About description paragraphs - customize these
  ABOUT_PARAGRAPHS: [
    `I'm a passionate Software Developer with a strong foundation in Computer Science. 
    As a B.Tech graduate from IIEST, Shibpur, I've developed expertise in building 
    scalable applications using modern technologies.`,
    
    `Currently working as an Analyst-Developer at WTW, I contribute to enterprise-level 
    solutions while continuously learning and growing. I believe in writing clean, 
    maintainable code and creating intuitive user experiences.`,
    
    `When I'm not coding, you can find me exploring new technologies, contributing to 
    open-source projects, or sharing knowledge with the developer community.`
  ],
  
  // Quick facts about you
  QUICK_FACTS: [
    { icon: FiMapPin, label: "Location", value: "India" },
    { icon: FiBriefcase, label: "Experience", value: "Analyst-Developer @ WTW" },
    { icon: FiBook, label: "Education", value: "B.Tech CST, IIEST Shibpur" },
  ]
};

function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </motion.div>

          <div className="about-grid">
            {/* Profile Image Side */}
            <motion.div className="about-image-wrapper" variants={itemVariants}>
              <div className="about-image-container">
                {/* Decorative elements */}
                <div className="image-decoration decoration-1"></div>
                <div className="image-decoration decoration-2"></div>
                
                {/* Profile Image */}
                <div className="about-image">
                  {/* IMPORTANT: Replace this with your actual profile photo */}
                  <img 
                    src={ABOUT_CONFIG.PROFILE_IMAGE_URL} 
                    alt="Prayas Mazumder - Software Developer"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="image-placeholder" style={{display: 'none'}}>
                    <span>PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Content Side */}
            <motion.div className="about-text" variants={itemVariants}>
              {ABOUT_CONFIG.ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}

              {/* Quick Facts */}
              <div className="about-facts">
                {ABOUT_CONFIG.QUICK_FACTS.map((fact, index) => (
                  <motion.div 
                    key={index} 
                    className="fact-card"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="fact-icon">
                      <fact.icon />
                    </div>
                    <div className="fact-content">
                      <span className="fact-label">{fact.label}</span>
                      <span className="fact-value">{fact.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="about-cta">
                <a href="#contact" className="btn btn-primary">
                  Let's Connect
                </a>
                <a 
                  href="/assets/resume/PRAYAS_MAZUMDER_RESUME.pdf" 
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
