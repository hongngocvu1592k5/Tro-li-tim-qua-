import React from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onCopyGiftNote?: (note: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onCopyGiftNote,
}) => {
  if (!isOpen || !product) return null;

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#ffffff] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-[#eee7e3]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f4ece8] text-[#1e1b19] flex items-center justify-center hover:bg-[#eee7e3] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Product Image */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f4ece8]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {product.discountPercent > 0 && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#ff5722] text-white text-xs font-bold shadow-md">
                GIẢM {product.discountPercent}%
              </span>
            )}
          </div>

          {/* Details Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-[#5a4041] mb-2">
              <span className="flex items-center text-amber-500 font-bold">
                <span
                  className="material-symbols-outlined text-[16px] mr-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                {product.rating}
              </span>
              <span>•</span>
              <span>{product.soldCount}</span>
              <span>•</span>
              <span className="text-[#b21e36] font-semibold">Chính hãng Mall</span>
            </div>

            <h2 className="text-lg md:text-xl font-extrabold text-[#1e1b19] leading-snug mb-3">
              {product.title}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-2.5 mb-4">
              <span className="text-2xl font-black text-[#b21e36]">
                {formatVND(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-[#8e7070] line-through">
                  {formatVND(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Psychological Touchpoint */}
            <div className="bg-[#faf2ee] rounded-2xl p-3.5 mb-4 border border-[#ffdada]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b21e36] mb-1">
                <span className="material-symbols-outlined text-[16px]">tips_and_updates</span>
                Phân tích cảm xúc người nhận
              </div>
              <p className="text-xs sm:text-sm text-[#5a4041] italic leading-relaxed">
                "{product.psychologicalInsight}"
              </p>
            </div>

            {/* Features if any */}
            {product.features && product.features.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold text-[#1e1b19] uppercase tracking-wider mb-2">
                  Điểm nổi bật:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#5a4041]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#b21e36]">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action buttons */}
            <div className="space-y-2 pt-2 border-t border-[#eee7e3]">
              <a
                href={product.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full bg-[#ff5722] hover:bg-[#b02f00] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>Xem trên Shopee (Freeship Xtra)</span>
              </a>

              <a
                href={product.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-[#1e1b19] hover:bg-black text-white text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#00f2fe]">bolt</span>
                <span>Săn Flash Sale trên TikTok Shop</span>
              </a>

              <button
                type="button"
                onClick={() => onToggleWishlist(product)}
                className={`w-full py-2.5 px-4 rounded-full border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isWishlisted
                    ? 'border-[#b21e36] bg-[#ffdada] text-[#b21e36]'
                    : 'border-[#eee7e3] bg-[#f4ece8] text-[#1e1b19] hover:bg-[#eee7e3]'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
                <span>{isWishlisted ? 'Đã lưu vào danh sách yêu thích' : 'Lưu món này vào wishlist'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
