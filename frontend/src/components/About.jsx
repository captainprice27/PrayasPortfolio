/**
 * =====================================================
 * ABOUT SECTION COMPONENT
 * Personal introduction and background
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiBriefcase, FiBook } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import './About.css';

function About() {
  const { data } = usePortfolio();
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Data mapping with fallbacks
  const personal = data?.personal || {
    FULL_NAME: "Prayas Mazumder",
    ABOUT_DESCRIPTION: `I'm a passionate Software Developer with a strong foundation in Computer Science. 
    As a B.Tech graduate from IIEST, Shibpur, I've developed expertise in building 
    scalable applications using modern technologies. Currently working as an Analyst-Developer at WTW.`,
    PROFILE_IMAGE_PATH: "/assets/images/profile-photo.svg"
  };

  const contact = data?.contact || {
    LOCATION: "India"
  };

  // Convert description string to array if needed
  const paragraphs = personal.ABOUT_DESCRIPTION 
    ? [personal.ABOUT_DESCRIPTION] 
    : [
        `I'm a passionate Software Developer with a strong foundation in Computer Science. 
        As a B.Tech graduate from IIEST, Shibpur, I've developed expertise in building 
        scalable applications using modern technologies.`,
        `Currently working as an Analyst-Developer at WTW, I contribute to enterprise-level 
        solutions while continuously learning and growing.`
      ];

  const quickFacts = [
    { 
      icon: FiMapPin, 
      label: "Location", 
      value: contact.LOCATION 
    },
    { 
      icon: FiBriefcase, 
      label: "Experience", 
      value: data?.journey?.find(j => j.type === 'work')?.title 
        ? `${data.journey.find(j => j.type === 'work').title} @ ${data.journey.find(j => j.type === 'work').INSTITUTION_NAME}` 
        : "Analyst-Developer @ WTW" 
    },
    { 
      icon: FiBook, 
      label: "Education", 
      value: data?.journey?.find(j => j.type === 'education')?.INSTITUTION_NAME 
        ? `${data.journey.find(j => j.type === 'education').title}, ${data.journey.find(j => j.type === 'education').INSTITUTION_NAME}` 
        : "B.Tech CST, IIEST Shibpur" 
    },
  ];

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
                  <img 
                    src={personal.PROFILE_IMAGE_PATH} 
                    alt={personal.FULL_NAME}
                    onError={(e) => {
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
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}

              {/* Quick Facts */}
              <div className="about-facts">
                {quickFacts.map((fact, index) => (
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
