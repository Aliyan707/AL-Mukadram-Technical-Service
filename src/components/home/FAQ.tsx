'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of glass do you offer?',
      answer: 'We offer a wide range of glass types including clear glass, tinted glass, frosted glass, laminated glass, tempered glass, and low-E glass. Each type serves different purposes and we can help you choose the best option for your project.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Installation time varies depending on the project size and complexity. Typically, residential window installations take 1-3 days, while larger commercial projects may take several weeks. We provide a detailed timeline during the consultation phase.',
    },
    {
      question: 'Do you provide warranty on your products?',
      answer: 'Yes, we provide comprehensive warranties on all our products and installations. Our aluminium frames come with a 10-year warranty, and glass products have a 5-year warranty. Installation workmanship is guaranteed for 2 years.',
    },
    {
      question: 'Can you customize designs?',
      answer: 'Absolutely! We specialize in custom designs tailored to your specific requirements. Our design team works closely with you to create unique solutions that match your vision and architectural style.',
    },
    {
      question: 'What areas do you serve in Dubai?',
      answer: 'We serve all areas across Dubai and the UAE, including residential communities, commercial districts, and industrial zones. Our team is equipped to handle projects of any scale and location.',
    },
    {
      question: 'How do I maintain aluminium and glass installations?',
      answer: 'Maintenance is simple - regular cleaning with mild soap and water is usually sufficient. We provide detailed maintenance guidelines with every installation and offer professional cleaning services if needed.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className={`${styles.question} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
