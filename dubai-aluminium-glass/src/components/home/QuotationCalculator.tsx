'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRuler, FaGlassMartini, FaPalette, FaCalculator } from 'react-icons/fa';
import styles from './QuotationCalculator.module.scss';

const QuotationCalculator = () => {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    glassType: 'clear',
    frameColor: 'white',
    quantity: '1',
  });

  const [estimate, setEstimate] = useState<any>(null);

  const glassTypes = [
    { value: 'clear', label: 'Clear Glass', price: 150 },
    { value: 'tinted', label: 'Tinted Glass', price: 200 },
    { value: 'frosted', label: 'Frosted Glass', price: 220 },
    { value: 'laminated', label: 'Laminated Glass', price: 280 },
    { value: 'tempered', label: 'Tempered Glass', price: 300 },
  ];

  const frameColors = [
    { value: 'white', label: 'White' },
    { value: 'black', label: 'Black' },
    { value: 'silver', label: 'Silver' },
    { value: 'gold', label: 'Gold' },
    { value: 'bronze', label: 'Bronze' },
  ];

  const calculateEstimate = () => {
    const width = parseFloat(formData.width);
    const height = parseFloat(formData.height);
    const quantity = parseInt(formData.quantity);

    if (!width || !height || !quantity) return;

    const area = (width * height) / 10000; // Convert to square meters
    const glassPrice = glassTypes.find(g => g.value === formData.glassType)?.price || 150;
    const basePrice = area * glassPrice * quantity;
    const installation = basePrice * 0.15;
    const total = basePrice + installation;

    setEstimate({
      basePrice: basePrice.toFixed(2),
      installation: installation.toFixed(2),
      total: total.toFixed(2),
      delivery: '2-3 days',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.quotation}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Instant <span className={styles.highlight}>Quotation</span> Calculator
          </h2>
          <p className={styles.subtitle}>
            Get an instant estimate for your aluminium and glass project
          </p>
        </motion.div>

        <div className={styles.calculatorGrid}>
          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label>
                <FaRuler />
                Width (cm)
              </label>
              <input
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder="Enter width"
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                <FaRuler />
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Enter height"
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                <FaGlassMartini />
                Glass Type
              </label>
              <select name="glassType" value={formData.glassType} onChange={handleChange}>
                {glassTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>
                <FaPalette />
                Frame Color
              </label>
              <select name="frameColor" value={formData.frameColor} onChange={handleChange}>
                {frameColors.map((color) => (
                  <option key={color.value} value={color.value}>
                    {color.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>
                <FaCalculator />
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                placeholder="Enter quantity"
              />
            </div>

            <button className={styles.calculateBtn} onClick={calculateEstimate}>
              Calculate Estimate
            </button>
          </motion.div>

          <motion.div
            className={styles.resultSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {estimate ? (
              <div className={styles.estimateCard}>
                <h3 className={styles.estimateTitle}>Your Estimate</h3>

                <div className={styles.estimateRow}>
                  <span>Base Price:</span>
                  <span className={styles.price}>AED {estimate.basePrice}</span>
                </div>

                <div className={styles.estimateRow}>
                  <span>Installation:</span>
                  <span className={styles.price}>AED {estimate.installation}</span>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.estimateRow}>
                  <span className={styles.totalLabel}>Total Estimate:</span>
                  <span className={styles.totalPrice}>AED {estimate.total}</span>
                </div>

                <div className={styles.deliveryInfo}>
                  <span>Estimated Delivery:</span>
                  <span className={styles.delivery}>{estimate.delivery}</span>
                </div>

                <button className={styles.requestBtn}>Request Detailed Quote</button>

                <p className={styles.disclaimer}>
                  * This is an estimated price. Final price may vary based on site inspection.
                </p>
              </div>
            ) : (
              <div className={styles.placeholder}>
                <FaCalculator className={styles.placeholderIcon} />
                <p>Fill in the details to get your instant estimate</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuotationCalculator;
