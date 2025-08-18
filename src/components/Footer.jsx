import { motion } from "framer-motion";
import Image2 from '../assets/divider.png';

const Footer = () => (

    <footer  className="section section_footer" >
      <div className="footer_content">
        <h2 className="section_title">Мы будем счастливы видеть Вас!</h2> <br/>
        <h5>подтвердите, пожалуйста, своё присутствие на нашем празднике любым удобным для Вас способом</h5> <br/>
        <h5><b>до 3 сентября 2025 года</b></h5> <br/>
        <h3 className="section_subtitle">Аня и Максим</h3>
        <img className="divider" src={Image2}/>
        <img className="divider" src={Image2}/>
        <img className="divider" src={Image2}/>
      </div>
      <p>© 2025 Maksim</p>
    </footer>
);

export default Footer;