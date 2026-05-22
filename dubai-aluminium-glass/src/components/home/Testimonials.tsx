'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Al Maktoum',
      role: 'Villa Owner, Palm Jumeirah',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Exceptional quality and service! The team transformed our villa with stunning glass installations. The attention to detail and professionalism exceeded our expectations.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: 'I have worked with many suppliers, but Al Mukadram stands out. Their custom solutions and timely delivery make them my go-to partner for all projects.',
    },
    {
      name: 'Mohammed Hassan',
      role: 'Property Developer',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'Outstanding work on our commercial building. The curtain wall installation was flawless, and the project was completed ahead of schedule. Highly recommended!',
    },
    {
      name: 'Emily Roberts',
      role: 'Homeowner, Dubai Marina',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      text: 'From consultation to installation, everything was perfect. The frameless glass doors have completely transformed our living space. Thank you for the excellent service!',
    },
    {
      name: 'Khalid Abdullah',
      role: 'Restaurant Owner',
      image: 'https://i.pravatar.cc/150?img=51',
      rating: 5,
      text: 'The glass partitions and entrance doors they installed have elevated our restaurant\'s ambiance. Professional team, premium quality, and great value for money.',
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            What Our <span className={styles.highlight}>Clients Say</span>
          </h2>
          <p className={styles.subtitle}>
            Trusted by thousands of satisfied clients across Dubai
          </p>
        </motion.div>

        <motion.div
          className={styles.sliderWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={styles.swiper}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={styles.testimonialCard}>
                  <FaQuoteLeft className={styles.quoteIcon} />

                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className={styles.text}>{testimonial.text}</p>

                  <div className={styles.author}>
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className={styles.authorInfo}>
                      <div className={styles.name}>{testimonial.name}</div>
                      <div className={styles.role}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
