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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Integrations</p>
          </div>
          <div className="stat-item">
            <h3>4.9</h3>
            <p>Rating</p>
          </div>
        </div>
      </section>

      {/* Products & Cart Toggle Section */}
      <section className="products-cart-section" id="products" aria-label="Products and shopping cart section">

        <div className="section-header">
          <h2>Our Products</h2>
          <p>Choose from our premium digital tools to boost your productivity</p>
        </div>

        {/* Toggle Buttons */}
        <div className="toggle-buttons" role="tablist" aria-label="View options">
          <button
            className={`toggle-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
            role="tab"
            aria-selected={activeTab === 'products'}
            aria-controls="products-panel"
          >
            Products
          </button>
          <button
            className={`toggle-btn ${activeTab === 'cart' ? 'active' : ''}`}
            onClick={() => setActiveTab('cart')}
            role="tab"
            aria-selected={activeTab === 'cart'}
            aria-controls="cart-panel"
          >
            Cart ({cartItemCount})
          </button>
        </div>

        {/* Cart Section */}
        {activeTab === 'cart' && (
          <div className="cart-section" id="cart-panel" role="tabpanel" aria-labelledby="cart-tab">
            {cart.length === 0 ? (
              <div className="empty-cart" role="alert">
                <p>Your cart is empty</p>
                <p className="empty-text">Start adding products to your cart!</p>
              </div>
            ) : (
              <>
                <div className="cart-items" role="list" aria-label="Shopping cart items">
                  {cart.map((item, index) => (
                    <CartItem
                      key={index}
                      item={item}
                      onRemove={handleRemoveFromCart}
                    />
                  ))}
                </div>
                <div className="cart-summary" role="region" aria-label="Order summary">
                  <div className="summary-row">
                    <span>Total Items:</span>
                    <span aria-live="polite">{cartItemCount}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total Price:</span>
                    <span aria-live="polite">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button
                    className="btn-primary checkout-btn"
                    onClick={handleProceedToCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </section>

      {/* Premium Tools Showcase Section */}
      <section id="features" className="tools-section">
        <div className="section-header">
          <h2>Featured Tools</h2>
          <p>Handpicked tools from our collection that deliver exceptional value</p>
        </div>
        <div className="tools-grid">
          {productsData.slice(0, 6).map(product => (
            <div key={product.id} className="tool-card">
              {product.tagType && (
                <span className={`tool-badge ${product.tagType}`}>
                  {product.tag}
                </span>
              )}
              <div className="tool-icon">{product.icon}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="tool-price">
                <span className="price">${product.price}</span>
                <span className="price-period">{product.period}</span>
              </div>
              <ul className="tool-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}><span className="check">✓</span>{feature}</li>
                ))}
              </ul>
              <button className="btn-primary buy-btn" onClick={() => handleAddToCart(product)}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="section-header">
          <h2>Get Started in 3 Steps</h2>
          <p>Start using premium digital tools in minutes, not hours</p>
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">👤</div>
            <h3>Create Account</h3>
            <p>Sign up for free in seconds. No credit card required to get started.</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">📦</div>
            <h3>Choose Products</h3>
            <p>Browse our catalog and select the tools that fit your needs.</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">🚀</div>
            <h3>Start Creating</h3>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your needs. Upgrade or downgrade anytime</p>
        </div>
        <div className="pricing-container">
          <div className="pricing-card">
            <h3>Starter</h3>
            <p className="price-description">Perfect for getting started</p>
            <div className="price">$0<span>/Month</span></div>
            <ul className="features-list">
              <li><span className="check">✓</span> Access to 10 free tools</li>
              <li><span className="check">✓</span> Basic templates</li>
              <li><span className="check">✓</span> Community support</li>
              <li><span className="check">✓</span> 1 project per month</li>
            </ul>
            <button className="btn-primary">Get Started Free</button>
          </div>

          <div className="pricing-card featured">
            <div className="featured-badge">Most Popular</div>
            <h3>Pro</h3>
            <p className="price-description">Best for professionals</p>
            <div className="price">$29<span>/Month</span></div>
            <ul className="features-list">
              <li><span className="check">✓</span> Access to all premium tools</li>
              <li><span className="check">✓</span> Unlimited templates</li>
              <li><span className="check">✓</span> Priority support</li>
              <li><span className="check">✓</span> Unlimited projects</li>
              <li><span className="check">✓</span> Cloud sync</li>
              <li><span className="check">✓</span> Advanced analytics</li>
            </ul>
            <button className="btn-featured">Start Pro Trial</button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price-description">For teams and businesses</p>
            <div className="price">$99<span>/Month</span></div>
            <ul className="features-list">
              <li><span className="check">✓</span> Everything in Pro</li>
              <li><span className="check">✓</span> Team collaboration</li>
              <li><span className="check">✓</span> Custom integrations</li>
              <li><span className="check">✓</span> Dedicated support</li>
              <li><span className="check">✓</span> SLA guarantee</li>
              <li><span className="check">✓</span> Custom branding</li>
            </ul>
            <button className="btn-primary">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready To Transform Your Workflow?</h2>
        <p>Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
        <div className="cta-buttons">
          <button className="btn-primary">Explore Products</button>
          <button className="btn-outline">View Pricing</button>
        </div>
        <p className="cta-footer">30-day free trial • No credit card required • Cancel anytime</p>
      </section>

      



    </>
  )
}

export default App
