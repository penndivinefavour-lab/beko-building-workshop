import React, { useState } from 'react';
import { Sun, Wind, Mountain, Hammer, Cpu } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [climateMode, setClimateMode] = useState<'day' | 'night'>('day');

  const pillars = [
    {
      icon: Wind,
      number: '01',
      title: 'Passive Climate Thermodynamics',
      headline: 'Structures that breathe naturally with minimal mechanical dependency.',
      text: 'By harnessing stack-effect solar chimneys, prevailing wind currents, and deep 2.4m structural cantilevers, our designs minimize HVAC loads. The building functions as a responsive envelope attuned to diurnal temperature shifts.',
      metrics: 'Diurnal Envelope Dampening'
    },
    {
      icon: Mountain,
      number: '02',
      title: 'Geological Materiality & Hyperlocal Sourcing',
      headline: 'Harvesting the mineral memory of the immediate territory.',
      text: 'We formulate building blocks from site excavation soil, quarry basalt within regional radii, and specify sustainably harvested African mass timber. Our structures carry the tactile pigment and geology of their landscape.',
      metrics: 'Up to -58% Embodied Carbon'
    },
    {
      icon: Hammer,
      number: '03',
      title: 'The Master Guild Model',
      headline: 'Architects and master artisans working shoulder-to-shoulder on site.',
      text: 'Unlike detached corporate practices, BEKO operates an active fabrication workshop. Our architects collaborate in real time with multi-generational stone masons, brass casters, and timber joiners, elevating regional vernacular craft.',
      metrics: 'Hyper-Local Artisan Collaboration'
    },
    {
      icon: Cpu,
      number: '04',
      title: 'Computational Bioclimatic Ecology',
      headline: 'Vernacular intuition verified by microclimate physics.',
      text: 'Every aperture, louver angle, and courtyard depth is modeled with computational airflow analysis and solar ray-tracing. We optimize daylight penetration while shielding fragile interiors from thermal saturation.',
      metrics: 'Optimized Solar Envelope'
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-studio-900 border-t border-studio-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center space-x-2 text-clay-400 font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-clay-500 rounded-full" aria-hidden="true"></span>
            <span>Workshop Philosophy & Tectonic Manifesto</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-50 leading-tight">
            An Architecture Born from Soil, Answering to the Equator.
          </h2>
          <p className="text-sm sm:text-base text-studio-200 leading-relaxed">
            Contemporary equatorial architecture is heavy, porous, tactile, and intelligent—grounded
            in climatic intuition and refined with rigorous engineering.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-studio-950 p-6 sm:p-8 border border-studio-800 hover:border-clay-500/60 transition-all duration-300 relative group flex flex-col justify-between rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-studio-800/80 pb-4 mb-5">
                    <div className="w-10 h-10 bg-studio-900 border border-studio-700 flex items-center justify-center text-clay-400 group-hover:border-clay-500 transition-colors rounded-sm">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs text-studio-400 group-hover:text-clay-400 transition-colors">
                      // {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-studio-100 font-medium mb-1.5">
                    {pillar.title}
                  </h3>
                  <h4 className="text-xs font-mono text-clay-400 mb-3 uppercase tracking-wider">
                    {pillar.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-studio-300 leading-relaxed mb-6 font-sans">
                    {pillar.text}
                  </p>
                </div>

                <div className="pt-3 border-t border-studio-800 flex items-center justify-between text-xs font-mono text-studio-400">
                  <span>Research Focus:</span>
                  <span className="text-clay-300 font-medium">{pillar.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Thermodynamic Climate Cycle Simulator */}
        <div className="bg-studio-950 border border-studio-800 p-5 sm:p-8 md:p-10 rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-studio-800 pb-5 mb-6">
            <div>
              <span className="text-xs font-mono text-clay-400 uppercase tracking-widest block mb-1">
                // Interactive Thermal Simulation
              </span>
              <h3 className="font-serif text-2xl text-studio-50">
                The Diurnal Thermodynamic Flywheel
              </h3>
              <p className="text-xs text-studio-300 mt-1 max-w-lg">
                See how a 450mm stabilized earth envelope dampens thermal shock between midday sun and cool nights.
              </p>
            </div>

            <div className="flex items-center space-x-2 bg-studio-900 p-1 border border-studio-800 self-stretch sm:self-start rounded-sm" role="group" aria-label="Thermal cycle mode">
              <button
                onClick={() => setClimateMode('day')}
                aria-pressed={climateMode === 'day'}
                className={`flex-1 sm:flex-initial min-h-[44px] px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center space-x-2 rounded-sm ${
                  climateMode === 'day'
                    ? 'bg-clay-500 text-white shadow-sm font-semibold'
                    : 'text-studio-300 hover:text-white'
                }`}
              >
                <Sun className="w-4 h-4" aria-hidden="true" />
                <span>Day Cycle</span>
              </button>
              <button
                onClick={() => setClimateMode('night')}
                aria-pressed={climateMode === 'night'}
                className={`flex-1 sm:flex-initial min-h-[44px] px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center space-x-2 rounded-sm ${
                  climateMode === 'night'
                    ? 'bg-sky-700 text-white shadow-sm font-semibold'
                    : 'text-studio-300 hover:text-white'
                }`}
              >
                <Wind className="w-4 h-4" aria-hidden="true" />
                <span>Night Purge</span>
              </button>
            </div>
          </div>

          {/* Simulation Graphic Representation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left Technical Diagram */}
            <div className="lg:col-span-2 relative aspect-[16/10] sm:aspect-[16/9] bg-studio-900 border border-studio-800 p-4 sm:p-6 flex flex-col justify-between overflow-hidden rounded-sm">
              <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true"></div>

              {/* Status Header */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-studio-300">ENVELOPE SECTION (1:50)</span>
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
                  climateMode === 'day' ? 'bg-amber-950 text-amber-200 border border-amber-500/40' : 'bg-sky-950 text-sky-200 border border-sky-500/40'
                }`}>
                  {climateMode === 'day' ? 'MIDDAY SOLAR INSOLATION' : 'NIGHT RADIATIVE COOLING'}
                </span>
              </div>

              {/* Dynamic Diagram Elements */}
              <div className="relative z-10 my-auto py-3 flex flex-col items-center justify-center text-center">
                {climateMode === 'day' ? (
                  <div className="space-y-3 animate-fade-in w-full max-w-md">
                    <div className="flex justify-between items-center text-xs font-mono text-amber-300">
                      <span>Outside Air: 34°C</span>
                      <Sun className="w-5 h-5 text-amber-400" aria-hidden="true" />
                      <span>Overhang: 100% Shaded</span>
                    </div>

                    {/* Wall representation */}
                    <div className="h-14 w-full bg-gradient-to-r from-clay-700 via-amber-900/70 to-studio-800 border border-amber-600/50 flex items-center justify-around px-3 relative rounded-sm">
                      <span className="text-[11px] font-mono text-studio-100">
                        450mm Earth Wall absorbs heat (8-hour phase lag)
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs font-mono text-emerald-300 bg-studio-950 p-2.5 border border-emerald-500/40 rounded-sm">
                      <span>Interior Living Sanctuary:</span>
                      <strong className="text-sm">22.4°C Stable Equilibrium</strong>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 animate-fade-in w-full max-w-md">
                    <div className="flex justify-between items-center text-xs font-mono text-sky-200">
                      <span>Night Valley Air: 17°C</span>
                      <Wind className="w-5 h-5 text-sky-400" aria-hidden="true" />
                      <span>Stack Ventilation Draft</span>
                    </div>

                    {/* Wall representation */}
                    <div className="h-14 w-full bg-gradient-to-r from-sky-950 via-studio-800 to-amber-950/40 border border-sky-600/50 flex items-center justify-around px-3 relative rounded-sm">
                      <span className="text-[11px] font-mono text-studio-100">
                        Radiative night purge resets thermal flywheel for sunrise
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs font-mono text-emerald-300 bg-studio-950 p-2.5 border border-emerald-500/40 rounded-sm">
                      <span>Interior Living Sanctuary:</span>
                      <strong className="text-sm">21.8°C Constant Comfort</strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Specs */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-studio-300 border-t border-studio-800 pt-2">
                <span>Thermal Volumetric Mass: High</span>
                <span>Passive Ventilation: Stack Draft</span>
              </div>
            </div>

            {/* Right Explanation Card */}
            <div className="bg-studio-900 p-5 sm:p-6 border border-studio-800 space-y-3 rounded-sm">
              <h4 className="font-serif text-lg text-studio-100 font-medium">
                {climateMode === 'day' ? 'Thermal Phase Lag' : 'Nocturnal Stack Purging'}
              </h4>
              <p className="text-xs sm:text-sm text-studio-200 leading-relaxed font-sans">
                {climateMode === 'day'
                  ? 'During peak equatorial daylight, 450mm stabilized earth walls absorb exterior heat. The high volumetric heat capacity delays thermal transmission by 8 to 10 hours, protecting interior living comfort.'
                  : 'At night, high-level clerestory louvers and solar chimney dampers release warm air while cool valley breezes flush through living spaces, resetting the wall core for the following sunrise.'}
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono border-t border-studio-800">
                <div className="flex justify-between text-studio-300">
                  <span>Diurnal Stability:</span>
                  <span className="text-emerald-400 font-semibold">Continuous Equilibrium</span>
                </div>
                <div className="flex justify-between text-studio-300">
                  <span>Relative Indoor Humidity:</span>
                  <span className="text-studio-100">45–55% Self-Regulating</span>
                </div>
                <div className="flex justify-between text-studio-300">
                  <span>HVAC Energy Load:</span>
                  <span className="text-clay-400 font-semibold">Near Zero Operational Need</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
