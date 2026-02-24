import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product details");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-blue-600 mb-4">
            ₹ {product.price}
          </p>

            <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Add To Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;