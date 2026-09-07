import React from 'react';
import { IMAGES, PRICING } from '../data';
import { Hand, Target, Flame, ShoppingCart, ArrowDown, CheckCircle2, ShieldAlert } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fcf9f3] py-12 lg:py-20 relative overflow-hidden border-b border-[#e5e2dc]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          {/* Badges Cluster */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e3a2b] text-[#ffffff] text-xs font-bold uppercase tracking-wider">
              <Hand className="w-3.5 h-3.5 text-[#caead4]" />
              5 Ngón Mô Phỏng Bàn Tay
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebe8e2] text-[#072417] text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-[#072417]" />
              Massage Đa Điểm
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-[#a73a00]" />
              Kết Hợp Nhiệt Ấm
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#072417] tracking-tight leading-tight">
            CẢM GIÁC NHƯ ĐANG ĐƯỢC BÀN TAY DAY BÓP
          </h1>

          <p className="text-base sm:text-lg text-[#424843] leading-relaxed max-w-2xl">
            Máy massage cổ vai gáy 5 ngón mô phỏng chuyển động bàn tay sinh học – tác động sâu vào huyệt vị đa điểm vùng cổ, gáy và bờ vai, kết hợp chườm nhiệt hồng ngoại giúp giải tỏa áp lực toàn diện sau một ngày làm việc mệt mỏi.
          </p>

          {/* Dynamic Price Box */}
          <div className="w-full p-4 sm:p-5 rounded-2xl bg-[#f6f3ed] border border-[#e5e2dc] flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#727973] block mb-1">
                Giá Ưu Đãi Giới Hạn Hôm Nay
              </span>
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#fd651e] tracking-tight">
                  299.000đ
                </span>
                <span className="text-base text-[#727973] line-through">
                  650.000đ
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#ffdbce] text-[#7f2b00] text-xs font-bold">
                  {PRICING.discountPercentage}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffffff] border border-[#c2c8c2]/50 shadow-sm text-[#224f36] font-bold text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#224f36] animate-ping" />
              <span>🚚 MIỄN PHÍ SHIP TOÀN QUỐC</span>
            </div>
          </div>

          {/* Action Area */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a
              href="#dat-hang"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#fd651e] text-[#ffffff] font-bold text-base sm:text-lg shadow-[0_10px_25px_-5px_rgba(253,101,30,0.5)] hover:bg-[#a73a00] transition-all transform hover:-translate-y-0.5 active:scale-95 text-center"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>ĐẶT HÀNG NGAY – 299.000đ</span>
            </a>
            <a
              href="#dac-diem"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-[#ebe8e2] text-[#072417] font-bold text-sm sm:text-base hover:bg-[#e5e2dc] transition-colors"
            >
              <span>Khám Phá Cấu Tạo</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Conversion Proof Micro-Badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-[#424843] text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0c3c25]" />
              Miễn phí vận chuyển
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0c3c25]" />
              Giao hàng tận nơi
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0c3c25]" />
              Nhân viên gọi xác nhận đơn
            </span>
          </div>
        </div>

        {/* Hero Visual Frame */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#ebe8e2] border-4 border-white">
            <img
              src={IMAGES.hero}
              alt="Máy massage cổ vai gáy 5 ngón đang hoạt động ôm sát cổ thư giãn"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#072417]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-between shadow-lg border border-white/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fd651e]/15 text-[#fd651e] flex items-center justify-center font-bold">
                  <Hand className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#072417] leading-tight">
                    Thiết Kế 5 Ngón 3D
                  </p>
                  <p className="text-xs text-[#424843]">
                    Chuyển động đa chiều sinh học
                  </p>
                </div>
              </div>
              <span className="text-lg font-extrabold text-[#fd651e] bg-[#ffdbce] px-2.5 py-1 rounded-lg">
                299K
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
