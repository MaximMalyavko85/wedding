import { motion } from "framer-motion";
import Image from '../assets/heart.png';


const CalendarSection = () => (
  <motion.section
    className="calendar-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h5>Сентябрь 2025</h5>
   
   <table class="calendar">
    <thead>
      <tr>
        <th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
      <tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr>
      <tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20<img src={Image} className="calendar-heart"/></td><td>21</td></tr>
      <tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr>
      <tr><td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td></tr>
    </tbody>
  </table>
   <h5 className="calendar-text">
      Этот осенний день станет для нас особенно важным, и мы будем рады провести
      его в кругу самых близких и родных людей.
    </h5>
  <a href="/save-the-date.ics" download className="btn">
    <button>Сохранить в календарь</button>
  </a>
  </motion.section>
);

export default CalendarSection;