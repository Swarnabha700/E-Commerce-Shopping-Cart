import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col justify-between hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }} 
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain rounded-md mb-3"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
        <p className="text-gray-600 mb-2">₹{product.price}</p>
        <p className="text-sm text-gray-500">Available: {product.availableQty}</p>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-3 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
