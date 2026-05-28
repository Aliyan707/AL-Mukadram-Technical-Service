'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './CompanyStory.module.scss';

const CompanyStory = () => {
  return (
    <section className={styles.story}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
                alt="Our Story"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.storyImage}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.contentSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.title}>
              Our <span className={styles.highlight}>Story</span>
            </h2>

            <p className={styles.text}>
              Al Mukadram Technical Service was established with a clear purpose: to bring
              precision-engineered aluminium and glass solutions to the UAE market. What began
              as a specialist contracting team has grown into one of Dubai's most trusted names
              for residential, commercial, and hospitality glazing.
            </p>

            <p className={styles.text}>
              Across more than 5,000 completed projects — from Palm Jumeirah villas to DIFC
              Grade-A offices and five-star hotel facades — we have built a reputation on
              delivering exactly what is specified, on time, and without compromise.
            </p>

            <p className={styles.text}>
              Today, Al Mukadram Technical Service combines skilled on-site craftsmanship with
              a fully equipped fabrication workshop, allowing us to control quality at every
              stage — from first measurement to final installation.
            </p>

            <div className={styles.signature}>
              <div className={styles.signatureLine}></div>
              <p className={styles.ceo}>Al Mukadram Technical Service — Dubai, UAE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
