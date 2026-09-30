import React, { useState } from 'react';
import { PageTab } from '../types';
import { LOGO_IMG } from '../data/products';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenPolicy: (type: 'terms' | 'privacy') => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenPolicy,
  onShowToast,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Vui lòng nhập email hợp lệ để nhận cẩm nang tặng quà!');
      return;
    }
    setSubscribed(true);
    onShowToast('🎉 Đăng ký thành công! Bạn sẽ nhận được các ý tưởng quà tặng tinh tế trước mỗi dịp lễ.');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#f4ece8] mt-16 pt-16 pb-8 border-t border-[#eee7e3]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src={LOGO_IMG}
                alt="Trợ Lý Tìm Quà Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-extrabold text-lg text-[#b21e36]">
                Trợ Lý Tìm Quà
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5a4041] leading-relaxed">
              Nền tảng trợ lý thông minh hỗ trợ chọn lọc quà tặng chuẩn gu, tối ưu ngân sách cho mọi dịp đặc biệt với liên kết uy tín trên Shopee &amp; TikTok Shop.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div
                title="Chia sẻ mạng xã hội"
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                    onShowToast('Đã copy đường dẫn trang web vào clipboard!');
                  }
                }}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#5a4041] hover:bg-[#b21e36] hover:text-white cursor-pointer transition-colors shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </div>
              <div
                title="Thảo luận cộng đồng"
                onClick={() => onShowToast('Cộng đồng Review Quà Tinh Tế với 45,000+ thành viên!')}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#5a4041] hover:bg-[#b21e36] hover:text-white cursor-pointer transition-colors shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </div>
              <div
                title="Kênh video TikTok / Youtube"
                onClick={() => window.open('https://www.tiktok.com', '_blank')}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#5a4041] hover:bg-[#b21e36] hover:text-white cursor-pointer transition-colors shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px]">smart_display</span>
              </div>
            </div>
          </div>

          {/* Affiliate Transparency (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="text-sm font-bold text-[#1e1b19] mb-1">
              Minh bạch tiếp thị
            </span>
            <p className="text-xs text-[#5a4041] leading-relaxed">
              Chúng tôi tham gia mạng lưới tiếp thị liên kết chính thức với Shopee &amp; TikTok Shop Việt Nam. Khi bạn click mua qua liên kết, chúng tôi có thể nhận hoa hồng nhỏ mà bạn không phát sinh thêm bất kỳ chi phí nào.
            </p>
            <p className="text-xs text-[#5a4041] leading-relaxed mt-1">
              Cam kết 100% tuyển chọn từ gian hàng chính hãng (Shopee Mall, TikTok Shop Verified) cùng đánh giá xác thực.
            </p>
          </div>

          {/* Category Topics (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            <span className="text-sm font-bold text-[#1e1b19] mb-1">
              Chuyên đề quà tặng
            </span>
            <nav className="flex flex-col gap-1.5 text-xs text-[#5a4041]">
              <button
                onClick={() => onSelectTab('home')}
                className="text-left hover:text-[#b21e36] hover:underline transition-colors cursor-pointer"
              >
                Trang chủ (Trắc nghiệm)
              </button>
              <button
                onClick={() => onSelectTab('girlfriend')}
                className="text-left hover:text-[#b21e36] hover:underline transition-colors cursor-pointer"
              >
                Quà Người Yêu / Bạn Gái
              </button>
              <button
                onClick={() => onSelectTab('colleague')}
                className="text-left hover:text-[#b21e36] hover:underline transition-colors cursor-pointer"
              >
                Quà Đồng Nghiệp &amp; Sếp
              </button>
              <button
                onClick={() => onSelectTab('parents')}
                className="text-left hover:text-[#b21e36] hover:underline transition-colors cursor-pointer"
              >
                Quà Báo Hiếu Bố Mẹ
              </button>
            </nav>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="text-sm font-bold text-[#1e1b19] mb-1">
              Nhận mẹo tặng quà
            </span>
            <p className="text-xs text-[#5a4041]">
              Đăng ký nhận gợi ý tinh tế trước mỗi dịp lễ 8/3, Valentine, sinh nhật hay Giáng sinh.
            </p>
            {subscribed ? (
              <div className="p-2.5 rounded-2xl bg-[#ffdada] text-[#b21e36] text-xs font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Đã đăng ký nhận bản tin thành công!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center gap-1 bg-white rounded-full p-1 border border-[#eee7e3] shadow-xs"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-[#1e1b19] focus:outline-none placeholder:text-[#8e7070]"
                  required
                />
                <button
                  type="submit"
                  className="shrink-0 px-4 py-1.5 rounded-full bg-[#b21e36] text-white text-xs font-bold hover:bg-[#d53a4c] transition-colors cursor-pointer"
                >
                  Đăng ký
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#eee7e3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5a4041]">
          <p>© 2026 Trợ Lý Tìm Quà. Toàn bộ bản quyền được bảo lưu.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#1e1b19] hover:underline cursor-pointer"
            >
              Điều khoản sử dụng
            </button>
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#1e1b19] hover:underline cursor-pointer"
            >
              Chính sách bảo mật
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
