import React from 'react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveItem: (id: string) => void;
  onOpenDetail: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveItem,
  onOpenDetail,
}) => {
  if (!isOpen) return null;

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  const totalPrice = wishlist.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#fff8f5] h-full shadow-2xl z-10 flex flex-col justify-between border-l border-[#eee7e3]">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#eee7e3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#b21e36] text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <h2 className="font-bold text-lg text-[#1e1b19]">
              Quà Bạn Đã Thích ({wishlist.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f4ece8] hover:bg-[#eee7e3] flex items-center justify-center text-[#1e1b19] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-[#f4ece8] flex items-center justify-center text-[#8e7070] mb-3">
                <span className="material-symbols-outlined text-[32px]">favorite_border</span>
              </div>
              <h3 className="font-bold text-[#1e1b19] text-base mb-1">
                Chưa có món quà nào được lưu
              </h3>
              <p className="text-xs text-[#5a4041] max-w-xs mb-4">
                Nhấn vào biểu tượng trái tim trên bất kỳ sản phẩm nào để đánh dấu xem lại và so sánh giá dễ dàng.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#b21e36] text-white text-xs font-bold shadow-xs hover:bg-[#d53a4c] cursor-pointer"
              >
                Khám phá quà ngay
              </button>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 rounded-2xl border border-[#eee7e3] flex gap-3 items-center group relative shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-xl object-cover bg-[#f4ece8] shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h4
                    onClick={() => {
                      onOpenDetail(item);
                      onClose();
                    }}
                    className="font-bold text-xs text-[#1e1b19] truncate hover:text-[#b21e36] cursor-pointer"
                  >
                    {item.title}
                  </h4>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-bold text-sm text-[#b21e36]">
                      {formatVND(item.price)}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-[11px] text-[#8e7070] line-through">
                        {formatVND(item.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-1.5">
                    <a
                      href={item.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 rounded-full bg-[#ff5722] text-white text-[10px] font-bold flex items-center gap-1"
                    >
                      <span>Shopee</span>
                      <span className="material-symbols-outlined text-[10px]">open_in_new</span>
                    </a>
                    <a
                      href={item.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 rounded-full bg-[#1e1b19] text-white text-[10px] font-bold flex items-center gap-1"
                    >
                      <span>TikTok</span>
                      <span className="material-symbols-outlined text-[10px]">open_in_new</span>
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  title="Xóa món quà này"
                  className="p-1 rounded-full text-[#8e7070] hover:text-[#ba1a1a] hover:bg-[#faf2ee] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with summary */}
        {wishlist.length > 0 && (
          <div className="p-4 border-t border-[#eee7e3] bg-white space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#5a4041]">Tổng giá trị tham khảo:</span>
              <span className="font-extrabold text-base text-[#b21e36]">
                {formatVND(totalPrice)}
              </span>
            </div>
            <p className="text-[11px] text-[#8e7070] leading-snug">
              💡 Cam kết 100% gian hàng Shopee Mall và TikTok Shop Verified chính hãng có hoá đơn & bảo hành.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
