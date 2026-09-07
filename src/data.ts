import { FaqItem, ReviewItem } from './types';

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Q0jr0idmLibR90T7Jc8x340naaQtubIWbSr16NIx9KConf7Y3vJs7t1IA10LC6lvXPfOk5FaYgeA6urBkW_3npQQ2FIA5QrJV9ZVz3jJ8DgDP6IIifI7ddZy-qgygmAeslGMS8ksglbeHPrN-b4gcEp5XW3voo_nX_iH97g08v_pZlqhsXllBL2Jyd_pZBlMuF_nbmhRPLJFoxH3FxoAyMahBLrulEn49E2dP5C5EYb4hAWVqpPrzPPSVz48noxpOEU',
  productGreen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKadODxbmbVGSxVvPsFLXoYjthX7kecE2fqxjPP_UblKagC5YtvIssNYMhJKZozlWe1rFX55pBQBTijKqyAB_w2oer2ud4EKPs9Xs7PJFqnKWJY0QnTHuhu9cybw8q7deJqJKutpIKFBR-Ip3XDa6zhWWfbKpkAQIBbBISp3Vgo9U9MyYgE7Nkyjz2tPMhH92nPhqxNIUGVtAK05mx335vw0LpIz5HG20TrDzXXOGc8mTTi1rFcYxE8AHJR6sq0pzQH5Y',
  mechanismDetail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYLM8KGyTGia5kzb1qcMKoP_S5XA8elM30lTXBMLdpZq8LZc0MmWDFB8xAjCu3hPoNI4vyWkVtazPBUfOOThJm4cI7dvo4q3RReQ2UG0iY-lQUQwEP5JGXgR1s9RVa_4SEf7n7TKChHPoy86ultvEmsYLZQsOjTAaRUvo7PSbuIAGPMQjkj9gekC5vIJSBihcG60ArgpUwBnFvDFOTEVuqXkdCVXHHN_qmyKHh1PJgXOMQs2M4w6lV4AsBnse3nm5LhRw',
  thermalInternal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoUKR9yZsPBAd4LrfTnEW7d_W1Ei1gO8IFyIk_qeGCGzSB9RbaCpbouAQs3pbQknWf-iayTxkSxbhQFv-90N0r7Nq_6afOKsDhl9sOEua3y6Tny2vSvFrXIyJ9bd7zIJ5AOHlxFxQbZQks4q6cuKTw9noccR9K5Q03y0KDLrWtDNBqGNH5iQJMJAi9djMVJj1xRD0_Sh2Dh1V043H0lVpy7Jhm45-A-y_zenj58pKY6Fck7N6LNhzMrUkK35I1L4dgnhE',
  benefitsUpgrade: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB80qbuqO5lY7gOCBY5TgkBjNXxsZUrVOznN_wQd2a3F_w5c7DEfJD7NBFNssukc0we97C22HYNlaYlDHaNeq7JAvZgdMR7NGb2dsUxytagK8Sxujr-fjaXnGh4jbUDzHJZXZ0bxbeY7lJ5l0HcBoByY6lnn3HOA_fd97ciXRyF-ZDn_ZPnxKHNOvDh2sPL2LFLi-Y5LNJXOrXX47VLolbOvpb8rds5y2DYb9d4vw2n2xNTkXkU1cTtt5SMu2aODQftgd8',
  giftFamily: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-cGA_OIqfvA7WhdEUPjrhw7602cbMqD2g49V_tPPLX60d_VlR0u6EM81cRtaRzLcZO4TzTBeb1_SgCSsg9PHTbQAIu375adOrZ2iS7CenDXy0b-Iy7TKwaCAxX5S8q6oxFytx1fmusYVCbFPZexFS6ni_vzcazwGLLEBV15kCOLWs8cuOoxA8XKeEj19Ej6TIMDq_RKhcXs1QNY8N7OBiSO17j_iVHc8L62Sl28eSFooBDfO2BoDyLY3lD_hfwlc1bwY',
  orderThumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATeWxQGkfMZTNDpQ0r85LpSk1ysnA43qE7eiuRqdm_8q2w0nAkw5v7wUobddUTAw6e0b0VklOk-fHrn5SHdN060kPLabD3Eci3yZXB0WfK1pBdfcduByl6ryUQt7i_sI6V3_s5oSAY7ndAP6y7jkT3s828cBwIizP3rJjr6AYlsQcVKPD3BIxr_ZbqKn65RXTJnVM9-0CMZb1YOhXZlgYNEZ3HWdTa3nLb1XQq4aG1tedZZOfU2cIwR487fIVnKo2dv-4',
  closingRelax: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdEiL2BTNZmOj-XrpQFG3rAVJHxrP4piT3xeqpBZi9XqGhtQInafna_ulXJeLle3CuJ-EB-BAcbbxb0Uw41_m8WJGdosA-4yDrZpQk6xDekWdGT8fojH5p7vG182-AagVE3oGqqfqaJqNd1VYOvIyIdSlbSqrL_8OqJudfNwP5MT9xxM_gxAKVAZrFHuVMvE9lhAj9nVtSWwZksLQo3RV4YQ-agZfmQC2_xYkr-tMuU1tFDw7Zx6LPUKWm9sU3GhAkB6w',
};

