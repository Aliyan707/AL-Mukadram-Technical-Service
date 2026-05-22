'use client';

import { motion } from 'framer-motion';
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
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
                alt="Our Story"
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
              Founded in 2008, Al Mukadram began with a simple vision: to bring
              world-class aluminium and glass solutions to the UAE market. What started as a
              small workshop has grown into one of Dubai's most trusted names in the industry.
            </p>

            <p className={styles.text}>
              Over the years, we've completed thousands of projects across residential,
              commercial, and industrial sectors. Our commitment to quality, innovation, and
              customer satisfaction has earned us a reputation for excellence.
            </p>

            <p className={styles.text}>
              Today, we combine traditional craftsmanship with cutting-edge technology to
              deliver solutions that exceed expectations. Every project we undertake reflects
              our dedication to perfection and our passion for transforming spaces.
            </p>

            <div className={styles.signature}>
              <div className={styles.signatureLine}></div>
              <p className={styles.ceo}>Mohammed Al Rashid, CEO & Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
