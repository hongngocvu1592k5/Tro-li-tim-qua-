import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenDetail: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onOpenDetail,
}) => {
  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  return (
    <article className="group bg-[#ffffff] rounded-3xl p-4 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#eee7e3]">
      <div className="flex flex-col">
        {/* Image Frame with badges */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#f4ece8] mb-3">
          <img
            src={product.image}
            alt={product.imageAlt || product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to SVG placeholder if image ever fails
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&auto=format&fit=crop&q=60';
            }}
          />

          {/* Top Left Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
            {product.badge && (
              <span className="px-2.5 py-1 rounded-full bg-[#b21e36] text-white text-[11px] font-bold shadow-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">local_fire_department</span>
                {product.badge}
              </span>
            )}
            {product.highlightTag && (
              <span className="px-2 py-0.5 rounded-full bg-[#fff8f5]/90 text-[#b21e36] text-[10px] font-bold shadow-xs">
                {product.highlightTag}
              </span>
            )}
          </div>

          {/* Top Right Heart Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            aria-label={isWishlisted ? 'Xóa khỏi yêu thích' : 'Lưu vào yêu thích'}
            className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center shadow-xs transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer ${
              isWishlisted
                ? 'bg-[#b21e36] text-white'
                : 'bg-white/80 text-[#5a4041] hover:text-[#b21e36]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>

          {/* Bottom Right Discount Tag */}
          {product.discountPercent > 0 && (
            <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#ff5722] text-white text-[11px] font-bold shadow">
              -{product.discountPercent}%
            </div>
          )}
        </div>

        {/* Rating & Sold count */}
        <div className="flex items-center justify-between text-xs text-[#5a4041] mb-1.5">
          <div className="flex items-center gap-1">
            <span
              className="material-symbols-outlined text-amber-500 text-[15px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-bold text-[#1e1b19]">{product.rating.toFixed(2)}</span>
            <span className="text-[#8e7070]">({product.soldCount})</span>
          </div>
          <button
            onClick={() => onOpenDetail(product)}
            className="text-[11px] font-semibold text-[#b21e36] hover:underline cursor-pointer flex items-center"
          >
            Chi tiết
            <span className="material-symbols-outlined text-[13px] ml-0.5">arrow_forward</span>
          </button>
        </div>

        {/* Title */}
        <h3
          onClick={() => onOpenDetail(product)}
          className="font-bold text-[15px] leading-snug text-[#1e1b19] line-clamp-2 mb-2 group-hover:text-[#b21e36] transition-colors cursor-pointer"
        >
          {product.title}
        </h3>

        {/* Price Row */}
        <div className="flex items-baseline gap-2 mb-2.5">
          <span className="text-[19px] font-extrabold text-[#b21e36]">
            {formatVND(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-[#8e7070] line-through">
              {formatVND(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Psychological Touchpoint / Lý do nên tặng */}
        <div className="bg-[#faf2ee] rounded-2xl p-2.5 mb-3 border border-[#eee7e3]/60">
          <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#b21e36] mb-1">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            Điểm chạm tâm lý:
          </div>
          <p className="text-xs text-[#5a4041] italic leading-relaxed">
            "{product.psychologicalInsight}"
          </p>
        </div>
      </div>

      {/* Dual Affiliate CTAs */}
      <div className="flex flex-col gap-2 pt-1 mt-auto">
        <a
          href={product.shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-full bg-[#ff5722] hover:bg-[#b02f00] text-white text-xs font-bold flex items-center justify-between shadow-xs transition-transform active:scale-98"
        >
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
            <span>{product.shopeeLabel || 'Xem giá trên Shopee'}</span>
          </span>
          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
        </a>

        <a
          href={product.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 rounded-full bg-[#f4ece8] hover:bg-[#eee7e3] text-[#1e1b19] text-xs font-bold flex items-center justify-between transition-colors active:scale-98"
        >
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#ba0035]">bolt</span>
            <span>{product.tiktokLabel || 'Mua trên TikTok Shop'}</span>
          </span>
          <span className="material-symbols-outlined text-[14px] text-[#8e7070]">chevron_right</span>
        </a>
      </div>
    </article>
  );
};
