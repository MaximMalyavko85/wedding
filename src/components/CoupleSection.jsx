import { motion } from "framer-motion";
import Image from '../assets/image.png';
import CalendarSection from "./Calendar";

const guests = {
  anechka_fam: "Дорогие Мамочка и Папочка",
  boltut_lena_sergey: "Дорогие Лена и Сергей",
  boltut_kiril_natasha: "Дорогие Кирилл и Наталья",
  kendysh_nikolay_larisa: "Дорогие дядя Коля и тетя Лариса",
  alena_ruslan: "Дорогие Алена и Руслан",
  boltut_lena_sergey: "Дорогие Лена и Сергей",
  ochen_doroga_ulia: "Дорогая Юлька",
  sasha_alena: "Дорогие Саша и  Алена",
  komsa_vova: "Дорогой Вова",
  misha_toma: "Дорогие дядя Миша и тетя Тома",
  elena_igor: "Дорогие Лена, Игорь, Соня и Семен",
  natasha_misha: "Дорогие Наташа, Миша, Маша и Макар",
  katia_dima: "Дорогие Катя и Дима",
  silitskaia_irina: "Дорогая Ирина",
  silitskaia_elena_milana: "Дорогая Елена и Милана",
  ludmila_konstantin: "Дорогие Людмила Сергеевна и Константин Станиславович",
  ivanova_anna: "Дорогая Анна Викторовна",
  gunko_zinaida_vladimir: "Дорогие Зинаида Константиновна и Владимир Павлович",
  tutin_sergey_valentina: "Дорогие Сергей Вячеславович и Валентина Степановна",
  baneckaya_irina_ivan: "Дорогие Ирина Адамовна и Иван Иванович",
  anna_ivanovna: "Дорогая Анна Ивановна",
  metik_kiril: "Дорогой Кирилл",
  metik_aleksandr: "Дорогая мама Саша",
  lubimaya_mama: "Дорогая Мама",
  romanychevy_andrey_oksana: "Дорогие Ксюша, Андрей и Никита",
  vika_maksim: "Дорогие Вика и Максим",
  petki_mikalay_ira: "Дорогие Ира и Коля",
  bulatov_dima_natasha: "Дорогие Дима и Наташа",
  ner_andrey: "Дорогой Андрей и тайная подруга",
  lubov_alekseevna: "Дорогая Любовь Алексеевна",
  mira_tural: "Дорогие Мира и Турал",
  ales_veronika: "Дорогие Алесь и Вероника",
  lesha_luba: "Дорогие Леша и Люба",
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
        <p>{mappedName || "Дорогой гость"}!</p> <br />
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