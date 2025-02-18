import React from "react";
import "./cta.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Cta = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      className="gpt3__cta"
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <div className="gpt3__cta-content">
        <p>Requst Early Access to Get Started</p>
        <h3>Register today & start explring the endiless possiblities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Starts</button>
      </div>
    </motion.div>
  );
};

export default Cta;
