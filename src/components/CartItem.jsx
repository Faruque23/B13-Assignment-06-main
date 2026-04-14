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
      <div className="cart-item-info">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-category">{item.category}</p>
      </div>

      <div className="cart-item-price">
        <span className="price">${item.price.toFixed(2)}</span>
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
