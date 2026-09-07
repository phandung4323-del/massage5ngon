/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PromoTopBar } from './components/PromoTopBar';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { ProductIntroSection } from './components/ProductIntroSection';
import { ComparisonSection } from './components/ComparisonSection';
import { MultiAreaSection } from './components/MultiAreaSection';
import { HeatMassageSection } from './components/HeatMassageSection';
import { InternalMechanismSection } from './components/InternalMechanismSection';
import { BenefitsSection } from './components/BenefitsSection';
import { LifestyleSection } from './components/LifestyleSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { GiftSection } from './components/GiftSection';
import { TechSpecsSection } from './components/TechSpecsSection';
import { SpecialOfferSection } from './components/SpecialOfferSection';
import { OrderFormSection } from './components/OrderFormSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ClosingCtaSection } from './components/ClosingCtaSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { RecentOrdersToast } from './components/RecentOrdersToast';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { OrderLookupModal } from './components/OrderLookupModal';
import { OrderData } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [orders, setOrders] = useState<OrderData[]>(() => {
    try {
      const saved = localStorage.getItem('relavie_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeSuccessOrder, setActiveSuccessOrder] = useState<OrderData | null>(null);
  const [isLookupOpen, setIsLookupOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderSuccess = (newOrder: OrderData) => {
    const updated = [newOrder, ...orders];
    setOrders(updated);
    try {
      localStorage.setItem('relavie_orders', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save order to localStorage', e);
    }
    setActiveSuccessOrder(newOrder);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#fcf9f3] text-[#1c1c18] flex flex-col selection:bg-[#fd651e]/20 selection:text-[#a73a00]">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenLookup={() => setIsLookupOpen(true)}
        orderCount={orders.length}
      />

      {/* Main Content Body */}
      <main className="w-full pt-20 flex flex-col flex-1">
        {/* Top Promo Banner */}
        <PromoTopBar />

        {/* Section 1: Hero Spotlight */}
        <HeroSection />

        {/* Section 2: Pain Point */}
        <PainPointsSection />

        {/* Section 3: Product Introduction */}
        <ProductIntroSection />

        {/* Section 4: 5-Finger Design & Comparison */}
        <ComparisonSection />

        {/* Section 5: Multi-Area Massage */}
        <MultiAreaSection />

        {/* Section 6: Heat Massage */}
        <HeatMassageSection />

        {/* Section 7: Internal Mechanism */}
        <InternalMechanismSection />

        {/* Section 8: 6 Core Benefits */}
        <BenefitsSection />

        {/* Section 9: Lifestyle Scenarios */}
        <LifestyleSection />

        {/* Section 10: Who Is It For */}
        <TargetAudienceSection />

        {/* Section 11: Meaningful Gift */}
        <GiftSection />

        {/* Section 12: Technical Specifications */}
        <TechSpecsSection />

        {/* Section 13: Special Offer Card */}
        <SpecialOfferSection />

        {/* Section 14: Interactive Order Form */}
        <OrderFormSection onOrderSuccess={handleOrderSuccess} />

        {/* Section 15: Customer Reviews */}
        <ReviewsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Section 16: Closing Hero & CTA */}
        <ClosingCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Purchase Bar */}
      <MobileBottomBar />

      {/* Social Proof Live Recent Orders Toast */}
      <RecentOrdersToast />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 lg:bottom-6 right-4 z-40 p-3 rounded-full bg-[#072417] text-white shadow-xl hover:bg-[#1e3a2b] transition-all transform hover:scale-110 active:scale-95"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Order Success Modal */}
      {activeSuccessOrder && (
        <OrderSuccessModal
          order={activeSuccessOrder}
          onClose={() => setActiveSuccessOrder(null)}
        />
      )}

      {/* Order Lookup Modal */}
      {isLookupOpen && (
        <OrderLookupModal
          orders={orders}
          onClose={() => setIsLookupOpen(false)}
        />
      )}
    </div>
  );
}
