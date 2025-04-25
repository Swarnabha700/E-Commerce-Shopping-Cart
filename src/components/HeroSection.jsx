import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b md:min-h-screen from-violet-200 to-violet-50">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-8">

        {/* Heading */}
        <motion.div
          className="max-w-3xl text-center mx-auto"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="block font-bold text-gray-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Shopping Destination
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div
          className="max-w-3xl text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600">
            Discover the best deals on top electronics — shop smart, live better.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            className="inline-flex justify-center items-center gap-x-3 bg-gradient-to-tr from-blue-600 to-violet-600 text-white text-sm font-medium rounded-full py-3 px-6 shadow-md hover:shadow-lg transition-all"
            href="#products"
          >
            Get started
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
