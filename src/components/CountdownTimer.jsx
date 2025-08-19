import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = new Date("2025-09-20T00:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const Confetti = () => {
  const confettiPieces = Array.from({ length: 30 });

  return (
    <div className="confetti-wrapper">
      {confettiPieces.map((_, i) => (
        <div key={i} className={`confetti-piece piece-${i % 5}`} />
      ))}
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <motion.div
        className="countdown wedding-day"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>🎉 Свадьба сегодня! 🎉</h2>
        <Confetti />
      </motion.div>
    );
  }

  return (
    <section className="section section-selected">
      <motion.div
        className="countdown"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section_title">До праздника осталось:</h2>
        <div className="countdown-grid">
          <div className="countdown-item">
            <span>{timeLeft.days}</span>
            <p>Дней</p>
          </div>
          <span className="countdown__divider">:</span>
          <div className="countdown-item">
            <span>{timeLeft.hours}</span>
            <p>Часов</p>
          </div>
          <span className="countdown__divider">:</span>
          <div className="countdown-item">
            <span>{timeLeft.minutes}</span>
            <p>Минут</p>
          </div>
          <span className="countdown__divider">:</span>
          <div className="countdown-item">
            <span>{timeLeft.seconds}</span>
            <p>Секунд</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;