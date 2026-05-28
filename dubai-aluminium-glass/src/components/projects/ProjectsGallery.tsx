'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './ProjectsGallery.module.scss';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  scope: string;
  location: string;
}

const ProjectsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Villas', 'Washrooms', 'Offices', 'Hotels', 'Commercial', 'Restaurants'];

  const projects: Project[] = [
    // Villas
    {
      title: 'Palm Jumeirah Beachfront Villa',
      category: 'Villas',
      image: '/images/Villas.jpeg',
      description:
        "A masterpiece of transparency and structure, this Palm Jumeirah residence demanded nothing less than perfection. We engineered a full-perimeter frameless glass facade using thermally broken aluminium profiles, delivering floor-to-ceiling ocean panoramas while maintaining Class A acoustic and thermal insulation. Every sliding door, fixed panel, and corner junction was precision-fabricated and installed to sub-millimetre tolerances — ensuring the boundary between architecture and sea all but disappears.",
      scope: 'Frameless Glass Facade, Sliding Systems, Aluminium Cladding',
      location: 'Palm Jumeirah, Dubai',
    },
    {
      title: 'Emirates Hills Grand Estate',
      category: 'Villas',
      image: '/images/Villas%20(2).jpeg',
      description:
        "Spanning over 12,000 sq ft of built-up area, this Emirates Hills estate required a fully bespoke aluminium and glazing solution that complemented its contemporary Arabic design language. We delivered powder-coated aluminium window walls in a custom champagne finish, paired with oversized pivot entrance doors and retractable glass louvres for the courtyard terraces. The result is a residence where natural light sculpts every interior space throughout the day.",
      scope: 'Aluminium Window Walls, Pivot Doors, Glass Louvres',
      location: 'Emirates Hills, Dubai',
    },
    {
      title: 'Arabian Ranches Signature Villa',
      category: 'Villas',
      image: '/images/Villas%20(3).jpeg',
      description:
        "This Arabian Ranches villa project set a new benchmark for residential glazing in gated communities across Dubai. We installed a complete system of double-glazed aluminium windows with integrated insect screens, bi-fold pool terrace doors spanning 9 metres, and a custom frameless glass balustrade running the full length of the first-floor gallery. Every element was engineered to endure the UAE's extreme UV and temperature cycles without compromising aesthetic clarity.",
      scope: 'Double-Glazed Windows, Bi-Fold Doors, Glass Balustrades',
      location: 'Arabian Ranches, Dubai',
    },
    {
      title: 'District One Waterfront Mansion',
      category: 'Villas',
      image: '/images/Villas%20(4).jpeg',
      description:
        "Overlooking the crystal lagoon at District One, this ultra-luxury mansion demanded a glazing system capable of framing breathtaking water views from every elevation. We specified and installed structural silicone-bonded glass curtain walling across three facades, complemented by automated aluminium sun-shading fins that adjust dynamically with the sun's position. The seamless interface between indoor living and the lagoon edge defines the project's identity.",
      scope: 'Structural Glass Curtain Walling, Automated Sun Fins, Curtain Wall',
      location: 'District One, Mohammed Bin Rashid City',
    },
    // Washrooms
    {
      title: 'Five-Star Hotel Presidential Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom.jpeg',
      description:
        "Commissioned for the presidential suite of a leading luxury hotel group, this bathroom installation exemplifies our ability to work at the highest end of the hospitality market. We supplied and fitted a full walk-in frameless glass shower enclosure with 12mm extra-clear low-iron glass, a bespoke backlit glass feature wall, and brushed gold aluminium trim throughout. Precision silicone detailing and zero-edge transitions between glass panels create an immaculate, seamless finish.",
      scope: 'Frameless Shower Enclosure, Feature Glass Wall, Aluminium Trim',
      location: 'Downtown Dubai',
    },
    {
      title: 'Luxury Penthouse Master Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20(2).jpeg',
      description:
        "This penthouse master bathroom spans 80 square metres and required a glazing concept that would integrate with the interior designer's vision of a spa-like sanctuary. We engineered a full-height glass partition system dividing the wet and dry zones, using 15mm toughened glass with a custom acid-etched privacy band. The frameless hinged shower door — opening in both directions — is fitted with concealed continuous aluminium hinges for an architectural, hardware-minimal look.",
      scope: 'Glass Partition System, Frameless Hinged Doors, Acid-Etched Glass',
      location: 'Palm Jumeirah, Dubai',
    },
    {
      title: 'Dubai Marina Apartment Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20(3).jpeg',
      description:
        "Tailored for a high-end apartment development in Dubai Marina, this bathroom fit-out was executed across 42 identical units with no tolerance for variation. Our factory-fabricated frameless shower enclosures, pre-cut to unit-specific dimensions, were installed by our crews within a tight construction schedule. Each enclosure features 10mm safety glass with ClearShield nano-coating for long-term hygiene performance, aluminium chrome-finish channels, and magnetic door seals for water-tight closure.",
      scope: 'Frameless Enclosures, ClearShield Nano-Coating, Aluminium Channels',
      location: 'Dubai Marina',
    },
    {
      title: 'Jumeirah Beach Residence Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20(4).jpeg',
      description:
        "For this premium JBR apartment bathroom we were tasked with maximising the sense of space within a compact footprint. We designed an all-glass wet room concept with a walk-in shower area defined purely by a single 12mm fixed glass panel and a linear channel drain — eliminating the need for a shower tray entirely. The frameless mirror cabinet system we fabricated features integrated LED strip lighting behind aluminium reveal sections, adding depth and warmth to the finished space.",
      scope: 'Wet Room Glass Panel, Mirror Cabinet System, LED Aluminium Reveals',
      location: 'Jumeirah Beach Residence, Dubai',
    },
    {
      title: 'Downtown Dubai Bathroom Renovation',
      category: 'Washrooms',
      image: '/images/Washroom%20(5).jpeg',
      description:
        "A full bathroom renovation for a Downtown Dubai residence called for high-specification materials and an uncompromising approach to detail. We removed the existing tiled shower enclosure and replaced it with a fully bespoke frameless glass system — custom-measured, templated on site, and precision-cut in our workshop. Polished chrome aluminium hardware, a pivot shower door with soft-close mechanism, and a floor-to-ceiling glass panel arrangement transformed a functional space into a design statement.",
      scope: 'Bespoke Frameless System, Pivot Door, Polished Chrome Hardware',
      location: 'Downtown Dubai',
    },
    {
      title: 'Palm Jumeirah Villa Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20(6).jpeg',
      description:
        "Crafted for a private villa on the Palm, this bathroom installation centred on a freestanding frameless glass shower enclosure positioned at the heart of the master bathroom, visible from both the dressing area and the terrace beyond. The enclosure's 12mm ultra-clear glass panels are bonded with structural silicone at the corner joints, eliminating all metal profiles for a sculpture-like result. Custom-length brushed stainless aluminium drainage channels complete the precision finish.",
      scope: 'Freestanding Glass Enclosure, Structural Silicone Joints, Drainage Systems',
      location: 'Palm Jumeirah, Dubai',
    },
    {
      title: 'DIFC Executive Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20%20(1).jpeg',
      description:
        "Located within a private executive floor at a DIFC tower, this bathroom project demanded corporate-grade precision and a finish consistent with the building's Grade-A specification. We installed floor-to-ceiling glass shower panels in 15mm satin-etched glass, paired with wall-to-wall mirror glazing behind the vanity in 8mm clear float. All aluminium profiles were specified in an anodised dark bronze to coordinate with the space's material palette of dark stone and warm metals.",
      scope: 'Etched Glass Shower Panels, Vanity Mirror Glazing, Anodised Profiles',
      location: 'DIFC, Dubai',
    },
    {
      title: 'Dubai Hills Estate Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20%20(2).jpeg',
      description:
        "This Dubai Hills villa bathroom was conceived as a private spa retreat, and our glass and aluminium work was central to achieving that ambiance. We manufactured and installed a quadrant walk-in shower enclosure in low-iron extra-clear glass, a full-length pivoting mirror panel on a concealed aluminium track system, and a heated towel rail recess framed in precision aluminium channels. The project demonstrates how technical excellence and aesthetic restraint can coexist.",
      scope: 'Quadrant Shower Enclosure, Pivoting Mirror Panel, Aluminium Recess Systems',
      location: 'Dubai Hills Estate',
    },
    {
      title: 'City Walk Boutique Hotel Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20%20(3).jpeg',
      description:
        "For this City Walk boutique hotel we were engaged to deliver bathroom glass solutions across 68 guest rooms and 4 suites. The guest room enclosures feature a consistent frameless two-panel fixed-and-hinged system in 10mm toughened glass with a polished aluminium threshold strip, while the suite bathrooms each received individually designed arrangements — from open wet room concepts to full enclosures with steam-proof seals. Delivered on schedule across a four-week installation programme.",
      scope: 'Hotel-Scale Frameless Enclosures, Steam-Proof Sealing, Suite Bespoke Fit',
      location: 'City Walk, Dubai',
    },
    {
      title: 'Meydan Spa Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20%20(4).jpeg',
      description:
        "As part of a larger spa and wellness facility at Meydan, this bathroom series required glass installations capable of supporting a commercial-grade, high-traffic environment without any compromise on luxury. We specified 12mm safety glass throughout with polished edges and ClearShield permanent protection coating. Frameless sliding shower doors on precision-engineered aluminium track systems allow smooth single-handed operation, while the heavy-duty floor channels are finished to match the porcelain tile surround seamlessly.",
      scope: 'Commercial-Grade Safety Glass, Sliding Shower Doors, Aluminium Track Systems',
      location: 'Meydan, Dubai',
    },
    {
      title: 'La Mer Villa Bathroom',
      category: 'Washrooms',
      image: '/images/Washroom%20%20(5).jpeg',
      description:
        "This La Mer beachside villa bathroom featured an open-plan layout orientated toward a private garden, presenting a unique opportunity to integrate glazing as both a functional and landscape element. We installed a full-width frameless glass wall on the garden-facing side of the wet room — using 15mm toughened glass with a UV-stable structural silicone perimeter seal — and a sliding aluminium privacy screen that can be drawn across when needed. The result merges indoor luxury with outdoor nature in a uniquely Dubai way.",
      scope: 'Garden-Facing Glass Wall, Sliding Privacy Screen, UV-Stable Silicone',
      location: 'La Mer, Jumeirah',
    },
    {
      title: 'Washroom Craftsmanship Detail',
      category: 'Washrooms',
      image: '/images/Washrom.jpeg',
      description:
        "This installation highlights the signature craftsmanship that distinguishes our washroom glass work across every project tier. The frameless enclosure shown here demonstrates our zero-profile corner bonding technique — where two panes of 12mm extra-clear glass meet at a perfect 90-degree joint sealed entirely with structural silicone, with no aluminium channel in sight. This method requires absolute precision in cutting, tempering, and installation, and it is the standard we hold ourselves to on every commission, from single apartments to full hotel developments.",
      scope: 'Zero-Profile Corner Bonding, Extra-Clear Glass, Structural Silicone',
      location: 'Dubai, UAE',
    },
    // Offices
    {
      title: 'DIFC Grade-A Corporate Office',
      category: 'Offices',
      image: '/images/Office.jpeg',
      description:
        "Engaged by a leading professional services firm to fit out their new DIFC headquarters, we delivered a comprehensive aluminium and glass interior scheme across four full floors of Grade-A office space. The scope encompassed full-height frameless glass partition walls with integrated manifestation graphics, a series of double-glazed acoustic meeting pods achieving 45dB sound reduction, frameless pivot entry doors with electronic access control, and an open-plan workspace delineated by low-level glazed screens in black powder-coated aluminium frames. Every element was engineered for durability, acoustic performance, and the kind of precise finish that reflects a world-class corporate environment.",
      scope: 'Glass Partitions, Acoustic Meeting Pods, Frameless Pivot Doors, Low-Level Screens',
      location: 'DIFC, Dubai',
    },
    {
      title: 'Business Bay Open-Plan Office',
      category: 'Offices',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      description:
        "A Business Bay technology firm engaged us to transform a bare shell floor into a dynamic, open-plan workplace centred on glass. We designed and installed a full demountable glass partition system using 12mm toughened clear glass in slim aluminium top-hung frames, allowing the space to be fully reconfigured without structural changes. Frameless double-door entries to each meeting room feature integrated blinds sealed within the double-glazed units, giving privacy on demand without disrupting the open visual flow of the floor.",
      scope: 'Demountable Glass Partitions, Double-Glazed Doors, Integrated Blinds',
      location: 'Business Bay, Dubai',
    },
    {
      title: 'Dubai Marina Corporate Hub',
      category: 'Offices',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070',
      description:
        "This Dubai Marina office project required a glazing solution that balanced privacy for a financial services tenant with the stunning marina views the floor commanded. We installed a floor-to-ceiling switchable smart glass partition along the external-facing corridor — clear for open days, instantly opaque for confidential meetings at the flick of a switch. The aluminium framing system, specified in a brushed nickel anodised finish, integrates seamlessly with the building's existing curtain wall aesthetic.",
      scope: 'Switchable Smart Glass, Aluminium Frame System, Corridor Partitions',
      location: 'Dubai Marina',
    },
    // Hotels
    {
      title: 'Downtown Dubai Five-Star Hotel Facade',
      category: 'Hotels',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      description:
        "Contracted by a leading international hotel brand for their flagship Downtown Dubai property, we delivered the full external glazing package for a 38-storey tower. The scope included a unitised aluminium curtain wall system across all guest room floors, a structural glass lobby entrance canopy spanning 22 metres, and bespoke frameless balcony balustrades on 280 rooms. The gold anodised aluminium finish on all external profiles was custom-matched to the hotel group's brand specification, creating a distinctive presence on the Downtown skyline.",
      scope: 'Unitised Curtain Wall, Structural Glass Canopy, Balcony Balustrades',
      location: 'Downtown Dubai',
    },
    {
      title: 'Palm Jumeirah Boutique Hotel',
      category: 'Hotels',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
      description:
        "This intimate 45-room boutique hotel on the Palm required glass and aluminium solutions that felt bespoke rather than commercial. We fabricated and installed custom pivot entrance doors in 15mm extra-clear glass with brushed bronze aluminium hardware, floor-to-ceiling frameless glass walls for the pool-facing guest rooms, and a full glass atrium roof over the central courtyard using structural silicone-bonded panels. The result is a property where every guest room feels connected to the light and landscape around it.",
      scope: 'Pivot Entrance Doors, Glass Atrium Roof, Pool-Facing Glass Walls',
      location: 'Palm Jumeirah, Dubai',
    },
    {
      title: 'JBR Beachfront Resort',
      category: 'Hotels',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070',
      description:
        "A JBR beachfront resort commission saw us working alongside the main contractor to deliver the complete glazing envelope on a 220-room property. We installed a continuous glass balustrade system running the full length of all six pool deck levels, specified in 17.5mm laminated safety glass with a low-iron clarity for unobstructed sea views. Sliding aluminium glass doors to all pool-facing rooms feature a flush-threshold detail, creating a seamless transition between the air-conditioned interiors and the outdoor terraces.",
      scope: 'Glass Balustrade System, Sliding Pool Doors, Flush-Threshold Detailing',
      location: 'Jumeirah Beach Residence, Dubai',
    },
    {
      title: 'Dubai Hills Hotel & Spa',
      category: 'Hotels',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070',
      description:
        "The Dubai Hills Hotel and Spa project was among our most technically demanding hotel commissions to date. The spa wing called for a fully glazed thermal suite — steam rooms, sauna ante-chambers, and relaxation pools — each separated by frameless glass walls with specialist steam-resistant silicone seals rated for continuous high-humidity and high-temperature environments. The hotel lobby received a dramatic double-height glass feature wall with backlit acid-etched panels, creating a signature arrival experience.",
      scope: 'Steam-Rated Glass Systems, Double-Height Feature Wall, Spa Glazing',
      location: 'Dubai Hills Estate',
    },
    // Commercial
    {
      title: 'Business Bay Tower Curtain Wall',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      description:
        "Awarded as principal glazing subcontractor on a 42-storey Business Bay mixed-use tower, this was one of our most significant curtain wall projects to date. We designed, fabricated, and installed a full stick-system aluminium curtain wall across all commercial and residential floors, encompassing over 18,000 square metres of glazed facade. The system incorporates solar-control double-glazed units, thermally broken aluminium mullions and transoms, and concealed rainscreen drainage channels — all designed and tested to comply with Dubai Municipality's stringent wind-load and thermal performance standards.",
      scope: 'Stick-System Curtain Wall, Solar-Control Glazing, 18,000 sqm Facade',
      location: 'Business Bay, Dubai',
    },
    {
      title: 'DIFC Retail & Office Tower',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2560',
      description:
        "This DIFC mixed-use tower required a facade solution capable of meeting the premium expectations of its financial district address. We installed a unitised curtain wall system with floor-to-ceiling double-glazed panels on all office floors, paired with feature aluminium cladding fins in a custom dark bronze anodised finish that give the building its distinctive vertical rhythm. The ground-floor retail frontage features a full structural glass shopfront system — frameless, column-free, and designed to maximise visual openness to the street.",
      scope: 'Unitised Curtain Wall, Bronze Cladding Fins, Structural Glass Shopfront',
      location: 'DIFC, Dubai',
    },
    {
      title: 'Dubai Mall Expansion Facade',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2071',
      description:
        "Engaged on the facade works for a major Dubai Mall expansion wing, we delivered a high-specification glazing package across a complex, multi-level retail environment. The project included a large-format structural glass barrel vault roof over the central atrium — spanning 60 metres and fabricated from 1.5-tonne individual glass units — as well as the full external glass shopfront system for 34 anchor retail units. Our site team worked through-the-night shifts to maintain the mall's operational hours throughout the installation programme.",
      scope: 'Structural Glass Vault Roof, Retail Shopfronts, Atrium Glazing',
      location: 'Downtown Dubai',
    },
    {
      title: 'Bluewaters Island Mixed-Use Development',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2069',
      description:
        "Bluewaters Island's mixed-use development brought together residential, retail, and hospitality on a single platform — and our glazing scope reflected that complexity. We supplied and installed aluminium window systems for 472 residential apartments, full glass shopfront systems for the retail promenade, and bespoke frameless glass balustrades throughout the public realm. All aluminium was powder-coated in a custom coastal palette specified by the project architect, with additional marine-grade sealants specified throughout for the island's high-humidity, salt-air environment.",
      scope: 'Residential Windows, Retail Shopfronts, Marine-Grade Balustrades',
      location: 'Bluewaters Island, Dubai',
    },
    // Restaurants
    {
      title: 'Burj Khalifa Fine Dining Restaurant',
      category: 'Restaurants',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
      description:
        "Located on the 42nd floor of a Burj Khalifa podium tower, this fine dining restaurant required a glazing concept worthy of its iconic address. We installed a fully frameless glass facade on the restaurant's primary elevation — a continuous 28-metre run of structural glass with no visible framing, delivering uninterrupted views of the Burj and the Downtown skyline. Internal glass wine walls with custom aluminium channel frames serve as both functional storage and dramatic design features visible from every table in the restaurant.",
      scope: 'Structural Frameless Facade, Glass Wine Walls, Floor-to-Ceiling Glazing',
      location: 'Downtown Dubai',
    },
    {
      title: 'Dubai Marina Waterfront Restaurant',
      category: 'Restaurants',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070',
      description:
        "This Dubai Marina waterfront restaurant is a study in how glass can be used to dissolve the boundary between a dining space and its surroundings. We designed and installed a full bi-folding glass facade system on the marina-facing elevation — 14 panels that fully retract to open the entire restaurant frontage on cooler evenings. The internal dining area is defined by a series of curved glass partitions in 12mm toughened glass, each thermally bent to a bespoke radius and set in polished stainless aluminium channels.",
      scope: 'Bi-Folding Glass Facade, Curved Glass Partitions, Retractable Frontage',
      location: 'Dubai Marina',
    },
    {
      title: 'City Walk Casual Dining Strip',
      category: 'Restaurants',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
      description:
        "Commissioned for a six-unit casual dining strip at City Walk, this project gave us the opportunity to develop a modular glass shopfront system that could be adapted to each individual restaurant's branding and layout requirements. The system uses a common aluminium subframe in an anthracite powder-coat finish, with each unit receiving a bespoke glass panel arrangement — from full-height sliding walls to pivot corner doors. Delivered and installed across all six units simultaneously within a three-week programme.",
      scope: 'Modular Glass Shopfront System, Pivot Corner Doors, Sliding Glass Walls',
      location: 'City Walk, Dubai',
    },
    {
      title: 'DIFC Rooftop Bar & Restaurant',
      category: 'Restaurants',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070',
      description:
        "A rooftop bar and restaurant in the DIFC presented the challenge of creating a dramatic, open-air dining experience while meeting the safety and wind-load requirements for a 28th-floor installation. We designed and installed a full-perimeter frameless glass wind screen system — 1.8 metres high, in 19mm toughened safety glass with polished stainless steel base channels — that provides guests with wind protection without compromising the panoramic city views. Frameless glass sliding panels allow sections of the screen to be opened on calm evenings.",
      scope: 'Rooftop Frameless Wind Screen, 19mm Safety Glass, Sliding Panel System',
      location: 'DIFC, Dubai',
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
              key={`${project.category}-${index}`}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.category}>{project.category}</div>
                  <h3 className={styles.title}>{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  className={styles.projectImage}
                />
              </div>

              <div className={styles.modalInfo}>
                <div className={styles.modalCategory}>{selectedProject.category}</div>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <p className={styles.modalDescription}>{selectedProject.description}</p>

                <div className={styles.modalDetails}>
                  <div className={styles.detail}>
                    <span className={styles.label}>Scope of Works</span>
                    <span className={styles.value}>{selectedProject.scope}</span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.label}>Location</span>
                    <span className={styles.value}>{selectedProject.location}</span>
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
