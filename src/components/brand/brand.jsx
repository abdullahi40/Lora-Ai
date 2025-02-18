import React from "react";
import "./brand.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { google, slack, atlassian, dropbox, shpify } from "./impots";

const Brand = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Kaliya marna uu u dhacayo
    threshold: 0.1, // Marka section-ka uu yahay 10% muuqda
  });

  return (
    <motion.div
      className="gpt3__brand section__padding"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0, // Marka la arko, opacity-ga waa 1, haddii kale waa 0
        y: inView ? 0 : 50, // Marka la arko, y-ga wuxuu noqonayaa 0, haddii kale wuxuu ku jiraa 50px
      }}
      transition={{ duration: 1 }} // Animation-ku wuxuu dhacayaa muddo 1 ilbiriqsi ah
    >
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shpify} alt="shpify" />
      </div>
    </motion.div>
  );
};

export default Brand;
