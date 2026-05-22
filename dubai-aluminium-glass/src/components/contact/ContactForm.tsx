'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaPaperPlane } from 'react-icons/fa';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'general',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'general',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Send Us a <span className={styles.highlight}>Message</span>
          </h2>
          <p className={styles.subtitle}>
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>
                <FaUser />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                <FaEnvelope />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                <FaPhone />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                <FaBuilding />
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Service Required *</label>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="general">General Inquiry</option>
              <option value="aluminium">Aluminium Fabrication</option>
              <option value="glass">Glass Installation</option>
              <option value="curtain">Curtain Walls</option>
              <option value="partitions">Office Partitions</option>
              <option value="frameless">Frameless Systems</option>
              <option value="acp">ACP Cladding</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={6}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <FaPaperPlane />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
