import React from 'react';
import { OrderData } from '../types';
import { CheckCircle, X, Package, PhoneCall, Calendar, Truck, ShieldCheck } from 'lucide-react';

interface OrderSuccessModalProps {
  order: OrderData | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const formatVND = (num: number) => num.toLocaleString('vi-VN') + 'đ';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#ffffff] shadow-2xl border border-[#e5e2dc] p-6 sm:p-8 flex flex-col gap-5 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#727973] hover:text-[#072417] hover:bg-[#f0eee8] transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-[#caead4] text-[#0c3c25] flex items-center justify-center shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c3c25] bg-[#bceecc] px-3 py-1 rounded-full">
            Đặt Hàng Thành Công!
          </span>
          <h3 className="text-2xl font-extrabold text-[#072417]">
            Cảm Ơn Quý Khách
          </h3>
          <p className="text-xs sm:text-sm text-[#424843]">
            Mã đơn hàng của bạn là:{' '}
            <strong className="text-[#fd651e] text-base font-mono font-extrabold bg-[#ffdbce] px-2 py-0.5 rounded">
              {order.id}
            </strong>
          </p>
        </div>

        {/* Order Details Card */}
        <div className="p-4 rounded-2xl bg-[#f6f3ed] border border-[#e5e2dc] flex flex-col gap-2.5 text-xs sm:text-sm">
          <div className="flex justify-between">
            <span className="text-[#727973]">Người nhận:</span>
            <span className="font-bold text-[#072417]">{order.customerName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#727973]">Số điện thoại:</span>
            <span className="font-bold text-[#072417]">{order.phoneNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#727973]">Địa chỉ giao:</span>
            <span className="font-medium text-[#072417] text-right max-w-[240px] truncate">
              {order.address}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#727973]">Sản phẩm:</span>
            <span className="font-semibold text-[#072417]">
              Máy Massage 5 Ngón KOKORO™ (x{order.quantity})
            </span>
          </div>
          <div className="flex justify-between pt-2 border-t border-[#e5e2dc] text-sm">
            <span className="font-bold text-[#072417]">Tổng thanh toán (COD):</span>
            <span className="font-extrabold text-base text-[#fd651e]">
              {formatVND(order.totalAmount)}
            </span>
          </div>
        </div>

        {/* Next Steps Reminder */}
        <div className="flex flex-col gap-2 bg-[#f0eee8] p-3.5 rounded-2xl border border-[#e5e2dc] text-xs text-[#424843]">
          <div className="flex items-center gap-2 font-bold text-[#072417]">
            <PhoneCall className="w-4 h-4 text-[#fd651e]" />
            <span>Chuyên viên KOKORO™ sẽ liên hệ trong 15-30 phút để xác nhận.</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#0c3c25]" />
            <span>Miễn phí giao hàng tận tay trong 24-48 giờ tới.</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0c3c25]" />
            <span>Đồng kiểm thoải mái trước khi thanh toán.</span>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-full bg-[#072417] hover:bg-[#1e3a2b] text-white font-bold text-sm transition-all shadow-md"
        >
          Hoàn Tất &amp; Tiếp Tục Xem
        </button>
      </div>
    </div>
  );
};
