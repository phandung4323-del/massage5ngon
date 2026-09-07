import React from 'react';
import { IMAGES, PRICING } from '../data';
import { ShoppingCart, Sparkles } from 'lucide-react';

export const ClosingCtaSection: React.FC = () => {
  return (
    <section className="w-full bg-[#072417] text-[#ffffff] py-16 lg:py-24 relative overflow-hidden border-b border-[#1e3a2b]">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 flex flex-col gap-5">
          <span className="text-xs font-extrabold text-[#caead4] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#fd651e]" />
            Đầu Tư Xứng Đáng Cho Thể Chất
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fcf9f3] tracking-tight leading-tight">
            ĐỪNG ĐỢI ĐẾN KHI QUÁ MỆT MỚI NGHỈ NGƠI
          </h2>

          <p className="text-base sm:text-lg text-[#85a490] leading-relaxed">
            Dành cho bản thân vài phút thư giãn mỗi ngày cùng trợ lý massage 5 ngón chuyên biệt. Hãy để cơ thể bạn được hồi phục năng lượng và tìm lại sự thoải mái nhất.
          </p>

          <div className="flex flex-wrap items-baseline gap-3 pt-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ffdbce]">
              299.000đ
            </span>
            <span className="text-lg text-[#85a490] line-through font-medium">
              650.000đ
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#bceecc] bg-[#1e3a2b] px-3 py-1 rounded-full border border-[#304d3d]">
              🚚 MIỄN PHÍ SHIP TOÀN QUỐC
            </span>
          </div>

          <div className="pt-3">
            <a
              href="#dat-hang"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#fd651e] text-white font-extrabold text-base sm:text-lg shadow-xl hover:bg-[#a73a00] transition-all transform hover:-translate-y-0.5 active:scale-95 text-center"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>ĐẶT HÀNG NGAY – 299.000đ</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#1e3a2b] border-4 border-[#304d3d]">
            <img
              src={IMAGES.closingRelax}
              alt="Người phụ nữ tận hưởng cảm giác thư giãn với máy massage cổ"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
