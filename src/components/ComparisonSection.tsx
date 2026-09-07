import React from 'react';
import { IMAGES } from '../data';
import { X, CheckCircle2, Award } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="w-full bg-[#072417] text-[#ffffff] py-16 lg:py-24 border-b border-[#1e3a2b]" id="so-sanh">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 flex flex-col gap-12 lg:gap-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold text-[#caead4] uppercase tracking-widest block mb-2">
            Công Nghệ Bàn Tay Sinh Học
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fcf9f3] tracking-tight">
            5 NGÓN MÔ PHỎNG BÀN TAY
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#aeceb9] mt-2">
            CẢM GIÁC DAY – ẤN – BÓP TỰ NHIÊN HƠN
          </p>
        </div>

        {/* 3 Steps Visual Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#1e3a2b] border border-[#304d3d] flex flex-col gap-3">
            <span className="text-3xl font-extrabold text-[#ffdbce]">01</span>
            <h3 className="text-xl font-bold text-white">DAY (Kneading)</h3>
            <p className="text-sm text-[#85a490] leading-relaxed">
              Các ngón silicone chuyển động xoay tròn nhẹ nhàng, miết đều theo đường cong cơ cổ để làm mềm các bó cơ đang co cứng.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1e3a2b] border border-[#304d3d] flex flex-col gap-3">
            <span className="text-3xl font-extrabold text-[#ffdbce]">02</span>
            <h3 className="text-xl font-bold text-white">ẤN (Pressing)</h3>
            <p className="text-sm text-[#85a490] leading-relaxed">
              Lực nén nhịp nhàng hướng thẳng vào huyệt Phong Trì và Đại Chùy, giải phóng ứ trệ và đem lại cảm giác nhẹ bẫng tức thì.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1e3a2b] border border-[#304d3d] flex flex-col gap-3">
            <span className="text-3xl font-extrabold text-[#ffdbce]">03</span>
            <h3 className="text-xl font-bold text-white">BÓP (Gripping)</h3>
            <p className="text-sm text-[#85a490] leading-relaxed">
              Hai cụm 5 ngón ôm chặt cơ thang hai bên rồi nhả từ từ, tái hiện trọn vẹn cảm giác được đôi bàn tay chuyên viên xoa bóp.
            </p>
          </div>
        </div>

        {/* Dual Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image detail left */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl bg-[#1e3a2b] aspect-square border-2 border-[#304d3d]">
            <img
              src={IMAGES.mechanismDetail}
              alt="Cận cảnh chất liệu vải bạt chống mài mòn và đầu massage ngón tay silicone"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Direct Comparison Table right */}
          <div className="lg:col-span-7 bg-[#fcf9f3] rounded-3xl p-6 sm:p-8 text-[#1c1c18] shadow-2xl border border-white">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#072417] mb-6 text-center">
              BẢNG SO SÁNH HIỆU QUẢ TRẢI NGHIỆM
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Competitor */}
              <div className="p-5 rounded-2xl bg-[#f0eee8] text-[#424843] flex flex-col gap-4 border border-[#e5e2dc]">
                <span className="text-xs font-extrabold text-[#727973] uppercase tracking-wider block text-center pb-2 border-b border-[#e5e2dc]">
                  Máy Thông Thường
                </span>
                <ul className="flex flex-col gap-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2 text-[#ba1a1a]">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Tiếp xúc bi lăn đơn điểm, dễ trượt lệch</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#ba1a1a]">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Cảm giác lăn tròn đơn điệu, cộm cứng gây đau</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#ba1a1a]">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Nhựa cứng & vải thô ráp dễ gây hầm nóng bí da</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#ba1a1a]">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Trọng lượng nặng nề (&gt;1.5kg), khó mang theo</span>
                  </li>
                </ul>
              </div>

              {/* This Product */}
              <div className="p-5 rounded-2xl bg-[#072417] text-[#ffffff] flex flex-col gap-4 shadow-xl border border-[#304d3d]">
                <div className="flex items-center justify-center gap-1.5 pb-2 border-b border-[#1e3a2b]">
                  <Award className="w-4 h-4 text-[#fd651e]" />
                  <span className="text-xs font-extrabold text-[#ffdbce] uppercase tracking-wider block text-center">
                    Máy Massage 5 Ngón
                  </span>
                </div>
                <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#caead4]">
                  <li className="flex items-start gap-2 text-[#ffffff]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#bceecc]" />
                    <span>Thiết kế 5 ngón linh hoạt, bao trùm trọn vẹn</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#ffffff]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#bceecc]" />
                    <span>Mô phỏng thao tác day – ấn – bóp bàn tay người</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#ffffff]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#bceecc]" />
                    <span>Silicone y tế cao cấp + vải bạt thoáng khí êm ái</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#ffffff]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#bceecc]" />
                    <span>Siêu nhẹ chỉ 0.76kg, thuận tiện dùng mọi nơi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
