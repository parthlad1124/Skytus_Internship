import { useEffect, useState } from "react"
import { fetchProducts } from "../services/productService"

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        setError("Failed to fetch products.")
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  return { products, loading, error }
}

export default useProducts
