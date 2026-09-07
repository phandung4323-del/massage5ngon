import React from 'react';

export const MultiAreaSection: React.FC = () => {
  const zones = [
    {
      num: 1,
      title: 'Vùng Cổ',
      desc: 'Giải tỏa áp lực 7 đốt sống cổ C1-C7',
      highlight: false,
    },
    {
      num: 2,
      title: 'Vùng Gáy',
      desc: 'Ấn huyệt Phong Trì làm dịu cơn đau đầu',
      highlight: false,
    },
    {
      num: 3,
      title: 'Cơ Vai',
      desc: 'Xoa bóp cơ thang chống gù bó cơ',
      highlight: false,
    },
    {
      num: 4,
      title: 'Bả Vai',
      desc: 'Thư giãn khớp chuyển động hai cánh tay',
      highlight: false,
    },
    {
      num: 5,
      title: 'Lưng & Đùi',
      desc: 'Đa năng chườm ấm thư giãn cơ bắp chân',
      highlight: true,
    },
  ];

  return (
    <section className="w-full bg-[#fcf9f3] py-16 lg:py-24 border-b border-[#e5e2dc]/60">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#0c3c25] uppercase tracking-widest block mb-2">
            Bao Phủ Toàn Diện
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            KHÔNG CHỈ MASSAGE MỘT ĐIỂM
          </h2>
          <p className="text-xl font-bold text-[#424843] mt-2">
            THƯ GIÃN NHIỀU VÙNG CƠ CHỈ VỚI MỘT THIẾT BỊ
          </p>
          <p className="text-sm sm:text-base text-[#727973] mt-2">
            Thiết kế mở góc thông minh giúp người dùng linh hoạt xoa bóp nhiều vị trí khác nhau trên cơ thể mà không gặp bất kỳ vướng víu nào.
          </p>
        </div>

        {/* 5 Target Zones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {zones.map((zone) => (
            <div
              key={zone.num}
              className={`p-5 rounded-2xl flex flex-col items-center text-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md border ${
                zone.highlight
                  ? 'col-span-2 md:col-span-1 bg-[#ffdbce] text-[#7f2b00] border-[#ffb599]'
                  : 'bg-[#f0eee8] text-[#072417] border-[#e5e2dc]'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg shadow-sm ${
                  zone.highlight
                    ? 'bg-[#a73a00] text-white'
                    : 'bg-[#072417] text-white'
                }`}
              >
                {zone.num}
              </div>
              <h4 className="text-base sm:text-lg font-bold mt-1">
                {zone.title}
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${zone.highlight ? 'text-[#7f2b00]' : 'text-[#424843]'}`}>
                {zone.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
