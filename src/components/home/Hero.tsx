'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaUsers, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Hero.module.scss';

const slides = [
  {
    image: '/images/Villas.jpeg',
    subtitle: 'Residential Excellence',
    title: 'Luxury',
    highlight: 'Aluminium & Glass',
    titleEnd: 'Solutions',
    description:
      'Transform your villa with bespoke frameless glazing, thermally broken profiles, and floor-to-ceiling glass that blurs the line between inside and out.',
  },
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    subtitle: 'Dubai — Where We Operate',
    title: 'Serving the',
    highlight: 'Heart of the UAE',
    titleEnd: '',
    description:
      'From the Palm to Downtown, DIFC to Arabian Ranches — our teams are active across every major district in Dubai, delivering on time and on spec.',
  },
  {
    image: '/images/Villas%20(2).jpeg',
    subtitle: 'Bespoke Craftsmanship',
    title: 'Precision Engineered for',
    highlight: 'Every Home',
    titleEnd: '',
    description:
      'From grand entrance pivot doors to retractable glass louvres, every element is fabricated to exact specifications and installed to perfection.',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    subtitle: 'Commercial Glazing',
    title: 'High-Rise',
    highlight: 'Glass Facades',
    titleEnd: 'Done Right',
    description:
      "Structural curtain walling, unitised systems, and thermally broken aluminium frames — engineered for Dubai's tallest and most ambitious towers.",
  },
  {
    image: '/images/Villas%20(3).jpeg',
    subtitle: 'Premium Quality',
    title: 'Built to Last in',
    highlight: 'the Dubai Climate',
    titleEnd: '',
    description:
      'Double-glazed aluminium systems engineered to endure extreme UV exposure and temperature cycles — beauty and performance in equal measure.',
  },
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
    subtitle: 'Hospitality Projects',
    title: 'Five-Star Glass for',
    highlight: 'Five-Star Hotels',
    titleEnd: '',
    description:
      'We partner with the leading hotel groups across Dubai to deliver glass facades, lobby enclosures, and bathroom installations at the highest possible standard.',
  },
  {
    image: '/images/Villas%20(4).jpeg',
    subtitle: 'Architectural Vision',
    title: 'Glass That',
    highlight: 'Defines Your Space',
    titleEnd: '',
    description:
      'Structural curtain walling, automated sun fins, and panoramic glazing — we bring ambitious architectural concepts to life across Dubai.',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
    subtitle: 'Corporate Interiors',
    title: 'World-Class',
    highlight: 'Office Glass',
    titleEnd: 'Solutions',
    description:
      "Full-height partitions, acoustic meeting pods, and frameless pivot doors crafted to the standards of Dubai's most prestigious commercial spaces.",
  },
  {
    image: '/images/Office.jpeg',
    subtitle: 'Grade-A Offices',
    title: 'DIFC &',
    highlight: 'Business Bay',
    titleEnd: 'Specialists',
    description:
      'Our office glazing systems combine acoustic performance, visual openness, and architectural precision — the formula behind every Grade-A fit-out we deliver.',
  },
  {
    image: '/images/Washroom.jpeg',
    subtitle: 'Luxury Interiors',
    title: 'Flawless',
    highlight: 'Washroom Glass',
    titleEnd: 'Installations',
    description:
      'Zero-profile corner bonding, extra-clear frameless enclosures, and bespoke mirror systems — every bathroom finished to five-star standards.',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const floatingCards = [
    { icon: FaAward, title: '15+ Years Experience' },
    { icon: FaUsers, title: '5000+ Happy Clients' },
    { icon: FaTools, title: 'Premium Quality' },
  ];

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollToSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const slide = slides[current];

  return (
    <section className={styles.hero}>
      {/* Slideshow background */}
      <div className={styles.slideshowWrapper}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            className={styles.slide}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={current === 0}
              sizes="100vw"
              className={styles.slideImage}
            />
            <div className={styles.overlay} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous slide">
        <FaChevronLeft />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next slide">
        <FaChevronRight />
      </button>

      {/* Content */}
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.content}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className={styles.subtitle}>{slide.subtitle}</div>

            <h1 className={styles.title}>
              {slide.title && <>{slide.title} </>}
              <span className={styles.highlight}>{slide.highlight}</span>
              {slide.titleEnd && <> {slide.titleEnd}</>}
            </h1>

            <p className={styles.description}>{slide.description}</p>

            <div className={styles.ctaButtons}>
              <Link href="/services" className={styles.primaryBtn}>
                Explore Services
              </Link>
              <Link href="/projects" className={styles.secondaryBtn}>
                View Projects
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Cards */}
      <div className={styles.floatingCards}>
        {floatingCards.map((card, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
          >
            <card.icon className={styles.icon} />
            <div className={styles.cardTitle}>{card.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={scrollToSection}
      >
        <span className={styles.scrollText}>Scroll Down</span>
        <div className={styles.scrollIcon}></div>
      </motion.div>
    </section>
  );
};

export default Hero;
