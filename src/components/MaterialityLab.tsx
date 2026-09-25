import React, { useState } from 'react';
import { Layers, Leaf, Check } from 'lucide-react';
import { materials } from '../data/materials';
import { Material } from '../types';

export const MaterialityLab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMaterial, setActiveMaterial] = useState<Material>(materials[0]);

  const categories = [
    { id: 'all', label: 'All Tectonic Media' },
    { id: 'Earth & Stone', label: 'Earth & Stone' },
    { id: 'Timber & Bamboo', label: 'Mass Timber & Teak' },
    { id: 'Metals & Ceramics', label: 'Terracotta & Bronze' },
    { id: 'Composites & Glass', label: 'Circular Composites' },
  ];

  const filteredMaterials = materials.filter((m) =>
    selectedCategory === 'all' ? true : m.category === selectedCategory
  );

  return (
    <section id="materials" className="py-20 bg-studio-950 border-t border-studio-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-studio-800/80 pb-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-clay-400 font-mono text-xs uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Workshop Materiality & Tectonic Research</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-50 tracking-tight">
              The Materials Laboratory
            </h2>
            <p className="text-sm sm:text-base text-studio-300 max-w-xl">
              We test, compress, fire, and age regional minerals and timbers in our Kigali & Lagos
              workshops before specifying them in permanent architecture.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-studio-400">
            Active Catalog: <span className="text-clay-400 font-semibold">{materials.length}</span> Tectonic Substrates
          </div>
        </div>

        {/* Categories Bar (Mobile touch target >= 44px) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist" aria-label="Filter materials by category">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[44px] px-4 py-2.5 text-xs uppercase tracking-wider font-mono transition-all border whitespace-nowrap rounded-sm flex items-center ${
                selectedCategory === cat.id
                  ? 'bg-clay-500 text-white border-clay-500 shadow-sm font-semibold'
                  : 'bg-studio-900 text-studio-300 border-studio-800 hover:border-studio-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Two-Column Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Material Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredMaterials.map((mat) => {
              const isSelected = activeMaterial.id === mat.id;
              return (
                <button
                  type="button"
                  key={mat.id}
                  onClick={() => setActiveMaterial(mat)}
                  aria-pressed={isSelected}
                  className={`p-5 text-left border transition-all duration-300 relative flex flex-col justify-between rounded-sm min-h-[140px] ${
                    isSelected
                      ? 'bg-studio-900 border-clay-500 shadow-lg ring-1 ring-clay-500/50'
                      : 'bg-studio-950 border-studio-800 hover:border-studio-700 hover:bg-studio-900'
                  }`}
                >
                  <div>
                    {/* Color Swatch & Category */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-sm border border-white/20 shadow-inner"
                          style={{ backgroundColor: mat.colorHex }}
                          aria-hidden="true"
                        ></div>
                        <span className="text-[10px] font-mono text-studio-400 uppercase">
                          {mat.category}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm font-medium ${
                        mat.embodiedCarbonRating === 'Negative Carbon'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                          : mat.embodiedCarbonRating === 'Ultra-Low'
                          ? 'bg-sky-950 text-sky-300 border border-sky-500/40'
                          : 'bg-amber-950 text-amber-200 border border-amber-500/40'
                      }`}>
                        {mat.embodiedCarbonRating}
                      </span>
                    </div>

                    <h4 className="font-serif text-base text-studio-100 font-medium leading-snug">
                      {mat.name}
                    </h4>
                    {mat.localName && (
                      <span className="text-[11px] font-mono text-clay-400 block mt-0.5 italic">
                        {mat.localName}
                      </span>
                    )}

                    <p className="text-xs text-studio-300 font-sans mt-2 line-clamp-2 leading-relaxed">
                      {mat.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-studio-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-studio-400">Origin:</span>
                    <span className="text-studio-200 truncate max-w-[150px]">{mat.origin}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Material Detailed Dossier Card */}
          <div className="lg:col-span-6 bg-studio-900 border border-studio-800 p-5 sm:p-8 lg:sticky lg:top-28 shadow-2xl rounded-sm">
            <div className="flex items-center justify-between border-b border-studio-800 pb-4 mb-6">
              <div className="flex items-center space-x-3">
                <div
                  className="w-7 h-7 rounded border border-white/30 shadow-md shrink-0"
                  style={{ backgroundColor: activeMaterial.colorHex }}
                  aria-hidden="true"
                ></div>
                <div>
                  <span className="text-[10px] font-mono text-studio-400 uppercase tracking-wider block">
                    Material Specification File
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-studio-50 font-normal">
                    {activeMaterial.name}
                  </h3>
                </div>
              </div>

              <span className="text-xs font-mono text-clay-400 border border-clay-500/40 px-2.5 py-1 rounded-sm">
                {activeMaterial.textureCode}
              </span>
            </div>

            {/* Material Technical Parameters */}
            <div className="space-y-5">
              <p className="text-sm text-studio-200 leading-relaxed font-sans">
                {activeMaterial.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-studio-950 p-3.5 border border-studio-800 rounded-sm">
                  <span className="text-[10px] text-studio-400 uppercase block mb-1">Geographic Provenance</span>
                  <span className="text-studio-200 font-medium">{activeMaterial.origin}</span>
                </div>
                <div className="bg-studio-950 p-3.5 border border-studio-800 rounded-sm">
                  <span className="text-[10px] text-studio-400 uppercase block mb-1">Embodied Carbon</span>
                  <span className="text-emerald-400 font-medium">{activeMaterial.embodiedCarbonRating}</span>
                </div>
                <div className="bg-studio-950 p-3.5 border border-studio-800 rounded-sm">
                  <span className="text-[10px] text-studio-400 uppercase block mb-1">Thermal Mass</span>
                  <span className="text-studio-200 font-medium">{activeMaterial.thermalMass}</span>
                </div>
                <div className="bg-studio-950 p-3.5 border border-studio-800 rounded-sm">
                  <span className="text-[10px] text-studio-400 uppercase block mb-1">Durability Cycle</span>
                  <span className="text-studio-200 font-medium">{activeMaterial.durability}</span>
                </div>
              </div>

              {/* Sensory & Tactile Profile */}
              <div className="bg-studio-950 p-4 border border-studio-800 space-y-1 rounded-sm">
                <span className="text-[10px] font-mono text-clay-400 uppercase tracking-wider block font-medium">
                  Tactile & Sensory Profile
                </span>
                <p className="text-xs text-studio-200 italic">
                  "{activeMaterial.tactileFeel}"
                </p>
              </div>

              {/* Architectural Application */}
              <div>
                <span className="text-xs font-mono text-studio-300 uppercase tracking-wider block mb-2 font-medium">
                  Primary Workshop Applications
                </span>
                <p className="text-xs text-studio-200 bg-studio-950 p-3 border border-studio-800 rounded-sm">
                  {activeMaterial.application}
                </p>
              </div>

              {/* Associated Built Works */}
              {activeMaterial.associatedProjects.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs font-mono text-studio-300 uppercase tracking-wider block mb-2 font-medium">
                    Specified In Case Studies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeMaterial.associatedProjects.map((pName, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono bg-studio-950 border border-studio-800 text-studio-200 px-3 py-1 flex items-center space-x-1.5 rounded-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-clay-400" aria-hidden="true" />
                        <span>{pName}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comparative Carbon Reduction Banner */}
        <div className="mt-14 bg-studio-900 border border-studio-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm">
          <div className="space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center font-medium">
              <Leaf className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              Circular Carbon Benchmarking
            </span>
            <h3 className="font-serif text-xl text-studio-100">
              Comparing Regional Earth & Mass Timber vs Conventional Steel & Concrete
            </h3>
            <p className="text-xs text-studio-300 max-w-xl">
              Specifying regional mass timber and compressed stabilized earth reduces raw embodied carbon significantly across typical equatorial envelopes.
            </p>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            <div className="text-right font-mono">
              <span className="text-2xl font-serif text-emerald-400 font-bold">-48%</span>
              <span className="text-[10px] text-studio-400 uppercase block">Embodied CO2</span>
            </div>
            <div className="text-right font-mono">
              <span className="text-2xl font-serif text-clay-400 font-bold">100%</span>
              <span className="text-[10px] text-studio-400 uppercase block">Natural Materials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
