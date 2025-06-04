import { Product } from '../types';


export const allProducts: Product[] = [
  {
    id: '1',
    name: 'सेंद्रिय बियाणे संच',
    price: 19.99,
    category: 'बियाणे',
    image: '/img/rSSl4s4S.jpeg',
    onSale: false
  },
  {
    id: '2',
    name: 'प्रीमियम बाग फावडे',
    price: 24.99,
    category: 'अवजारे',
    image: '/img/AGS-S-3013_1.webp',
    onSale: false
  },
  {
    id: '3',
    name: 'ठिबक सिंचन संच',
    price: 49.99,
    originalPrice: 59.99,
    category: 'सिंचन',
    image: ' /img/rasi-rch-659.jpg',
    onSale: true
  },
  {
    id: '4',
    name: 'सेंद्रिय खत',
    price: 15.99,
    category: 'खते',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: false
  },
  {
    id: '5',
    name: 'बागकाम हातमोजे',
    price: 12.99,
    category: 'अवजारे',
    image: 'https://images.pexels.com/photos/7728384/pexels-photo-7728384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: false
  },
  {
    id: '6',
    name: 'कापणी टोपली',
    price: 29.99,
    originalPrice: 35.99,
    category: 'अवजारे',
    image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: true
  },
  {
    id: '7',
    name: 'टोमॅटो बियाणे',
    price: 7.99,
    category: 'बियाणे',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: false
  },
  {
    id: '8',
    name: 'सेंद्रिय कीटकनाशक',
    price: 18.99,
    category: 'कीटकनाशक',
    image: 'https://images.pexels.com/photos/3693572/pexels-photo-3693572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: false
  },
  {
    id: '9',
    name: 'एलईडी ग्रो लाइट',
    price: 79.99,
    originalPrice: 99.99,
    category: 'उपकरणे',
    image: 'https://images.pexels.com/photos/6157041/pexels-photo-6157041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: true
  },
  {
    id: '10',
    name: 'माती पीएच टेस्टर',
    price: 14.99,
    category: 'उपकरणे',
    image: 'https://images.pexels.com/photos/7656721/pexels-photo-7656721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: false
  },
  {
    id: '11',
    name: 'कंपोस्ट बिन',
    price: 39.99,
    category: 'उपकरणे',
    image: 'https://images.pexels.com/photos/4505168/pexels-photo-4505168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: false
  },
  {
    id: '12',
    name: 'छाटणी कात्री',
    price: 22.99,
    originalPrice: 27.99,
    category: 'अवजारे',
    image: 'https://images.pexels.com/photos/6102092/pexels-photo-6102092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    onSale: true
  }
];

export const featuredProducts: Product[] = allProducts.filter(product => product.onSale);