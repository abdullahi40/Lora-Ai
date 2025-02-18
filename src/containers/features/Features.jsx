import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Feature from "../../components/feature/Feature";
import "./features.css";
import wold from "../../assets/wold-ai.png";

const featuresData = [
  {
    title: "Instant Trust Improvement",
    text: "John’s generosity earned household praise, fostering immediate trust.",
  },
  {
    title: "Stay Actively Engaged",
    text: "Support and engagement make a lasting impact on personal growth.",
  },
  {
    title: "Meaningful Communication",
    text: "Elegant discussions and thoughtful messages shape relationships.",
  },
  {
    title: "Legal and Social Bonds",
    text: "Laws and social ties shape relationships, strengthening communities.",
  },
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: "true",
    threshold: 0.1, //marka section-ka uu yahay 10% muuqda
  });
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <motion.h1
          className="gradient__text"
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </motion.h1>
        <p>Request Early Access to Get Started</p>
        <motion.div
          className="gradient__img"
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <img src={wold} alt="world" />
        </motion.div>
      </div>
      <motion.div
        className="gpt3__features-container"
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
