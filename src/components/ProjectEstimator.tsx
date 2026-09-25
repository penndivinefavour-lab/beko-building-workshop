import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Clock, Leaf, Check } from 'lucide-react';

interface ProjectEstimatorProps {
  onProceedToCommission: (estimatorData: {
    typology: string;
    area: number;
    climate: string;
    sustainability: string;
    scope: string;
    estimatedCostRange: string;
    estimatedTimelineMonths: number;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  onProceedToCommission,
}) => {
  const [typology, setTypology] = useState<string>('residential');
  const [area, setArea] = useState<number>(650);
  const [climate, setClimate] = useState<string>('highland');
  const [sustainability, setSustainability] = useState<string>('net-zero');
  const [scope, setScope] = useState<string>('full-epc');

  const typologies = [
    { id: 'residential', label: 'Private Residence & Villa', baseRate: 1850, defaultArea: 650 },
    { id: 'civic', label: 'Civic & Cultural Museum', baseRate: 2450, defaultArea: 4200 },
    { id: 'commercial', label: 'Workplace & Innovation Campus', baseRate: 1650, defaultArea: 5500 },
    { id: 'hospitality', label: 'Regenerative Eco-Resort', baseRate: 2150, defaultArea: 2800 },
  ];

  const climates = [
    { id: 'highland', label: 'Highland Rift Valley (e.g., Kigali, Nairobi)', factor: 1.0, note: 'Thermal mass earth blocks & diurnal stack ventilation' },
    { id: 'coastal', label: 'Equatorial Coastal (e.g., Lagos, Zanzibar)', factor: 1.08, note: 'Salt-resistant timber, cross-breeze pavilions & coral lime' },
    { id: 'arid', label: 'Sub-Saharan Arid / Sahelian (e.g., Dakar, Kano)', factor: 1.04, note: 'Deep recessed courtyards, earth berms & terracotta louvers' },
    { id: 'urban', label: 'Dense Urban Metropolitan (e.g., Accra, Johannesburg)', factor: 1.12, note: 'Double-skin acoustic air-filtration brise-soleil' },
  ];

  const sustainabilityLevels = [
    { id: 'net-zero', label: 'Net-Zero Passive & Solar', multiplier: 1.08, co2SavingFactor: 0.52 },
    { id: 'carbon-negative', label: 'Mass Timber Negative Carbon', multiplier: 1.14, co2SavingFactor: 0.68 },
    { id: 'passive-standard', label: 'Passive Vernacular Baseline', multiplier: 1.0, co2SavingFactor: 0.38 },
  ];

  const scopeModels = [
    {
      id: 'full-epc',
      label: 'Integrated Workshop EPC (Design + Build + Joinery)',
      desc: 'Complete turnkey workshop execution. We lead architecture, site engineering, and master crafts on site.',
      multiplier: 1.0,
      timelineOffsetMonths: 0,
    },
    {
      id: 'architectural-lead',
      label: 'Architectural Lead & Site Administration',
      desc: 'Architectural design, detailed engineering drawings, and workshop quality oversight.',
      multiplier: 0.88,
      timelineOffsetMonths: -2,
    },
    {
      id: 'concept-masterplan',
      label: 'Concept Design & Tectonic Strategy',
      desc: 'Schematic architecture, climate analysis, and regional material specification handbook.',
      multiplier: 0.42,
      timelineOffsetMonths: -8,
    },
  ];

  const areaPresets = [350, 650, 1500, 3500, 6000];

  // Calculations
  const calculation = useMemo(() => {
    const selectedTypology = typologies.find((t) => t.id === typology) || typologies[0];
    const selectedClimate = climates.find((c) => c.id === climate) || climates[0];
    const selectedSust = sustainabilityLevels.find((s) => s.id === sustainability) || sustainabilityLevels[0];
    const selectedScope = scopeModels.find((m) => m.id === scope) || scopeModels[0];

    const basePerSqM = selectedTypology.baseRate * selectedClimate.factor * selectedSust.multiplier * selectedScope.multiplier;
    const lowPerSqM = Math.round(basePerSqM * 0.92);
    const highPerSqM = Math.round(basePerSqM * 1.12);

    const totalLow = Math.round(lowPerSqM * area);
    const totalHigh = Math.round(highPerSqM * area);

    // Approximate timeline in months
    let baseMonths = 10;
    if (area > 5000) baseMonths = 22;
    else if (area > 2000) baseMonths = 16;
    else if (area > 800) baseMonths = 13;
    const finalTimeline = Math.max(4, baseMonths + selectedScope.timelineOffsetMonths);

    // Carbon saved (tons of CO2eq)
    const carbonSavedTons = Math.round((area * 420 * selectedSust.co2SavingFactor) / 1000);

    return {
      lowPerSqM,
      highPerSqM,
      totalLow,
      totalHigh,
      finalTimeline,
      carbonSavedTons,
      typologyName: selectedTypology.label,
      climateName: selectedClimate.label,
      sustainabilityName: selectedSust.label,
      scopeName: selectedScope.label,
    };
  }, [typology, area, climate, sustainability, scope]);

  const handleCommissionClick = () => {
    onProceedToCommission({
      typology: calculation.typologyName,
      area,
      climate: calculation.climateName,
      sustainability: calculation.sustainabilityName,
      scope: calculation.scopeName,
      estimatedCostRange: `$${calculation.totalLow.toLocaleString()} – $${calculation.totalHigh.toLocaleString()} USD`,
      estimatedTimelineMonths: calculation.finalTimeline,
    });
  };

  return (
    <section id="estimator" className="py-20 bg-studio-900 border-t border-studio-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="flex items-center space-x-2 text-clay-400 font-mono text-xs uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Interactive Feasibility & Scope Engine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-50 leading-tight">
            Project Scope & Investment Calculator
          </h2>
          <p className="text-sm sm:text-base text-studio-200 leading-relaxed">
            Configure your development parameters to generate an instant baseline estimate of
            investment thresholds, construction duration, and lifecycle carbon savings.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Controls */}
          <div className="lg:col-span-7 bg-studio-950 p-5 sm:p-8 border border-studio-800 space-y-6 sm:space-y-8 rounded-sm">
            {/* 1. Typology */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-studio-300 block mb-3 font-semibold">
                1. Architectural Typology
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Select typology">
                {typologies.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setTypology(t.id);
                      setArea(t.defaultArea);
                    }}
                    className={`min-h-[56px] p-4 border text-left transition-all rounded-sm ${
                      typology === t.id
                        ? 'bg-studio-900 border-clay-500 ring-1 ring-clay-500/40 text-studio-100'
                        : 'bg-studio-950 border-studio-800 text-studio-300 hover:text-white hover:border-studio-700'
                    }`}
                  >
                    <span className="font-serif text-sm font-medium block text-studio-100 mb-1">
                      {t.label}
                    </span>
                    <span className="text-[11px] font-mono text-studio-400">
                      Standard Benchmark: ~${t.baseRate}/m²
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale / Gross Built Area */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="area-slider" className="text-xs font-mono uppercase tracking-wider text-studio-300 font-semibold">
                  2. Gross Built Area (GFA)
                </label>
                <span className="text-base font-serif text-clay-400 font-semibold font-mono">
                  {area.toLocaleString()} m² <span className="text-xs text-studio-400 font-sans font-normal">({Math.round(area * 10.764).toLocaleString()} sq ft)</span>
                </span>
              </div>

              {/* Quick Area Presets for easy mobile taps */}
              <div className="flex items-center space-x-2 mb-3 overflow-x-auto pb-1">
                <span className="text-[10px] font-mono text-studio-400 uppercase mr-1">Presets:</span>
                {areaPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setArea(preset)}
                    className={`min-h-[36px] px-2.5 py-1 text-[11px] font-mono rounded-sm border transition-colors ${
                      area === preset
                        ? 'bg-clay-500 text-white border-clay-500 font-semibold'
                        : 'bg-studio-900 text-studio-300 border-studio-800 hover:border-studio-600'
                    }`}
                  >
                    {preset.toLocaleString()} m²
                  </button>
                ))}
              </div>

              <input
                id="area-slider"
                type="range"
                min="200"
                max="10000"
                step="50"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-studio-800 rounded-lg appearance-none cursor-pointer accent-clay-500 my-2"
                aria-label="Gross Built Area in square meters"
              />
              <div className="flex justify-between items-center text-[11px] font-mono text-studio-400">
                <span>200 m² (Villa)</span>
                <span>2,500 m² (Estate)</span>
                <span>10,000 m² (Campus)</span>
              </div>
            </div>

            {/* 3. Climate Zone */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-studio-300 block mb-3 font-semibold">
                3. Microclimate & Topography
              </span>
              <div className="space-y-2" role="group" aria-label="Select climate zone">
                {climates.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setClimate(c.id)}
                    className={`w-full min-h-[48px] p-3 text-left border flex items-start justify-between text-xs transition-all rounded-sm ${
                      climate === c.id
                        ? 'bg-studio-900 border-clay-500 text-studio-100 ring-1 ring-clay-500/40'
                        : 'bg-studio-950 border-studio-800 text-studio-300 hover:border-studio-700 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className="font-medium text-studio-100 block">{c.label}</span>
                      <span className="text-[11px] text-studio-400 font-sans">{c.note}</span>
                    </div>
                    {climate === c.id && <Check className="w-4 h-4 text-clay-400 shrink-0 mt-0.5" aria-hidden="true" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Sustainability Ambition */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-studio-300 block mb-3 font-semibold">
                4. Environmental Performance Tier
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" role="group" aria-label="Select environmental tier">
                {sustainabilityLevels.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSustainability(s.id)}
                    className={`min-h-[50px] p-3 text-left border text-xs transition-all rounded-sm ${
                      sustainability === s.id
                        ? 'bg-studio-900 border-clay-500 text-studio-100 ring-1 ring-clay-500/40'
                        : 'bg-studio-950 border-studio-800 text-studio-300 hover:border-studio-700 hover:text-white'
                    }`}
                  >
                    <span className="font-medium block mb-1 text-studio-100">{s.label}</span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                      -{Math.round(s.co2SavingFactor * 100)}% CO2eq
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Workshop Delivery Model */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-studio-300 block mb-3 font-semibold">
                5. Workshop Delivery Model
              </span>
              <div className="space-y-2" role="group" aria-label="Select delivery model">
                {scopeModels.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setScope(m.id)}
                    className={`w-full min-h-[56px] p-3.5 text-left border transition-all rounded-sm ${
                      scope === m.id
                        ? 'bg-studio-900 border-clay-500 text-studio-100 ring-1 ring-clay-500/40'
                        : 'bg-studio-950 border-studio-800 text-studio-300 hover:border-studio-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-studio-100">{m.label}</span>
                      {scope === m.id && <Check className="w-4 h-4 text-clay-400 shrink-0" aria-hidden="true" />}
                    </div>
                    <p className="text-[11px] text-studio-400 leading-relaxed font-sans">{m.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Calculated Summary Dossier */}
          <div className="lg:col-span-5 bg-studio-950 border border-studio-800 p-5 sm:p-8 lg:sticky lg:top-28 shadow-2xl space-y-6 rounded-sm">
            <div className="border-b border-studio-800 pb-4">
              <span className="text-[10px] font-mono text-clay-400 uppercase tracking-widest block mb-1">
                Real-Time Feasibility Synthesis
              </span>
              <h3 className="font-serif text-2xl text-studio-50">
                Estimated Project Scope
              </h3>
            </div>

            {/* Investment Range */}
            <div className="bg-studio-900 p-5 border border-studio-800 rounded-sm">
              <span className="text-[10px] font-mono text-studio-300 uppercase block mb-1">
                Estimated Workshop Investment (USD)
              </span>
              <div className="font-serif text-2xl sm:text-3xl text-studio-100 font-semibold tracking-tight">
                ${calculation.totalLow.toLocaleString()} – ${calculation.totalHigh.toLocaleString()}
              </div>
              <div className="text-[11px] font-mono text-clay-400 mt-1 font-medium">
                Guide Rate: ${calculation.lowPerSqM} – ${calculation.highPerSqM} / m²
              </div>
            </div>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-studio-900 p-4 border border-studio-800 rounded-sm">
                <div className="flex items-center space-x-1.5 text-studio-300 mb-1">
                  <Clock className="w-3.5 h-3.5 text-bronze-400" aria-hidden="true" />
                  <span className="text-[10px] uppercase">Duration</span>
                </div>
                <div className="text-lg font-serif text-studio-100 font-medium">
                  ~{calculation.finalTimeline} Months
                </div>
                <span className="text-[10px] text-studio-400">Design to handover</span>
              </div>

              <div className="bg-studio-900 p-4 border border-studio-800 rounded-sm">
                <div className="flex items-center space-x-1.5 text-studio-300 mb-1">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span className="text-[10px] uppercase">CO2 Avoided</span>
                </div>
                <div className="text-lg font-serif text-emerald-400 font-medium">
                  ~{calculation.carbonSavedTons} Tons
                </div>
                <span className="text-[10px] text-studio-400">vs concrete baseline</span>
              </div>
            </div>

            {/* Milestones Breakdown */}
            <div className="space-y-2 border-t border-studio-800 pt-4 text-xs font-mono">
              <span className="text-studio-300 text-[10px] uppercase tracking-wider block mb-2 font-semibold">
                Projected Phase Milestones
              </span>
              <div className="flex justify-between text-studio-200 py-1 border-b border-studio-900">
                <span>Phase I: Geotechnical & Concept</span>
                <span>Months 1–3</span>
              </div>
              <div className="flex justify-between text-studio-200 py-1 border-b border-studio-900">
                <span>Phase II: Permitting & Tectonics</span>
                <span>Months 4–6</span>
              </div>
              <div className="flex justify-between text-studio-200 py-1 border-b border-studio-900">
                <span>Phase III: Workshop Fabrication</span>
                <span>Months 6–9</span>
              </div>
              <div className="flex justify-between text-studio-200 py-1">
                <span>Phase IV: On-Site Craft Construction</span>
                <span>Months 9–{calculation.finalTimeline}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCommissionClick}
                className="w-full min-h-[48px] py-4 bg-clay-500 hover:bg-clay-600 text-white font-medium text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-xl active:scale-[0.98] rounded-sm"
              >
                <span>Commission Studio with this Scope</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <p className="text-[10px] font-mono text-center text-studio-400 mt-2">
                Transfers calculated parameters directly into the studio commission brief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
