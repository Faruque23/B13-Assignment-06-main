# 🚀 DigiTools - Digital Product Marketplace

A modern, fully-featured e-commerce platform for selling digital tools and services. Built with React, Tailwind CSS, and DaisyUI for a seamless shopping experience.

## ✨ Project Overview

DigiTools is a professional digital marketplace where customers can browse, purchase, and manage premium digital products like design templates, writing tools, automation software, and more. The platform features a complete shopping cart system, product filtering, real-time notifications, and responsive design.

## 🎯 Key Features

### 1. **Interactive Product Catalog**
   - Display 10+ premium digital products in a responsive grid layout
   - Dynamic product cards with icons, descriptions, pricing, and features
   - Multiple badge types (Best Seller, Popular, New) for product categorization
   - Hover effects and smooth animations for better UX

### 2. **Smart Shopping Cart System**
   - Add/remove products from cart with instant feedback
   - Real-time cart counter in navbar
   - View cart summary with total price calculation
   - Empty cart messaging with clear call-to-action
   - Proceed to checkout functionality that clears the cart

### 3. **Real-time Notifications**
   - Toast notifications using React-Toastify
   - Alerts for: add to cart, remove from cart, proceed to checkout
   - Non-intrusive notifications (positioned bottom-right)

## 🛠️ Technologies Used

- **React.js** - UI library for building interactive components
- **Tailwind CSS + DaisyUI** - Utility-first CSS framework with component library
- **JavaScript (ES6+)** - Modern JavaScript for functionality
- **React-Toastify** - Toast notification system for user feedback
- **JSON** - Product data storage and management
- **Vite** - Fast build tool and development server

## 📦 Product Data Structure

Each product includes:
```json
{
  "id": 1,
  "name": "AI Writing Pro",
  "description": "Generate high-quality content with advanced AI",
  "price": 29,
  "period": "monthly", // one-time | monthly | yearly
  "tag": "Best Seller",
  "tagType": "best-seller", // best-seller | popular | new
  "features": ["Unlimited generations", "50+ writing templates"],
  "icon": "✍️"
}
```

## 🎨 Component Architecture

### ProductCard Component
Displays individual product information with add-to-cart functionality.

### CartItem Component
Shows cart items with remove button functionality.

### App.jsx
Main component managing:
- Cart state and operations
- Tab toggling between Products and Cart views
- Toast notifications
- Product filtering and display

## 📱 Responsive Design

Fully responsive across all devices:
- **Desktop**: 3-column product grid
- **Tablet** (768px): 2-column product grid
- **Mobile** (480px): Single column layout
- Touch-friendly buttons and interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd B13-Assignment-06-Final

# Install dependencies
npm install

# Install additional packages
npm install react-toastify prop-types

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 📋 Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx      # Product display component
│   └── CartItem.jsx         # Cart item component
├── data/
│   └── products.json        # Product data
├── App.jsx                  # Main component
├── App.css                  # Styling
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## 🎯 Usage Guide

### Adding Products to Cart
1. Click "Buy Now" button on any product card
2. See toast notification confirming addition
3. Cart counter in navbar updates automatically

### Viewing Cart
1. Click "Cart (n)" toggle button
2. View all added products with pricing
3. Remove individual items or proceed to checkout

### Checkout
1. Click "Proceed to Checkout" button
2. Confirm action in toast notification
3. Cart clears and returns to product view

## ✚ Enhanced Features Implemented

✅ **Cart Counter Badge** - Shows number of items in cart  
✅ **Product Toggle** - Switch between Products and Cart views  
✅ **Toast Notifications** - Real-time feedback for all actions  
✅ **Total Price Calculation** - Automatic sum of cart items  
✅ **Product Removal** - Remove individual items from cart  
✅ **Empty Cart State** - Helpful message when cart is empty  
✅ **Product Features List** - Display key benefits of each product  
✅ **Product Tags** - Visual indicators for popular/new items  

## 📸 Screenshots

**Product Grid View:**
- Responsive 3-column layout with product cards
- Badge indicators (Best Seller, Popular, New)
- Quick access to product features and pricing

**Cart View:**
- Full product details with prices
- Remove button for each item
- Total calculation and checkout button

## 🔄 Git Commits

The project includes meaningful git commits documenting the development process:
1. feat: Add cart functionality with React Toastify and product JSON data
2. docs: Add comprehensive README with features and usage
3. style: Enhance responsive design for mobile and tablet
4. refactor: Organize component structure
... and more

## 📝 License

This project is for educational purposes.

## 👨‍💻 Author

Built as part of Web Development Assignment B13-Assignment-06-Final

---

**🌟 Enjoy shopping with DigiTools!**
