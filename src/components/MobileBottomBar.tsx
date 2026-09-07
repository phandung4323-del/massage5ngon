import React from 'react';
import { ShoppingBag } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#e5e2dc] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] py-2.5 px-4">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-extrabold text-[#fd651e] tracking-tight">
              299.000đ
            </span>
            <span className="text-xs text-[#727973] line-through">
              650.000đ
            </span>
          </div>
          <span className="text-[10px] font-bold text-[#0c3c25] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0c3c25] inline-block" />
            Freeship &amp; Bảo hành 24T
          </span>
        </div>

        <a
          href="#dat-hang"
          className="flex-1 max-w-[200px] flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#fd651e] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(253,101,30,0.4)] hover:bg-[#a73a00] transition-all transform active:scale-95"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>MUA NGAY</span>
        </a>
      </div>
    </aside>
  );
};
