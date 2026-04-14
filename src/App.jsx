import { useState, useMemo } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ProductCard from './components/ProductCard'
import CartItem from './components/CartItem'
import productsData from './data/products.json'

/**
 * DigiTools - Digital Product Marketplace
 * 
 * A modern e-commerce platform for selling digital products
 * Features:
 * - Interactive product catalog with filtering
 * - Shopping cart with add/remove functionality
 * - Real-time notifications using React-Toastify
 * - Responsive design for all devices
 * - Total price calculation
 */

function App() {
  // State management
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('products') // 'products' or 'cart'

  // Memoized calculations for performance optimization
  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0)
  }, [cart])

  const cartItemCount = useMemo(() => {
    return cart.length
  }, [cart])

  /**
   * Add product to cart with toast notification
   * @param {Object} product - Product object from JSON data
   */
  const handleAddToCart = (product) => {
    setCart([...cart, product])
    toast.success(`${product.name} added to cart!`, {
      position: 'bottom-right',
      autoClose: 2000,
    })
  }

  /**
   * Remove product from cart by first occurrence
   * @param {number} productId - ID of product to remove
   */
  const handleRemoveFromCart = (productId) => {
    const product = cart.find(item => item.id === productId)
    const itemIndex = cart.findIndex(item => item.id === productId)
    if (itemIndex > -1) {
      const newCart = cart.filter((_, index) => index !== itemIndex)
      setCart(newCart)
      toast.info(`${product?.name} removed from cart`, {
        position: 'bottom-right',
        autoClose: 2000,
      })
    }
  }

  /**
   * Proceed to checkout - clears cart and returns to product view
   */
  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      toast.warning('Your cart is empty!', {
        position: 'bottom-right',
        autoClose: 2000,
      })
      return
    }

    toast.success('Proceeding to checkout! 🎉', {
      position: 'bottom-right',
      autoClose: 2000,
    })
    setCart([])
    setActiveTab('products')
  }

  return (
    <>
      <ToastContainer />
      
      {/* Header */}
      <header className="header" role="banner">
        <div className="header-content">
          <div className="logo" role="heading" aria-level={1}>DigiTools</div>
          <nav className="nav" role="navigation" aria-label="Main navigation">
            <a href="#products" aria-label="Navigate to Products section">Products</a>
            <a href="#features" aria-label="Navigate to Features section">Features</a>
            <a href="#pricing" aria-label="Navigate to Pricing section">Pricing</a>
            <a href="#testimonials" aria-label="Navigate to Testimonials section">Testimonials</a>
            <a href="#faq" aria-label="Navigate to FAQ section">FAQ</a>
          </nav>
          <div>
            <button 
              className="btn-secondary border-none cart-btn"
              aria-label={`Shopping cart with ${cartItemCount} items`}
              onClick={() => setActiveTab('cart')}
            >
              <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
              {cartItemCount > 0 && <span className="cart-count" aria-label={`${cartItemCount} items in cart`}>{cartItemCount}</span>}
            </button>
            <button className="btn-secondary border-none" aria-label="Login to account">Login</button>
            <button className="btn-primary" aria-label="Get started with DigiTools">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section items-center">
        <div className="hero-content flex items-start content-center gap-8">
          <div className="hero-text flex flex-col gap-4 items-start">
            <div className='hero-text items-start gap-2'>
              <span className="hero-badge">New: AI-Powered Tools Available</span>
              <h1>Supercharge Your<br />Digital Workflow</h1>
              <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
            </div>

            <div className="hero-buttons">
              <button className="btn-primary">Explore Products</button>
              <button className="btn-outline">Watch Demo</button>
            </div>
          </div>

        </div>
        <div className="hero-image">
          <img src="../src/assets/banner.png" alt="Hero Image" />

        </div>
      </section>





      

    </>
  )
}

export default App
