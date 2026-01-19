/**
 * =====================================================
 * CODING PROFILES COMPONENT
 * Horizontal cards for competitive programming profiles
 * =====================================================
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import './CodingProfiles.css';

function ProfileCard({ profile, index }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="coding-profile-card"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="profile-logo-container">
        <img 
            src={profile.logo} 
            alt={`${profile.name} Logo`} 
            className="profile-logo" 
        />
      </div>
      
      <div className="profile-content">
        <div className="profile-header">
            <h3 className="profile-name">{profile.name}</h3>
            <a 
                href={profile.profileLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="visit-link"
                aria-label={`Visit ${profile.name} Profile`}
            >
                Visit <FiExternalLink />
            </a>
        </div>
        <p className="profile-description">{profile.description}</p>
      </div>
    </motion.div>
  );
}

function CodingProfiles() {
  const { data } = usePortfolio();
  const [headerRef, headerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const apiProfiles = data?.codingProfiles || [];
  
  const fallbackProfiles = [
    {
      name: "LeetCode",
      logo: "/assets/logos/leetcode-logo.svg",
      profileLink: "https://leetcode.com/captainprice27/",
      description: "Solved 1000+ problems. Max Rating: 2024. Active daily problem solver. Got prestigious 'Knight' badge",
    },
    {
      name: "CodeChef",
      logo: "/assets/logos/codechef-logo.svg",
      profileLink: "https://www.codechef.com/users/captainprice27",
      description: "3-Star Rated Coder. Highest Rating: 1789. Ranked in top 6000 globally.",
    },
    {
      name: "Codeforces",
      logo: "/assets/logos/codeforces-logo.svg",
      profileLink: "https://codeforces.com/profile/icecream27",
      description: "Pupil (Max Rating: 1395). Active problem solver in Div 2 and Div 3 contests.",
    },
  ];

  const profiles = apiProfiles.length >= 3 ? apiProfiles : fallbackProfiles;

  return (
    <section id="coding-profiles" className="coding-profiles section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Coding Profiles</h2>
          <p className="section-subtitle">Competitive Programming Journey</p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="coding-profiles-grid">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;
