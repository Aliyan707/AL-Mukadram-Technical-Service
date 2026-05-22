'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      info: 'Business Bay, Dubai, UAE',
      link: 'https://maps.google.com',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      info: '+971 50 123 4567',
      link: 'tel:+971501234567',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      info: 'info@almukadram.ae',
      link: 'mailto:info@almukadram.ae',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: '+971 50 123 4567',
      link: 'https://wa.me/971501234567',
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Contact Cards */}
          <div className={styles.cardsSection}>
            <motion.div
              className={styles.header}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.title}>
                Contact <span className={styles.highlight}>Information</span>
              </h2>
            </motion.div>

            <div className={styles.cardsGrid}>
              {contactDetails.map((detail, index) => (
                <motion.a
                  key={index}
                  href={detail.link}
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.contactCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.iconWrapper}>
                    <detail.icon className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{detail.title}</h3>
                  <p className={styles.cardInfo}>{detail.info}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Working Hours */}
          <motion.div
            className={styles.hoursSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.hoursCard}>
              <div className={styles.hoursHeader}>
                <FaClock className={styles.clockIcon} />
                <h3 className={styles.hoursTitle}>Working Hours</h3>
              </div>

              <div className={styles.hoursList}>
                {workingHours.map((schedule, index) => (
                  <div key={index} className={styles.hoursItem}>
                    <span className={styles.day}>{schedule.day}</span>
                    <span className={styles.hours}>{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className={styles.emergencyNote}>
                <p>For urgent inquiries outside business hours, please contact us via WhatsApp.</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className={styles.mapCard}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1739788087887!2d55.26238931501205!3d25.197197383881973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