export const PRICING = {
  originalPrice: 650000,
  salePrice: 299000,
  currency: 'đ',
  discountPercentage: '-54%',
  doubleDiscount: 50000, // discount when buying 2
};

export const FAQS: FaqItem[] = [
  {
    question: 'Máy có chế độ massage như thế nào?',
    answer:
      'Máy được lập trình chu trình mô phỏng các thao tác Day, Ấn và Bóp xen kẽ nhịp nhàng với 2 mức cường độ (Êm ái - Chuyên sâu). Bạn có thể dễ dàng bật hoặc tắt chế độ nhiệt ấm chỉ bằng một nút bấm đơn giản.',
  },
  {
    question: 'Chức năng nhiệt ấm có làm nóng quá mức không?',
    answer:
      'Không. Máy tích hợp cảm biến nhiệt độ thông minh NTC duy trì ổn định ở mức 42°C – đây là mức nhiệt lý tưởng an toàn cho biểu bì da, tạo cảm giác êm ấm dễ chịu như chườm khăn nóng trị liệu y khoa.',
  },
  {
    question: 'Máy dùng pin sạc hay cắm điện trực tiếp?',
    answer:
      'Máy sử dụng cổng sạc USB Type-C tiện dụng, tích hợp pin lithium dung lượng cao 2000mAh, cho phép sử dụng không dây tự do từ 6 đến 8 chu trình massage (mỗi lần 15 phút) sau mỗi lần sạc đầy.',
  },
  {
    question: 'Người lớn tuổi có dễ sử dụng không?',
    answer:
      'Cực kỳ dễ sử dụng! Máy chỉ gồm các nút bấm nổi xúc giác trực quan, thao tác một chạm là máy tự chạy theo chu trình tối ưu sẵn 15 phút rồi tự động ngắt an toàn.',
  },
  {
    question: 'Tôi có được kiểm tra hàng trước khi thanh toán không?',
    answer:
      'Có 100%! Khách hàng được quyền mở hộp đồng kiểm đúng mẫu mã, màu sắc máy massage 5 ngón trước khi gửi tiền cho shipper. Nếu không đúng cam kết, khách hàng có quyền từ chối nhận hàng mà không tốn bất kỳ chi phí nào.',
  },
  {
    question: 'Chính sách bảo hành sản phẩm ra sao?',
    answer:
      'Sản phẩm được bảo hành chính hãng 24 tháng, lỗi 1 đổi 1 trong 30 ngày đầu tiên nếu có bất kỳ trục trặc nào từ nhà sản xuất. Thẻ bảo hành điện tử đi kèm trong mỗi hộp sản phẩm.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Nguyễn Thu Hà',
    location: 'Cầu Giấy, Hà Nội',
    rating: 5,
    timeAgo: '1 ngày trước',
    comment:
      'Mình làm văn phòng 8 tiếng ngồi máy tính, cổ lúc nào cũng căng cứng như đá. Mua máy này về dùng thử sau giờ làm mà mê luôn, cảm giác 5 ngón bóp vào cơ gáy đúng điểm nhức mỏi chứ không hề trượt như mấy loại bi lăn ngày xưa. Nhiệt ấm 42 độ cực kỳ dễ chịu!',
    colorBought: 'Xanh Rêu Olive',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Trần Văn Mạnh',
    location: 'Quận 7, TP. Hồ Chí Minh',
    rating: 5,
    timeAgo: '2 ngày trước',
    comment:
      'Tôi làm tài xế lái xe đường dài, mỗi lần về nhà bả vai mỏi rã rời. Con gái đặt cho chiếc máy này dùng được 1 tuần thấy đỡ hẳn. Máy nhẹ đeo quanh cổ không mỏi, sạc Type C cắm vào sạc dự phòng trên xe cực kỳ tiện. Đáng đồng tiền bát gạo.',
    colorBought: 'Xám Bạc Hiện Đại',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Lê Thị Phương Thảo',
    location: 'Hải Châu, Đà Nẵng',
    rating: 5,
    timeAgo: '3 ngày trước',
    comment:
      'Giao hàng nhanh trong 2 ngày, được bóc hàng kiểm tra kỹ lưỡng trước khi trả tiền cho anh shipper. Đóng hộp rất xịn xò, tặng mẹ nhân dịp sinh nhật mà mẹ khen tấm tắc vì nút bấm to dễ hiểu, mẹ bị đau vai gáy mất ngủ nay tối nào cũng tự bấm 15 phút trước khi đi ngủ.',
    colorBought: 'Xanh Rêu Olive',
    verified: true,
  },
];

export const RECENT_BUYERS = [
  { name: 'Chị Mai Lan', address: 'Hoàn Kiếm, Hà Nội', qty: 1, time: 'Vừa xong' },
  { name: 'Anh Hoàng Nam', address: 'Quận 3, TP.HCM', qty: 2, time: '1 phút trước' },
  { name: 'Cô Bích Thủy', address: 'Ngô Quyền, Hải Phòng', qty: 1, time: '3 phút trước' },
  { name: 'Anh Quốc Bảo', address: 'Thanh Khê, Đà Nẵng', qty: 1, time: '5 phút trước' },
  { name: 'Chị Ngọc Ánh', address: 'Biên Hòa, Đồng Nai', qty: 2, time: '8 phút trước' },
];
