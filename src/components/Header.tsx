import React, { useState } from 'react';
import { PageTab } from '../types';
import { LOGO_IMG } from '../data/products';

interface HeaderProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  wishlistCount,
  onOpenWishlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string; icon: string }[] = [
    { id: 'home', label: 'Trang chủ', icon: 'home' },
    { id: 'girlfriend', label: 'Quà Người Yêu / Bạn Gái', icon: 'favorite' },
    { id: 'colleague', label: 'Quà Đồng Nghiệp & Sếp', icon: 'business_center' },
    { id: 'parents', label: 'Quà Báo Hiếu Bố Mẹ', icon: 'family_restroom' },
  ];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#fff8f5]/90 backdrop-blur-xl border-b border-[#eee7e3] shadow-xs">
        <div className="h-20 max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left cursor-pointer group transition-transform active:scale-98"
          >
            <img
              src={LOGO_IMG}
              alt="Trợ Lý Tìm Quà Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-[19px] leading-tight text-[#b21e36] tracking-tight group-hover:text-[#d53a4c] transition-colors">
                Trợ Lý Tìm Quà
              </span>
              <span className="text-[10px] text-[#5a4041] font-semibold tracking-wider uppercase hidden sm:inline">
                Gợi ý chuẩn gu • TikTok & Shopee
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#ffdada] text-[#b21e36] shadow-xs font-bold'
                      : 'text-[#5a4041] hover:text-[#1e1b19] hover:bg-[#eee7e3]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('home')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#b21e36] text-white text-xs md:text-sm font-bold shadow-xs hover:bg-[#d53a4c] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px] mr-1.5">auto_awesome</span>
              Khám phá quà ngay
            </button>

            {/* Wishlist Button with Counter */}
            <button
              onClick={onOpenWishlist}
              title="Món quà đã lưu"
              className="relative w-10 h-10 rounded-full bg-[#f4ece8] flex items-center justify-center text-[#5a4041] hover:bg-[#eee7e3] hover:text-[#b21e36] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">favorite</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-[#b21e36] text-white text-[11px] font-bold flex items-center justify-center shadow-xs animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[#f4ece8] flex items-center justify-center text-[#1e1b19] hover:bg-[#eee7e3] transition-colors cursor-pointer"
              aria-label="Mở menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-0 left-0 bg-[#fff8f5] border-b border-[#eee7e3] p-5 shadow-2xl space-y-3">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#ffdada] text-[#b21e36] font-bold'
                        : 'text-[#1e1b19] hover:bg-[#f4ece8]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#b21e36]">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#eee7e3] flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenWishlist();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#f4ece8] text-sm font-semibold text-[#1e1b19]"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b21e36] text-[20px]">
                    favorite
                  </span>
                  <span>Món quà bạn đã thích</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#b21e36] text-white text-xs font-bold">
                  {wishlistCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
