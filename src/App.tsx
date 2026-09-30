import React, { useState, useEffect } from 'react';
import { PageTab, Product } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { GirlfriendPage } from './pages/GirlfriendPage';
import { ColleaguePage } from './pages/ColleaguePage';
import { ParentsPage } from './pages/ParentsPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('gift_assistant_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [policyType, setPolicyType] = useState<'terms' | 'privacy' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gift_assistant_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [wishlist]);

  // Toast auto-clear
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const wishlistIds = new Set(wishlist.map((p) => p.id));

  const handleToggleWishlist = (product: Product) => {
    if (wishlistIds.has(product.id)) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Đã bỏ "${product.title.slice(0, 28)}..." khỏi danh sách đã thích`);
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`💖 Đã lưu "${product.title.slice(0, 28)}..." vào danh sách đã thích!`);
    }
  };

  const handleRemoveFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    showToast('Đã xóa món quà khỏi danh sách đã thích');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleTabChange = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f5] text-[#1e1b19] font-sans antialiased">
      {/* Universal Fixed Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleTabChange}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {currentTab === 'home' && (
          <HomePage
            products={PRODUCTS}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onOpenDetail={(p) => setSelectedProduct(p)}
            onNavigateTab={handleTabChange}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'girlfriend' && (
          <GirlfriendPage
            products={PRODUCTS}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onOpenDetail={(p) => setSelectedProduct(p)}
            onNavigateTab={handleTabChange}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'colleague' && (
          <ColleaguePage
            products={PRODUCTS}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onOpenDetail={(p) => setSelectedProduct(p)}
            onNavigateTab={handleTabChange}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'parents' && (
          <ParentsPage
            products={PRODUCTS}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onOpenDetail={(p) => setSelectedProduct(p)}
            onNavigateTab={handleTabChange}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onSelectTab={handleTabChange}
        onOpenPolicy={(type) => setPolicyType(type)}
        onShowToast={showToast}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlistIds.has(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveItem={handleRemoveFromWishlist}
        onOpenDetail={(p) => setSelectedProduct(p)}
      />

      {/* Terms & Privacy Policy Modal */}
      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-[#1e1b19] text-white text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 border border-white/10 animate-fade-in">
          <span className="material-symbols-outlined text-[18px] text-[#ff5722]">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
