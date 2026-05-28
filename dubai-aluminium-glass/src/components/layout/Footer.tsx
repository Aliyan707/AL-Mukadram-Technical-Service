'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Aluminium Windows',
    'Glass Doors',
    'Curtain Walls',
    'Shower Enclosures',
    'Office Partitions',
    'ACP Cladding',
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Al Mukadram</span>
              <span className={styles.logoAccent}>Technical Service</span>
            </div>
            <p className={styles.description}>
              Leading provider of premium aluminium and glass solutions in Dubai.
              We deliver excellence in every project with unmatched quality and craftsmanship.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Our Services</h3>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt />
                <span>Business Bay, Dubai, UAE</span>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+971569285796">+971 56 928 5796</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:almukadramtechnicalservice@gmail.com">almukadramtechnicalservice@gmail.com</a>
              </li>
              <li>
                <FaWhatsapp />
                <a href="https://wa.me/971569285796" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Al Mukadram Technical Service. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeLines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </footer>
  );
};

export default Footer;
