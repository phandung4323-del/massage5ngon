import React from 'react';

export const TargetAudienceSection: React.FC = () => {
  const audiences = [
    {
      emoji: '👨‍💻',
      title: 'Dân Văn Phòng',
      desc: 'Ngồi máy tính 8-10 tiếng/ngày, cổ vai thường xuyên đau mỏi.',
    },
    {
      emoji: '🚗',
      title: 'Tài Xế & Lái Xe',
      desc: 'Cần thư giãn tức thì sau những cung đường xa mệt mỏi.',
    },
    {
      emoji: '🪑',
      title: 'Người Ngồi Lâu',
      desc: 'Người ít vận động, học sinh - sinh viên ôn thi dài giờ.',
    },
    {
      emoji: '📱',
      title: 'Dùng Điện Thoại',
      desc: 'Thói quen cúi đầu xem điện thoại khiến cổ gáy chịu tải lớn.',
    },
    {
      emoji: '🏠',
      title: 'Chăm Sóc Gia Đình',
      desc: 'Muốn chủ động chăm sóc sức khỏe tại gia tiết kiệm chi phí.',
    },
  ];

  return (
    <section className="w-full bg-[#fcf9f3] py-16 lg:py-24 border-b border-[#e5e2dc]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#0c3c25] uppercase tracking-widest block mb-2">
            Thiết Bị Của Mọi Nhà
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            AI NÊN SỞ HỮU MỘT CHIẾC?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#f0eee8] border border-[#e5e2dc] flex flex-col items-center text-center gap-2.5 transition-all hover:bg-white hover:shadow-md hover:-translate-y-1"
            >
              <span className="text-4xl my-1">{item.emoji}</span>
              <h4 className="font-bold text-base text-[#072417]">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#424843] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
