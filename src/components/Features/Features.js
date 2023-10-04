import React from 'react';
import { motion } from 'framer-motion';
import './Features.scss';

const Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Features = () => {
  return (
    <>
      <motion.section
        
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        class="features"
      >
        <div className="container">
          <h2 className="visually-hidden">Преимущества</h2>

          <ul className="features-list">
            <motion.li
              
              custom={3}
              variants={Animation}
              className="features-item element-animation"
            >
              <motion.h3 custom={4} variants={Animation} className="features-title">
                Strategy
              </motion.h3>
              <motion.p custom={5} variants={Animation} className="features-text">
                Our goal is to identify the business problem to walk away with
                the perfect and creative solution.
              </motion.p>
            </motion.li>
            <motion.li
              custom={6}
              variants={Animation}
              className="features-item element-animation"
            >
              <motion.h3 custom={7} variants={Animation} className="features-title">
                Punctuality
              </motion.h3>
              <motion.p custom={8} variants={Animation} className="features-text">
                Bring the key message to the brand's audience for the best price
                within the shortest possible time.
              </motion.p>
            </motion.li>
            <motion.li
              custom={9}
              variants={Animation}
              className="features-item element-animation"
            >
              <motion.h3
                custom={10}
                variants={Animation}
                className="features-title"
              >
                Diligence
              </motion.h3>
              <motion.p custom={11} variants={Animation} className="features-text">
                Research and confirm brands that present the strongest digital
                growth opportunities and minimize risk.
              </motion.p>
            </motion.li>
            <motion.li
              custom={12}
              variants={Animation}
              className="features-item element-animation"
            >
              <motion.h3
                custom={13}
                variants={Animation}
                className="features-title"
              >
                Technologies
              </motion.h3>
              <motion.p custom={14} variants={Animation} className="features-text">
                Design practice focused on digital experiences. We bring forth a
                deep passion for problem-solving.
              </motion.p>
            </motion.li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Features;