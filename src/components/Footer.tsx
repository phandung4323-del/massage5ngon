import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f6f3ed] pt-16 pb-24 lg:pb-16 border-t border-[#e5e2dc]">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        {/* Top 4 commitment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 border-b border-[#e5e2dc]">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#ffffff] border border-[#e5e2dc] shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#0c3c25] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#072417]">
                Bảo Hành 24 Tháng
              </h4>
              <p className="text-xs text-[#424843] mt-0.5 leading-relaxed">
                Đổi mới 1:1 trong 30 ngày nếu phát sinh lỗi phần cứng.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#ffffff] border border-[#e5e2dc] shadow-sm">
            <Truck className="w-8 h-8 text-[#0c3c25] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#072417]">
                Miễn Phí Vận Chuyển
              </h4>
              <p className="text-xs text-[#424843] mt-0.5 leading-relaxed">
                Giao hàng toàn quốc 24-48h, đồng kiểm trước thanh toán.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#ffffff] border border-[#e5e2dc] shadow-sm">
            <RotateCcw className="w-8 h-8 text-[#0c3c25] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#072417]">
                Chính Sách Đổi Trả
              </h4>
              <p className="text-xs text-[#424843] mt-0.5 leading-relaxed">
                Cam kết 100% hài lòng, hỗ trợ trải nghiệm thoải mái tại nhà.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#ffffff] border border-[#e5e2dc] shadow-sm">
            <Headphones className="w-8 h-8 text-[#0c3c25] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#072417]">
                Tư Vấn Tận Tâm 24/7
              </h4>
              <p className="text-xs text-[#424843] mt-0.5 leading-relaxed">
                Đội ngũ chuyên viên hướng dẫn liệu trình xoa bóp chuẩn y khoa.
              </p>
            </div>
          </div>
        </div>

        {/* Brand & Address Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#072417] flex items-center justify-center text-white font-extrabold text-lg">
                K
              </div>
              <span className="font-bold text-lg text-[#072417]">
                KOKORO™
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#424843] leading-relaxed">
              Thương hiệu thiết bị chăm sóc sức khỏe &amp; phục hồi thể chất công nghệ cao. Ứng dụng kỹ thuật mô phỏng giải phẫu học 5 ngón tay sinh học, đồng hành cùng sức khỏe mọi gia đình Việt.
            </p>
            <div className="flex items-center gap-1.5 text-[#0c3c25] text-xs font-bold pt-1">
              <CheckCircle className="w-4 h-4" />
              <span>ĐÃ ĐĂNG KÝ VỚI BỘ CÔNG THƯƠNG</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#424843]">
            <h4 className="font-bold text-base text-[#072417] mb-1">
              Trung Tâm Hỗ Trợ &amp; Bảo Hành
            </h4>
            <p>
              <strong className="text-[#072417]">Hà Nội:</strong> Tầng 4, Tòa Nhà FLC, Hà Đông, Hà Nội
            </p>
            <p>
              <strong className="text-[#072417]">TP. Hồ Chí Minh:</strong> Số 126 Nguyễn Trãi, Phường Bến Thành, Quận 1
            </p>
            <p>
              <strong className="text-[#072417]">Hotline hỗ trợ &amp; bảo hành:</strong> 0398.63.68.69
            </p>
            <p>
              <strong className="text-[#072417]">Email:</strong> cskh@kokoro.vn
            </p>
          </div>

          <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#424843]">
            <h4 className="font-bold text-base text-[#072417] mb-1">
              Chính Sách Khách Hàng
            </h4>
            <a href="#" className="hover:text-[#072417] hover:underline transition-colors">
              Chính Sách Bảo Hành &amp; Đổi Trả 1 Đổi 1
            </a>
            <a href="#" className="hover:text-[#072417] hover:underline transition-colors">
              Quy Trình Kiểm Tra Khi Nhận Hàng
            </a>
            <a href="#" className="hover:text-[#072417] hover:underline transition-colors">
              Chính Sách Bảo Mật Thông Tin Khách Hàng
            </a>
            <a href="#" className="hover:text-[#072417] hover:underline transition-colors">
              Hướng Dẫn Sử Dụng &amp; Vệ Sinh Máy Chuẩn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-10 border-t border-[#e5e2dc] text-center text-xs text-[#727973]">
          <p>© 2026 KOKORO™ - Chăm Sóc Sức Khỏe Gia Đình. Toàn bộ bản quyền được bảo hộ.</p>
        </div>
      </div>
    </footer>
  );
};
