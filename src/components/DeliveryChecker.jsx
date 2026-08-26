import React, { useState } from 'react';
import { MapPin, Truck, ShieldCheck, Clock, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/rosatuData';

export function DeliveryChecker() {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        pincode,
        available: true,
        eta: '24 - 48 Hours',
        service: 'Pan-India Express Delivery',
      });
    }, 500);
  };

  return (
    <section id="delivery" className="py-24 relative overflow-hidden bg-white text-stone-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-amber-50 via-white to-teal-50/50 p-8 sm:p-12 rounded-3xl border border-amber-200 text-center space-y-8 shadow-xl">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-900 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5 text-teal-600" />
              <span>Pan-India Direct Logistics</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Check Express Delivery to Your City
            </h2>

            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-medium">
              We ship fresh Sattu Wala directly across all 19,000+ Indian pincodes. Order seamlessly via WhatsApp!
            </p>
          </div>

          {/* Input Form */}
          <form onSubmit={handleCheck} className="max-w-md mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <MapPin className="w-5 h-5 text-amber-600 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit Pincode (e.g. 110001)"
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-stone-300 text-stone-900 placeholder-stone-400 text-sm font-semibold focus:outline-none focus:border-amber-500 shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading || pincode.length < 6}
              className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-50 transition-all shadow-md active:scale-95"
            >
              <span>{loading ? 'Checking...' : 'Check'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Result Box */}
          {result && (
            <div className="max-w-lg mx-auto p-5 rounded-2xl bg-white border border-emerald-300 text-left space-y-4 shadow-md animate-fade-in">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Express Delivery Available for Pincode {result.pincode}!</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>ETA: <strong className="text-stone-900">{result.eta}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Fresh Tub Packing</span>
                </div>
              </div>

              {/* Direct WhatsApp Action in Result */}
              <a
                href={getWhatsAppLink(`Pincode ${result.pincode}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp for Pincode {result.pincode}</span>
              </a>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
