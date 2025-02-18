import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./whatGPT3.css";
import { Feature } from "../../components";
import StarryBackground from "../../components/StarryBackground/StarryBackground";

const fadeIn = {
  hidden: { opacity: 0, y: 50, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

const WhatGPT3 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div ref={sectionRef} className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <StarryBackground />
      <motion.div
        className="gpt3__whatgpt3-feature"
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Feature
          title="What is LORA-Ai?"
          text="Lora-Ai has become an essential tool, offering insights to friends through messages with delight..."
        />
      </motion.div>

      <motion.div
        className="gpt3__whatgpt3-heading"
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          className="gradient__text"
          whileHover={{ scale: 1.05 }}
          style={{ cursor: "pointer" }}
        >
          This is a concise version incorporating "Lora-Ai" as requested.
        </motion.h1>
        <motion.p
          whileHover={{ scale: 1.1, color: "#ff8c00" }}
          style={{ cursor: "pointer" }}
        >
          Explore the Library
        </motion.p>
      </motion.div>

      <motion.div
        className="gpt3__whatgpt3-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
        }}
      >
        {[
          {
            title: "Chatbots",
            text: "Engaging AI-powered chats enhance user experience effortlessly.",
          },
          {
            title: "Knowledgebase",
            text: "A structured resource hub for quick and reliable information:)",
          },
          {
            title: "Education",
            text: "Innovative learning tools make knowledge more accessible.",
          },
          {
            title: "Automation",
            text: "Streamline processes with Lora-AI-powered automation tools",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: "pointer" }}
          >
            <Feature title={item.title} text={item.text} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhatGPT3;
