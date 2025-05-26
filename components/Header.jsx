import React from 'react';
import { Menu, Search, Filter, LogIn } from 'lucide-react';
import logo from '../assets/images-logo.png';
import { FaDiscord, FaRedditAlien, FaInstagram, FaRandom } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#06111f] text-white px-2 md:px-4 py-2 md:py-4 flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Menu className="w-6 h-6" />
        {/* <img src={logo} alt="Kaido Logo" className="w-20 h-12" />
         */}
         <h1 className='text-2xl font-bold text-purple-500'>Inkosei</h1>

      </div>

      {/* Web view */}
      <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
        <div className="flex items-center bg-white rounded-md overflow-hidden ">
          <input
            type="text"
            placeholder="Search anime..."
            className="px-4 py-2 w-96 text-black outline-none"
          />
          <Search className="text-black mx-2" />

        </div>

        <div className="flex items-center gap-2 text-sm ml-4">
          <span className='text-lg text-gray-300'>Join now</span>
             <div className="flex gap-4 ml-3">
      {/* Social Icons */}
      <div className="flex gap-2 text-white text-xl">
        <FaDiscord className="w-6 h-6" />
        <FaRedditAlien className="w-6 h-6" />
        <FaInstagram className="w-6 h-6" />
      </div>

      {/* Random Icon with Label */}
      <div className="flex items-center gap-2 text-white">
        <FaRandom className="w-5 h-5" />
        <span className="text-sm">Random</span>
      </div>
    </div>
        </div>
      </div>

      {/* Login button */}
      <button className="bg-green-400 text-black px-4 py-1 rounded hidden lg:block">Login</button>

      {/* Mobile right side */}
      <div className="flex items-center gap-4 lg:hidden">
        <Search className="w-6 h-6" />
        <button className="bg-green-400 text-black px-4 py-1 rounded">Login</button>
      </div>
    </header>
  );
};

export default Header;
