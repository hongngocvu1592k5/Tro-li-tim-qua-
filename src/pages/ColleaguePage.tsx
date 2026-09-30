import React, { useState } from 'react';
import { Product, PageTab } from '../types';
import { ProductCard } from '../components/ProductCard';

interface ColleaguePageProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (p: Product) => void;
  onOpenDetail: (p: Product) => void;
  onNavigateTab: (tab: PageTab) => void;
  onShowToast: (msg: string) => void;
}

export const ColleaguePage: React.FC<ColleaguePageProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenDetail,
  onNavigateTab,
  onShowToast,
}) => {
  const [activeContextTag, setActiveContextTag] = useState<string>('all');

  // Filter colleague products
  const colleagueProducts = products.filter((p) => {
    if (p.category !== 'colleague') return false;
    if (activeContextTag === 'farewell') {
      return p.id === 'thermos-led-smart';
    }
    if (activeContextTag === 'promotion') {
      return p.id === 'gold-pen-executive' || p.id === 'herbal-tea-box-luxury';
    }
    if (activeContextTag === 'boss') {
      return p.id === 'herbal-tea-box-luxury' || p.id === 'gold-pen-executive';
    }
    if (activeContextTag === 'birthday') {
      return p.id === 'ergonomic-lumbar-cushion' || p.id === 'thermos-led-smart';
    }
    return true;
  });

  const contextButtons = [
    { id: 'farewell', label: 'Chia Tay Chuyển Việc / Du Học', icon: 'flight_takeoff' },
    { id: 'promotion', label: 'Mừng Thăng Tiến Vị Trí', icon: 'trending_up' },
    { id: 'boss', label: 'Tri Ân Sếp & Đối Tác Cuối Năm', icon: 'workspace_premium' },
    { id: 'birthday', label: 'Sinh Nhật Bạn Bàn Bên', icon: 'cake' },
  ];

  return (
    <div className="w-full">
      {/* Top Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-[340px] bg-gradient-to-b from-[#ffdada]/40 via-[#ffdbd1]/20 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Hero Section */}
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 pt-6 md:pt-10 pb-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#eee7e3] text-[#b21e36] text-xs md:text-sm font-semibold mb-4 shadow-xs">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span>Chuẩn mực văn hóa công sở • Tinh tế &amp; Lịch sự</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e1b19] tracking-tight leading-tight mb-4">
              Quà Tặng Đồng Nghiệp &amp; Sếp: <br className="hidden sm:inline" />
              <span className="text-[#b21e36]">Tinh Tế Vừa Đủ, Không Ngại Ngùng</span>
            </h1>

            <p className="text-sm md:text-base text-[#5a4041] max-w-2xl leading-relaxed mb-6">
              Giải pháp thấu đáo giúp bạn tôn vinh đồng đội, tri ấn cấp trên và kết nối đối tác. Chuẩn phong thái công sở văn minh, gắn kết bền chặt mà vẫn giữ tròn khoảng cách chuyên nghiệp.
            </p>

            {/* Context Filter Scroller */}
            <div className="w-full flex items-center justify-center flex-wrap gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  setActiveContextTag('all');
                  onShowToast('Hiển thị tất cả quà công sở chuẩn mực');
                }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeContextTag === 'all'
                    ? 'bg-[#b21e36] text-white shadow-xs'
                    : 'bg-white text-[#5a4041] hover:bg-[#faf2ee] border border-[#eee7e3]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">apps</span>
                Tất cả dịp công sở
              </button>

              {contextButtons.map((btn) => {
                const isActive = activeContextTag === btn.id;
                return (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => {
                      setActiveContextTag(btn.id);
                      onShowToast(`Đã chọn: ${btn.label}`);
                    }}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#b21e36] text-white'
                        : 'bg-white text-[#5a4041] hover:bg-[#faf2ee] border border-[#eee7e3]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{btn.icon}</span>
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Corporate Gifting Principles: 3 KHÔNG & 3 NÊN */}
        <section className="w-full py-10 md:py-14 bg-[#faf2ee] border-y border-[#eee7e3]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#b02f00]">
                  Cẩm nang ứng xử công sở
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1e1b19] tracking-tight mt-1">
                  Bộ Quy Tắc Chọn Quà Vàng Chuẩn Mực
                </h2>
              </div>
              <p className="text-xs md:text-sm text-[#5a4041] max-w-md">
                Ranh giới giữa sự quan tâm và khó xử tại chốn văn phòng rất mỏng manh. Hãy ghi nhớ quy tắc vàng để tạo dấu ấn đẹp nhất.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 3 KHÔNG Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">block</span>
                    </div>
                    <h3 className="text-base md:text-lg font-extrabold text-[#ba1a1a]">
                      3 Điều TUYỆT ĐỐI NÊN TRÁNH (3 KHÔNG)
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5 shrink-0">
                        cancel
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                          1. Không tặng đồ dùng quá riêng tư
                        </h4>
                        <p className="text-xs text-[#5a4041] leading-relaxed mt-0.5">
                          Quần áo bó sát, mỹ phẩm chăm sóc da đặc trị hay nước hoa mùi quá nồng dễ gây hiểu nhầm về mục đích hoặc sai lệch sở thích cá nhân.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5 shrink-0">
                        cancel
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                          2. Không chọn đồ kích thước quá cồng kềnh
                        </h4>
                        <p className="text-xs text-[#5a4041] leading-relaxed mt-0.5">
                          Tránh tranh treo tường khổng lồ, chậu hoa quá lớn hay thú bông choán chỗ. Bàn văn phòng cần không gian thoáng đãng và dễ dọn dẹp khi chuyển vị trí.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5 shrink-0">
                        cancel
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                          3. Không ham rẻ chọn hàng trôi nổi kém chất lượng
                        </h4>
                        <p className="text-xs text-[#5a4041] leading-relaxed mt-0.5">
                          Tặng phẩm bàn làm việc được sử dụng hàng ngày. Một món đồ ọp ẹp hoặc bong tróc sẽ vô tình làm giảm hình ảnh chỉnh chu của chính bạn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-2xl bg-[#faf2ee] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b21e36] text-[18px]">info</span>
                  <span className="text-xs text-[#5a4041]">
                    Quy tắc vàng: Tôn trọng không gian chung &amp; giữ gìn tính lịch thiệp.
                  </span>
                </div>
              </div>

              {/* 3 NÊN Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#ffdada] text-[#b21e36] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <h3 className="text-base md:text-lg font-extrabold text-[#b21e36]">
                      3 Tiêu Chí ƯU TIÊN HÀNG ĐẦU (3 NÊN)
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#b21e36] text-[20px] mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                          1. Thiết thực trực tiếp trên bàn làm việc
                        </h4>
                        <p className="text-xs text-[#5a4041] leading-relaxed mt-0.5">
                          Bình giữ nhiệt chất lượng, gối tựa công thái học, trà thảo mộc hay bút ký - những món đồ luôn hiện diện hỗ trợ 8 giờ công sở đạt hiệu suất cao.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#b21e36] text-[20px] mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                          2. Đóng gói hộp cứng chỉn chu, sang trọng
                        </h4>
                        <p className="text-xs text-[#5a4041] leading-relaxed mt-0.5">
                          Quy cách bao bì lịch lãm thay bạn gửi gắm sự trân quý. Tặng phẩm không cần bọc thêm giấy gói phức tạp vẫn toát lên vẻ trang trọng tại văn phòng.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#b21e36] text-[20px] mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                          3. Dễ dàng cá nhân hóa thông điệp
                        </h4>
                        <p className="text-xs text-[#5a4041] leading-relaxed mt-0.5">
                          Khắc tên riêng bằng laser, in câu quote truyền động lực hay tấm thiệp kèm lời chúc ký tên cả team tạo nên kỷ niệm độc bản khó quên.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-2xl bg-[#ffdada]/50 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b21e36] text-[18px]">
                    favorite
                  </span>
                  <span className="text-xs text-[#b21e36] font-bold">
                    Được bảo chứng phù hợp 100% môi trường doanh nghiệp hiện đại.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Product Catalog Section */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#b21e36]">
              Top Tuyển Chọn Đã Kiểm Chứng Mall
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1b19] tracking-tight mt-1">
              Top 4 Món Quà Chuẩn Gu Công Sở Đắt Khách Nhất
            </h2>
            <p className="text-xs md:text-sm text-[#5a4041] mt-1 max-w-xl">
              Được phân loại theo từng điểm chạm tâm lý, đi kèm liên kết mua chính hãng bảo vệ quyền lợi người nhận.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {colleagueProducts.map((product) => (
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

        {/* Interactive Budget Calculator Section */}
        <section className="w-full py-12 bg-[#faf2ee] border-t border-[#eee7e3]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-8">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#b21e36]">
                Tối ưu chi phí tập thể
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1b19] tracking-tight mt-1">
                Bảng Dự Toán Ngân Sách Quà Nhóm Văn Phòng
              </h2>
              <p className="text-xs md:text-sm text-[#5a4041] max-w-xl mt-1">
                Tránh cảnh "gõ cửa từng bàn thu tiền lẻ". Phân bổ thông minh giúp món quà luôn trang trọng nhất trong khả năng quỹ team.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Budget Mode A: Đóng góp theo nhóm */}
              <div className="p-6 md:p-8 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ffdbd1] text-[#b02f00] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">groups</span>
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-extrabold text-[#1e1b19]">
                          Hình Thức: Cả Team Góp Chung
                        </h3>
                        <span className="text-xs text-[#5a4041]">Phù hợp: Team 5 - 15 người</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#ffb5a0]/40 text-[#b02f00] text-xs font-bold">
                      50k - 100k / người
                    </span>
                  </div>

                  {/* Visualization Bar */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#1e1b19]">Tổng ngân sách dự trù:</span>
                      <span className="font-extrabold text-[#b21e36]">500.000đ - 1.200.000đ</span>
                    </div>
                    <div className="w-full bg-[#eee7e3] h-2.5 rounded-full overflow-hidden flex">
                      <div className="bg-[#ff5722] h-full w-2/3" />
                      <div className="bg-[#b21e36] h-full w-1/3" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#1e1b19] block">
                      Gợi ý phân bổ quà tặng hoàn hảo:
                    </span>
                    <div className="p-3 rounded-2xl bg-[#faf2ee] flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#ff5722] text-[20px] mt-0.5">
                        inventory_2
                      </span>
                      <span className="text-xs text-[#5a4041] leading-relaxed">
                        <strong className="text-[#1e1b19]">Combo Tri Ân Trọng Đại:</strong> Máy pha cà phê mini để bàn + Thiệp lưu bút khắc họa chibi toàn thể phòng ban.
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#faf2ee] flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#ff5722] text-[20px] mt-0.5">
                        local_cafe
                      </span>
                      <span className="text-xs text-[#5a4041] leading-relaxed">
                        <strong className="text-[#1e1b19]">Combo Tươi Mát Chuyển Việc:</strong> Hộp bánh hạt nướng artisan + Bó hoa sáp thơm lưu giữ vĩnh cửu kèm voucher cafe.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#eee7e3] flex items-center justify-between text-xs">
                  <span className="text-[#5a4041]">Chi phí bình quân: Vừa vặn 1 ly trà sữa</span>
                  <span className="font-bold text-[#b21e36]">Hiệu quả gắn kết: 10/10</span>
                </div>
              </div>

              {/* Budget Mode B: Cá nhân tặng riêng */}
              <div className="p-6 md:p-8 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ffdada] text-[#b21e36] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">person</span>
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-extrabold text-[#1e1b19]">
                          Hình Thức: Cá Nhân Tặng Riêng
                        </h3>
                        <span className="text-xs text-[#5a4041]">
                          Phù hợp: Đồng nghiệp thân thiết / Cấp phó tặng Sếp
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#ffdada] text-[#b21e36] text-xs font-bold">
                      200k - 500k / món
                    </span>
                  </div>

                  {/* Visualization Bar */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#1e1b19]">Định mức an toàn:</span>
                      <span className="font-extrabold text-[#b21e36]">Không gây áp lực trả lễ</span>
                    </div>
                    <div className="w-full bg-[#eee7e3] h-2.5 rounded-full overflow-hidden flex">
                      <div className="bg-[#b21e36] h-full w-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#1e1b19] block">
                      Gợi ý phân bổ quà tặng hoàn hảo:
                    </span>
                    <div className="p-3 rounded-2xl bg-[#faf2ee] flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#b21e36] text-[20px] mt-0.5">
                        desk
                      </span>
                      <span className="text-xs text-[#5a4041] leading-relaxed">
                        <strong className="text-[#1e1b19]">Tặng Đồng Nghiệp Bàn Bên:</strong> Bình giữ nhiệt thông minh khắc tên riêng (185k) hoặc Gối công thái học chống đau mỏi (290k).
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#faf2ee] flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#b21e36] text-[20px] mt-0.5">
                        military_tech
                      </span>
                      <span className="text-xs text-[#5a4041] leading-relaxed">
                        <strong className="text-[#1e1b19]">Tặng Sếp / Đối Tác:</strong> Set trà hoa cúc táo đỏ thanh nhiệt (350k) hoặc Bút ký kim loại khắc laser mạ vàng tinh xảo (220k).
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#eee7e3] flex items-center justify-between text-xs">
                  <span className="text-[#5a4041]">Không gây áp lực đáp lễ</span>
                  <span className="font-bold text-[#b21e36]">Độ tự nhiên: Hoàn hảo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof & Corporate Testimonials */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#b21e36]">
                Cộng đồng tin cậy
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#1e1b19] tracking-tight mt-1">
                Đồng Hành Cùng 10.000+ Nhân Sự Văn Phòng
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-[#faf2ee] px-4 py-2 rounded-full border border-[#eee7e3]">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#d53a4c] text-white flex items-center justify-center font-bold text-[10px] ring-2 ring-white">
                  HN
                </div>
                <div className="w-7 h-7 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-[10px] ring-2 ring-white">
                  SG
                </div>
                <div className="w-7 h-7 rounded-full bg-[#e51146] text-white flex items-center justify-center font-bold text-[10px] ring-2 ring-white">
                  DN
                </div>
              </div>
              <span className="text-xs font-semibold text-[#1e1b19]">
                Tỉ lệ hài lòng 99.4%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5a4041] italic leading-relaxed mb-4">
                  "Đợt vừa rồi bạn Tech Lead team mình chuyển công tác sang Sing, cả team bối rối không biết tặng gì vừa gọn nhẹ vừa ý nghĩa. Nhờ gợi ý bình giữ nhiệt khắc tên riêng, bạn ấy xúc động mang theo ngay trong vali xách tay!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-[#eee7e3] flex items-center justify-center font-bold text-xs text-[#1e1b19]">
                  TL
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1e1b19]">Thuỳ Linh</h4>
                  <span className="text-[11px] text-[#8e7070]">HR Specialist, Fintech Hà Nội</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5a4041] italic leading-relaxed mb-4">
                  "Tặng quà cho Sếp nữ người Nhật cực kỳ khắt khe về tính thanh lịch. Set trà hoa thượng hạng hộp cứng quá tinh tế, không cần bọc thêm gì cả. Sếp khen trà thơm và còn mang ra tiếp khách quý ở văn phòng."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-[#eee7e3] flex items-center justify-center font-bold text-xs text-[#1e1b19]">
                  QK
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1e1b19]">Quang Khải</h4>
                  <span className="text-[11px] text-[#8e7070]">Account Manager, Q.1 TP.HCM</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5a4041] italic leading-relaxed mb-4">
                  "Mua chiếc gối tựa công thái học tặng sinh nhật đồng nghiệp ngồi cạnh hay than đau cột sống. Quà nhận xong dùng ngay trên ghế văn phòng, cực kỳ thực tế mà giá cả săn voucher TikTok lại siêu hạt dẻ!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-[#eee7e3] flex items-center justify-center font-bold text-xs text-[#1e1b19]">
                  MN
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1e1b19]">Mai Ngọc</h4>
                  <span className="text-[11px] text-[#8e7070]">UI/UX Designer, Cầu Giấy HN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Concierge Callout */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 pb-12">
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#b21e36] to-[#d53a4c] text-white shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold inline-block mb-2">
                Trợ Lý Tự Động Phân Tích Tính Cách
              </span>
              <h3 className="text-xl md:text-2xl tracking-tight font-extrabold">
                Chưa Tìm Thấy Món Quà Hợp Tính Đồng Nghiệp Của Bạn?
              </h3>
              <p className="text-xs md:text-sm text-white/90 mt-1 leading-relaxed">
                Mở trình trắc nghiệm thông minh chỉ mất 30 giây để xác định cung hoàng đạo, sở thích cá nhân và tính cách công sở.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 justify-center">
              <button
                type="button"
                onClick={() => {
                  onNavigateTab('home');
                  setTimeout(() => {
                    const el = document.getElementById('quizWizard');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-6 py-3 rounded-full bg-white text-[#b21e36] text-xs md:text-sm font-bold shadow-md hover:scale-[1.03] active:scale-95 transition-all text-center cursor-pointer"
              >
                Trắc Nghiệm Tìm Quà Ngay
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
