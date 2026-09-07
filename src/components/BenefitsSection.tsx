import React from 'react';
import { IMAGES } from '../data';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'Thiết Kế 5 Ngón',
      desc: 'Mô phỏng bàn tay thật, day bóp dẻo dai tự nhiên.',
      accent: false,
    },
    {
      num: '02',
      title: 'Massage Đa Điểm',
      desc: 'Bao quát cổ, gáy, bả vai cùng lúc trong một lần bật.',
      accent: false,
    },
    {
      num: '03',
      title: 'Nhiệt Ấm Thông Minh',
      desc: 'Chườm nóng dịu êm, làm giãn cơ và giải tỏa mệt mỏi tức thì.',
      accent: true,
    },
    {
      num: '04',
      title: 'Điều Khiển Một Chạm',
      desc: 'Phím cơ nổi bên thân máy, người cao tuổi dùng dễ dàng.',
      accent: false,
    },
    {
      num: '05',
      title: 'Nhỏ Gọn Công Thái Học',
      desc: 'Dễ dàng mang đến công ty, lên ô tô hay đi công tác.',
      accent: false,
    },
    {
      num: '06',
      title: 'Chỉ Nặng 0,76 KG',
      desc: 'Trọng lượng lông vũ, đeo lên cổ không gây trĩu nặng.',
      accent: false,
    },
  ];

  return (
    <section className="w-full bg-[#fcf9f3] py-16 lg:py-24 border-b border-[#e5e2dc]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#a73a00] uppercase tracking-widest block mb-2">
            Lý Do Được Yêu Thích Hàng Đầu
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            PHIÊN BẢN NÂNG CẤP MỚI – 6 ƯU ĐIỂM NỔI BẬT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Center Showcase Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl bg-[#f0eee8] border-4 border-white">
            <img
              src={IMAGES.benefitsUpgrade}
              alt="Phiên bản nâng cấp mới với 6 ưu điểm nổi bật của máy massage cổ vai gáy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 6 Item Bento Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#f6f3ed] border border-[#e5e2dc] flex items-start gap-3.5 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-base ${
                    item.accent
                      ? 'bg-[#a73a00] text-white'
                      : 'bg-[#072417] text-white'
                  }`}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#072417]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
