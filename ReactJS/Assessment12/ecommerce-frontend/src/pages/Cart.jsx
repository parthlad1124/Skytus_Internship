import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  if (cartItems.length === 0) {
    return (
      <h2 className="text-2xl font-semibold">
        Your cart is empty 🛒
      </h2>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-blue-600 font-bold">
                  ₹ {item.price}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <h3 className="text-2xl font-bold">
          Total: ₹ {totalPrice.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;