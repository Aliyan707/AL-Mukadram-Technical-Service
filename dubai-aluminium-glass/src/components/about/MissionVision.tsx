'use client';

import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';
import styles from './MissionVision.module.scss';

const MissionVision = () => {
  const items = [
    {
      icon: FaBullseye,
      title: 'Our Mission',
      description:
        'To deliver premium aluminium and glass solutions that transform spaces and exceed client expectations through innovation, quality, and exceptional service.',
    },
    {
      icon: FaEye,
      title: 'Our Vision',
      description:
        'To be the leading provider of aluminium and glass solutions in the UAE, recognized for our commitment to excellence, sustainability, and customer satisfaction.',
    },
    {
      icon: FaHeart,
      title: 'Our Values',
      description:
        'Integrity, quality, innovation, and customer-centricity guide everything we do. We believe in building lasting relationships through trust and exceptional craftsmanship.',
    },
  ];

  return (
    <section className={styles.missionVision}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Mission, Vision & <span className={styles.highlight}>Values</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.iconWrapper}>
                <item.icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
