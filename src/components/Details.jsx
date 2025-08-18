import { motion } from "framer-motion";
import Image2 from '../assets/divider.png';

const DetailsSection = () => (
  <motion.section
    className="section section-details section-selected"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section_title">Подсказки и пожелания</h2>
    <h5>мы догадываемся о том, что после получения приглашения у Вас может появиться ряд вопросов:</h5>

    <div className="details_item"> 
      <h5>мы не хотим Вас ограничивать в цветовой гамме, для нас главное - Ваше присутствие и хорошее настроение.  <br/><br/>
      мы знаем, что Вы выглядите прекрасно в любых нарядах!</h5>
    </div>

    <img className="divider" src={Image2}/>
    <img className="divider" src={Image2}/>

     <div className="details_item"> 
      <h5>наша программа не предполагает детской зоны и аниматора.</h5>
    </div>

    <img className="divider" src={Image2}/>
    <img className="divider" src={Image2}/>

     <div className="details_item"> 
      <h5>после праздника мы уедем и не успеем насладится красотой цветов, по-этому нам будет приятно, если вместо цветов Вы решите подарить нам бутылочку вина или игристого или то, что будет напоминать о Вас.
      </h5>
    </div>

    
  
  </motion.section>
);

export default DetailsSection;