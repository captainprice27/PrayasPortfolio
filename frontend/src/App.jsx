/**
 * =====================================================
 * MAIN APP COMPONENT
 * Root component that assembles all sections
 * =====================================================
 */

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import JourneyTimeline from './components/JourneyTimeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import global styles
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      {/* 
        Main Portfolio Layout
        - Navbar is fixed at the top
        - Sections are stacked vertically
        - Footer is at the bottom
      */}
      <div className="app">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content Sections */}
        <main>
          {/* Hero / Landing Section */}
          <Hero />
          
          {/* About Me Section */}
          <About />
          
          {/* Technical Skills Section */}
          <Skills />
          
          {/* Journey / Timeline Section */}
          <JourneyTimeline />
          
          {/* Projects Showcase Section */}
          <Projects />
          
          {/* Contact Section */}
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
