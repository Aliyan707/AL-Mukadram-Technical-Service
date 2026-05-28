'use client';

import { motion } from 'framer-motion';
import { FaClipboardList, FaPencilRuler, FaTools, FaCheckCircle } from 'react-icons/fa';
import styles from './ServiceProcess.module.scss';

const ServiceProcess = () => {
  const steps = [
    {
      icon: FaClipboardList,
      title: 'Consultation',
      description: 'We discuss your requirements and provide expert recommendations.',
    },
    {
      icon: FaPencilRuler,
      title: 'Design & Planning',
      description: 'Our team creates detailed designs and project plans.',
    },
    {
      icon: FaTools,
      title: 'Fabrication',
      description: 'Precision manufacturing using state-of-the-art equipment.',
    },
    {
      icon: FaCheckCircle,
      title: 'Installation',
      description: 'Professional installation with quality assurance.',
    },
  ];

  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Process</span>
          </h2>
          <p className={styles.subtitle}>
            From concept to completion, we ensure excellence at every step
          </p>
        </motion.div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.iconWrapper}>
                <step.icon className={styles.icon} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
