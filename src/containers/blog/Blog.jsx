import React from "react";
import { motion } from "framer-motion";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05, blog06 } from "./imports";
import "./blog.css";
import { useInView } from "react-intersection-observer";
const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="gpt3__blog section__paading" id="blog">
      <motion.div
        className="gpt3__blog-heading"
        id="blog"
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        <h1 className="gradient__text">
          Exciting things are happening, and we're sharing them on our blog!
        </h1>
      </motion.div>
      <div className="gpt3__blog-container">
        {/* Blog 1 - kasoo baxaya kor */}
        <div className="gpt3__blog-cotainer_group">
          <motion.div
            className="gpt3__blog-container_groupA"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
          >
            <Article
              className="gpt3__blog-container_groupA__articale"
              imgUrl={blog01}
              date="Mar 31, 2024"
              title="GPT-3 and OpenAI is the future. Let's explore how it is?"
            />
          </motion.div>
          <motion.div
            className="gpt3__blog-container_groupA"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
          >
            <Article
              imgUrl={blog06}
              date="Mar 31, 2024"
              title="GPT-3 and OpenAI is the future. Let's explore how it is?"
            />
          </motion.div>
        </div>

        <div className="gpt3__blog-cotainer_groupB">
          {/* Blog 2 - kasoo baxaya bidix */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <Article
              imgUrl={blog02}
              date="Mar 31, 2024"
              title="How AI is transforming businesses worldwide!"
            />
          </motion.div>

          {/* Blog 3 - kasoo baxaya midig */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <Article
              imgUrl={blog03}
              date="Mar 31, 2024"
              title="The impact of AI on creative industries."
            />
          </motion.div>

          {/* Blog 4 - kasoo baxaya hoos */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
          >
            <Article
              imgUrl={blog04}
              date="Mar 31, 2024"
              title="AI and the future of software development."
            />
          </motion.div>

          {/* Blog 5 - kasoo baxaya midig */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <Article
              imgUrl={blog05}
              date="Mar 31, 2024"
              title="Understanding machine learning in 5 minutes!"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
