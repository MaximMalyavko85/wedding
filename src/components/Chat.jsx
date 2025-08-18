import { motion } from "framer-motion";
import Image2 from '../assets/selebrate.png';

const ChatSection = () => (
  <motion.section
    className="section section-chat"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section_title">Чат для гостей</h2>
    <p>В чате можно будет найти или уточнить актуальную информацию о мероприятии, поделиться фото и/или видео с торжества</p><br />


    <a 
      className="btn" 
      href="https://t.me/+1bueVV5x5R42MTdi"
      target="_blank"
      rel="noopener noreferrer">
      <button>Перейти в Telegram</button>
    </a>
    <br/>
     <a 
      className="btn" 
      href="https://invite.viber.com/?g=NpbxsAsxLVUYS6tB-08TfWhj7Aijr1Eg"
      target="_blank"
      rel="noopener noreferrer">
      <button>Перейти в Viber</button>
    </a>
    <br/>
    <img src={Image2}/>
  
  </motion.section>
);

export default ChatSection;