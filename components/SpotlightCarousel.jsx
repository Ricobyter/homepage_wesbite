import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import l1 from "../assets/landscape-.jpg";
import l2 from "../assets/landscape-2.jpg";
import l3 from "../assets/landscape-3.jpg";
import p1 from "../assets/portrait-1.jpg";
import p2 from "../assets/portrait-2.jpg";

const spotlightData = [
  {
    title: "One Piece",
    tags: ["#Adventure", "#Pirates", "#Action"],
    description:
      'Gold Roger was known as the "Pirate King," the strongest and most infamous being to have sailed...Naruto continues his quest to become Hokage while confronting dangerous enemies and his past.',
    imageMobile: p2,
    imageDesktop: l1,
  },
  {
    title: "Naruto Shippuden",
    tags: ["#Ninja", "#Battle", "#Shonen"],
    description:
      "Naruto continues his quest to become Hokage while confronting dangerous enemies and his past. Lorem ipsum dolor sit amet, consectetur adipiscing elit Naruto continues his quest to become Hokage while confronting dangerous enemies and his past.",
    imageMobile: p1,
    imageDesktop: l2,
  },
  {
    title: "Attack on Titan",
    tags: ["#Survival", "#Drama", "#Fantasy"],
    description:
      "In a world where giants rule, humanity fights for survival behind massive walls. Naruto continues his quest to become Hokage while confronting dangerous enemies and his past.Naruto continues his quest to become Hokage while confronting dangerous enemies and his past.",
    imageMobile: p2,
    imageDesktop: l3,
  },
];

const SpotlightCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 768);
    updateScreen(); // initial
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % spotlightData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = spotlightData[current];
  const backgroundImage = isMobile
    ? currentItem.imageMobile
    : currentItem.imageDesktop;

  return (
    <div
      className="relative mt-4 max-w-5xl h-[350px] md:h-[400px] text-white transition-all duration-700 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-blue-800/10 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {currentItem.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-purple-800 text-white text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold line-clamp-3">
          {currentItem.title}
        </h2>

        {/* Description */}
        <p className="text-gray-200 max-w-xl text-sm md:text-base line-clamp-3">
          {currentItem.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-full flex items-center gap-2">
            <FaPlay size={14} /> Read Now
          </button>
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer">
            Detail →
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        {spotlightData.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpotlightCarousel;
