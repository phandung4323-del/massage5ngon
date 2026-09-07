import React from 'react';

export const TechSpecsSection: React.FC = () => {
  const specs = [
    { label: 'Tên sản phẩm', value: 'Máy Massage Cổ Vai Gáy 5 Ngón KOKORO™' },
    { label: 'Kiểu massage', value: 'Day – Ấn – Bóp mô phỏng bàn tay người' },
    { label: 'Đầu massage', value: 'Cấu trúc 5 ngón sinh học Silicone cao cấp đàn hồi' },
    { label: 'Vùng tác động', value: 'Cổ – Gáy – Vai – Bả vai – Lưng – Bắp đùi' },
    { label: 'Chức năng bổ trợ', value: 'Chườm nóng hồng ngoại NTC hằng nhiệt 42°C' },
    { label: 'Giao diện điều khiển', value: 'Nút bấm cơ học một chạm trực quan chống nhầm' },
    { label: 'Cổng sạc & Nguồn', value: 'Cáp sạc Type-C USB đa năng (Pin Lithium 2000mAh)' },
    { label: 'Trọng lượng tịnh', value: 'Khoảng 0.76 kg (Siêu nhẹ, không mỏi cổ)', highlight: true },
    {
      label: 'Màu sắc & Chất liệu',
      value: 'Xanh Rêu Olive phối da nâu cao cấp, vải dệt tổ ong kháng khuẩn thoáng khí',
      fullWidth: true,
    },
    {
      label: 'Chế độ an toàn',
      value: 'Tự động ngắt thông minh sau 15 phút, chống quá nhiệt, chống quá tải dòng điện',
      fullWidth: true,
    },
  ];

  return (
    <section className="w-full bg-[#fcf9f3] py-16 lg:py-24 border-b border-[#e5e2dc]/60" id="thong-so">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#a73a00] uppercase tracking-widest block mb-2">
            Chi Tiết Sản Phẩm
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            THÔNG SỐ KỸ THUẬT CHUẨN XÁC
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-[#ffffff] rounded-3xl p-6 sm:p-10 shadow-lg border border-[#e5e2dc]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl bg-[#f6f3ed] border border-[#e5e2dc] flex flex-col justify-center ${
                  spec.fullWidth ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="text-xs text-[#727973] font-semibold mb-1">
                  {spec.label}
                </span>
                <span
                  className={`text-sm sm:text-base font-bold ${
                    spec.highlight ? 'text-[#fd651e]' : 'text-[#072417]'
                  }`}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
