import React from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredProducts } from '../data/products';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-800" id="featured">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">विशेष उत्पादने</h2>
          <a 
            href="#products" 
            className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
          >
            सर्व पहा
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;