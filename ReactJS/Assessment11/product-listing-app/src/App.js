import { useState, useEffect, useRef } from "react"

import useProducts from "./hooks/useProducts"
import ProductList from "./components/ProductList"

function App() {
  const { products, loading, error } = useProducts()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProducts, setFilteredProducts] = useState([])
  const searchRef = useRef(null)
useEffect(() => {
  let updatedProducts = products

  // Search filtering
  if (searchTerm !== "") {
    updatedProducts = updatedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Category filtering
  if (selectedCategory !== "All") {
    updatedProducts = updatedProducts.filter(
      (product) => product.category === selectedCategory
    )
  }

  setFilteredProducts(updatedProducts)
}, [searchTerm, selectedCategory, products])

  // Get unique categories
  const categories = ["All", ...new Set(products.map(p => p.category))]

  // Filter logic
 
  if (loading)
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading products...</p>
    </div>
  )

  if (error) return <h2 className="error">{error}</h2>

return (
  <div>
    <header className="app-header">
      <h1>🛍 Product Listing App</h1>
      <p>
        Showing <strong>{filteredProducts.length}</strong> of{" "}
        <strong>{products.length}</strong> products
      </p>
    </header>

    <div className="filters">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>

    {filteredProducts.length === 0 ? (
      <h2 className="empty">No products found</h2>
    ) : (
      <ProductList products={filteredProducts} />
    )}
  </div>
)

}

export default App
