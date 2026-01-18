/**
 * =====================================================
 * SKILLS SECTION COMPONENT
 * Technical skills with animated progress bars
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiLayout, FiServer, FiTool,
  FiDatabase, FiGitBranch, FiCloud
} from 'react-icons/fi';
import './Skills.css';

// =====================================================
// SKILLS CONFIGURATION
// Modify this array to add/remove/update your skills
// proficiency is a percentage (0-100)
// =====================================================
const SKILLS_DATA = {
  // Programming Languages
  languages: {
    title: "Languages",
    icon: FiCode,
    skills: [
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Python", proficiency: 85 },
      { name: "Java", proficiency: 75 },
      { name: "C++", proficiency: 70 },
    ]
  },
  
  // Frontend Technologies
  frontend: {
    title: "Frontend",
    icon: FiLayout,
    skills: [
      { name: "React.js", proficiency: 90 },
      { name: "Next.js", proficiency: 80 },
      { name: "HTML5/CSS3", proficiency: 95 },
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "Redux", proficiency: 75 },
    ]
  },
  
  // Backend Technologies
  backend: {
    title: "Backend",
    icon: FiServer,
    skills: [
      { name: "Node.js", proficiency: 88 },
      { name: "Express.js", proficiency: 85 },
      { name: "REST APIs", proficiency: 90 },
      { name: "GraphQL", proficiency: 70 },
    ]
  },
  
  // Databases
  databases: {
    title: "Databases",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 75 },
      { name: "MySQL", proficiency: 72 },
      { name: "Redis", proficiency: 65 },
    ]
  },
  
  // Tools & DevOps
  tools: {
    title: "Tools & DevOps",
    icon: FiTool,
    skills: [
      { name: "Git & GitHub", proficiency: 90 },
      { name: "Docker", proficiency: 70 },
      { name: "AWS", proficiency: 65 },
      { name: "Linux", proficiency: 75 },
    ]
  },
};

// Skill Bubble Component
function SkillBubble({ name, index }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="skill-bubble"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      {name}
    </motion.div>
  );
}

// Skill Category Card
function SkillCategory({ category, index }) {
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger earlier for smoother scroll
    triggerOnce: true,
  });

  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      className="skill-category card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="category-header">
        <div className="category-icon">
          <Icon />
        </div>
        <h3 className="category-title">{category.title}</h3>
      </div>
      
      <div className="category-skills-bubbles">
        {category.skills.map((skill, skillIndex) => (
          <SkillBubble
            key={skill.name}
            name={skill.name}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <div className="skills-grid">
          {Object.values(SKILLS_DATA).map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
