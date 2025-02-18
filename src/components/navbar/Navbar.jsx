import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <motion.h1
            className="gradient__text lora-ai gpt3__navbar-links-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }} // x: 0 si uu si buuxda u soo muuqdo
            transition={{ duration: 1 }}
          >
            LORA-Ai
          </motion.h1>
        </div>
        <motion.div
          className="gpt3__navbar-links_container"
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: inView ? 1 : 0, // Marka la arko, opacity-ga waa 1, haddii kale waa 0
            y: inView ? 0 : 50, // marka la arko y-ga wuxuu noqonayaa 0, hadii kale wuxuu ku jiraa 500px
          }}
          transition={{ duration: 1 }}
        >
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is LORA-Ai?</a>
          </p>
          <p>
            <a href="#possibility">LORA AI</a>
          </p>
          <p>
            <a href="#features">Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </motion.div>
      </div>
      <motion.div
        className="gpt3__navbar-sign"
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </motion.div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is LORA-Ai?</a>
              </p>
              <p>
                <a href="#possibility">LORA AI</a>
              </p>
              <p>
                <a href="#features">Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
