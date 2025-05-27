import React from "react";
import { FaStar } from "react-icons/fa";

const popularManga = [
  {
    title: "Revenge of the Iron-Blooded Sword Hound",
    chapter: 114,
    rating: 9.8,
    image: "https://cdn.omegascans.org/file/omega-scans/images/2023/07/20/64b8b989be7db.jpg",
  },
  {
    title: "Helmut: The Forsaken Child",
    chapter: 92,
    rating: 9.8,
    image: "https://cdn.asuracomic.net/wp-content/uploads/2023/11/helmut.jpg",
  },
  {
    title: "The Knight King Who Returned with a God",
    chapter: 113,
    rating: 9.8,
    image: "https://cdn.manhwaclan.com/wp-content/uploads/2023/10/The-Knight-King-Who-Returned-With-a-God-manhwa-cover.jpg",
  },
  {
    title: "The Regressed Son of a Duke is an Assassin",
    chapter: 76,
    rating: 9.8,
    image: "https://cdn.manhwaclan.com/wp-content/uploads/2024/01/The-Regressed-Son-of-a-Duke-is-an-Assassin.jpg",
  },
  {
    title: "Worthless Regression",
    chapter: 86,
    rating: 9.7,
    image: "https://cdn.manhwaclan.com/wp-content/uploads/2023/09/Worthless-Regression.jpg",
  },
];

const PopularToday = () => {
  return (
    <div className="p-4 text-white bg-[#06111f]  max-w-5xl ">
      <h2 className="text-xl font-bold mb-4 ">Trending</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {popularManga.map((manga, index) => (
          <div 
                      key={index}
            className={`bg-[#091428] p-2 rounded-md ${
              index === 4 ? "hidden sm:block" : ""
            }`}
          >
            <img
              src={manga.image}
              alt={manga.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <span className="inline-block bg-red-600 text-white text-xs font-bold mt-2 px-2 py-1 rounded">
              HOT
            </span>
            <h3 className="text-sm font-semibold mt-1 line-clamp-2">
              {manga.title}
            </h3>
            <p className="text-gray-400 text-sm">Chapter {manga.chapter}</p>
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-white ml-1">{manga.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularToday;
