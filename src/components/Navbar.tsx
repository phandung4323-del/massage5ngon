import React, { useState } from 'react';
import { Phone, ShoppingBag, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenLookup: () => void;
  orderCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLookup, orderCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Đặc Điểm Vượt Trội', href: '#dac-diem' },
    { label: 'So Sánh Công Nghệ', href: '#so-sanh' },
    { label: 'Thông Số Kỹ Thuật', href: '#thong-so' },
    { label: 'Khách Hàng Đánh Giá', href: '#danh-gia' },
    { label: 'Ưu Đãi Hôm Nay', href: '#uu-dai' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#fcf9f3]/90 backdrop-blur-xl border-b border-[#e5e2dc]/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[75rem] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#072417] flex items-center justify-center text-[#ffffff] font-extrabold text-xl shadow-sm transition-transform group-hover:scale-105">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-[#072417] tracking-tight leading-tight">
              KOKORO™
            </span>
            <span className="text-[11px] font-semibold text-[#424843] uppercase tracking-wider">
              Chăm Sóc Sức Khỏe Gia Đình
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#f0eee8] rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-[#424843] hover:text-[#072417] hover:bg-[#e5e2dc]/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Order lookup button */}
          <button
            onClick={onOpenLookup}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0eee8] hover:bg-[#ebe8e2] text-[#072417] text-xs sm:text-sm font-semibold transition-colors"
            title="Tra cứu tình trạng đơn hàng"
          >
            <Search className="w-3.5 h-3.5 text-[#072417]" />
            <span className="hidden md:inline">Tra cứu đơn</span>
            {orderCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#fd651e] text-white text-[10px] font-bold flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>

          {/* Hotline */}
          <a
            href="tel:0398636869"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ebe8e2] text-[#072417] font-semibold text-xs sm:text-sm hover:bg-[#e5e2dc] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#a73a00]" />
            <span>Hotline: 0398.63.68.69</span>
          </a>

          {/* Main CTA */}
          <a
            href="#dat-hang"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#fd651e] text-white font-bold text-xs sm:text-sm shadow-[0_8px_20px_-4px_rgba(253,101,30,0.4)] hover:bg-[#a73a00] transition-all transform active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Đặt Hàng Ngay</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#072417] hover:bg-[#f0eee8] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fcf9f3] border-b border-[#e5e2dc] px-4 py-3 shadow-lg flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#072417] hover:bg-[#f0eee8] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0398636869"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-[#a73a00] bg-[#ebe8e2]/60"
          >
            <Phone className="w-4 h-4" />
            <span>Hotline tư vấn: 0398.63.68.69</span>
          </a>
        </div>
      )}
    </header>
  );
};
