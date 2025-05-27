import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#06111f] text-white py-10 px-4 mt-10 ">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 text-transparent bg-clip-text">
          Inkosei
        </h1>
          <p className="text-sm text-gray-400">
            Dive into a universe of novels, light novels, and original fiction—anytime, anywhere.
          </p>
        </div>

        <div className="flex justify-center space-x-6 text-sm text-gray-400 mt-4">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/dmca" className="hover:text-white">DMCA</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        <hr className="border-gray-700 my-4 w-full" />

        <div className="text-sm text-gray-500 space-y-2">
          <p>© 2025 All Rights Reserved</p>
          <p>v1.0</p>
        </div>
      </div>
    </footer>
  );
}
