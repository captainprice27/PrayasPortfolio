/**
 * =====================================================
 * JOURNEY TIMELINE COMPONENT
 * Artistic animated timeline showing education & career
 * Features: Fluid animated connections, milestone nodes, hover details
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiAward, FiBriefcase, FiMapPin, FiTerminal } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import './JourneyTimeline.css';

// Map icon strings from backend to React Icons
const iconMap = {
  school: FiBookOpen,
  university: FiAward,
  briefcase: FiBriefcase,
  terminal: FiTerminal,
};

// Individual Milestone Card Component
function MilestoneCard({ milestone, index, isLast }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const Icon = milestone.iconComponent || FiAward;
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
  const { data } = usePortfolio();
  const [headerRef, headerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Map backend journey data to frontend format
  const milestones = (data?.journey || []).map((m, index) => ({
    ...m,
    YEAR_RANGE: m.YEAR_RANGE || `${m.YEAR_START}${m.YEAR_END ? ` - ${m.YEAR_END}` : ''}`,
    ACHIEVEMENT: m.ACHIEVEMENT || m.ACHIEVEMENT_DETAILS,
    iconComponent: iconMap[m.icon] || FiAward,
    color: m.type === 'work' ? 'var(--accent-primary)' : 'var(--accent-secondary)'
  }));

  // Fallback if no data
  const displayMilestones = milestones.length > 0 ? milestones : [
    {
      id: 1,
      type: "education",
      INSTITUTION_NAME: "Ramakrishna Mission Vidyabhaban (H.S.), Midnapore",
      INSTITUTION_LOGO: "/assets/logos/school-logo.svg",
      title: "Secondary & Higher Secondary",
      YEAR_RANGE: "2012 - 2020",
      ACHIEVEMENT: "12th Boards: 95.60%",
      description: "Completed schooling with focus on Science stream (Physics, Chemistry, Mathematics)",
      iconComponent: FiBookOpen,
      color: "var(--accent-secondary)",
    },
    {
      id: 2,
      type: "education",
      INSTITUTION_NAME: "Indian Institute of Engineering Science and Technology (IIEST), Shibpur",
      INSTITUTION_LOGO: "/assets/logos/iiest-logo.svg",
      title: "B.Tech in Computer Science and Technology",
      YEAR_RANGE: "2021 - 2025",
      ACHIEVEMENT: "CGPA: 8.8",
      description: "Graduated in B.tech(Computer Science and Technology) from one of India's second oldest engineering college",
      iconComponent: FiAward,
      color: "var(--accent-secondary)",
    },
    {
      id: 3,
      type: "work",
      INSTITUTION_NAME: "WTW (Willis Towers Watson)",
      INSTITUTION_LOGO: "/assets/logos/wtw-logo.svg",
      title: "Analyst-Software Developer",
      YEAR_RANGE: "June 2025 - Present",
      ACHIEVEMENT: "Full-time Position",
      description: "Working on enterprise solutions and contributing to financial projects",
      iconComponent: FiBriefcase,
      color: "var(--accent-primary)",
    }
  ];

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
            {[...displayMilestones].reverse().map((milestone, index) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                index={index}
                isLast={index === displayMilestones.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;
