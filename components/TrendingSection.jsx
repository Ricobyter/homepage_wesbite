import React, { useEffect, useRef, useState } from "react";
import portrait1 from "../assets/portrait-1.jpg";
import portrait2 from "../assets/portrait-2.jpg";

const novels = [
  {
    title: "Rebirth of the Sword God",
    author: "Xiao Tian",
    tags: ["Action", "Cultivation"],
    stars: 4.5,
    description:
      "After dying in battle, the sword god reincarnates to reclaim his former glory.",
    imageUrl: portrait1,
  },
  {
    title: "Emperor's Domination",
    author: "Li Qiye",
    tags: ["Fantasy", "Revenge"],
    stars: 4.8,
    description:
      "Li Qiye returns with ancient knowledge and schemes to dominate the heavens.",
    imageUrl: portrait2,
  },
  {
    title: "Immortal Chronicles",
    author: "Zhen Wu",
    tags: ["Immortal", "Adventure"],
    stars: 4.7,
    description:
      "A tale of an immortal seeking purpose in a mortal realm.",
    imageUrl: portrait2,
  },
  {
    title: "Immortal Chronicles",
    author: "Zhen Wu",
    tags: ["Immortal", "Adventure"],
    stars: 4.7,
    description:
      "A tale of an immortal seeking purpose in a mortal realm. A tale of an immortal seeking purpose in a mortal realm. A tale of an immortal seeking purpose in a mortal realm.",
    imageUrl: portrait2,
  },
  {
    title: "Immortal Chronicles",
    author: "Zhen Wu",
    tags: ["Immortal", "Adventure"],
    stars: 4.7,
    description:
      "A tale of an immortal seeking purpose in a mortal realm. A tale of an immortal seeking purpose in a mortal realm. A tale of an immortal seeking purpose in a mortal realm.",
    imageUrl: portrait2,
  },
];

const TrendingSection = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % novels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const child = container.children[currentIndex];
      if (child) {
        container.scrollTo({
          left: child.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  return (
    <div className="bg-[#06111f] py-10 max-w-5xl mx-auto">
      <h2 className="text-2xl text-center md:text-left font-bold text-white mb-6">
        🔥 Trending Novels
      </h2>

      {/* Desktop Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {novels.map((novel, index) => (
          <NovelCard key={index} novel={novel} />
        ))}
      </div>

      {/* Mobile Slider */}
      <div
        ref={scrollRef}
        className="sm:hidden flex gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory pb-4"
      >
        {novels.map((novel, index) => (
          <div key={index} className="flex-shrink-0 w-80 snap-start">
            <NovelCard novel={novel} />
          </div>
        ))}
      </div>
    </div>
  );
};

const NovelCard = ({ novel }) => (
  <div
    className="relative group rounded-xl overflow-hidden shadow-lg bg-cover bg-center text-white transition-transform duration-300 hover:-translate-y-1 h-72 z-20"
    style={{ backgroundImage: `url(${novel.imageUrl})` }}
  >
    {/* Overlay */}
    {/* <div className="absolute inset-0 bg-gray-800 bg-opacity-40 z-0" /> */}

    {/* Star Rating */}
    <div className="absolute top-2 right-2 bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded-full z-10">
      ⭐ {novel.stars}
    </div>

    {/* Bottom Info */}
    <div className="absolute bottom-0 left-0 right-0 py-2 px-1 bg-[#2a254dd0] backdrop-blur-sm z-10 transition-all duration-300">
      <h3 className="text-sm font-semibold truncate">{novel.title}</h3>
      <p className="text-xs text-gray-300 mt-1 truncate">By {novel.author}</p>
      {/* <div className="flex flex-wrap gap-2 mt-2">
        {novel.tags.map((tag, idx) => (
          <span key={idx} className="bg-indigo-500 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div> */}

      {/* Hover Description */}
      <div className="mt-2 max-h-0 overflow-hidden text-sm text-gray-200 group-hover:max-h-24 transition-all duration-500 ease-in-out">
        <p className="line-clamp-5 text-xs">{novel.description}</p>
      </div>
    </div>
  </div>
);


export default TrendingSection;
