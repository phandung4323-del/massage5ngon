import React from 'react';
import { Laptop, Car, Smartphone, MoonStar, AlertCircle, Clock } from 'lucide-react';

export const PainPointsSection: React.FC = () => {
  const painCards = [
    {
      icon: <Laptop className="w-6 h-6 text-[#072417]" />,
      emoji: '💻',
      title: 'Ngồi Máy Tính Nhiều Giờ',
      desc: 'Giữ một tư thế quá lâu khiến vùng cơ thang cổ và hai bên bả vai luôn trong trạng thái căng cứng, giảm tuần hoàn oxy đến não.',
      alertText: 'Gây mỏi cơ & đau nửa đầu',
      alertType: 'error',
    },
    {
      icon: <Car className="w-6 h-6 text-[#072417]" />,
      emoji: '🚗',
      title: 'Lái Xe Đường Dài',
      desc: 'Tập trung cao độ và rung lắc liên tục khiến các dây chằng vai gáy co rút, gây nhức mỏi dai dẳng sau mỗi hành trình di chuyển dài.',
      alertText: 'Tê cứng bả vai và gáy',
      alertType: 'error',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#072417]" />,
      emoji: '📱',
      title: 'Dùng Điện Thoại Thường Xuyên',
      desc: 'Góc cúi nhìn màn hình 45 - 60 độ đè nặng sức tải tương đương 27kg lên các đĩa đệm, lâu ngày hình thành bướu mỡ cổ trâu và thoái hóa.',
      alertText: 'Áp lực quá tải đốt sống cổ',
      alertType: 'error',
    },
    {
      icon: <MoonStar className="w-6 h-6 text-[#072417]" />,
      emoji: '😩',
      title: 'Cuối Ngày Muốn Được Massage',
      desc: 'Sau 8-10 tiếng làm việc căng thẳng, bạn kiệt sức nhưng không phải lúc nào cũng có sẵn thời gian đến spa hay làm phiền người thân day bóp.',
      alertText: 'Thiếu giải pháp tại chỗ',
      alertType: 'secondary',
    },
  ];

  return (
    <section className="w-full bg-[#f6f3ed] py-16 lg:py-24 border-b border-[#e5e2dc]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#a73a00] uppercase tracking-widest block mb-2">
            Báo Động Cột Sống Cổ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#072417] tracking-tight">
            CỔ VAI GÁY CỦA BẠN CÓ ĐANG QUÁ MỆT MỎI?
          </h2>
          <p className="text-base sm:text-lg text-[#424843] mt-3">
            Thói quen sinh hoạt văn phòng hiện đại và nhịp sống số đang âm thầm tạo áp lực gấp 4 lần lên các đốt sống cổ mỗi ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#ffffff] border border-[#e5e2dc] shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ebe8e2] flex items-center justify-center text-2xl">
                {card.emoji}
              </div>
              <h3 className="text-lg font-bold text-[#072417] leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-[#424843] leading-relaxed flex-grow">
                {card.desc}
              </p>
              <div
                className={`text-xs font-bold mt-auto flex items-center gap-1.5 pt-3 border-t border-[#f0eee8] ${
                  card.alertType === 'error' ? 'text-[#ba1a1a]' : 'text-[#a73a00]'
                }`}
              >
                {card.alertType === 'error' ? (
                  <AlertCircle className="w-4 h-4 shrink-0" />
                ) : (
                  <Clock className="w-4 h-4 shrink-0" />
                )}
                <span>{card.alertText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#072417] text-[#ffffff] text-center max-w-2xl mx-auto shadow-xl border border-[#1e3a2b]">
          <p className="text-xs font-bold uppercase tracking-widest text-[#85a490] mb-1">
            Đừng Cam Chịu Cơn Đau Thêm Nữa
          </p>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#fcf9f3]">
            GIỜ ĐÂY, BẠN CÓ THỂ CHỦ ĐỘNG THƯ GIÃN NGAY TẠI NHÀ.
          </h3>
        </div>
      </div>
    </section>
  );
};
