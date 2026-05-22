'use client';

import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import styles from './Certifications.module.scss';

const Certifications = () => {
  const certifications = [
    {
      icon: FaCertificate,
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
    },
    {
      icon: FaAward,
      title: 'ISO 14001:2015',
      description: 'Environmental Management',
    },
    {
      icon: FaShieldAlt,
      title: 'OHSAS 18001',
      description: 'Health & Safety Standards',
    },
    {
      icon: FaCheckCircle,
      title: 'Dubai Municipality',
      description: 'Approved Contractor',
    },
  ];

  return (
    <section className={styles.certifications}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Certifications</span>
          </h2>
          <p className={styles.subtitle}>
            Recognized for quality, safety, and excellence
          </p>
        </motion.div>

        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={styles.certCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.iconWrapper}>
                <cert.icon className={styles.icon} />
              </div>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.description}>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
