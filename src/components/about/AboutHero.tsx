'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AboutHero.module.scss';

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
          alt="About Us"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
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
            About Us
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Crafting <span className={styles.highlight}>Excellence</span> Since 2008
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Al Mukadram Technical Service is Dubai's trusted name for premium aluminium and glass
            installations — delivering exceptional craftsmanship across villas, offices, hotels, and commercial projects.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
