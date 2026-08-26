import React, { useState, useMemo } from 'react';
import { Sliders, Sparkles, Flame, Coffee, Check } from 'lucide-react';

export function BrewConfigurator() {
  const [base, setBase] = useState('water');
  const [sweetness, setSweetness] = useState('masala');
  const [spice, setSpice] = useState('classic');
  const [proteinBoost, setProteinBoost] = useState(false);

  const BASES = [
    { id: 'water', name: 'Chilled Water (Classic)', extraCal: 0, extraProtein: 0 },
    { id: 'almond', name: 'Almond Milk Blend', extraCal: 45, extraProtein: 1.5 },
    { id: 'coconut', name: 'Coconut Water Mix', extraCal: 25, extraProtein: 0.5 },
    { id: 'buttermilk', name: 'Chach / Buttermilk Mix', extraCal: 30, extraProtein: 2.0 },
  ];

  const SWEETENERS = [
    { id: 'masala', name: 'Traditional Salt & Spices', extraCal: 0, carbs: 22 },
    { id: 'jaggery', name: 'Organic Jaggery (Gur)', extraCal: 20, carbs: 26 },
    { id: 'date-nectar', name: 'Wild Date Syrup', extraCal: 25, extraProtein: 0.5, carbs: 27 },
    { id: 'unsweetened', name: 'Plain Roasted Sattu', extraCal: -15, carbs: 18 },
  ];

  const SPICES = [
    { id: 'classic', name: 'Classic Roasted Cumin & Black Salt' },
    { id: 'cardamom', name: 'Extra Elaichi & Nutmeg' },
    { id: 'cinnamon', name: 'Ceylon Cinnamon Warmth' },
    { id: 'ginger', name: 'Dry Ginger Fire (Sonth)' },
  ];

  // Dynamic Macro calculations
  const totalMacros = useMemo(() => {
    const selectedBaseObj = BASES.find((b) => b.id === base);
    const selectedSweetObj = SWEETENERS.find((s) => s.id === sweetness);

    const baseProtein = 31.44;
    const baseCalories = 210;

    const extraProtein = (selectedBaseObj?.extraProtein || 0) + (proteinBoost ? 10 : 0);
    const extraCalories = (selectedBaseObj?.extraCal || 0) + (selectedSweetObj?.extraCal || 0) + (proteinBoost ? 40 : 0);

    return {
      protein: (baseProtein + extraProtein).toFixed(2),
      calories: Math.round(baseCalories + extraCalories),
      carbs: selectedSweetObj?.carbs || 22,
    };
  }, [base, sweetness, spice, proteinBoost]);

  return (
    <section id="configurator" className="py-24 relative bg-stone-100/60 border-y border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Custom Drink Explorer</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Explore Your Sattu Wala Mix
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-medium">
            See how different preparation liquids, digestive spices, and protein boosts alter your daily nutrition macros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls (8 Cols) */}
          <div className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-md">
            
            {/* Step 1: Select Liquid Base */}
            <div className="space-y-3 text-left">
              <label className="text-xs uppercase tracking-widest text-teal-700 font-extrabold flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                <span>1. Select Liquid Base</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BASES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBase(b.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      base === b.id
                        ? 'bg-teal-50 border-teal-500 text-stone-900 shadow-sm ring-1 ring-teal-500'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-bold text-sm">{b.name}</div>
                    <div className="text-xs text-stone-500 mt-1">
                      {b.extraCal > 0 ? `+${b.extraCal} kcal` : 'Standard calories'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Sweetener/Flavor */}
            <div className="space-y-3 text-left">
              <label className="text-xs uppercase tracking-widest text-teal-700 font-extrabold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>2. Flavor & Sweetness Profile</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SWEETENERS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSweetness(s.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      sweetness === s.id
                        ? 'bg-amber-50 border-amber-500 text-stone-900 shadow-sm ring-1 ring-amber-500'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-bold text-sm">{s.name}</div>
                    <div className="text-xs text-stone-500 mt-1">{s.carbs}g Carbs</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Spice Profile */}
            <div className="space-y-3 text-left">
              <label className="text-xs uppercase tracking-widest text-teal-700 font-extrabold flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>3. Digestive Spice Infusion</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPICES.map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => setSpice(sp.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      spice === sp.id
                        ? 'bg-amber-50 border-amber-500 text-stone-900 shadow-sm ring-1 ring-amber-500'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="font-bold text-sm">{sp.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Protein Boost Checkbox */}
            <div className="pt-2 border-t border-stone-200">
              <button
                onClick={() => setProteinBoost(!proteinBoost)}
                className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${
                  proteinBoost
                    ? 'bg-emerald-50 border-emerald-500 text-stone-900 shadow-sm'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${proteinBoost ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-600'}`}>
                    {proteinBoost && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-sm text-stone-900">Add Extra +10g Roasted Sattu Protein Boost</div>
                    <div className="text-xs text-stone-500">Reaches 41.44g total natural protein per serving</div>
                  </div>
                </div>
              </button>
            </div>

          </div>

          {/* Right Dashboard (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6 text-left">
            <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-6 sm:p-8 rounded-3xl border border-amber-300 shadow-xl space-y-6">
              <div className="border-b border-amber-200 pb-4">
                <span className="text-xs uppercase tracking-widest text-amber-800 font-extrabold">Calculated Macro Profile</span>
                <h3 className="font-display text-2xl font-black text-stone-900">Sattu Wala Premix</h3>
              </div>

              {/* Macro Specs Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="text-[11px] text-stone-500 uppercase font-bold block">Protein</span>
                  <span className="text-2xl font-black text-amber-600">{totalMacros.protein}g</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="text-[11px] text-stone-500 uppercase font-bold block">Energy</span>
                  <span className="text-2xl font-black text-stone-900">{totalMacros.calories} kcal</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="text-[11px] text-stone-500 uppercase font-bold block">Carbs</span>
                  <span className="text-lg font-bold text-stone-800">{totalMacros.carbs}g</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="text-[11px] text-stone-500 uppercase font-bold block">Gluten</span>
                  <span className="text-lg font-bold text-emerald-600">0% FREE</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
