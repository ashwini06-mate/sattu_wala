import React from 'react';
import { Sparkles, Star, Flame, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function FlavorShowcase({ flavors, activeFlavor, onSelectFlavor }) {
  return (
    <section id="flavors" className="py-24 relative overflow-hidden bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Signature Sattu Wala Tub Collection</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Crafted for Daily Energy & Stamina
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-medium">
            Explore our premium roasted sattu premix variants. Packed with 31.44g natural protein, stone-roasted grains, and digestive spices.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((flv) => {
            const isSelected = activeFlavor.id === flv.id;
            return (
              <motion.div
                key={flv.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectFlavor(flv)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-50/80 border-amber-400 shadow-xl ring-2 ring-amber-400'
                    : 'bg-stone-50/70 hover:bg-white border border-stone-200 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Badge & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-stone-900 text-amber-300 flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-400" />
                      {flv.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-600 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{flv.rating}</span>
                    </div>
                  </div>

                  {/* Flavor Title */}
                  <div className="space-y-2 mb-4 text-left">
                    <h3 className="font-display text-xl font-bold text-stone-900">
                      {flv.name}
                    </h3>
                    <p className="text-xs text-amber-700 font-extrabold italic">
                      "{flv.tagline}"
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {flv.description}
                    </p>
                  </div>

                  {/* Protein Badge */}
                  <div className="my-4 py-2 px-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between text-xs shadow-sm">
                    <span className="text-stone-600 font-medium">Protein Power</span>
                    <span className="font-extrabold text-amber-600 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-600" />
                      {flv.protein}
                    </span>
                  </div>

                  {/* Key Badges */}
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block text-left">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {flv.badges.map((b, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-stone-200/80 text-stone-800 font-semibold">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
