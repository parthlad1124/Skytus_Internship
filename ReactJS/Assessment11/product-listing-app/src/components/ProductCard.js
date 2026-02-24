const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>

      <p className="price">${product.price}</p>

      <p className="rating">
        ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </p>

      <p className="category">{product.category}</p>
    </div>
  )
}

export default ProductCard
