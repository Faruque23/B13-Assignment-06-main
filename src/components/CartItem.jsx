/**
 * CartItem Component
 * 
 * Displays a single item in the shopping cart with remove functionality
 * @param {Object} item - Product object in the cart
 * @param {Function} onRemove - Callback function to remove item from cart
 */
export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item" role="listitem">
      <div className="cart-item-content">
        <div className="cart-item-icon">📦</div>
        <div className="cart-item-info">
          <h4 className="cart-item-name">{item.name}</h4>
          <p className="cart-item-category">{item.category}</p>
          <p className="cart-item-price">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <button
        className="btn-remove"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Remove
      </button>
    </div>
  )
}
