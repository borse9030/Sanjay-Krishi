import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar toggleCart={toggleCart} />
        <main>
          <Hero />
          <FeaturedProducts />
          <section className="px-4 py-16 max-w-7xl mx-auto" id="products">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
            <ProductGrid />
          </section>
          <Newsletter />
        </main>
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;