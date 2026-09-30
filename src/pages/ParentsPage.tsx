import React, { useState } from 'react';
import { Product, PageTab } from '../types';
import { ProductCard } from '../components/ProductCard';

interface ParentsPageProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (p: Product) => void;
  onOpenDetail: (p: Product) => void;
  onNavigateTab: (tab: PageTab) => void;
  onShowToast: (msg: string) => void;
}

export const ParentsPage: React.FC<ParentsPageProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenDetail,
  onNavigateTab,
  onShowToast,
}) => {
  const [selectedHealthNeed, setSelectedHealthNeed] = useState<string>('all');

  const healthNeedOptions = [
    {
      id: 'xuong-khop',
      title: 'Đau nhức xương khớp',
      sub: 'Mỏi vai gáy, tê bì tay chân, thoái hóa khi trở trời',
      icon: 'elderly',
    },
    {
      id: 'mat-ngu',
      title: 'Mất ngủ / Khó ngủ đêm',
      sub: 'Hay thức giấc nửa đêm, bàn chân lạnh, trằn trọc',
      icon: 'bedtime',
    },
    {
      id: 'de-khang',
      title: 'Bồi bổ sức đề kháng',
      sub: 'Tuổi trung niên hay mệt mỏi, cần phục hồi năng lượng',
      icon: 'health_and_safety',
    },
    {
      id: 'thu-gian',
      title: 'Thư giãn hưu trí',
      sub: 'Thiết bị tiện ích hỗ trợ nếp sinh hoạt nhẹ nhàng',
      icon: 'chair',
    },
  ];

  const parentProducts = products.filter((p) => {
    if (p.category !== 'parents') return false;
    if (selectedHealthNeed === 'xuong-khop') {
      return p.id === 'neck-massager-6d' || p.id === 'orthopedic-neck-pillow';
    }
    if (selectedHealthNeed === 'mat-ngu') {
      return p.id === 'foot-spa-foldable' || p.id === 'orthopedic-neck-pillow';
    }
    if (selectedHealthNeed === 'de-khang') {
      return p.id === 'birdnest-cordyceps-box';
    }
    return true;
  });

  const PARENT_HERO_IMG =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB0yKmCkTssR2o1kFeAuZZgRDeAxBl9JAULcO0IPomzfbmoH8vjcEZwYMGBX8i9zypVOltEka-PGeBMJEAnkkUGnBkoWsr49qMXTPqRbUw8IpF6OgK87SrAd7h6Q-Pw3GCXeqfym_rbTRdUPFduMEzVmCIh_aOX0tAF-ke3pruBo3dlKZizLMhE2fDJqX08nVLidBsaihBtAUSRc2ac_BlmIjGiOlH5GGDoRRRomGU_dyFdAuW_C0lsFA';

  return (
    <div className="w-full">
      {/* Top Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#ffdada]/50 via-[#ffdbd1]/20 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 pt-6 md:pt-10 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Text & Narrative (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#eee7e3] w-fit shadow-xs">
                <span
                  className="material-symbols-outlined text-[#b21e36] text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  volunteer_activism
                </span>
                <span className="text-xs uppercase tracking-wider text-[#b21e36] font-bold">
                  Báo hiếu đấng sinh thành • Thiết thực cho sức khỏe
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e1b19] tracking-tight leading-tight">
                Bố Mẹ Nói <span className="text-[#b21e36] italic font-serif">"Không Cần Gì Đâu"</span> — Hãy Tặng Món Quà Sức Khỏe Thật Sự Thiết Thực
              </h1>

              <p className="text-sm md:text-base text-[#5a4041] max-w-2xl leading-relaxed">
                Bố mẹ cả một đời vì con cái nên lúc nào cũng chắt chiu, xót tiền. Mỗi lần hỏi han đều bảo "ở nhà có đủ rồi". Một món quà chăm sóc sức khỏe cụ thể, giải quyết đúng cơn đau nhức hay giấc ngủ chập chờn chính là lời cảm ơn chân thành nhất mà bố mẹ chẳng nỡ chối từ.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('health-quiz');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#b21e36] text-white text-xs md:text-sm font-bold shadow-md hover:scale-[1.02] hover:bg-[#d53a4c] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
                  <span>Trắc nghiệm chọn quà hợp ý</span>
                </button>
                <div className="flex items-center gap-1.5 text-[#5a4041] text-xs font-semibold">
                  <span
                    className="material-symbols-outlined text-[#ff5722] text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span>100% tuyển chọn Mall chính hãng</span>
                </div>
              </div>

              {/* Emotional Stat Chips */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="p-3.5 rounded-2xl bg-[#faf2ee] flex flex-col border border-[#eee7e3]/60">
                  <span className="text-xl sm:text-2xl font-black text-[#b21e36]">89%</span>
                  <span className="text-xs text-[#5a4041] mt-0.5">
                    Bố mẹ giấu cơn đau mỏi xương khớp
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#faf2ee] flex flex-col border border-[#eee7e3]/60">
                  <span className="text-xl sm:text-2xl font-black text-[#b21e36]">15-30p</span>
                  <span className="text-xs text-[#5a4041] mt-0.5">
                    Thư giãn mỗi tối giúp ngủ sâu giấc
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#faf2ee] flex flex-col border border-[#eee7e3]/60">
                  <span className="text-xl sm:text-2xl font-black text-[#b21e36]">50.000+</span>
                  <span className="text-xs text-[#5a4041] mt-0.5">
                    Người con gửi trao yêu thương qua Trợ Lý
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Warm Imagery Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-3xl shadow-xl aspect-[4/5] bg-[#eee7e3] relative border-4 border-white">
                  <img
                    src={PARENT_HERO_IMG}
                    alt="Bố mẹ hạnh phúc uống trà bên nhau"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating Testimonial Micro-Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-3 border border-[#eee7e3]">
                    <div className="w-10 h-10 rounded-full bg-[#ffdada] flex items-center justify-center shrink-0 text-[#b21e36]">
                      <span
                        className="material-symbols-outlined text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        family_restroom
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-[#1e1b19] truncate">
                        "Mẹ khen dùng máy cổ vai gáy đỡ hẳn nhức đầu"
                      </span>
                      <span className="text-[11px] text-[#8e7070]">
                        Thu Hà (Hà Nội) • Đã tặng sinh nhật mẹ 62 tuổi
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Accent Badge */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ff5722] text-white text-xs font-bold shadow-lg">
                  <span className="material-symbols-outlined text-[16px]">favorite</span>
                  <span>Ấm áp tình thân</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Need Filter Section */}
        <section id="health-quiz" className="w-full bg-[#faf2ee] py-12 border-t border-[#eee7e3]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#b21e36] text-xs font-extrabold tracking-wider uppercase">
                  <span className="material-symbols-outlined text-[18px]">vital_signs</span>
                  <span>Bắt đúng tâm lý • Chọn đúng nhu cầu</span>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1e1b19] tracking-tight">
                  Hiện tại bố mẹ bạn đang cần cải thiện vấn đề gì nhất?
                </h2>
                <p className="text-xs md:text-sm text-[#5a4041]">
                  Bấm chọn để Trợ Lý lọc ra gợi ý chuẩn xác nhất với ngân sách tối ưu.
                </p>
              </div>

              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-[#eee7e3]">
                <span className="material-symbols-outlined text-[#ff5722] text-[16px]">
                  verified_user
                </span>
                <span className="text-xs text-[#1e1b19]">
                  Đã xác minh nguồn gốc Shopee Mall &amp; TikTok Official
                </span>
              </div>
            </div>

            {/* Need selector chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {healthNeedOptions.map((opt) => {
                const isSelected = selectedHealthNeed === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      const next = isSelected ? 'all' : opt.id;
                      setSelectedHealthNeed(next);
                      onShowToast(`Đã chọn nhu cầu: ${opt.title}`);
                    }}
                    className={`text-left p-4 rounded-3xl shadow-xs transition-all flex flex-col justify-between gap-4 border-2 cursor-pointer ${
                      isSelected
                        ? 'border-[#b21e36] bg-white ring-2 ring-[#b21e36]/30'
                        : 'border-transparent bg-white hover:border-[#eee7e3]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="w-12 h-12 rounded-2xl bg-[#ffdada] flex items-center justify-center text-[#b21e36]">
                        <span className="material-symbols-outlined text-[24px]">
                          {opt.icon}
                        </span>
                      </div>
                      {isSelected ? (
                        <span className="w-6 h-6 rounded-full bg-[#b21e36] text-white flex items-center justify-center text-[12px]">
                          <span className="material-symbols-outlined text-[16px]">check</span>
                        </span>
                      ) : (
                        <span className="w-6 h-6 rounded-full border border-[#eee7e3] text-transparent" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#1e1b19]">{opt.title}</h3>
                      <p className="text-xs text-[#5a4041] mt-1">{opt.sub}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Curated Product Showcase */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#ff5722] font-extrabold">
                Top quà tuyển chọn
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1b19] tracking-tight">
                Gợi Ý Thiết Thực Nhất Được Hàng Ngàn Người Con Lựa Chọn
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#5a4041] max-w-sm">
              Đã sàng lọc kỹ các đánh giá thực tế từ người cao tuổi: dễ sử dụng bằng tiếng Việt, phím bấm to rõ, an toàn tuyệt đối.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {parentProducts.map((product) => (
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

        {/* Thoughtful Gifting Guide: "Cách tặng quà khéo léo để bố mẹ không tiếc tiền" */}
        <section className="w-full bg-[#faf2ee] py-12 border-t border-[#eee7e3]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="px-3.5 py-1 rounded-full bg-[#eee7e3] text-[#b21e36] text-xs font-bold uppercase inline-block mb-2">
                Nghệ thuật thấu hiểu bố mẹ
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1b19] tracking-tight">
                Cách Tặng Quà Khéo Léo Để Bố Mẹ Nhận Ngay Mà Không Tiếc Tiền
              </h2>
              <p className="text-xs md:text-sm text-[#5a4041] mt-1.5 leading-relaxed">
                Tặng quà cho đấng sinh thành không chỉ là trao món đồ, mà là cách bạn gửi gắm tình thương để bố mẹ thấy an lòng và tự hào.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tip 1 */}
              <div className="p-6 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffdbd1] flex items-center justify-center text-[#b02f00]">
                  <span className="material-symbols-outlined text-[26px]">savings</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-extrabold text-sm md:text-base text-[#1e1b19]">
                    1. Mẹo "Nói giảm giá" tinh tế
                  </h3>
                  <p className="text-xs text-[#5a4041] leading-relaxed">
                    Nếu biết món quà tiền triệu, bố mẹ thường xuýt xoa rồi cất kỹ không dám dùng. Hãy nhẹ nhàng bảo: <em>"Công ty con có mã ưu đãi nội bộ giảm tận 70%"</em> hoặc <em>"Bạn con làm ở hãng tặng voucher trợ giá"</em> để bố mẹ thoải mái tận hưởng mỗi ngày.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-[#faf2ee] text-[#1e1b19] text-xs mt-auto border border-[#eee7e3]/60">
                  💡 Câu nói mẫu: <em>"Đợt này Shopee trợ giá chỉ còn mấy trăm nghìn thôi mẹ ơi, con mua biếu mẹ dùng cho đỡ nhức lưng."</em>
                </div>
              </div>

              {/* Tip 2 */}
              <div className="p-6 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffdada] flex items-center justify-center text-[#b21e36]">
                  <span className="material-symbols-outlined text-[26px]">edit_note</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-extrabold text-sm md:text-base text-[#1e1b19]">
                    2. Bức thư tay hoặc tấm thiệp mộc mạc
                  </h3>
                  <p className="text-xs text-[#5a4041] leading-relaxed">
                    Người lớn tuổi coi trọng giá trị tinh thần hơn vật chất. Một mẩu giấy note nhỏ dán trên hộp: <em>"Con thấy dạo này mẹ hay than mỏi vai, mẹ nhớ cắm điện bấm nút đỏ mỗi tối trước khi đi ngủ nhé"</em> sẽ làm bố mẹ cảm động rơi nước mắt.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-[#faf2ee] text-[#1e1b19] text-xs mt-auto border border-[#eee7e3]/60">
                  💡 Mẹo nhỏ: Dán sẵn sticker đánh dấu "BẬT/TẮT", "NÚT CHỈNH ĐỘ NÓNG" bằng chữ to trên thiết bị để bố mẹ dễ bấm.
                </div>
              </div>

              {/* Tip 3 */}
              <div className="p-6 rounded-3xl bg-white shadow-xs border border-[#eee7e3] flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffdada] flex items-center justify-center text-[#ba0035]">
                  <span className="material-symbols-outlined text-[26px]">how_to_reg</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-extrabold text-sm md:text-base text-[#1e1b19]">
                    3. Đích thân bóc hộp &amp; dặn dò sử dụng
                  </h3>
                  <p className="text-xs text-[#5a4041] leading-relaxed">
                    Đừng gửi ship đồ về rồi để đấy. Hãy dành 15 phút gọi video call hoặc ngồi lại cùng bố mẹ, tự tay lắp pin, pha nước ấm vào chậu ngâm chân, điều chỉnh mức nhẹ nhất và hỏi xem bố mẹ thấy dễ chịu không. Sự có mặt của bạn chính là liều thuốc quý nhất.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-[#faf2ee] text-[#1e1b19] text-xs mt-auto border border-[#eee7e3]/60">
                  💡 Tác dụng: Bố mẹ không lo bấm nhầm hỏng máy, an tâm sử dụng đều đặn mỗi tối.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust, Quality & Warranty Commitments */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white p-6 md:p-8 shadow-xs border border-[#eee7e3] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffdada] text-[#b21e36] text-xs font-bold w-fit">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield
                  </span>
                  <span>Cam kết an tâm tuyệt đối cho sức khỏe người thân</span>
                </div>

                <h2 className="text-xl md:text-2xl font-extrabold text-[#1e1b19] tracking-tight">
                  Tiêu Chuẩn Tuyển Chọn Khắt Khe Của "Trợ Lý Tìm Quà"
                </h2>
                <p className="text-xs md:text-sm text-[#5a4041]">
                  Đối với quà sức khỏe cho người lớn tuổi, chúng tôi tuyệt đối không giới thiệu hàng trôi nổi, kém chất lượng. Mọi sản phẩm xuất hiện trên trang đều đáp ứng 3 tiêu chí cốt lõi:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#b21e36] text-[22px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#1e1b19] block">
                        100% Gian hàng Mall
                      </span>
                      <span className="text-[11px] text-[#5a4041]">
                        Shopee Mall hoặc TikTok Verified có hóa đơn và bảo hành điện tử chính hãng.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#ff5722] text-[22px] shrink-0 mt-0.5">
                      health_and_safety
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#1e1b19] block">
                        Kiểm định an toàn
                      </span>
                      <span className="text-[11px] text-[#5a4041]">
                        Có chứng nhận y tế, kiểm nghiệm vi sinh và giấy phép lưu hành đầy đủ.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#b21e36] text-[22px] shrink-0 mt-0.5">
                      swap_horizontal_circle
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#1e1b19] block">
                        Đổi mới 1-1 dễ dàng
                      </span>
                      <span className="text-[11px] text-[#5a4041]">
                        Chính sách bảo hành hỗ trợ đổi trả nếu người lớn tuổi dùng không quen hoặc lỗi kỹ thuật.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Visual Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs p-5 rounded-3xl bg-[#faf2ee] border border-[#eee7e3] flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#ffdada] flex items-center justify-center text-[#b21e36]">
                    <span
                      className="material-symbols-outlined text-[28px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      medical_services
                    </span>
                  </div>
                  <span className="font-extrabold text-sm text-[#1e1b19]">Chăm sóc chu đáo</span>
                  <p className="text-xs text-[#5a4041] leading-relaxed">
                    Chúng tôi liên tục cập nhật mã giảm giá độc quyền từ các thương hiệu y tế uy tín nhằm hỗ trợ con cái mang lại món quà tốt nhất cho bố mẹ với mức giá tiết kiệm nhất.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('health-quiz');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-[#b21e36] text-white text-xs font-bold hover:bg-[#d53a4c] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Chọn quà ngay hôm nay</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
