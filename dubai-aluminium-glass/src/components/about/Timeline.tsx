'use client';

import { motion } from 'framer-motion';
import styles from './Timeline.module.scss';

const Timeline = () => {
  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started our journey with a small workshop and a big vision.',
    },
    {
      year: '2012',
      title: 'First Major Project',
      description: 'Completed our first high-rise commercial building project.',
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Opened new manufacturing facility and expanded our team.',
    },
    {
      year: '2018',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management.',
    },
    {
      year: '2021',
      title: '5000+ Projects',
      description: 'Reached milestone of 5000 completed projects across UAE.',
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched R&D center for sustainable glass solutions.',
    },
  ];

  return (
    <section className={styles.timeline}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Journey</span>
          </h2>
          <p className={styles.subtitle}>Milestones that shaped our success</p>
        </motion.div>

        <div className={styles.timelineWrapper}>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.year}>{milestone.year}</div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{milestone.title}</h3>
                <p className={styles.description}>{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
