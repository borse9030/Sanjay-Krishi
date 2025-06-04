import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {product.onSale && (
          <div className="absolute top-0 right-0 bg-amber-500 text-gray-900 font-semibold px-3 py-1 m-2 rounded-md">
            Sale
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-green-400">{product.category}</span>
        <h3 className="text-xl font-bold mt-1 text-white">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-white">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="p-2 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;