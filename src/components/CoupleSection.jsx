import { motion } from "framer-motion";
import Image from '../assets/image.png';
import CalendarSection from "./Calendar";

const guests = {
  andrey: "Дорогой Андрей", 
}


const CoupleSection = () => {
  const name = window.location.pathname.replace("/", "");

  const mappedName = guests[name];

  return(
  <motion.section
    className="section couple-section section-corrected "
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
     <h3>
        <p>{mappedName || "Дорогой гость"}...</p> <br />
      </h3>
      <h5>С большим удовольствием приглашаем Вас отпраздновать вместе с нами <br/>важное событие в нашей жизни - <br/>День нашей свадьбы!</h5>
    
    <div >  
      <img className="couple_img" src={Image}/>
    </div>
    <CalendarSection />
  </motion.section>
  )
};

export default CoupleSection;