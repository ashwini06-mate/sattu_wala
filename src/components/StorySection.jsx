import React from 'react';
import { HERITAGE_TIMELINE } from '../data/rosatuData';
import { History, Flame, Sparkles } from 'lucide-react';

export function StorySection() {
  return (
    <section id="story" className="py-24 relative overflow-hidden bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <History className="w-3.5 h-3.5 text-amber-600" />
            <span>5000 Years of Indian Supergrain Wisdom</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            India's Lost Superdrink, Revived as Sattu Wala.
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-medium">
            Before synthetic protein powders and chemical energy drinks, India relied on stone-roasted sattu & jaggery to fuel emperors, warriors, and endurance travelers.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HERITAGE_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-50/80 p-8 rounded-3xl border border-stone-200 relative hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between group text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-amber-600 font-display">
                    {item.era}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-extrabold text-xs">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200 flex items-center gap-2 text-xs text-amber-700 font-bold">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>Stone-Roasted Clean Extraction</span>
              </div>
            </div>
          ))}
        </div>

        {/* Science Callout Banner */}
        <div className="mt-16 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 p-8 rounded-3xl border border-amber-300 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
          <div className="inline-flex items-center gap-2 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Kholo • Gholo • Peelo</span>
          </div>

          <h3 className="font-display text-2xl font-black text-stone-900">
            Traditional Sand Roasting Unlocks Bioavailable Grain Protein
          </h3>

          <p className="text-stone-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            The traditional sand-roasting process breaks down complex starches into easy-to-digest protein molecules while preserving natural dietary fiber, magnesium, iron, and potassium. Zero white sugar, zero preservatives.
          </p>
        </div>

      </div>
    </section>
  );
}
