import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

// Create the context
const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage initially
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart
  const addToCart = (product) => {
    let action = ""; // Track what we’re doing for toast
  
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
  
      if (existing) {
        if (existing.quantity >= product.availableQty) {
          toast.error("Cannot add more. Product stock limit reached.");
          return prev;
        }
  
        action = "increase";
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
  
      action = "add";
      return [...prev, { ...product, quantity: 1 }];
    });
  
    // Fire toast outside state update (won’t get skipped)
    if (action === "add") {
      toast.success("Added to cart");
    } else if (action === "increase") {
      toast.success("Increased quantity in cart");
    }
  };
  

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                quantity > item.availableQty
                  ? item.availableQty
                  : Math.max(1, quantity),
            }
          : item
      )
    );
  };
  

  // Calculate total price
  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart
export const useCart = () => useContext(CartContext);
