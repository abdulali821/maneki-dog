import React from "react";
import Banner from "../src/assets/banner.jpg";
import Logo from "../src/assets/logo.jpg";
import { FaTwitter, FaTelegramPlane, FaRocket, FaTools, FaCogs } from "react-icons/fa"; // Importing icons for phases

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-yellow-300 p-6">
      <div className="flex flex-col items-center gap-4">
        {/* Banner Image */}
        <img src={Banner} alt="banner" className="w-full rounded-lg shadow-lg" />

        {/* Social Icons */}
        <div className="flex gap-4 justify-end w-full px-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 cursor-pointer transform hover:scale-110 transition-transform"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 cursor-pointer transform hover:scale-110 transition-transform"
          >
            <FaTelegramPlane size={30} />
          </a>
        </div>

        {/* Logo */}
        <img
          src={Logo}
          alt="logo"
          className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-yellow-300 shadow-lg"
        />

        {/* Titles */}
        <div className="text-center flex flex-col sm:flex-row gap-5 text-black">
          <div className="text-4xl sm:text-5xl p-4 sm:p-5 font-bold bg-yellow-300 rounded-lg shadow-md">
            Dex Screener
          </div>
          <div className="text-4xl sm:text-5xl p-4 sm:p-5 font-bold bg-yellow-300 rounded-lg shadow-md">
            Pump Fun
          </div>
        </div>

        <div className="text-lg font-medium mt-2 text-yellow-400">CA: Coming Soon</div>
      </div>

      {/* Road Map Section */}
      <div className="mt-12 text-center">
        <div className="text-3xl sm:text-4xl font-extrabold tracking-wider mb-6">
          ROAD MAP
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition-colors">
            <div className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaRocket className="text-red-500" size={30} /> Phase 1
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-red-500">STEPS:</div>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
                <li>Pay DEX</li>
                <li>DEX Boost</li>
                <li>Orbit Volume Bot</li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition-colors">
            <div className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaTools className="text-red-500" size={30} /> Phase 2
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-red-500">STEPS:</div>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
                <li>DEX Tools Update</li>
                <li>Coin Gecko Listing</li>
                <li>SOL Trending</li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition-colors">
            <div className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaCogs className="text-red-500" size={30} /> Phase 3
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-red-500">STEPS:</div>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm md:text-base">
                <li>KOL Calls</li>
                <li>CEX Listing</li>
                <li>Merchandise coming soon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
