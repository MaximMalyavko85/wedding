import { motion } from "framer-motion";
import Image2 from '../assets/divider.png';

const ContactsSection = () => (
  <motion.section
    className="section section-contacts section-selected"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section_title">Контакты</h2>
    <p>На случай, если у Вас будут вопросы, которые Вы не сможете обсудить с нами напрямую</p>
    <br />
    <p>или</p>
    <br />
    <p>На случай, если Вы захотите поучаствовать в подготовке интерактивов, творческих номеров или предложить какие-то идеи,</p>
    <br />
    <p>делимся с Вами контактом свадебного организатора</p>
     
    <div className="card_item">
      <h2><b>Анастасия</b></h2>
      <h5>+375 29 289 57 90</h5>
      <a 
        className="btn" 
        href="https://t.me/anastasiya_dyubaylo"
        target="_blank"
        rel="noopener noreferrer">
        <button>Написать лично в Telegram</button>
      </a>
    </div> 
  </motion.section>
);

export default ContactsSection;