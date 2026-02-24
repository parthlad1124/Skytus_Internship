import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



const Navbar = () => {
    const { cartItems } = useContext(CartContext);
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        MyShop
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/cart" className="hover:text-gray-200">
            Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;