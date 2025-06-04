import React from 'react';
import { X, ShoppingCart, Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Cart drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Cart header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              तुमची खरेदी
            </h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Cart content */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingCart className="h-16 w-16 mb-4" />
                <p className="text-lg">तुमची खरेदीची बॅग रिकामी आहे</p>
                <button 
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  खरेदी सुरू ठेवा
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b border-gray-700 pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-gray-400 text-sm">₹{item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-1 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-2 text-white">{item.quantity}</span>
                        <button 
                          onClick={() => increaseQuantity(item.id)}
                          className="p-1 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 rounded-full hover:bg-gray-800 text-red-400 hover:text-red-300 transition-colors mt-2"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="text-right">
                  <button 
                    onClick={clearCart}
                    className="text-sm text-red-400 hover:text-red-300 transition-colors"
                  >
                    खरेदी बॅग रिकामी करा
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Cart footer */}
          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-700">
              <div className="flex justify-between mb-4">
                <span className="text-gray-300">एकूण:</span>
                <span className="text-white font-bold">₹{totalPrice.toFixed(2)}</span>
              </div>
              <button 
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                खरेदी पूर्ण करा
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;