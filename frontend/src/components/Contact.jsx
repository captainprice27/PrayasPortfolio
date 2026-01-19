/**
 * =====================================================
 * CONTACT SECTION COMPONENT
 * Contact form and social links
 * =====================================================
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiMail, FiMapPin, FiPhone, 
  FiGithub, FiLinkedin, FiTwitter, FiSend,
  FiCheckCircle, FiAlertCircle
} from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const { data } = usePortfolio();
  
  // Map backend contact data
  const contactInfo = {
    EMAIL: data?.contact?.EMAIL_ADDRESS || "mazumder.prayas@gmail.com",
    ALT_EMAIL: data?.contact?.SECONDARY_EMAIL || "prayasrikai@gmail.com",
    LOCATION: data?.contact?.LOCATION || "Kolkata, India",
    SOCIAL_LINKS: [
      { 
        name: "GitHub", 
        icon: FiGithub, 
        URL: data?.contact?.GITHUB_URL || "https://github.com/captainprice27" 
      },
      { 
        name: "LinkedIn", 
        icon: FiLinkedin, 
        URL: data?.contact?.LINKEDIN_URL || "https://linkedin.com/in/prayas-mazumder" 
      },
      { 
        name: "X (Twitter)", 
        icon: () => (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        ), 
        URL: data?.contact?.TWITTER_URL || "https://x.com/captainprice_27" 
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // NOTE: This is a placeholder for form submission
    // You'll need to integrate with your backend or a service like:
    // - EmailJS (https://emailjs.com)
    // - Formspree (https://formspree.io)
    // - Your own backend API
    
    try {
      // Use axios instead of fetch for consistency and to use global config
      const response = await axios.post('/api/contact', formData);

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message || 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(response.data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({
        type: 'error',
        message: error.response?.data?.error || error.message || 'Something went wrong. Please try again or email me directly.',
      });
    }
    
    setIsSubmitting(false);
    
    // Clear status after 5 seconds
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info Side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-text">
              I'm always interested in hearing about new opportunities, 
              interesting projects, or just having a chat about technology.
            </p>

            {/* Contact Details */}
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FiMail />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email</span>
                  <a href={`mailto:${contactInfo.EMAIL}`} className="detail-value">
                    {contactInfo.EMAIL}
                  </a>
                </div>
              </div>

              {contactInfo.ALT_EMAIL && (
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <FiMail />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Secondary Email</span>
                    <a href={`mailto:${contactInfo.ALT_EMAIL}`} className="detail-value">
                      {contactInfo.ALT_EMAIL}
                    </a>
                  </div>
                </div>
              )}

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FiMapPin />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{contactInfo.LOCATION}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <span className="socials-label">Follow Me</span>
              <div className="socials-icons">
                {contactInfo.SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  required
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                  <span>{status.message}</span>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="btn-loading">Sending...</span>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
