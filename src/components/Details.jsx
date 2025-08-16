import { motion } from "framer-motion";

const DetailsSection = () => (
  <motion.section
    className="section section-details section-selected"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section_title">Детали</h2>
    <h5>мы догадываемся о том, что после получения приглашения у Вас может появиться ряд вопросов:</h5>

    <div className="details_item"> 
      <h4>Дресс-код</h4>
      <h5>мы не хотим Вас ограничивать в цветовой гамме, для нас главное - Ваше присутствие и хорошее настроение.  <br/><br/>
      мы знаем, что Вы выглядите прекрасно в любых нарядах!</h5>
    </div>

     <div className="details_item"> 
      <h4>Паркинг</h4>
      <h5>на территории имеются места для парковки Вашего авто, если Вы решите приехать на автомобиле.</h5>
    </div>

     <div className="details_item"> 
      <h4>Отсутствие детской зоны</h4>
      <h5>наша программа не предполагает детской зоны и аниматора.</h5>
    </div>

     <div className="details_item"> 
      <h4>Для иногородних гостей</h4>
      <h5>для Вашего удобства будут организованы места для ночлега и трансфер как от места размещения до локации, так и в обратном направлении.
    </h5>
    </div>
  
  </motion.section>
);

export default DetailsSection;