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
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="image-placeholder">{product.category}</div>
        )}
      </div>

      {product.tag && (
        <span className={`product-badge ${product.tagType || 'new'}`}>
          {product.tag}
        </span>
      )}

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="price-section">
            <span className="price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <button
            className="btn-primary add-to-cart-btn"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
