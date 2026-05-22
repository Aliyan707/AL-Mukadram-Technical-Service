'use client';

import { motion } from 'framer-motion';
import styles from './ServicesHero.module.scss';

const ServicesHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
          alt="Our Services"
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
            Our Services
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Premium <span className={styles.highlight}>Solutions</span> for Every Need
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From design to installation, we provide comprehensive aluminium and glass
            solutions tailored to your specific requirements.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
