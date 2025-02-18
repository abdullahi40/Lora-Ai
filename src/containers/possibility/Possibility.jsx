import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { Stars, OrbitControls } from "@react-three/drei";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Background from "../../components/StarryBackground/StarryBackground";

const Article = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div id="possibility" className="gpt3__possibility section__padding">
      {/* <Background /> */}
      {/* <Background /> */}
      <motion.div
        className="gpt3__possibility-image"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <img src={possibilityImage} alt="possibility image" />
      </motion.div>
      <motion.div
        className="gpt3__possibility-content"
        ref={ref}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
        transition={{ duration: 1 }}
      >
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore
          placeat alias. Dolore, porro. Provident libero at nulla est, debitis
          veritatis ab qui vel similique quos voluptatibus maxime fugit iure!
        </p>
        <h4>Request EArly Acces to Get Started</h4>
      </motion.div>
    </div>
  );
};

export default Article;
