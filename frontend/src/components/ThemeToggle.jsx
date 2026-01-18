/**
 * =====================================================
 * THEME TOGGLE COMPONENT
 * Animated sun/moon toggle button for switching themes
 * =====================================================
 */

import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="toggle-icon-wrapper"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? (
          <FiMoon className="toggle-icon moon" />
        ) : (
          <FiSun className="toggle-icon sun" />
        )}
      </motion.div>
      
      {/* Animated background glow */}
      <motion.div
        className="toggle-glow"
        animate={{
          backgroundColor: isDark ? 'rgba(74, 144, 217, 0.2)' : 'rgba(255, 107, 107, 0.2)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

export default ThemeToggle;
