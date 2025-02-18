import React from "react";
import "./footer.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaTwitter, FaWhatsapp, FaGithub } from "react-icons/fa";
import StarryBackground from "../../components/StarryBackground/StarryBackground";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <StarryBackground />
      <div className="footer-links">
        <div className="footer-links_logo">
          <motion.h1
            className="gradient-text lora-ai footer-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            style={{
              background: "linear-gradient(89.97deg, #fff 1.84%, #3538ec);",
            }}
          >
            LORA-Ai
          </motion.h1>
          <p>Innovating the Future with AI Solutions</p>
        </div>
        <div className="footer-links_div">
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Support</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in Touch</h4>
          <p>123 Tech Street, Silicon Valley</p>
          <p>+123 456 7890</p>
          <p>info@lora-ai.com</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>&copy; 2025 LORA-Ai. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
