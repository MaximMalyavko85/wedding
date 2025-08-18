import { motion } from "framer-motion";
import Arrow from '../assets/arrow.svg';

const containerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1, // задержка между детьми
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Header = () => {
  return (
    <motion.header
      className="header-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="header_imgg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
       <video width="100%" height="100%" autoPlay muted loop playsInline>
        <source src="/bg.mp4" type="video/mp4" />
      </video>

        <motion.h5 variants={itemVariants} className="invite__text">
          Приглашение на свадьбу
        </motion.h5>

        <motion.h1 variants={itemVariants}><span className="header__subtext1">Анна </span>&<span className="header__subtext2">Максим</span></motion.h1>

        <motion.h5 variants={itemVariants} className="header_date">
          20 Сентября, 2025, <br/>Cуббота
          <br /><br />

           <img src={Arrow} alt="Arrow"/>
        </motion.h5>



      </motion.div>
    </motion.header>
  );
};

export default Header;