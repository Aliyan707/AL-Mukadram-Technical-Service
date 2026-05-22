'use client';

import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaTools } from 'react-icons/fa';
import styles from './Hero.module.scss';

const Hero = () => {
  const floatingCards = [
    { icon: FaAward, title: '15+ Years Experience' },
    { icon: FaUsers, title: '5000+ Happy Clients' },
    { icon: FaTools, title: 'Premium Quality' },
  ];

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="Dubai Skyline"
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className={styles.subtitle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Premium Solutions in Dubai
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Luxury <span className={styles.highlight}>Aluminium & Glass</span> Solutions
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Transform your space with our premium aluminium and glass installations.
            From elegant windows to stunning curtain walls, we deliver excellence in every project.
          </motion.p>

          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button className={styles.primaryBtn}>
              Explore Products
            </button>
            <button className={styles.secondaryBtn}>
              View Projects
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Cards */}
      <div className={styles.floatingCards}>
        {floatingCards.map((card, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
          >
            <card.icon className={styles.icon} />
            <div className={styles.cardTitle}>{card.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={scrollToSection}
      >
        <span className={styles.scrollText}>Scroll Down</span>
        <div className={styles.scrollIcon}></div>
      </motion.div>
    </section>
  );
};

export default Hero;
