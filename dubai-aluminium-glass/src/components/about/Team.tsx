'use client';

import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import styles from './Team.module.scss';

const Team = () => {
  const team = [
    {
      name: 'Mohammed Al Rashid',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=12',
      linkedin: '#',
      email: 'mohammed@almukadram.ae',
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Design',
      image: 'https://i.pravatar.cc/300?img=45',
      linkedin: '#',
      email: 'sarah@almukadram.ae',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Operations Manager',
      image: 'https://i.pravatar.cc/300?img=33',
      linkedin: '#',
      email: 'ahmed@almukadram.ae',
    },
    {
      name: 'Emily Chen',
      role: 'Project Manager',
      image: 'https://i.pravatar.cc/300?img=47',
      linkedin: '#',
      email: 'emily@almukadram.ae',
    },
  ];

  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Meet Our <span className={styles.highlight}>Team</span>
          </h2>
          <p className={styles.subtitle}>
            Dedicated professionals committed to excellence
          </p>
        </motion.div>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={styles.memberCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} />
                <div className={styles.overlay}>
                  <div className={styles.social}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                    <a href={`mailto:${member.email}`}>
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
