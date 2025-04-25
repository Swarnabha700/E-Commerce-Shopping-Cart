import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: "./headphones-wireless.jpg",
    availableQty: 15,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    image: "./smart-watch.jpg",
    availableQty: 10,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1799,
    image: "./speaker.jpg",
    availableQty: 8,
  },
  {
    id: 4,
    name: "Fitness Band",
    price: 1299,
    image: "./band.jpg",
    availableQty: 20,
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 999,
    image: "./gaming-mouse.jpeg",
    availableQty: 25,
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 2999,
    image: "./mechanical-keyboard.jpg",
    availableQty: 12,
  },
  {
    id: 7,
    name: "USB-C Hub",
    price: 1499,
    image: "./usb-c-hub.jpg",
    availableQty: 18,
  },
  {
    id: 8,
    name: "Portable SSD 1TB",
    price: 6999,
    image: "./portable-ssd.jpg",
    availableQty: 10,
  },
  {
    id: 9,
    name: "4K Action Camera",
    price: 8999,
    image: "./action-camera.jpg",
    availableQty: 6,
  },
  {
    id: 10,
    name: "Wireless Charger",
    price: 1299,
    image: "./wireless-charger.jpg",
    availableQty: 30,
  },
  {
    id: 11,
    name: "Laptop Cooling Pad",
    price: 1099,
    image: "./cooling-pad.jpg",
    availableQty: 14,
  },
  {
    id: 12,
    name: "VR Headset",
    price: 14999,
    image: "./vr-headset.jpg",
    availableQty: 5,
  },
  {
    id: 13,
    name: "Smart Light Bulb",
    price: 599,
    image: "./smart-bulb.jpg",
    availableQty: 50,
  },
  {
    id: 14,
    name: "Noise Cancelling Earbuds",
    price: 3499,
    image: "./earbuds.jpg",
    availableQty: 17,
  },
  {
    id: 15,
    name: "Webcam 1080p",
    price: 2199,
    image: "./webcam.jpg",
    availableQty: 9,
  },
  {
    id: 16,
    name: "Scented Candle",
    price: 499,
    image: "./scented-candle.jpg",
    availableQty: 40,
  },
  {
    id: 17,
    name: "Yoga Mat",
    price: 999,
    image: "./yoga-mat.jpg",
    availableQty: 20,
  },
  {
    id: 18,
    name: "Stainless Steel Water Bottle",
    price: 799,
    image: "./water-bottle.jpg",
    availableQty: 35,
  },
  {
    id: 19,
    name: "Notebook Set (3 Pack)",
    price: 599,
    image: "./notebooks.jpg",
    availableQty: 60,
  },
  {
    id: 20,
    name: "Desk Organizer",
    price: 1199,
    image: "./desk-organizer.jpg",
    availableQty: 22,
  },
  {
    id: 21,
    name: "Indoor Plant Pot",
    price: 899,
    image: "./plant-pot.jpg",
    availableQty: 25,
  },
  {
    id: 22,
    name: "Aromatic Herbal Tea Box",
    price: 699,
    image: "./herbal-tea.jpg",
    availableQty: 45,
  }
];


const ProductList = ({ onAddToCart }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
      
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
