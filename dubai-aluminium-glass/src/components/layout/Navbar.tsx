'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.logoText}>Al Mukadram</span>
            <span className={styles.logoAccent}>Aluminium & Glass</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={pathname === link.path ? styles.active : ''}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <a href="tel:+971501234567" className={styles.phoneBtn}>
            <FaPhone />
            <span>+971 50 123 4567</span>
          </a>
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={pathname === link.path ? styles.active : ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className={styles.mobileCta}>
              <a href="tel:+971501234567" className={styles.mobilePhoneBtn}>
                <FaPhone />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileWhatsappBtn}
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
