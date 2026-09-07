import React, { useState } from 'react';
import { IMAGES, PRICING } from '../data';
import { OrderData } from '../types';
import { ShieldCheck, CheckCircle2, Gift, Truck, AlertCircle } from 'lucide-react';

interface OrderFormSectionProps {
  onOrderSuccess: (order: OrderData) => void;
}

export const OrderFormSection: React.FC<OrderFormSectionProps> = ({ onOrderSuccess }) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Calculations
  const unitPrice = PRICING.salePrice;
  const rawTotal = quantity * unitPrice;
  // Multi-buy discount: buy 2 or more gets 50k off
  const multiBuyDiscount = quantity >= 2 ? PRICING.doubleDiscount : 0;
  const finalTotal = rawTotal - multiBuyDiscount;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!customerName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
    if (!cleanPhone || cleanPhone.length < 9 || !/^[0-9+]+$/.test(cleanPhone)) {
      setErrorMessage('Vui lòng nhập số điện thoại hợp lệ để nhân viên gọi xác nhận.');
      return;
    }
    if (!address.trim()) {
      setErrorMessage('Vui lòng nhập địa chỉ nhận hàng chi vị.');
      return;
    }

    // Generate readable random order ID
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const newOrder: OrderData = {
      id: `RLV-${randomSuffix}`,
      customerName: customerName.trim(),
      phoneNumber: cleanPhone,
      address: address.trim(),
      quantity,
      notes: notes.trim(),
      totalAmount: finalTotal,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    onOrderSuccess(newOrder);

    // Reset form fields
    setCustomerName('');
    setPhoneNumber('');
    setAddress('');
    setNotes('');
    setQuantity(1);
  };

  const formatVND = (num: number) => {
    return num.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <section className="w-full bg-[#fcf9f3] py-16 lg:py-24 scroll-mt-20 border-b border-[#e5e2dc]/60" id="dat-hang">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-[#a73a00] uppercase tracking-widest block mb-2">
            Điền Thông Tin Nhận Hàng
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            ĐẶT HÀNG NGAY – CHỈ {formatVND(PRICING.salePrice)}
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#0c3c25] mt-1.5 flex items-center justify-center gap-2">
            <Truck className="w-5 h-5 text-[#fd651e]" />
            <span>🚚 MIỄN PHÍ SHIP TOÀN QUỐC • GIAO TẬN TAY</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Form Inputs Column */}
          <div className="lg:col-span-7 bg-[#ffffff] p-6 sm:p-8 rounded-3xl shadow-xl border border-[#e5e2dc] flex flex-col gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-[#ffdad6] text-[#ba1a1a] text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#072417]">
                  Họ và tên của bạn <span className="text-[#ba1a1a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full px-4 py-3 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-[#1c1c18] focus:outline-none focus:border-[#072417] focus:bg-white text-sm sm:text-base transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#072417]">
                  Số điện thoại nhận hàng <span className="text-[#ba1a1a]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Ví dụ: 0988 123 456"
                  className="w-full px-4 py-3 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-[#1c1c18] focus:outline-none focus:border-[#072417] focus:bg-white text-sm sm:text-base transition-all"
                />
              </div>

              {/* Shipping Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#072417]">
                  Địa chỉ chi tiết <span className="text-[#ba1a1a]">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-[#1c1c18] focus:outline-none focus:border-[#072417] focus:bg-white text-sm sm:text-base transition-all resize-none"
                />
              </div>

              {/* Quantity Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#072417]">
                  Số lượng sản phẩm
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-[#f0eee8] rounded-xl p-1 border border-[#e5e2dc]">
                    <button
                      type="button"
                      onClick={handleDecrease}
                      className="w-10 h-10 rounded-lg bg-white text-[#072417] flex items-center justify-center font-bold text-lg hover:bg-[#ebe8e2] transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-lg text-[#072417]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={handleIncrease}
                      className="w-10 h-10 rounded-lg bg-white text-[#072417] flex items-center justify-center font-bold text-lg hover:bg-[#ebe8e2] transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-medium text-[#424843]">
                      {quantity >= 2 ? (
                        <span className="text-[#a73a00] font-bold flex items-center gap-1">
                          <Gift className="w-3.5 h-3.5" />
                          Đã kích hoạt: Giảm 50k &amp; Tặng quà!
                        </span>
                      ) : (
                        'Mua từ 2 chiếc giảm thêm 50.000đ!'
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#072417]">
                  Ghi chú giao hàng (nếu có)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ví dụ: Giao sau 17h, gọi trước khi giao..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-[#1c1c18] focus:outline-none focus:border-[#072417] focus:bg-white text-sm transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#fd651e] text-white font-extrabold text-base sm:text-lg shadow-[0_10px_25px_-5px_rgba(253,101,30,0.5)] hover:bg-[#a73a00] transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-2"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>XÁC NHẬN ĐẶT HÀNG NGAY</span>
              </button>
            </form>
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#f6f3ed] p-6 rounded-3xl border border-[#e5e2dc] flex flex-col gap-5 shadow-sm">
              <h3 className="text-lg font-bold text-[#072417]">
                Tóm Tắt Đơn Hàng
              </h3>

              <div className="flex items-center gap-4 pb-4 border-b border-[#e5e2dc]">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white border border-[#e5e2dc] shrink-0">
                  <img
                    src={IMAGES.orderThumb}
                    alt="Sản phẩm máy massage mini"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#072417] leading-snug">
                    Máy Massage 5 Ngón KOKORO™
                  </h4>
                  <p className="text-xs text-[#727973] mt-0.5">
                    Bản công thái học kèm sạc USB • Số lượng: <strong>{quantity}</strong>
                  </p>
                  <span className="text-base font-extrabold text-[#fd651e] block mt-1">
                    {formatVND(unitPrice)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#424843]">Tạm tính ({quantity} máy):</span>
                  <span className="font-bold text-[#072417]">
                    {formatVND(rawTotal)}
                  </span>
                </div>

                {multiBuyDiscount > 0 && (
                  <div className="flex justify-between text-[#a73a00]">
                    <span>Ưu đãi mua từ 2 máy:</span>
                    <span className="font-bold">-{formatVND(multiBuyDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-[#424843]">Phí giao hàng:</span>
                  <span className="font-bold text-[#0c3c25] bg-[#caead4] px-2 py-0.5 rounded text-xs">
                    0đ (MIỄN PHÍ TOÀN QUỐC)
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-3 border-t border-[#e5e2dc]">
                  <span className="font-bold text-base text-[#072417]">
                    TỔNG THANH TOÁN:
                  </span>
                  <span className="text-2xl font-extrabold text-[#fd651e]">
                    {formatVND(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="p-3.5 rounded-xl bg-white border border-[#e5e2dc] flex items-center gap-3 text-[#424843] text-xs">
                <ShieldCheck className="w-5 h-5 text-[#0c3c25] shrink-0" />
                <span>
                  Được kiểm tra máy trước khi thanh toán. Không ưng ý hoàn trả 0đ phí phát sinh.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
