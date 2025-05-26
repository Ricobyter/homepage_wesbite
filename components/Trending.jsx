import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaPlus } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import portrait1 from "../assets/portrait-1.jpg";
import portrait2 from "../assets/portrait-2.jpg";

const trendingData = [
  {
    id: 1,
    title: "From Old Country B...",
    image: portrait1,
    genres: ["Fantasy", "Adventure"],
    description: "A warrior's journey in a mystical land...",
    rating: 9.2,
    airing: "Currently Airing",
    status: "TV",
  },
  {
    id: 2,
    title: "Please Put Them On, Takamine-san",
    image: portrait2,
    genres: ["Comedy", "Ecchi", "Romance", "Sci-Fi"],
    description:
      "Takane Takamine is great at everything she does. Her magnetic personality makes her the envy of everyone.",
    rating: null,
    airing: "Currently Airing",
    status: "TV",
  },
  {
    id: 3,
    title: "Please Put Them On, Takamine-san",
    image: portrait1,
    genres: ["Comedy", "Ecchi", "Romance", "Sci-Fi"],
    description:
      "Takane Takamine is great at everything she does. Her magnetic personality makes her the envy of everyone.",
    rating: null,
    airing: "Currently Airing",
    status: "TV",
  },
  {
    id: 4,
    title: "Please Put Them On, Takamine-san",
    image: portrait2,
    genres: ["Comedy", "Ecchi", "Romance", "Sci-Fi"],
    description:
      "Takane Takamine is great at everything she does. Her magnetic personality makes her the envy of everyone.",
    rating: null,
    airing: "Currently Airing",
    status: "TV",
  },

];

const TrendingCard = ({ anime, index, activeCardId, setActiveCardId }) => {
  const [placeAbove, setPlaceAbove] = useState(false);
  const cardRef = useRef(null);

  const handleToggle = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setActiveCardId(activeCardId === anime.id ? null : anime.id);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setActiveCardId(anime.id);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveCardId(null);
    }
  };

  useEffect(() => {
    const checkPosition = () => {
      const rect = cardRef.current?.getBoundingClientRect();
      const popupHeight = 260;
      if (rect) {
        const spaceAbove = rect.top;
        setPlaceAbove(spaceAbove > popupHeight);
      }
    };

    if (activeCardId === anime.id) checkPosition();

    window.addEventListener("resize", checkPosition);
    return () => window.removeEventListener("resize", checkPosition);
  }, [activeCardId]);

  const showInfo = activeCardId === anime.id;

  return (
    <div
      ref={cardRef}
      className="relative w-40 md:w-50  cursor-pointer group"
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card image and title */}
      <img
        src={anime.image}
        alt={anime.title}
        className="w-full h-72 object-cover rounded-md"
      />
      <div className="mt-1 mb-4 text-sm text-gray-200 truncate">{anime.title}</div>

      {/* Rank */}
      <div className="absolute top-1 left-1 bg-black bg-opacity-60 px-1 py-0.5 text-xs text-green-400 font-bold rounded">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Hover / Click Popup */}
      {showInfo && (
        <div
          className={`absolute z-30 w-72 p-4 bg-[#3c2370] text-white shadow-2xl rounded-lg text-sm 
          ${placeAbove ? "bottom-[260px]" : "top-[260px]"} left-[120%] transition-all duration-300`}
        >
          <h3 className="text-base font-bold mb-1">{anime.title}</h3>
          <p className="text-gray-300 text-xs line-clamp-3 mb-2">{anime.description}</p>
          <p className="text-xs text-gray-300 mb-1">
            <strong>Status:</strong> {anime.airing} ({anime.status})
          </p>
          <p className="text-xs text-gray-300 mb-1">
            <strong>Genres:</strong> {anime.genres?.join(", ")}
          </p>

          {/* Rating */}
          <div className="flex items-center text-yellow-400 gap-1 text-sm mt-1">
            {anime.rating ? (
              <>
                {Array.from({ length: 5 }, (_, i) =>
                  i < Math.floor(anime.rating / 2) ? (
                    <FaStar key={i} size={12} />
                  ) : (
                    <FaStarHalfAlt key={i} size={12} />
                  )
                )}
                <span className="ml-1 text-white">{anime.rating}</span>
              </>
            ) : (
              <span className="text-white">N/A</span>
            )}
          </div>

          {/* Watch Button */}
          <button className="mt-3 bg-green-400 hover:bg-green-300 text-black px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
            <IoMdPlay /> Watch Now <FaPlus className="text-xs" />
          </button>
        </div>
      )}
    </div>
  );
};


const TrendingSection = () => {
    const [activeCardId, setActiveCardId] = useState(null);

    
  return (
    <div className="bg-[#06111f] text-white p-4 rounded-md ">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Trending</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trendingData.map((anime, i) => (
          <TrendingCard key={`${anime.id}-${i}`} anime={anime} index={i} 
                      activeCardId={activeCardId}
            setActiveCardId={setActiveCardId}/>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
