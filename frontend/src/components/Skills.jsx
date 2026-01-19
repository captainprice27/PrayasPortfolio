/**
 * =====================================================
 * SKILLS SECTION COMPONENT
 * Technical skills displayed as categorized bubbles
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiLayout, FiServer, FiTool,
} from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import './Skills.css';

const categoryConfig = {
  language: { title: "Languages", icon: FiCode },
  frontend: { title: "Frontend", icon: FiLayout },
  backend: { title: "Backend", icon: FiServer },
  tools: { title: "Tools & Others", icon: FiTool },
};

function SkillGroup({ category, skills, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const config = categoryConfig[category] || { title: category, icon: FiCode };
  const Icon = config.icon;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="skill-group card"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="skill-group-header">
        <div className="skill-group-icon">
          <Icon />
        </div>
        <h3 className="skill-group-title">{config.title}</h3>
      </div>
      
      <div className="skills-bubbles">
        {skills.map((skill, i) => (
          <motion.div 
            key={i} 
            className="skill-bubble"
            variants={bubbleVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  const { data } = usePortfolio();
  const [headerRef, headerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Group skills by category with full fallback support
  const apiSkills = data?.skills || [];
  
  const fallbackSkills = [
    { name: "C#", category: "language" },
    { name: "C++", category: "language" },
    { name: "Python", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "React.js", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "ASP.NET Core", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "SQL Server", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Git & GitHub", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Kubernetes", category: "tools" },
    { name: "Azure", category: "tools" },
    { name: "AWS", category: "tools" },
  ];

  const activeSkills = apiSkills.length >= 10 ? apiSkills : fallbackSkills;

  const groupedSkills = activeSkills.reduce((acc, skill) => {
    const category = skill.category || 'tools';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  const categories = Object.keys(groupedSkills);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">My toolbox & technologies</p>
        </motion.div>
 
        {/* Skills Grid */}
        <div className="skills-grid">
          {categories.map((category, index) => (
            <SkillGroup 
              key={category} 
              category={category} 
              skills={groupedSkills[category]} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
