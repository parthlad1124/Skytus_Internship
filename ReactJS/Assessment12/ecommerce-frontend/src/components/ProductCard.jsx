import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain mb-4"
      />

      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-blue-600 font-bold mb-3">
        ₹ {product.price}
      </p>

      <Link to={`/product/${product.id}`}>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;