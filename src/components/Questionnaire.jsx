import { motion } from "framer-motion";
import Image2 from '../assets/divider.png';

const QuestionnaireSection = () => (
  <motion.section
    className="section section-questionnaire section-selected"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section_title">Анкета</h2>
    <p>Чтобы все в этот день прошло идеально, а день запомнился надолго, пожалуйста, ответьте на несколько вопросов</p>
    <img className="divider" src={Image2}/>
    <img className="divider" src={Image2}/>
    <p>Обращаем внимание на то, что, если вы идете на вечеринку парой или семьей, анкету можно заполнить для всех сразу используя соответствующий пункт</p>
     
     <a href="" className="btn">
    <button>Заполнить анкету</button>
    </a>
  </motion.section>
);

export default QuestionnaireSection;