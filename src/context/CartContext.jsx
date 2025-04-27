import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
   
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (product) => {
    let action = ""; 
  
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
  
    
    if (action === "add") {
      toast.success("Added to cart");
    } else if (action === "increase") {
      toast.success("Increased quantity in cart");
    }
  };
  

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


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


export const useCart = () => useContext(CartContext);
