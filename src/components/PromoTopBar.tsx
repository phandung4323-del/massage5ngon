import React, { useState, useEffect } from 'react';
import { Truck, Clock, ShieldCheck } from 'lucide-react';

export const PromoTopBar: React.FC = () => {
  // Flash sale countdown timer (e.g., remaining time today)
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full bg-[#072417] text-[#ffffff] py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
      <div className="max-w-[75rem] mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 mx-auto sm:mx-0">
          <Truck className="w-4 h-4 text-[#fd651e] shrink-0" />
          <span>
            🚚 ĐẶC QUYỀN HÔM NAY:{' '}
            <strong className="text-[#ffb599]">MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</strong> • KIỂM TRA HÀNG TRƯỚC KHI THANH TOÁN
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 mx-auto sm:mx-0 text-xs">
          <div className="flex items-center gap-1 text-[#aeceb9]">
            <Clock className="w-3.5 h-3.5 text-[#fd651e]" />
            <span>Ưu đãi kết thúc sau:</span>
          </div>
          <div className="flex items-center gap-1 font-mono font-bold">
            <span className="bg-[#1e3a2b] px-1.5 py-0.5 rounded text-white border border-[#304d3d]">
              {formatDigit(timeLeft.hours)}
            </span>
            <span>:</span>
            <span className="bg-[#1e3a2b] px-1.5 py-0.5 rounded text-white border border-[#304d3d]">
              {formatDigit(timeLeft.minutes)}
            </span>
            <span>:</span>
            <span className="bg-[#1e3a2b] px-1.5 py-0.5 rounded text-white border border-[#304d3d]">
              {formatDigit(timeLeft.seconds)}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-[#bceecc]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Bảo hành 24T</span>
          </div>
        </div>
      </div>
    </div>
  );
};
