import React, { useState } from 'react';
import { Product, PageTab } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CARD_WISHES } from '../data/cards';
import { LOGO_BADGE } from '../data/products';

interface GirlfriendPageProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (p: Product) => void;
  onOpenDetail: (p: Product) => void;
  onNavigateTab: (tab: PageTab) => void;
  onShowToast: (msg: string) => void;
}

export const GirlfriendPage: React.FC<GirlfriendPageProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenDetail,
  onNavigateTab,
  onShowToast,
}) => {
  const [activeArchetype, setActiveArchetype] = useState<string>('all');
  const [activeScenario, setActiveScenario] = useState<string | null>(null);

  // Filter girlfriend products based on archetype
  const girlfriendProducts = products.filter((p) => {
    if (p.category !== 'girlfriend') return false;
    if (activeArchetype === 'langman') {
      return p.vibes.includes('Lãng mạn & Tinh tế');
    }
    if (activeArchetype === 'sangchanh') {
      return p.vibes.includes('Yêu công nghệ & Độc lạ') || p.id === 'matte-lipstick-set';
    }
    if (activeArchetype === 'thucte') {
      return p.vibes.includes('Thực tế & Tiện ích') || p.vibes.includes('Chill & Chữa lành');
    }
    return true;
  });

  const handleCopyCard = (cardId: string, text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      onShowToast('💌 Đã sao chép lời chúc vào clipboard! Hãy nắn nót viết tay vào thiệp nhé.');
    }
  };

  const handleFilterScenario = (scenario: string) => {
    setActiveScenario(scenario);
    if (scenario === 'apology') {
      onShowToast('Đã chọn: Quà xin lỗi làm lành ngọt ngào');
    } else if (scenario === 'birthday') {
      onShowToast('Đã chọn: Quà sinh nhật bạn gái');
    } else if (scenario === 'anniversary') {
      onShowToast('Đã chọn: Kỷ niệm ngày yêu');
    } else {
      onShowToast('Đã chọn: Quà bất ngờ ngẫu hứng');
    }

    // Scroll to relevant card
    const elem = document.getElementById('card-apology-girlfriend');
    if (elem && scenario === 'apology') {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full">
      {/* Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-r from-[#ffdada] via-[#ffdbd1] to-[#ffdada] opacity-40 blur-3xl pointer-events-none -z-10 rounded-full" />

        {/* 1. HERO SECTION: CHUYÊN ĐỀ CỨU CÁNH BẠN TRAI */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ffdada]/60 text-[#b21e36] shadow-xs mb-4 transition-all hover:bg-[#ffdada]">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide">
                Bảo hiểm chọn quà cho phái nam • 99.8% bạn gái thích mê
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e1b19] tracking-tight mb-3">
              Không Lo "Ăn Mắng" — Chọn Quà Tặng Bạn Gái{' '}
              <span className="text-[#b21e36] italic">Trúng Tim</span> Ngay Lần Đầu
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-[#5a4041] max-w-2xl mb-6 leading-relaxed">
              Tổng hợp giải pháp quà tặng chạm đúng tần số cảm xúc của từng nàng. Chọn theo archetype cá tính, ngân sách hợp lý, cam kết link mua uy tín trực tiếp trên Shopee Mall &amp; TikTok Shop.
            </p>

            {/* Archetype Persona Tabs */}
            <div className="w-full bg-[#faf2ee] p-1.5 sm:p-2 rounded-2xl shadow-xs mb-4 border border-[#eee7e3]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
                {[
                  { id: 'all', label: 'Tất cả gu nàng', icon: 'auto_awesome' },
                  { id: 'langman', label: 'Nàng Thơ Lãng Mạn', icon: 'favorite' },
                  { id: 'sangchanh', label: 'Tiểu Thư Gen Z', icon: 'diamond' },
                  { id: 'thucte', label: 'Thực Tế & Chill', icon: 'spa' },
                ].map((tab) => {
                  const isActive = activeArchetype === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveArchetype(tab.id)}
                      className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#b21e36] text-white shadow-xs'
                          : 'text-[#5a4041] hover:text-[#1e1b19] hover:bg-[#eee7e3]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Metric Highlight Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[#5a4041] pt-2 text-xs md:text-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ff5722] text-[18px]">
                  check_circle
                </span>
                <span>
                  <strong className="text-[#1e1b19] font-bold">100%</strong> Mall chính hãng
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ff5722] text-[18px]">lock</span>
                <span>
                  <strong className="text-[#1e1b19] font-bold">Bảo mật</strong> đóng gói che tên
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ff5722] text-[18px]">
                  local_shipping
                </span>
                <span>
                  <strong className="text-[#1e1b19] font-bold">Freeship Xtra</strong> hoả tốc
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BỘ LỌC TÌNH HUỐNG: BÍ KÍP GỠ RỐI CẤP TỐC */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 mb-12">
          <div className="bg-white p-5 md:p-6 rounded-3xl shadow-xs border border-[#eee7e3]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#eee7e3]/60">
              <div>
                <div className="flex items-center gap-1.5 text-[#b21e36] mb-1">
                  <span className="material-symbols-outlined text-[18px]">psychology_alt</span>
                  <span className="text-xs uppercase tracking-wider font-extrabold">
                    Cấp cứu khẩn cấp
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-extrabold text-[#1e1b19]">
                  Tình huống tặng quà của bạn là gì?
                </h2>
              </div>
              <div className="text-[#5a4041] text-xs md:text-sm">
                Chọn 1 tình huống để nhận gợi ý chuẩn đét &amp; văn mẫu thiệp kèm theo
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
              {/* Situation 1 */}
              <button
                type="button"
                onClick={() => handleFilterScenario('apology')}
                className={`text-left p-4 rounded-2xl transition-all flex flex-col justify-between gap-3 group cursor-pointer border ${
                  activeScenario === 'apology'
                    ? 'bg-[#ffdada] border-[#b21e36] ring-1 ring-[#b21e36]'
                    : 'bg-[#faf2ee] border-transparent hover:bg-[#eee7e3]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="w-10 h-10 rounded-full bg-[#ffdbd1] flex items-center justify-center text-[#b02f00] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">
                      sentiment_dissatisfied
                    </span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-[#5a4041] font-bold">
                    Hot
                  </span>
                </div>
                <div>
                  <p className="font-extrabold text-sm text-[#1e1b19]">Quà xin lỗi ngọt ngào</p>
                  <p className="text-xs text-[#5a4041] mt-0.5">
                    Xoa dịu cơn giận, ngọt ngào chuộc lỗi 100% thành công
                  </p>
                </div>
              </button>

              {/* Situation 2 */}
              <button
                type="button"
                onClick={() => handleFilterScenario('anniversary')}
                className={`text-left p-4 rounded-2xl transition-all flex flex-col justify-between gap-3 group cursor-pointer border ${
                  activeScenario === 'anniversary'
                    ? 'bg-[#ffdada] border-[#b21e36] ring-1 ring-[#b21e36]'
                    : 'bg-[#faf2ee] border-transparent hover:bg-[#eee7e3]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="w-10 h-10 rounded-full bg-[#ffdada] flex items-center justify-center text-[#ba0035] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-[#5a4041] font-bold">
                    Ý nghĩa
                  </span>
                </div>
                <div>
                  <p className="font-extrabold text-sm text-[#1e1b19]">Kỷ niệm 100 ngày yêu</p>
                  <p className="text-xs text-[#5a4041] mt-0.5">
                    Lưu giữ kỷ vật đầu tiên, đánh dấu cột mốc gắn kết
                  </p>
                </div>
              </button>

              {/* Situation 3 */}
              <button
                type="button"
                onClick={() => handleFilterScenario('birthday')}
                className={`text-left p-4 rounded-2xl transition-all flex flex-col justify-between gap-3 group cursor-pointer border ${
                  activeScenario === 'birthday'
                    ? 'bg-[#ffdada] border-[#b21e36] ring-1 ring-[#b21e36]'
                    : 'bg-[#faf2ee] border-transparent hover:bg-[#eee7e3]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="w-10 h-10 rounded-full bg-[#ffdada] flex items-center justify-center text-[#b21e36] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">cake</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-[#5a4041] font-bold">
                    Top 1
                  </span>
                </div>
                <div>
                  <p className="font-extrabold text-sm text-[#1e1b19]">Sinh nhật bạn gái</p>
                  <p className="text-xs text-[#5a4041] mt-0.5">
                    Biến nàng thành công chúa hạnh phúc nhất ngày sinh nhật
                  </p>
                </div>
              </button>

              {/* Situation 4 */}
              <button
                type="button"
                onClick={() => handleFilterScenario('surprise')}
                className={`text-left p-4 rounded-2xl transition-all flex flex-col justify-between gap-3 group cursor-pointer border ${
                  activeScenario === 'surprise'
                    ? 'bg-[#ffdada] border-[#b21e36] ring-1 ring-[#b21e36]'
                    : 'bg-[#faf2ee] border-transparent hover:bg-[#eee7e3]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="w-10 h-10 rounded-full bg-[#ffdbd1] flex items-center justify-center text-[#ff5722] group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">magic_button</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-[#5a4041] font-bold">
                    Tươi mới
                  </span>
                </div>
                <div>
                  <p className="font-extrabold text-sm text-[#1e1b19]">Bất ngờ hâm nóng</p>
                  <p className="text-xs text-[#5a4041] mt-0.5">
                    Không cần dịp gì cả, tặng vì nhớ nàng khiến tim đập thình thịch
                  </p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* 3. DANH SÁCH TOP QUÀ TẶNG BÁN CHẠY */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-1.5 text-[#b21e36] mb-1">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
                <span className="text-xs uppercase tracking-wider font-extrabold">
                  Chọn lọc kiểm chứng
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1b19]">
                Top Quà Tặng Được Nàng "Chấm Điểm 10"
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#5a4041]">
              <span>Sắp xếp theo:</span>
              <span className="px-3 py-1 rounded-full bg-[#faf2ee] font-semibold text-[#1e1b19] border border-[#eee7e3]">
                Đánh giá cao nhất &amp; Dễ tặng nhất
              </span>
            </div>
          </div>

          {/* Grid 4 Girlfriend Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {girlfriendProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.has(product.id)}
                onToggleWishlist={onToggleWishlist}
                onOpenDetail={onOpenDetail}
              />
            ))}
          </div>
        </section>

        {/* 4. LỜI KHUYÊN TÂM LÝ & BỘ VĂN MẪU VIẾT THIỆP */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Cẩm nang bí quyết đàn ông (5 cols) */}
            <div className="lg:col-span-5 bg-[#faf2ee] p-5 md:p-7 rounded-3xl flex flex-col justify-between border border-[#eee7e3]">
              <div>
                <div className="flex items-center gap-1.5 text-[#b21e36] mb-1">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                  <span className="text-xs uppercase tracking-wider font-extrabold">
                    Thấu hiểu phái đẹp
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1e1b19] mb-3">
                  Nguyên Tắc Vàng Khi Tặng Quà Bạn Gái
                </h3>
                <p className="text-xs sm:text-sm text-[#5a4041] leading-relaxed mb-4">
                  Con gái không đánh giá món quà qua giá trị vật chất khổng lồ, mà chấm điểm ở{' '}
                  <strong className="text-[#1e1b19]">
                    sự tinh ý, cảm giác được nâng niu và khoảnh khắc bất ngờ
                  </strong>
                  .
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-[#eee7e3]/60 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#ffdada] flex items-center justify-center text-[#b21e36] shrink-0 font-extrabold text-xs">
                      1
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                        Đừng bao giờ tặng món quà "vô tri"
                      </h4>
                      <p className="text-xs text-[#5a4041] mt-0.5">
                        Tránh đồ gấu bông khổng lồ khó giặt, hoa nhựa rẻ tiền hay các món đồ gia dụng trừ khi nàng chủ động xin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-[#eee7e3]/60 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#ffdbd1] flex items-center justify-center text-[#b02f00] shrink-0 font-extrabold text-xs">
                      2
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                        Bắt buộc phải có thiệp tay đi kèm
                      </h4>
                      <p className="text-xs text-[#5a4041] mt-0.5">
                        Một bức thiệp dù chỉ 3 câu do chính bạn nắn nót viết sẽ làm tăng 300% cảm xúc của món quà.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-[#eee7e3]/60 shadow-xs">
                    <span className="w-7 h-7 rounded-full bg-[#ffdada] flex items-center justify-center text-[#ba0035] shrink-0 font-extrabold text-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                        Tế nhị tuyệt đối khi nhận hàng
                      </h4>
                      <p className="text-xs text-[#5a4041] mt-0.5">
                        Tất cả sản phẩm trợ lý tuyển chọn đều hỗ trợ che tên sản phẩm, tránh sự ngại ngùng khi nàng hoặc phụ huynh nhận giúp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#eee7e3]/60 flex items-center gap-2 text-[#5a4041] text-xs">
                <span className="material-symbols-outlined text-[#ff5722] text-[18px]">
                  thumb_up
                </span>
                <span>
                  Áp dụng đúng công thức này, đảm bảo nàng sẽ khoe ngay lên Story Instagram &amp; Threads!
                </span>
              </div>
            </div>

            {/* Right: Bộ 3 Văn Mẫu Viết Thiệp Copy 1 Chạm (7 cols) */}
            <div className="lg:col-span-7 bg-white p-5 md:p-7 rounded-3xl shadow-xs border border-[#eee7e3] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-[#b21e36]">
                    <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    <span className="text-xs uppercase tracking-wider font-extrabold">
                      Văn mẫu cứu cánh
                    </span>
                  </div>
                  <span className="text-xs text-[#8e7070]">Bấm để sao chép vào clipboard</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1e1b19] mb-4">
                  3 Mẫu Thiệp Tỏ Lòng Khiến Nàng "Tan Chảy"
                </h3>

                <div className="space-y-3.5">
                  {CARD_WISHES.filter((c) => c.category === 'girlfriend').map((card) => (
                    <div
                      key={card.id}
                      id={card.id}
                      className="p-4 bg-[#faf2ee] rounded-2xl relative group border border-[#eee7e3]/60 hover:border-[#b21e36]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#b21e36] flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">{card.icon}</span>
                          {card.title}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyCard(card.id, card.content)}
                          className="px-3 py-1 rounded-full bg-white hover:bg-[#b21e36] hover:text-white text-[#5a4041] text-xs font-semibold flex items-center gap-1 transition-all shadow-xs cursor-pointer border border-[#eee7e3]"
                        >
                          <span className="material-symbols-outlined text-[13px]">content_copy</span>
                          <span>Sao chép</span>
                        </button>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1e1b19] italic leading-relaxed">
                        "{card.content}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA BANNER CUỐI TRANG: KÍCH THÍCH MUA SẮM VỚI LOGO TRỢ LÝ TÌM QUÀ */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#b21e36] via-[#d53a4c] to-[#ff5722] text-white p-6 md:p-10 shadow-xl">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Text and Avatar */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 max-w-2xl">
                <div className="w-18 h-18 rounded-full p-1 bg-white shrink-0 shadow-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={LOGO_BADGE}
                    alt="Logo Trợ Lý Tìm Quà"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white mb-2">
                    <span className="material-symbols-outlined text-[15px]">celebration</span>
                    <span>Tư vấn 1:1 miễn phí</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black leading-tight">
                    Vẫn Chưa Biết Nàng Thích Gì? Hãy Để AI Trợ Lý Tìm Quà Giúp Bạn!
                  </h3>
                  <p className="text-xs md:text-sm text-white/90 mt-2 leading-relaxed">
                    Chỉ cần trả lời 3 câu hỏi trắc nghiệm nhanh về thói quen &amp; sở thích của nàng, hệ thống sẽ đề xuất ngay 3 món quà chuẩn gu tuyệt đối với mức giá ưu đãi nhất.
                  </p>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateTab('home');
                    setTimeout(() => {
                      const el = document.getElementById('quizWizard');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-[#b21e36] hover:bg-[#faf2ee] text-xs md:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                  <span>Làm bài trắc nghiệm ngay</span>
                </button>
              </div>
            </div>

            {/* Footnote inside banner */}
            <div className="relative z-10 mt-6 pt-3 border-t border-white/20 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-white/80 text-xs">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Liên kết chính thức Shopee &amp; TikTok Shop</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">price_check</span>
                <span>Cập nhật mã voucher giảm đến 40%</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
