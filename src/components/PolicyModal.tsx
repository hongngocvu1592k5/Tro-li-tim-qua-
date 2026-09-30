import React from 'react';

interface PolicyModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl p-6 md:p-8 shadow-2xl z-10 border border-[#eee7e3]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f4ece8] text-[#1e1b19] flex items-center justify-center hover:bg-[#eee7e3] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {type === 'terms' ? (
          <div>
            <h3 className="text-xl font-extrabold text-[#1e1b19] mb-4">
              Điều Khoản Sử Dụng
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#5a4041] leading-relaxed">
              <p>
                <strong>1. Giới thiệu dịch vụ:</strong> "Trợ Lý Tìm Quà" là nền tảng trực tuyến phi lợi nhuận hướng dẫn người tiêu dùng tìm kiếm các ý tưởng quà tặng thích hợp, phân tích tâm lý người nhận và cung cấp liên kết dẫn tới các sàn thương mại điện tử chính hãng uy tín tại Việt Nam (Shopee, TikTok Shop).
              </p>
              <p>
                <strong>2. Liên kết tiếp thị liên kết (Affiliate Links):</strong> Trang web có thể chứa các liên kết tiếp thị liên kết có hoa hồng. Khi người dùng thực hiện giao dịch thông qua các đường link này, chúng tôi có thể nhận được một khoản hoa hồng nhỏ hỗ trợ duy trì máy chủ mà người dùng không phải trả thêm bất kỳ phụ phí nào.
              </p>
              <p>
                <strong>3. Tính chính xác của thông tin giá cả & tồn kho:</strong> Giá sản phẩm, chương trình flash sale và lượng tồn kho do các sàn TMĐT và nhà bán hàng trực tiếp quyết định. Chúng tôi nỗ lực cập nhật dữ liệu thường xuyên nhưng không chịu trách nhiệm đối với sự thay đổi giá đột xuất từ phía nhà cung cấp.
              </p>
              <p>
                <strong>4. Chính sách bảo hành & đổi trả:</strong> Toàn bộ quy trình thanh toán, vận chuyển, đổi trả và bảo hành được thực hiện trực tiếp theo chính sách bảo hộ của Shopee Mall hoặc TikTok Shop.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-extrabold text-[#1e1b19] mb-4">
              Chính Sách Bảo Mật
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#5a4041] leading-relaxed">
              <p>
                <strong>1. Thu thập dữ liệu:</strong> Chúng tôi tôn trọng tối đa quyền riêng tư của bạn. Nền tảng không yêu cầu đăng ký tài khoản bắt buộc, không thu thập số điện thoại, địa chỉ nhà hay thông tin thẻ tín dụng của người dùng.
              </p>
              <p>
                <strong>2. Dữ liệu trắc nghiệm sở thích:</strong> Các lựa chọn trắc nghiệm (như người nhận, khoảng giá, gu thẩm mỹ) được xử lý ngay tại trình duyệt client của bạn để phục vụ việc hiển thị gợi ý tức thì và không lưu trữ trên máy chủ cá nhân.
              </p>
              <p>
                <strong>3. Danh sách quà đã thích (Wishlist):</strong> Danh sách các món quà yêu thích được lưu cục bộ trong bộ nhớ tạm của thiết bị (LocalStorage) để bạn tiện theo dõi lại khi quay lại trang.
              </p>
              <p>
                <strong>4. Cam kết không bán dữ liệu:</strong> Chúng tôi cam kết tuyệt đối không bán hoặc chia sẻ email hay thông tin duyệt web của bạn cho bất kỳ bên thứ ba quảng cáo nào.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#eee7e3] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#b21e36] text-white text-xs font-bold hover:bg-[#d53a4c] cursor-pointer"
          >
            Đã hiểu &amp; Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
