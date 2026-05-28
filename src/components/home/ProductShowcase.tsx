'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import styles from './ProductShowcase.module.scss';

const ProductShowcase = () => {
  const products = [
    {
      title: 'Sliding Windows',
      description: 'Premium aluminium sliding windows with smooth operation and elegant design.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      features: ['Energy Efficient', 'Soundproof', 'Weather Resistant'],
    },
    {
      title: 'Folding Doors',
      description: 'Luxury bi-fold doors that seamlessly connect indoor and outdoor spaces.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
      features: ['Space Saving', 'Panoramic Views', 'Durable'],
    },
    {
      title: 'Curtain Walls',
      description: 'Modern glass curtain wall systems for commercial and residential buildings.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      features: ['Aesthetic Appeal', 'Natural Light', 'Thermal Insulation'],
    },
    {
      title: 'Frameless Glass',
      description: 'Stunning frameless glass solutions for a minimalist and modern look.',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070',
      features: ['Sleek Design', 'Maximum Light', 'Easy Maintenance'],
    },
    {
      title: 'Shower Enclosures',
      description: 'Elegant glass shower enclosures that transform your bathroom.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2187',
      features: ['Custom Sizes', 'Safety Glass', 'Modern Finishes'],
    },
    {
      title: 'ACP Cladding',
      description: 'High-quality aluminium composite panel cladding for building facades.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
      features: ['Fire Resistant', 'Lightweight', 'Color Variety'],
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Our Premium <span className={styles.highlight}>Products</span>
          </h2>
          <p className={styles.subtitle}>
            Discover our extensive range of luxury aluminium and glass solutions
          </p>
        </motion.div>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={styles.productCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>

                <ul className={styles.features}>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <button className={styles.learnMore}>
                  Learn More <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
