import { motion } from "framer-motion";
import Image2 from '../assets/divider.png';

const RSVPSection = () => (
  <motion.section
    className="section section_rsvp"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <img className="divider" src={Image2}/>
     <img className="divider" src={Image2}/>
    <p>после праздника мы уедем и не успеем насладится красотой цветов, по-этому нам будет приятно, если вместо цветов Вы решите подарить нам бутылочку вина или игристого или то, что будет напоминать о Вас.</p>
     
  </motion.section>
);

export default RSVPSection;