import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import portrait1 from "../assets/portrait-1.jpg"; 
import portrait2 from "../assets/portrait-2.jpg"; 

// Dummy Data
const novelData = {
  Weekly: [
    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },
    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },
    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },
    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },
    // ...add 8 more
  ],
  Monthly: [
        {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },
  ],
  All: [
        {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },    {
      title: "Nano Machine",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.9,
      image: portrait1,
    },
    {
      title: "Revenge of the Iron-Blooded Sword Hound",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.8,
      image: portrait2,
    },
  ],
};

const PopularNovels = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-[#06111f] text-white p-4 rounded-md max-w-lg ">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 ">Popular</h2>

      {/* Tabs */}
      <div className="flex bg-[#091428] rounded-md overflow-hidden mb-4">
        {["Weekly", "Monthly", "All"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-2 font-medium cursor-pointer ${
              activeTab === tab
                ? "bg-purple-600 text-white"
                : "bg-[#091428] text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Novels List */}
      <div className="space-y-4">
        {novelData[activeTab]?.map((novel, idx) => (
          <div key={idx} className="flex items-start gap-3 border-b rounded-md shadow-md border-none bg-[#091428] pb-4">
            <div className="text-gray-200 w-6 text-center">{idx + 1}</div>
            <img src={novel.image} className="w-14 h-20 object-cover rounded" alt={novel.title} />
            <div>
              <h3 className="font-bold text-white line-clamp-1">{novel.title}</h3>
              <p className="text-sm text-gray-400">
                <span className="text-white">Genres:</span> {novel.genres.join(", ")}
              </p>
              <div className="flex items-center gap-1 mt-1 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  i + 1 <= Math.floor(novel.rating / 2) ? (
                    <FaStar key={i} size={14} />
                  ) : (
                    <FaStarHalfAlt key={i} size={14} />
                  )
                ))}
                <span className="ml-1 text-white text-sm">{novel.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularNovels;
