import { motion } from "framer-motion";
import Image2 from '../assets/divider.png';

const Footer = () => (
  <motion.footer
    className="section section_footer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="footer_content">
      <h2>Oчень вас ждём!</h2> <br/>
      <h5>пожалуйста, подтвердите своё присутствие на нашем празднике любым удобным для Вас способом</h5> <br/>
      <h5><b>до 3 сентября 2025 года</b></h5> <br/>
      <h3 className="section_title">Ваши Аня и Максим</h3>
      <img className="divider" src={Image2}/>
      <img className="divider" src={Image2}/>
      <img className="divider" src={Image2}/>
    </div>
    <p>© 2025 Maksim</p>
  </motion.footer>
  
);

export default Footer;