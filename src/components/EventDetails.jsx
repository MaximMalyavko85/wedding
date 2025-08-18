import { motion } from "framer-motion";
import Timing1 from '../assets/timing1.png';
import Timing2 from '../assets/timing2.png';
import Timing3 from '../assets/timing3.png';
import Timing4 from '../assets/timing4.png';
import TimingLine from '../assets/time_line.png';

const zoomVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const EventDetails = () => (<>
  <motion.section
    className="section event"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="event-block" variants={zoomVariant} transition={{ duration: 0.5 }}>
      <h2 className="section_title">Место проведения торжества</h2>
      <h5>выездная церемония и празднование <br/> пройдут  в ресторане "Крокус", г.Барановичи, ул. Комсомольская, 61, <br/>(Старый парк)</h5>
     
      </div>

       <a
        href="https://www.google.com/maps?q=Restoran+Krokus,+ул.+Комсомольская+улица,+61,+Старый+парк,+Baranavichy,+Belarus"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
       <button>Посмотреть на карте</button>
      </a>
    </motion.section>

     <div className="event-map">
      <iframe
        src="https://www.google.com/maps?q=Restoran+Krokus,+ул.+Комсомольская+улица,+61,+Старый+парк,+Baranavichy,+Belarus&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Restoran Krokus Location"
      ></iframe>
    </div>
    

    <motion.div 
      className="section event-block"
      variants={zoomVariant} 
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="section_title">Тайминг свадебного дня</h2>
      <div className="timing_wrapper">
        <img src={TimingLine} className="time_line"/>
        <div className="timing_container">
          <img src={Timing1} className="timing_img"/>
          <div className="timing_item">
            <h2>15.30</h2>
            <h5>фуршет</h5>
          </div>
        </div>

         <div className="timing_container">
          <img src={Timing2} className="timing_img"/>
          <div className="timing_item">
            <h2>16.00</h2>
            <h5>свадебная церемония</h5>
          </div>
        </div>

         <div className="timing_container">
          <img src={Timing3} className="timing_img"/>
          <div className="timing_item">
            <h2>17.00</h2>
            <h5>праздничный банкет</h5>
          </div>
        </div>

          <div className="timing_container">
          <img src={Timing4} className="timing_img"/>
          <div className="timing_item">
            <h2>23.00</h2>
            <h5>свадебный торт</h5>
          </div>
        </div>
      </div>
    
    </motion.div>
</>
  
);

export default EventDetails;