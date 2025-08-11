import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Star, Heart, Search, Instagram, Facebook, Twitter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    {
      id: 1,
      name: "Solezza Aurora Sneakers",
      price: 12500,
      originalPrice: 15000,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Sneakers",
      rating: 4.8,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Solezza Prism Running",
      price: 18900,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Running",
      rating: 4.9,
      isNew: true
    },
    {
      id: 3,
      name: "Solezza Elite Casual",
      price: 9800,
      originalPrice: 12000,
      image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Casual",
      rating: 4.7,
      isSale: true
    },
    {
      id: 4,
      name: "Solezza Neon Boost",
      price: 22000,
      image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Sports",
      rating: 4.9,
      isNew: true
    },
    {
      id: 5,
      name: "Solezza Classic White",
      price: 8500,
      image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Casual",
      rating: 4.6
    },
    {
      id: 6,
      name: "Solezza Thunder High",
      price: 16800,
      originalPrice: 20000,
      image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "High-top",
      rating: 4.8,
      isSale: true
    }
  ];

  const categories = ['All', 'Sneakers', 'Running', 'Casual', 'Sports', 'High-top'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                SOLEZZA
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium">Products</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-500 transition-colors duration-200 font-medium">Contact</a>
            </nav>

            {/* Cart and Menu */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#products" className="block py-2 text-gray-700 hover:text-pink-500 transition-colors">Products</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-green-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-down">
              Step Into Style
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
              Discover the future of footwear with Solezza's vibrant collection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest collection of premium shoes designed for comfort, style, and performance
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      SALE
                    </span>
                  )}
                  <button className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-6 w-6 text-white hover:text-red-500 transition-colors duration-200" />
                  </button>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={addToCart}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">About Solezza</h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Born from a passion for innovation and style, Solezza represents the perfect fusion of comfort, 
                performance, and vibrant design. We believe every step should be a statement.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Our commitment to quality craftsmanship and cutting-edge technology ensures that every pair 
                of Solezza shoes delivers an unmatched experience for the modern lifestyle.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-orange-400 mb-2">50K+</h4>
                  <p className="text-gray-300">Happy Customers</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-pink-400 mb-2">200+</h4>
                  <p className="text-gray-300">Shoe Models</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Solezza Shoes"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Stay in Style</h3>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to get updates on new releases, exclusive offers, and style tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">📍</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-600">123 Fashion Street<br />Lahore, Punjab, Pakistan</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">📞</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600">+92 300 1234567<br />support@solezza.pk</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⏰</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Hours</h4>
              <p className="text-gray-600">Mon - Sat: 9AM - 9PM<br />Sunday: 11AM - 7PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                SOLEZZA
              </h4>
              <p className="text-gray-400 mb-4">
                Step into style with Pakistan's most vibrant shoe collection.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-200" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-300 cursor-pointer transition-colors duration-200" />
              </div>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">Products</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Categories</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Sneakers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Running Shoes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Casual Wear</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Sports Collection</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Customer Service</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Size Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Solezza. All rights reserved. | Prices in Pakistani Rupees (PKR)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;