import React from 'react';
import { Hand, Activity, RotateCcw, Volume2 } from 'lucide-react';

export const InternalMechanismSection: React.FC = () => {
  const cards = [
    {
      icon: <Hand className="w-8 h-8 text-[#ffdbce]" />,
      title: 'Đầu Ngón Tay Sinh Học',
      desc: 'Kích thích chính xác các điểm thụ cảm trên vùng gáy mà không gây bầm dập mô mềm.',
    },
    {
      icon: <Activity className="w-8 h-8 text-[#ffdbce]" />,
      title: 'Động Lực Cổ Tay',
      desc: 'Trục xoay lệch tâm tạo biên độ nhịp nhàng như lực vỗ bàn tay của kỹ thuật viên.',
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-[#ffdbce]" />,
      title: 'Khớp Nối Vai Cực Êm',
      desc: 'Hỗ trợ góc nghiêng linh hoạt, tự ôm sát mọi kích cỡ cổ người dùng từ gầy đến đầy đặn.',
    },
    {
      icon: <Volume2 className="w-8 h-8 text-[#ffdbce]" />,
      title: 'Động Cơ Giảm Âm',
      desc: 'Hoạt động êm ái dưới 45dB, bạn có thể vừa thư giãn vừa đọc sách, làm việc hoặc xem TV.',
    },
  ];

  return (
    <section className="w-full bg-[#072417] text-[#ffffff] py-16 lg:py-24 border-b border-[#1e3a2b]">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold text-[#caead4] uppercase tracking-widest block mb-2">
            Biomechanical Precision
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#fcf9f3] tracking-tight leading-tight">
            BÊN TRONG LÀ CƠ CHẾ MASSAGE ĐƯỢC THIẾT KẾ ĐỂ TẠO CẢM GIÁC DAY BÓP
          </h2>
          <p className="text-sm sm:text-base text-[#85a490] mt-3">
            Động cơ lõi đồng hiệu suất cao kết hợp cụm trục xoay bánh răng giảm tốc mang lại lực mô-men xoắn mạnh mẽ nhưng êm ái tuyệt đối.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1e3a2b] text-[#ffffff] border-t-4 border-[#caead4] flex flex-col gap-3 shadow-md hover:bg-[#254635] transition-colors"
            >
              <div>{card.icon}</div>
              <h4 className="text-lg font-bold text-white mt-1">
                {card.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#85a490] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
