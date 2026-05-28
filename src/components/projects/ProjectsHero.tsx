'use client';

import { motion } from 'framer-motion';
import styles from './ProjectsHero.module.scss';

const ProjectsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070"
          alt="Our Projects"
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.subtitle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Portfolio
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Showcasing <span className={styles.highlight}>Excellence</span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Explore our portfolio of completed projects across Dubai and the UAE.
            Each project reflects our commitment to quality and innovation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;
