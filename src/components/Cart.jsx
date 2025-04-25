import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, onRemove, onQuantityChange, onClearCart }) => {
  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 p-6 rounded-3xl shadow-xl w-full max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex-1 flex items-center">
                <img src={item.image} className="size-16 md:size-24 mx-4" alt="" />
                <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-sm text-gray-600">
                  ₹{item.price} x {item.quantity}
                </p>
                <p className="text-sm text-gray-800 font-medium">
                  Total: ₹{item.price * item.quantity}
                </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-2 md:px-3 md:py-2 bg-gray-200 rounded-lg text-lg font-bold hover:bg-gray-300 transition"
                  >
                    −
                  </button>
                  <span className="min-w-[20px] text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => {
                      if (item.quantity < item.availableQty) {
                        onQuantityChange(item.id, item.quantity + 1);
                      } else {
                        toast.error("Stock limit reached");
                      }
                    }}
                    className="px-2 md:px-3 md:py-2 bg-gray-200 rounded-lg text-lg font-bold hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="pt-6 border-t">
            <h3 className="text-xl font-bold text-right">
              Total: ₹{getTotalPrice()}
            </h3>

            <div className="mt-6 text-right">
              <button
                onClick={() => {
                  if (cartItems.length === 0) {
                    toast.warn("Cart is empty!");
                    return;
                  }

                  toast.success("Checkout successful!");
                  onClearCart();

                  setTimeout(() => {
                    navigate("/thank-you");
                  }, 1000); 
                }}
                className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
