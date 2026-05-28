'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaBuilding, FaStar } from 'react-icons/fa';
import styles from './Statistics.module.scss';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: FaAward, value: 15, suffix: '+', label: 'Years Experience', duration: 2 },
    { icon: FaUsers, value: 5000, suffix: '+', label: 'Happy Clients', duration: 2.5 },
    { icon: FaBuilding, value: 8000, suffix: '+', label: 'Projects Completed', duration: 3 },
    { icon: FaStar, value: 98, suffix: '%', label: 'Client Satisfaction', duration: 2 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ value, duration }: { value: number; duration: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(value * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <section className={styles.statistics} ref={sectionRef}>
      <div className={styles.backgroundPattern}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Achievements</span>
          </h2>
          <p className={styles.subtitle}>
            Numbers that speak for our excellence and commitment
          </p>
        </motion.div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.iconWrapper}>
                <stat.icon className={styles.icon} />
              </div>

              <div className={styles.value}>
                <Counter value={stat.value} duration={stat.duration} />
                {stat.suffix}
              </div>

              <div className={styles.label}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
