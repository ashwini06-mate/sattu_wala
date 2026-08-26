import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { NUTRITION_FACTS } from '../data/rosatuData';

export function NutritionSection() {
  const comparisonData = [
    { feature: 'Natural Bio-available Protein', rosatu: '31.44g Clean Sattu', whey: '24g Synthetic Whey', energy: '0g - 1g' },
    { feature: 'Sweetener & Flavoring', rosatu: '100% Organic Gur & Spices', whey: 'Artificial Sucralose', energy: '28g Refined Sugar' },
    { feature: 'Digestive Comfort', rosatu: 'Zero Bloating (Prebiotic Fiber)', whey: 'Frequent Lactose Bloat', energy: 'Acidic Crash' },
    { feature: 'Preparation Ease', rosatu: 'Kholo Gholo Peelo (30s)', whey: 'Heavy Shaker Grinding', energy: 'Can Opener' },
    { feature: 'Essential Minerals (Fe, Mg, K)', rosatu: 'Natural Whole Grain', whey: 'Stripped in Isolate', energy: 'None' },
  ];

  return (
    <section id="nutrition" className="py-24 relative bg-stone-50 border-t border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Uncompromising Indian Nutrition</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            How Sattu Wala Compares
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-medium">
            No synthetic isolation chemicals. Just pure, ancient grain science refined for modern high-performance living.
          </p>
        </div>

        {/* Nutrition Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {NUTRITION_FACTS.map((fact, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200 text-left space-y-2 shadow-sm">
              <span className="text-[11px] uppercase tracking-wider text-amber-700 font-extrabold block">
                {fact.label}
              </span>
              <div className="text-xl font-black text-stone-900">{fact.value}</div>
              <p className="text-xs text-stone-600 font-medium leading-tight">{fact.detail}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-amber-50/60">
                  <th className="py-5 px-6 font-display font-extrabold text-sm text-stone-900">Feature</th>
                  <th className="py-5 px-6 font-display font-black text-base text-amber-800 bg-amber-100/60">
                    🌾 Sattu Wala Premix
                  </th>
                  <th className="py-5 px-6 font-display font-bold text-sm text-stone-600">Standard Whey Shake</th>
                  <th className="py-5 px-6 font-display font-bold text-sm text-stone-600">Commercial Energy Drink</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-sm">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-stone-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-stone-900">{row.feature}</td>
                    <td className="py-4 px-6 font-extrabold text-amber-800 bg-amber-50/30 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{row.rosatu}</span>
                    </td>
                    <td className="py-4 px-6 text-stone-600">{row.whey}</td>
                    <td className="py-4 px-6 text-stone-600">{row.energy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
