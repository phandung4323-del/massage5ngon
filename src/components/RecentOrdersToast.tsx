import React, { useState, useEffect } from 'react';
import { RECENT_BUYERS } from '../data';
import { CheckCircle, X } from 'lucide-react';

export const RecentOrdersToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_BUYERS.length);
        setVisible(true);
      }, 500);
    }, 12000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const currentBuyer = RECENT_BUYERS[currentIndex];

  return (
    <div
      className={`fixed bottom-20 lg:bottom-6 left-4 z-40 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <div className="p-3 rounded-2xl bg-[#ffffff]/95 backdrop-blur-md shadow-xl border border-[#e5e2dc] flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#caead4] text-[#0c3c25] flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0 text-xs">
          <p className="font-bold text-[#072417] truncate">
            {currentBuyer.name} ({currentBuyer.address})
          </p>
          <p className="text-[#424843]">
            Vừa đặt <strong className="text-[#fd651e]">{currentBuyer.qty} máy massage 5 ngón</strong>
          </p>
          <span className="text-[10px] text-[#727973]">{currentBuyer.time}</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-full text-[#727973] hover:text-[#072417] transition-colors"
          aria-label="Tắt thông báo"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
