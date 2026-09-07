import React, { useState } from 'react';
import { OrderData } from '../types';
import { Search, X, Package, Clock, CheckCircle, Truck } from 'lucide-react';

interface OrderLookupModalProps {
  orders: OrderData[];
  onClose: () => void;
}

export const OrderLookupModal: React.FC<OrderLookupModalProps> = ({ orders, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const filteredOrders = orders.filter((order) => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return false;
    return (
      order.id.toLowerCase().includes(term) ||
      order.phoneNumber.includes(term) ||
      order.customerName.toLowerCase().includes(term)
    );
  });

  const formatVND = (num: number) => num.toLocaleString('vi-VN') + 'đ';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#ffffff] shadow-2xl border border-[#e5e2dc] p-6 sm:p-8 flex flex-col gap-5 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#727973] hover:text-[#072417] hover:bg-[#f0eee8] transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <h3 className="text-xl font-bold text-[#072417] flex items-center gap-2">
            <Search className="w-5 h-5 text-[#fd651e]" />
            <span>Tra Cứu Đơn Hàng Của Bạn</span>
          </h3>
          <p className="text-xs text-[#424843] mt-1">
            Nhập số điện thoại đặt hàng hoặc mã đơn (Ví dụ: RLV-...) để xem tiến trình.
          </p>
        </div>

        {/* Search input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setHasSearched(true);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setHasSearched(false);
            }}
            placeholder="Nhập SĐT hoặc Mã đơn..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] text-sm text-[#1c1c18] focus:outline-none focus:border-[#072417] focus:bg-white"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#072417] hover:bg-[#1e3a2b] text-white text-sm font-bold transition-colors"
          >
            Tìm kiếm
          </button>
        </form>

        {/* Results */}
        <div className="flex flex-col gap-3 pt-2">
          {searchTerm.trim() ? (
            filteredOrders.length > 0 ? (
              filteredOrders.map((ord) => (
                <div
                  key={ord.id}
                  className="p-4 rounded-2xl bg-[#f6f3ed] border border-[#e5e2dc] flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-sm text-[#072417] bg-[#ebe8e2] px-2.5 py-1 rounded-lg">
                      {ord.id}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0c3c25] bg-[#caead4] px-2.5 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5" />
                      Đang xử lý xuất kho
                    </span>
                  </div>

                  <div className="text-xs text-[#424843] flex flex-col gap-1">
                    <p>
                      <strong>Khách hàng:</strong> {ord.customerName} - {ord.phoneNumber}
                    </p>
                    <p>
                      <strong>Địa chỉ:</strong> {ord.address}
                    </p>
                    <p>
                      <strong>Sản phẩm:</strong> Máy Massage 5 Ngón KOKORO™ (Số lượng: {ord.quantity})
                    </p>
                    <p className="pt-1 text-sm font-bold text-[#fd651e]">
                      Tổng tiền: {formatVND(ord.totalAmount)} (COD Freeship)
                    </p>
                  </div>

                  {/* Status track line */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#e5e2dc] text-[11px] text-[#727973]">
                    <div className="flex items-center gap-1 text-[#0c3c25] font-bold">
                      <CheckCircle className="w-3.5 h-3.5" /> Đã tiếp nhận
                    </div>
                    <div className="w-8 h-0.5 bg-[#caead4]" />
                    <div className="flex items-center gap-1 text-[#0c3c25] font-bold">
                      <Package className="w-3.5 h-3.5" /> Đóng gói
                    </div>
                    <div className="w-8 h-0.5 bg-[#e5e2dc]" />
                    <div className="flex items-center gap-1 text-[#727973]">
                      <Truck className="w-3.5 h-3.5" /> Giao hàng
                    </div>
                  </div>
                </div>
              ))
            ) : (
              hasSearched && (
                <div className="p-6 text-center text-xs sm:text-sm text-[#727973] bg-[#f6f3ed] rounded-2xl">
                  Không tìm thấy đơn hàng nào với thông tin "{searchTerm}". Vui lòng kiểm tra lại số điện thoại đã nhập.
                </div>
              )
            )
          ) : orders.length > 0 ? (
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#727973]">
                Các đơn hàng bạn đã tạo gần đây ({orders.length}):
              </span>
              {orders.slice(0, 3).map((ord) => (
                <div
                  key={ord.id}
                  className="p-3 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-[#072417] block">{ord.id}</span>
                    <span className="text-[#727973]">
                      {ord.customerName} • {formatVND(ord.totalAmount)}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#0c3c25] bg-[#caead4] px-2 py-0.5 rounded-full">
                    Đang chuẩn bị hàng
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-xs sm:text-sm text-[#727973] bg-[#f6f3ed] rounded-2xl">
              Bạn chưa có đơn hàng nào trong phiên này. Hãy đặt thử ngay một đơn để trải nghiệm!
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-full bg-[#f0eee8] hover:bg-[#ebe8e2] text-[#072417] text-xs font-bold transition-colors mt-2"
        >
          Đóng cửa sổ
        </button>
      </div>
    </div>
  );
};
