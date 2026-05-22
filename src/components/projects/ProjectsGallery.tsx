'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './ProjectsGallery.module.scss';

const ProjectsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Villas', 'Commercial', 'Offices', 'Hotels', 'Restaurants'];

  const projects = [
    {
      title: 'Luxury Villa - Palm Jumeirah',
      category: 'Villas',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
      description: 'Complete aluminium and glass installation for a luxury villa.',
      date: 'March 2024',
      client: 'Private Client',
    },
    {
      title: 'Business Bay Tower',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      description: 'Curtain wall system for 40-story commercial building.',
      date: 'February 2024',
      client: 'Emaar Properties',
    },
    {
      title: 'Modern Office Space',
      category: 'Offices',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      description: 'Glass partitions and frameless doors for corporate office.',
      date: 'January 2024',
      client: 'Tech Solutions LLC',
    },
    {
      title: 'Five Star Hotel',
      category: 'Hotels',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      description: 'Premium glass facades and entrance systems.',
      date: 'December 2023',
      client: 'Jumeirah Group',
    },
    {
      title: 'Fine Dining Restaurant',
      category: 'Restaurants',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
      description: 'Elegant glass partitions and sliding doors.',
      date: 'November 2023',
      client: 'Gourmet Dining Co.',
    },
    {
      title: 'Arabian Ranches Villa',
      category: 'Villas',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      description: 'Custom aluminium windows and glass doors.',
      date: 'October 2023',
      client: 'Private Client',
    },
    {
      title: 'Dubai Marina Office',
      category: 'Offices',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
      description: 'Complete office fit-out with glass solutions.',
      date: 'September 2023',
      client: 'Marina Business Center',
    },
    {
      title: 'Shopping Mall Facade',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2071',
      description: 'Large-scale glass facade installation.',
      date: 'August 2023',
      client: 'Majid Al Futtaim',
    },
    {
      title: 'Boutique Hotel',
      category: 'Hotels',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
      description: 'Frameless glass balconies and shower enclosures.',
      date: 'July 2023',
      client: 'Boutique Hotels Group',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.category}>{project.category}</div>
                  <h3 className={styles.title}>{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <div className={styles.modalImage}>
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className={styles.modalInfo}>
                <div className={styles.modalCategory}>{selectedProject.category}</div>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <p className={styles.modalDescription}>{selectedProject.description}</p>

                <div className={styles.modalDetails}>
                  <div className={styles.detail}>
                    <span className={styles.label}>Completion Date:</span>
                    <span className={styles.value}>{selectedProject.date}</span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.label}>Client:</span>
                    <span className={styles.value}>{selectedProject.client}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsGallery;
