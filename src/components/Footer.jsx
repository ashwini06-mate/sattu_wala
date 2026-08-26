import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/rosatuData';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 text-sm border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1 text-left">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full border-[3px] border-amber-300 bg-[#2d1a09] p-[2px] shadow-md">
                <img
                  src="/logo.jpeg"
                  alt="Sattu Wala logo"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-display text-xl font-black text-white uppercase tracking-[0.08em]">Sattu</span>
                <span className="font-display text-xl font-black text-white uppercase tracking-[0.08em] -mt-1">Wala</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-medium">
              India's lost superdrink revived. Traditional stone-roasted sattu premix with organic jaggery and digestive spices. Kholo Gholo Peelo in 30 seconds!
            </p>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp Order</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Sattu Wala Premix Tubs</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#flavors" className="hover:text-amber-400 transition-colors">Masala Sattu Premix (Kholo Gholo Peelo)</a></li>
              <li><a href="#flavors" className="hover:text-amber-400 transition-colors">Jaggery & Elaichi Premix</a></li>
              <li><a href="#flavors" className="hover:text-amber-400 transition-colors">Spiced Cacao Premix</a></li>
              <li><a href="#flavors" className="hover:text-amber-400 transition-colors">Golden Turmeric & Ginger Premix</a></li>
              <li><a href="#flavors" className="hover:text-amber-400 transition-colors">Pineapple Premix</a></li>
              <li><a href="#flavors" className="hover:text-amber-400 transition-colors">Chocolate Premix</a></li>
            </ul>
          </div>

          {/* Experience Links */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Experience</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#configurator" className="hover:text-amber-400 transition-colors">Custom Mix Builder</a></li>
              <li><a href="#story" className="hover:text-amber-400 transition-colors">5000 Years Sattu Story</a></li>
              <li><a href="#nutrition" className="hover:text-amber-400 transition-colors">31.44g Protein Nutrition Lab</a></li>
              <li><a href="#delivery" className="hover:text-amber-400 transition-colors">Pan-India Express Logistics</a></li>
            </ul>
          </div>

          {/* WhatsApp Support & Orders */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">WhatsApp Orders</h4>
            <p className="text-xs text-stone-400 font-medium">Order directly on WhatsApp for bulk inquiries, trial packs, and pan-India shipping.</p>
            <a
              href={getWhatsAppLink('Bulk Inquiries')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-center font-bold text-xs text-amber-400 border border-stone-700 transition-all"
            >
              Contact Support on WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Sattu Wala Beverages Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-current" />
            <span>for India's High Performance Culture</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
