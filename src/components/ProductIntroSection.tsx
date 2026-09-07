import React from 'react';
import { IMAGES } from '../data';
import { Hand, Network, Flame, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProductIntroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fcf9f3] py-16 lg:py-24 border-b border-[#e5e2dc]/60" id="dac-diem">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Visual Column */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[#f0eee8] shadow-2xl border-4 border-white">
            <img
              src={IMAGES.productGreen}
              alt="Máy massage cổ vai gáy 5 ngón màu xanh rêu sang trọng"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#072417] text-[#ffffff] text-xs font-bold shadow-md flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#caead4]" />
              Bản Thiết Kế Công Thái Học Mới Nhất
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-5">
          <span className="text-xs font-extrabold text-[#a73a00] uppercase tracking-widest">
            Đột Phá Kỹ Thuật 2025
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            GIẢI PHÁP THƯ GIÃN NGAY TẠI NHÀ
          </h2>

          <div className="p-3.5 rounded-xl bg-[#ebe8e2] text-[#072417] font-bold text-lg sm:text-xl border border-[#e5e2dc]">
            MÁY MASSAGE CỔ VAI GÁY 5 NGÓN
          </div>

          <p className="text-base text-[#424843] leading-relaxed">
            Khác biệt hoàn toàn so với các con lăn hình tròn thông thường, sản phẩm sở hữu cấu trúc{' '}
            <strong className="text-[#072417]">đầu massage dạng 5 ngón sinh học</strong>. Thiết kế thông minh này mô phỏng trọn vẹn thao tác day – ấn – bóp chuyên nghiệp của chuyên gia trị liệu, tác động sâu vào từng bó cơ mà không gây đau rát da.
          </p>

          {/* 3 Feature Chips */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-center flex flex-col items-center">
              <div className="w-9 h-9 rounded-lg bg-[#caead4] text-[#0c3c25] flex items-center justify-center mb-2">
                <Hand className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#072417] block">
                5 NGÓN MASSAGE
              </span>
              <span className="text-[11px] sm:text-xs text-[#424843] mt-0.5">
                Chuẩn giải phẫu
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-center flex flex-col items-center">
              <div className="w-9 h-9 rounded-lg bg-[#caead4] text-[#0c3c25] flex items-center justify-center mb-2">
                <Network className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#072417] block">
                ĐA ĐIỂM TIẾP XÚC
              </span>
              <span className="text-[11px] sm:text-xs text-[#424843] mt-0.5">
                Bao phủ cổ gáy
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-center flex flex-col items-center">
              <div className="w-9 h-9 rounded-lg bg-[#ffdbce] text-[#fd651e] flex items-center justify-center mb-2">
                <Flame className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#072417] block">
                NHIỆT ẤM 42°C
              </span>
              <span className="text-[11px] sm:text-xs text-[#424843] mt-0.5">
                Chườm nóng dịu êm
              </span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#dat-hang"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#072417] text-[#ffffff] font-bold text-sm sm:text-base hover:bg-[#1e3a2b] transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              <span>TRẢI NGHIỆM NGAY – CHỈ 299.000đ</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
