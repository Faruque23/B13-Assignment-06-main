/**
 * ProductCard Component
 * 
 * Displays a single product card with image, details, and add to cart button
 * @param {Object} product - Product object with id, name, price, description, etc.
 * @param {Function} onAddToCart - Callback function when add to cart button is clicked
 */
export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card" role="article" aria-label={`${product.name} product card`}>
      {product.tag && (
        <span className={`product-badge ${product.tagType || 'new'}`}>
          {product.tag}
        </span>
      )}

      <div className="product-icon">
        {product.image ? (
          <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
        ) : (
          <span>📦</span>
        )}
      </div>

      <h3 className="product-name">{product.name}</h3>
      <p className="product-category" style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem' }}>{product.category}</p>
      <p className="product-description">{product.description}</p>

      <div className="product-price">
        <span className="price-amount">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="price-period" style={{ textDecoration: 'line-through', color: '#9ca3af' }}>${product.originalPrice.toFixed(2)}</span>
        )}
      </div>

      <button
        className="btn-primary buy-btn"
        onClick={() => onAddToCart(product)}
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  )
}
