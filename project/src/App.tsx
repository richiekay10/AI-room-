import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DesignPage from './pages/DesignPage';
import GalleryPage from './pages/GalleryPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import { Toaster, ToastProvider } from './components/ui/Toast';

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/design" element={<DesignPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/cart" element={<CartPage />} />
                <Route path="/blog" element={<BlogPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;