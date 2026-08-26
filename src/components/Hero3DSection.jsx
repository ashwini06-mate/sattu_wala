// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Float } from '@react-three/drei';
import { RosatuCan3D } from './Canvas3D/RosatuCan3D';
import { FloatingIngredients3D } from './Canvas3D/FloatingIngredients3D';
import { Sparkles, Flame, Star, Zap, CheckCircle2, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero3DSection({ activeFlavor, flavors, onSelectFlavor }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-stone-50 text-stone-900">
      
      {/* Light Ambient Glow */}
      <div
        className="absolute inset-0 transition-all duration-700 pointer-events-none opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle at 50% 35%, #FDE68A 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Slogan Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 border border-teal-300 text-teal-900 text-xs font-black uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>1st Time in Amaravati — Real Pineapple Sattu</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-[1.08] tracking-tight"
            >
              SATTU WALA{' '}
              <span className="text-gradient-gold block mt-1">Real Pineapple Sattu</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-stone-700 text-base sm:text-lg font-medium leading-relaxed"
            >
              A fresh twist on traditional roasted sattu — now with the vibrant taste of pineapple. Loaded with 31.44g protein, digestive masala goodness, and zero white sugar for a clean, energizing drink anytime.
            </motion.p>

            {/* Feature Badges from Tub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 text-xs font-extrabold"
            >
              <div className="px-3.5 py-2 rounded-xl bg-amber-500 text-stone-950 shadow-sm flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-stone-950" />
                <span>31.44g HIGH PROTEIN</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-teal-600 text-white shadow-sm flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-300" />
                <span>HIGH ENERGY</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 shadow-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>GLUTEN FREE</span>
              </div>
            </motion.div>

            {/* Product Variant Switcher Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-2 pt-2"
            >
              <span className="text-xs uppercase tracking-widest text-stone-500 font-extrabold block">
                Select Sattu Wala Blend:
              </span>
              <div className="flex flex-wrap gap-2">
                {flavors.map((flv) => (
                  <button
                    key={flv.id}
                    onClick={() => onSelectFlavor(flv)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                      activeFlavor.id === flv.id
                        ? 'bg-stone-900 text-amber-400 ring-2 ring-amber-500 shadow-md scale-105'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {flv.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Exploratory CTA Action Buttons (NO ORDER BUTTONS) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4"
            >
              <a
                href="#flavors"
                className="flex-1 py-4 px-6 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-95 transition-all shadow-md"
              >
                <span>Explore All Blends</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#configurator"
                className="py-4 px-6 rounded-full bg-white text-stone-800 font-bold text-sm text-center border border-stone-300 hover:border-amber-500 transition-all shadow-sm"
              >
                Macro Explorer
              </a>
            </motion.div>

            {/* Product Rating */}
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-600">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-extrabold text-stone-900">4.98/5 Star Product Rating</span>
              <span>•</span>
              <span>Traditional Stone-Roasted Sattu</span>
            </div>

          </div>

          {/* Right Column: Product Brand Block */}
          <div className="lg:col-span-6 hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[560px] aspect-[1.15] rounded-[32px] border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-50 shadow-[0_30px_70px_rgba(120,53,15,0.12)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_45%)]" />
              {/* <div className="absolute inset-x-8 top-8 h-20 rounded-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300 opacity-90 shadow-lg" /> */}

              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-stone-600 font-black">Amaravati launch</p>
                    <h2 className="mt-2 text-4xl font-black tracking-tight text-stone-900">Sattu Wala</h2>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-900 text-2xl text-amber-400 shadow-md">
                    🍍
                  </div>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-stone-700 shadow-sm border border-stone-200">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      Real Pineapple
                    </div>
                    <p className="max-w-xs text-lg font-semibold text-stone-700 leading-relaxed">
                      Premium roasted sattu with a tropical pineapple burst, digestive spices, and a sugar-free clean finish.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-3xl font-black text-stone-900 shadow-lg ring-8 ring-amber-100">
                      31g
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.28em] text-stone-600">Protein</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {['Zero Sugar', 'Filling', 'Gluten Free'].map((label) => (
                    <div key={label} className="rounded-2xl border border-stone-200 bg-white/80 px-3 py-2 text-center shadow-sm">
                      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-stone-600">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
