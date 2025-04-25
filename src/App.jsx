import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import HeroSection from "./components/HeroSection";
import { useCart } from "./context/CartContext";
import ThankYou from "./components/ThankYou";

const App = () => {
  const { addToCart, cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-b from-violet-200 via-white to-violet-100"> 
              <HeroSection />
              <div id="products" className="max-w-7xl mx-auto px-4 py-12">
                <ProductList onAddToCart={addToCart} />
              </div>
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div className="max-w-4xl mx-auto px-4 py-12">
              <Cart
                cartItems={cartItems}
                onRemove={removeFromCart}
                onQuantityChange={updateQuantity}
                onClearCart={clearCart}
              />
            </div>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
