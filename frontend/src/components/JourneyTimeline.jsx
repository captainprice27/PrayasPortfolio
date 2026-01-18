/**
 * =====================================================
 * JOURNEY TIMELINE COMPONENT
 * Artistic animated timeline showing education & career
 * Features: Fluid animated connections, milestone nodes, hover details
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiAward, FiBriefcase, FiMapPin } from 'react-icons/fi';
import './JourneyTimeline.css';

// =====================================================
// JOURNEY DATA CONFIGURATION
// Update with your actual journey milestones
// =====================================================
const JOURNEY_MILESTONES = [
  {
    id: 1,
    type: "education",
    // REPLACE: Your school name
    INSTITUTION_NAME: "Your School Name",
    // REPLACE: Path to school logo in /public/assets/logos/
    INSTITUTION_LOGO: "/assets/logos/school-logo.png",
    title: "Secondary & Higher Secondary",
    YEAR_RANGE: "2012 - 2020",
    // REPLACE: Your actual HS marks
    ACHIEVEMENT: "HS Score: XX.XX%",
    description: "Completed schooling with Science stream (PCM)",
    icon: FiBookOpen,
    color: "var(--accent-primary)", // Red/Blue based on theme
  },
  {
    id: 2,
    type: "education",
    INSTITUTION_NAME: "IIEST, Shibpur",
    INSTITUTION_LOGO: "/assets/logos/iiest-logo.png",
    title: "B.Tech in Computer Science & Technology",
    YEAR_RANGE: "2021 - 2025",
    // REPLACE: Your CGPA
    ACHIEVEMENT: "CGPA: X.XX",
    description: "Premier engineering institution, one of India's oldest technical institutes",
    icon: FiAward,
    color: "var(--accent-secondary)", // Green/Yellow based on theme
  },
  {
    id: 3,
    type: "work",
    INSTITUTION_NAME: "WTW (Willis Towers Watson)",
    INSTITUTION_LOGO: "/assets/logos/wtw-logo.png",
    title: "Analyst-Developer",
    YEAR_RANGE: "June 2025 - Present",
    ACHIEVEMENT: "Full-time Position",
    description: "Working on enterprise solutions and large-scale software development",
    icon: FiBriefcase,
    color: "var(--accent-primary)",
  },
];

// Individual Milestone Card Component
function MilestoneCard({ milestone, index, isLast }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const Icon = milestone.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`milestone ${isEven ? 'milestone-left' : 'milestone-right'}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Node with Pulse Animation */}
      <div className="milestone-node">
        <motion.div 
          className="node-outer"
          animate={inView ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          <div className="node-inner" style={{ background: milestone.color }}>
            <Icon />
          </div>
        </motion.div>
        
        {/* Animated Connecting Line */}
        {!isLast && (
          <motion.div 
            className="connecting-line"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
          >
            <div className="line-fill"></div>
            {/* Animated particle going down the line */}
            <motion.div 
              className="line-particle"
              animate={inView ? { top: ['0%', '100%'] } : {}}
              transition={{ 
                duration: 2, 
                delay: index * 0.2 + 1,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Content Card */}
      <motion.div 
        className="milestone-content card"
        whileHover={{ 
          scale: 1.02,
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        {/* Year Badge */}
        <div className="milestone-year">
          <span>{milestone.YEAR_RANGE}</span>
        </div>

        {/* Institution Logo & Info */}
        <div className="milestone-header">
          <div className="institution-logo">
            <img 
              src={milestone.INSTITUTION_LOGO} 
              alt={milestone.INSTITUTION_NAME}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback icon */}
            <div className="logo-fallback" style={{display: 'none'}}>
              <Icon />
            </div>
          </div>
          
          <div className="institution-info">
            <h3 className="institution-name">{milestone.INSTITUTION_NAME}</h3>
            <p className="milestone-title">{milestone.title}</p>
          </div>
        </div>

        {/* Achievement Badge */}
        <div className="milestone-achievement" style={{ 
          background: `${milestone.color}20`,
          borderColor: milestone.color
        }}>
          <FiAward style={{ color: milestone.color }} />
          <span>{milestone.ACHIEVEMENT}</span>
        </div>

        {/* Description */}
        <p className="milestone-description">{milestone.description}</p>

        {/* Type Badge */}
        <div className={`milestone-type-badge type-${milestone.type}`}>
          {milestone.type === 'education' ? 'Education' : 'Work Experience'}
        </div>
      </motion.div>
    </motion.div>
  );
}

function JourneyTimeline() {
  const [headerRef, headerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="journey" className="journey section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="journey-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">The path that shaped who I am today</p>
        </motion.div>

        {/* Artistic Timeline */}
        <div className="timeline-container">
          {/* Decorative Background Elements */}
          <div className="timeline-bg-decoration">
            <motion.div 
              className="bg-wave wave-1"
              animate={{ 
                backgroundPositionX: ['0%', '100%'],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="bg-wave wave-2"
              animate={{ 
                backgroundPositionX: ['100%', '0%'],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Central Timeline Line */}
          <div className="timeline-central-line">
            <motion.div 
              className="central-line-fill"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Current Status Indicator */}
          <motion.div 
            className="current-status"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="status-pulse"></div>
            <FiMapPin />
            <span>Currently Here</span>
          </motion.div>

          {/* Milestone Cards */}
          <div className="milestones-wrapper">
            {[...JOURNEY_MILESTONES].reverse().map((milestone, index) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                index={index}
                isLast={index === JOURNEY_MILESTONES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;
