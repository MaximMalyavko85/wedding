import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const GalleryPlaceholder = () => (
  <motion.section
    className="section"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <h2>Our Memories</h2>
    <motion.div className="gallery-grid">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="placeholder gallery-item"
          variants={itemVariants}
        />
      ))}
    </motion.div>
  </motion.section>
);

export default GalleryPlaceholder;