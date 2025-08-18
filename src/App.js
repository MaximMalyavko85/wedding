import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import CoupleSection from "./components/CoupleSection";
import EventDetails from "./components/EventDetails";
import GalleryPlaceholder from "./components/GalleryPlaceholder";
import Footer from "./components/Footer";
import CountdownTimer from "./components/CountdownTimer";
import CalendarSection from "./components/Calendar";
import DetailsSection from "./components/Details";
import QuestionnaireSection from "./components/Questionnaire";
import ChatSection from "./components/Chat";
import ContactsSection from "./components/Contacts";

function App() {

  useEffect(() => {
    console.log("Если вы петька и решили открыть консоль и что-то там увидеть - то у меяня хорошая новость для вас: вызовите функцию hui")

      window.hui = () => {
      console.log("Сам ты 🍌. Realmdididid или что там у тебя рожно полное. Монго - говнище. Postgres - норм. Ирычу привет ❤️ Закрой консоль!!😎")
      }
  }, [])
 

  return (
    <div className="app">
      <Header />
      <CoupleSection />
      <CountdownTimer />
      <EventDetails />
      {/* <GalleryPlaceholder /> */}
      <DetailsSection />
      {/* <QuestionnaireSection /> */}
      <ChatSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}

export default App;
