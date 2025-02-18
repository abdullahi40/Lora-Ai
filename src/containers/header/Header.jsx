import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import { Ai01, Ai02, Ai03, Ai04 } from "../blog/imports";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ImageSlider Component
const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      style={{ padding: "0 20px" }} // Waxaa fogeynaya labada dhinac
    >
      {[Ai01, Ai02, Ai03, Ai04].map((image, index) => (
        <SwiperSlide key={index}>
          <motion.img
            src={image}
            alt={`Ai-image-${index + 1}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Header Component
const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, //kaliya marna uu u dhacayo
    threshold: 0.1, //marka section-ka uu yahay 10% muuqda
  });
  return (
    <div className="lora__header section__padding" id="home">
      <div className="lora__header-content">
        <motion.h1
          className="gradient__text"
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: inView ? 1 : 0, // Marka la arko, opacity-ga waa 1, haddii kale waa 0
            y: inView ? 0 : -50, // marka la arko y-ga wuxuu noqonayaa 0, hadii kale wuxuu ku jiraa 500px
          }}
          transition={{ duration: 1 }}
        >
          🚀 Let's Build Something Amazing with LORA-Ai OpenAI 🤖
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          LORA-Ai is an AI-powered platform that enhances productivity through
          intelligent automation, data analysis, and smart interactions. 🚀
        </motion.p>
        <motion.div
          className="lora__header-content__input"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </motion.div>
        <motion.div
          className="lora__header-content__people"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <img src={people} alt="people" />
          <p>2,600 people requested access in the last 24 hours. </p>
        </motion.div>
      </div>
      <motion.div
        className="lora__header-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <ImageSlider />
      </motion.div>
    </div>
  );
};

export default Header;
