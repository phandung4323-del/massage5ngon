import React from 'react';
import { Briefcase, Car, Moon, Quote } from 'lucide-react';

export const LifestyleSection: React.FC = () => {
  const scenarios = [
    {
      icon: <Briefcase className="w-6 h-6 text-[#072417]" />,
      emoji: '💼',
      tag: '15 Phút Giờ Nghỉ Trưa',
      title: 'Sau Giờ Làm Việc',
      quote:
        'Thư giãn sau nhiều giờ tập trung cao độ trước màn hình máy tính, nạp lại năng lượng cho buổi chiều tỉnh táo.',
    },
    {
      icon: <Car className="w-6 h-6 text-[#072417]" />,
      emoji: '🚗',
      tag: 'Điểm Dừng Chân',
      title: 'Sau Chuyến Lái Xe',
      quote:
        'Dành 10-15 phút nghỉ ngơi giải phóng vùng cơ vai gáy bị co cứng do cầm vô lăng nhiều giờ liên tục.',
    },
    {
      icon: <Moon className="w-6 h-6 text-[#072417]" />,
      emoji: '🌙',
      tag: 'Khoảng Lặng Buổi Tối',
      title: 'Trước Khi Đi Ngủ',
      quote:
        'Massage nhẹ nhàng kết hợp chườm ấm giúp tinh thần dịu lại, đưa bạn vào giấc ngủ ngon và sâu hơn.',
    },
  ];

  return (
    <section className="w-full bg-[#f6f3ed] py-16 lg:py-24 border-b border-[#e5e2dc]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#a73a00] uppercase tracking-widest block mb-2">
            Ứng Dụng Hàng Ngày
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            MỘT THIẾT BỊ – NHIỀU KHOẢNH KHẮC THƯ GIÃN
          </h2>
          <p className="text-base sm:text-lg text-[#424843] mt-3">
            Không cần đặt lịch spa. Không cần chờ người khác massage. Chỉ cần bật máy và tận hưởng khoảng thời gian thư giãn của riêng bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e5e2dc] shadow-sm flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ebe8e2] flex items-center justify-center text-2xl">
                {item.emoji}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#a73a00]">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-[#072417] mt-1">
                  {item.title}
                </h3>
              </div>
              <div className="relative pt-2">
                <Quote className="w-5 h-5 text-[#fd651e]/30 mb-1" />
                <p className="text-sm text-[#424843] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
