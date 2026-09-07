import React from 'react';
import { IMAGES } from '../data';
import { Heart, Gift } from 'lucide-react';

export const GiftSection: React.FC = () => {
  return (
    <section className="w-full bg-[#1e3a2b] text-[#ffffff] py-16 lg:py-24 border-b border-[#304d3d]">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Visual Column */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl bg-[#072417] border-4 border-[#304d3d]">
          <img
            src={IMAGES.giftFamily}
            alt="Con cái trao tặng món quà máy massage cho cha mẹ ấm áp tình thân"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Column */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <span className="text-xs font-extrabold text-[#caead4] uppercase tracking-widest">
            Trao Gửi Yêu Thương
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#fcf9f3] tracking-tight leading-snug">
            LỰA CHỌN CHĂM SÓC <span className="whitespace-nowrap">SỨC KHỎE THẬT Ý NGHĨA</span>
          </h2>

          <p className="text-xl font-bold text-[#ffdbce]">
            TẶNG CHA MẸ – GỬI GẮM YÊU THƯƠNG – TRAO NIỀM VUI
          </p>

          <p className="text-base text-[#85a490] leading-relaxed">
            Không có món quà nào quý giá hơn sự quan tâm đến giấc ngủ và sức khỏe của cha mẹ, vợ chồng hay người thân. Một chiếc máy massage nhỏ gọn nhưng là nguồn động viên ấm áp mỗi khi cơ thể mệt mỏi sau ngày dài vất vả.
          </p>

          <ul className="flex flex-col gap-3 text-[#caead4] text-sm sm:text-base font-medium">
            <li className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#fd651e] shrink-0 fill-[#fd651e]" />
              <span>Nút bấm siêu dễ, người lớn tuổi không rành công nghệ vẫn dùng tốt</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#fd651e] shrink-0 fill-[#fd651e]" />
              <span>Thiết kế xanh rêu trang nhã, đóng gói hộp cao cấp làm quà tặng sang trọng</span>
            </li>
          </ul>

          <div className="pt-3">
            <a
              href="#dat-hang"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#fd651e] text-[#ffffff] font-bold text-base hover:bg-[#a73a00] transition-all transform hover:-translate-y-0.5 shadow-xl"
            >
              <Gift className="w-5 h-5" />
              <span>ĐẶT HÀNG LÀM QUÀ TẶNG NGAY</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
