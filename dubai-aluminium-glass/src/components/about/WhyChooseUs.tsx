'use client';

import { motion } from 'framer-motion';
import { FaStar, FaTools, FaHeadset, FaShieldAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaStar,
      title: 'Premium Quality',
      description: 'We use only the finest materials and latest technology.',
    },
    {
      icon: FaTools,
      title: 'Expert Craftsmanship',
      description: 'Skilled professionals with years of experience.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and assistance.',
    },
    {
      icon: FaShieldAlt,
      title: 'Warranty Protection',
      description: 'Comprehensive warranty on all products and services.',
    },
    {
      icon: FaClock,
      title: 'Timely Delivery',
      description: 'Projects completed on schedule, every time.',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Competitive Pricing',
      description: 'Best value for premium quality solutions.',
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Why Choose <span className={styles.highlight}>Us</span>
          </h2>
          <p className={styles.subtitle}>
            What sets us apart from the competition
          </p>
        </motion.div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={styles.reasonCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.iconWrapper}>
                <reason.icon className={styles.icon} />
              </div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.description}>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
