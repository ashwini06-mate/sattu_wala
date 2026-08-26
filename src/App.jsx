import React, { useState } from 'react';
import { ROSATU_FLAVORS } from './data/rosatuData';
import { Navbar } from './components/Navbar';
import { Hero3DSection } from './components/Hero3DSection';
import { FlavorShowcase } from './components/FlavorShowcase';
import { BrewConfigurator } from './components/BrewConfigurator';
import { StorySection } from './components/StorySection';
import { NutritionSection } from './components/NutritionSection';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';

export default function App() {
  const [activeFlavor, setActiveFlavor] = useState(ROSATU_FLAVORS[0]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-400 selection:text-stone-950">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero3DSection
          activeFlavor={activeFlavor}
          flavors={ROSATU_FLAVORS}
          onSelectFlavor={setActiveFlavor}
        />

        <FlavorShowcase
          flavors={ROSATU_FLAVORS}
          activeFlavor={activeFlavor}
          onSelectFlavor={setActiveFlavor}
        />

        <BrewConfigurator />

        <StorySection />

        <NutritionSection />

        <CustomerReviews />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
