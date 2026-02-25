import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setProducts(res.data.slice(0, 10));
    } catch (err) {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Title", accessor: "title" },
  ];

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Products List</h2>
      <DataTable columns={columns} data={products} />
    </div>
  );
}

export default Products;