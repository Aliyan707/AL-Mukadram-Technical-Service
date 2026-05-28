'use client';

import { motion } from 'framer-motion';
import styles from './ContactHero.module.scss';

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
          alt="Contact Us"
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
            Get In Touch
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Discuss Your <span className={styles.highlight}>Project</span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Ready to transform your space? Contact us today for a free consultation
            and discover how we can bring your vision to life.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
