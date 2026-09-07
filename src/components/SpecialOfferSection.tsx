import React from 'react';
import { PRICING } from '../data';
import { CheckCircle2, ShoppingCart, Sparkles } from 'lucide-react';

export const SpecialOfferSection: React.FC = () => {
  const checklists = [
    'Thiết kế 5 ngón mô phỏng bàn tay thật',
    'Massage đa điểm cổ – vai – gáy',
    'Kết hợp nhiệt ấm thư giãn 42°C',
    'Trọng lượng siêu nhẹ chỉ 0.76kg',
    'Sạc USB Type-C tiện lợi mọi nơi',
    'Kiểm tra hàng thoải mái trước khi thanh toán',
  ];

  return (
    <section className="w-full bg-[#ebe8e2] py-16 lg:py-24 border-b border-[#e5e2dc]/60" id="uu-dai">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#072417] text-[#ffffff] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border-2 border-[#1e3a2b]">
          {/* Decorative Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#fd651e]/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#caead4]/15 blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center text-center gap-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#fd651e] text-white text-xs font-bold uppercase tracking-widest shadow-lg animate-pulse-slow">
              <Sparkles className="w-3.5 h-3.5" />
              ƯU ĐÃI ĐẶC BIỆT HÔM NAY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fcf9f3] tracking-tight">
              MÁY MASSAGE CỔ VAI GÁY 5 NGÓN
            </h2>

            {/* Price Presentation */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#ffdbce] tracking-tight">
                  299.000đ
                </span>
                <span className="text-xl sm:text-2xl text-[#85a490] line-through font-semibold">
                  650.000đ
                </span>
              </div>
              <span className="px-4 py-1 rounded-full bg-[#1e3a2b] text-[#caead4] text-xs sm:text-sm font-bold border border-[#304d3d]">
                🚚 MIỄN PHÍ SHIP TOÀN QUỐC
              </span>
            </div>

            {/* Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl w-full pt-4 text-xs sm:text-sm text-[#caead4]">
              {checklists.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#bceecc] shrink-0" />
                  <span className="font-medium text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 w-full max-w-md">
              <a
                href="#dat-hang"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#fd651e] text-white font-extrabold text-base sm:text-lg shadow-[0_12px_28px_-6px_rgba(253,101,30,0.5)] hover:bg-[#a73a00] transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>ĐẶT HÀNG NGAY – 299.000đ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
