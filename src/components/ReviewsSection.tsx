import React from 'react';
import { REVIEWS } from '../data';
import { Star, CheckCircle, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f3ed] py-16 lg:py-24 border-b border-[#e5e2dc]/60" id="danh-gia">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#a73a00] uppercase tracking-widest block mb-2">
            Đánh Giá Thực Tế
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072417] tracking-tight">
            KHÁCH HÀNG NÓI GÌ VỀ KOKORO™?
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-[#fd651e]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#fd651e]" />
              ))}
            </div>
            <span className="font-bold text-base text-[#072417]">
              4.9/5 điểm
            </span>
            <span className="text-sm text-[#727973]">
              (Dựa trên hơn 2.450 lượt đánh giá)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-[#ffffff] border border-[#e5e2dc] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#ebe8e2] text-[#072417] font-bold flex items-center justify-center text-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#072417]">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-[#727973]">{rev.location}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#727973]">{rev.timeAgo}</span>
                </div>

                <div className="flex items-center gap-1 text-[#fd651e] mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fd651e]" />
                  ))}
                  <span className="text-xs font-semibold text-[#0c3c25] ml-2 flex items-center gap-1 bg-[#caead4] px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Đã mua hàng
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#424843] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f0eee8] flex items-center justify-between text-xs text-[#727973]">
                <span>Màu: <strong className="text-[#072417]">{rev.colorBought}</strong></span>
                <span className="flex items-center gap-1 text-[#0c3c25]">
                  <ThumbsUp className="w-3.5 h-3.5" /> Hữu ích (18)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
