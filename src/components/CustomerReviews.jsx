import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/rosatuData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export function CustomerReviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-current text-amber-600" />
            <span>Customer Love across India</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Loved by Fitness & Daily Energy Seekers
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-medium">
            Over 100,000+ Sattu Wala Premix ordered via WhatsApp across Mumbai, Delhi, Bengaluru, Hyderabad, and Kolkata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative flex flex-col justify-between hover:shadow-lg transition-all text-left"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-amber-400 opacity-60" />

                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-stone-700 text-sm italic font-medium leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-stone-900 text-sm">{rev.name}</div>
                  <div className="text-xs text-stone-500">{rev.role} • {rev.location}</div>
                </div>

                {rev.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
