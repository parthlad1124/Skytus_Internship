import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div>
        <h2 className="text-3xl font-bold mb-6">Product Listing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  );
};

export default Home;