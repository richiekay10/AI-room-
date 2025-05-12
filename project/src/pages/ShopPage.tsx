import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { toast } from '../components/ui/Toast';

const products = [
  {
    id: 1,
    name: 'Modern Accent Chair',
    price: 299.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg',
    category: 'Furniture'
  },
  {
    id: 2,
    name: 'Minimalist Table Lamp',
    price: 89.99,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
    category: 'Lighting'
  },
  {
    id: 3,
    name: 'Decorative Vase Set',
    price: 49.99,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/2789545/pexels-photo-2789545.jpeg',
    category: 'Decor'
  },
  // Add more products as needed
];

const categories = [
  'All',
  'Furniture',
  'Lighting',
  'Decor',
  'Textiles',
  'Art'
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: typeof products[0]) => {
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
      variant: 'success'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Shop</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Discover our curated collection of luxury furniture and decor items to complement your newly designed space.
        </p>
      </div>

      <div className="flex overflow-x-auto gap-2 mb-8 pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-rose-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-100 dark:hover:bg-rose-900/30'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {product.rating}
                  </span>
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="w-full py-2 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ShopPage;