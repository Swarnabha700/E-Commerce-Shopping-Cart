// src/components/ThankYou.jsx

import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Confirmed!</h1>
        <p className="text-gray-700 mb-6">Thank you for shopping with us.</p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
