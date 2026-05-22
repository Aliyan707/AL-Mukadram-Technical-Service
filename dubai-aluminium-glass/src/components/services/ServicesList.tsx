'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import styles from './ServicesList.module.scss';

const ServicesList = () => {
  const services = [
    {
      title: 'Aluminium Fabrication',
      description: 'Custom aluminium fabrication services for windows, doors, and structural elements.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070',
      features: [
        'Custom Design & Manufacturing',
        'Powder Coating in Any Color',
        'Thermal Break Systems',
        'Energy Efficient Solutions',
      ],
    },
    {
      title: 'Glass Installation',
      description: 'Professional glass installation services for residential and commercial projects.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      features: [
        'Tempered & Laminated Glass',
        'Double Glazing Systems',
        'Tinted & Frosted Options',
        'Safety Glass Solutions',
      ],
    },
    {
      title: 'Curtain Walls',
      description: 'Modern curtain wall systems for high-rise buildings and commercial facades.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      features: [
        'Unitized & Stick Systems',
        'Weather Resistant Design',
        'Thermal Performance',
        'Structural Glazing',
      ],
    },
    {
      title: 'Office Partitions',
      description: 'Elegant glass partitions to create modern and functional office spaces.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      features: [
        'Frameless Glass Partitions',
        'Acoustic Solutions',
        'Sliding & Fixed Systems',
        'Custom Configurations',
      ],
    },
    {
      title: 'Frameless Systems',
      description: 'Sleek frameless glass solutions for balconies, railings, and shower enclosures.',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070',
      features: [
        'Minimalist Design',
        'Maximum Transparency',
        'Easy Maintenance',
        'Premium Hardware',
      ],
    },
    {
      title: 'ACP Cladding',
      description: 'High-quality aluminium composite panel cladding for building exteriors.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
      features: [
        'Fire Resistant Panels',
        'Wide Color Range',
        'Weather Resistant',
        'Lightweight & Durable',
      ],
    },
  ];

  return (
    <section className={styles.servicesList}>
      <div className={styles.container}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`${styles.serviceItem} ${index % 2 === 1 ? styles.reverse : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} />
              </div>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.title}>{service.title}</h2>
              <p className={styles.description}>{service.description}</p>

              <ul className={styles.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={styles.inquireBtn}>
                Request Quote <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
