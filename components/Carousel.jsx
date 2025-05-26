import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const slides = [
  {
    title: "EMPEROR OF SOLO PLAY",
    genre: "MANHWA",
    rating: 9.8,
    categories: "Action, Adventure, Comedy, Fantasy",
    summary:
      "By the Studio that brought you <Solo Leveling> and <Revenge of the Iron-Blooded Sword Hound>, The World After ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
    status: "Ongoing",
    author: "Didat",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    title: "EMPEROR OF SOLO PLAY",
    genre: "MANHWA",
    rating: 9.8,
    categories: "Action, Adventure, Comedy, Fantasy",
    summary:
      "By the Studio that brought you <Solo Leveling> and <Revenge of the Iron-Blooded Sword Hound>, The World After ...",
    status: "Ongoing",
    author: "Didat",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    title: "EMPEROR OF SOLO LEVELLING",
    genre: "MANHWA",
    rating: 9.8,
    categories: "Action, Adventure, Comedy, Fantasy",
    summary:
      "By the Studio that brought you <Solo Leveling> and <Revenge of the Iron-Blooded Sword Hound>, The World After ...",
    status: "Ongoing",
    author: "Didat",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    title: "EMPEROR OF SOLO PLAY",
    genre: "MANHWA",
    rating: 9.8,
    categories: "Action, Adventure, Comedy, Fantasy",
    summary:
      "By the Studio that brought you <Solo Leveling> and <Revenge of the Iron-Blooded Sword Hound>, The World After ...",
    status: "Ongoing",
    author: "Didat",
    image: "https://picsum.photos/id/237/200/300",
  },
 
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = slides[currentIndex];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-none md:rounded-xs max-w-5xl mx-auto text-white ">
<div className="flex flex-row items-start gap-2 md:gap-6 py-3 md:py-6 px-4 overflow-hidden">
  {/* Left Image */}
  <div className="w-24 md:w-28 h-36 flex-shrink-0">
    <img
      src={slide.image}
      alt={slide.title}
      className="rounded-xs shadow-md object-cover w-full h-full"
    />
  </div>

  {/* Right Content */}
  <div className="flex flex-col flex-1 h-36 overflow-hidden">
    <div className="flex items-center gap-1 mb-2 overflow-hidden">
      <div className="flex bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-semibold">
        <FaStar className="mr-1" />
        {slide.rating}
      </div>
      <h1 className="text-lg font-semibold truncate hover:text-yellow-500 cursor-pointer">{slide.title}</h1>
    </div>

    <p className="text-xs text-yellow-500 mt-1 ">{slide.categories}</p>

    <h2 className="mt-3 font-semibold text-white">SUMMARY</h2>
    <p className="text-xs mt-1 text-gray-300 line-clamp-3">{slide.summary}</p>
  </div>
</div>


      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-yellow-400" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
