import React from 'react';
import { IMAGES } from '../data';
import { Flame, Hand, Smile, Shield } from 'lucide-react';

export const HeatMassageSection: React.FC = () => {
  return (
    <section className="w-full bg-[#ebe8e2] py-16 lg:py-24 border-b border-[#e5e2dc]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Content Left */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <span className="text-xs font-extrabold text-[#a73a00] uppercase tracking-widest">
            Nhiệt Hồng Ngoại An Toàn
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            MASSAGE KẾT HỢP NHIỆT ẤM
          </h2>

          <p className="text-xl font-bold text-[#fd651e]">
            ẤM ÁP HƠN – DỄ CHỊU HƠN MỖI NGÀY
          </p>

          <p className="text-base text-[#424843] leading-relaxed">
            Công nghệ phát nhiệt hằng nhiệt 42°C thẩm thấu sâu qua da, mô phỏng cảm giác đặt khăn ấm kết hợp cùng lực xoa bóp dẻo dai. Hơi ấm lan tỏa giúp khí huyết lưu thông thông suốt, xua tan cảm giác ớn lạnh cổ gáy khi ngồi điều hòa nhiều giờ.
          </p>

          {/* Feature List */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#ffffff] shadow-sm border border-[#e5e2dc]">
              <div className="w-11 h-11 rounded-lg bg-[#ffdbce] text-[#a73a00] flex items-center justify-center shrink-0">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#072417]">
                  Nhiệt Ấm Hồng Ngoại Ổn Định
                </h4>
                <p className="text-xs sm:text-sm text-[#424843] mt-0.5">
                  Hệ thống kiểm soát nhiệt thông minh NTC bảo vệ chống quá nhiệt tuyệt đối.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#ffffff] shadow-sm border border-[#e5e2dc]">
              <div className="w-11 h-11 rounded-lg bg-[#f0eee8] text-[#072417] flex items-center justify-center shrink-0">
                <Hand className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#072417]">
                  Đồng Thời Massage 5 Ngón
                </h4>
                <p className="text-xs sm:text-sm text-[#424843] mt-0.5">
                  Lực cơ học và nhiệt lượng bổ trợ lẫn nhau, gia tăng hiệu quả thư giãn gấp bội.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#ffffff] shadow-sm border border-[#e5e2dc]">
              <div className="w-11 h-11 rounded-lg bg-[#caead4] text-[#072417] flex items-center justify-center shrink-0">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#072417]">
                  Thư Giãn Cân Bằng Thể Chất
                </h4>
                <p className="text-xs sm:text-sm text-[#424843] mt-0.5">
                  Cho bạn giấc ngủ sâu hơn, tinh thần khoan khoái và sảng khoái vào sáng hôm sau.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Right */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#ffffff] border-4 border-white">
            <img
              src={IMAGES.thermalInternal}
              alt="Mô phỏng động cơ bên trong kết hợp cơ chế nhiệt hồng ngoại thông minh"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#072417]/90 backdrop-blur-md px-4 py-3 rounded-2xl text-[#ffffff] text-xs font-bold flex items-center gap-2.5 shadow-lg border border-[#304d3d]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fd651e] animate-ping shrink-0" />
              <Shield className="w-4 h-4 text-[#ffdbce] shrink-0" />
              <span>Cảm biến nhiệt 42°C tự động ngắt an toàn chuẩn y tế</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
