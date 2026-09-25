import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { PhilosophySection } from './components/PhilosophySection';
import { MaterialityLab } from './components/MaterialityLab';
import { ProjectEstimator } from './components/ProjectEstimator';
import { StudioFellows } from './components/StudioFellows';
import { MonographsSection } from './components/MonographsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CommissionModal } from './components/CommissionModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [isBlueprintMode, setIsBlueprintMode] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommissionOpen, setIsCommissionOpen] = useState<boolean>(false);
  const [commissionPrefill, setCommissionPrefill] = useState<{
    typology?: string;
    area?: number;
    climate?: string;
    sustainability?: string;
    scope?: string;
    estimatedCostRange?: string;
    projectTitle?: string;
  } | null>(null);

  const handleOpenCommission = () => {
    setCommissionPrefill(null);
    setIsCommissionOpen(true);
  };

  const handleInquireFromProject = (project: Project) => {
    setSelectedProject(null);
    setCommissionPrefill({
      projectTitle: project.title,
      typology: project.specs.typology,
      area: parseInt(project.specs.grossFloorArea.replace(/[^0-9]/g, '')) || 750,
      climate: project.specs.climateZone,
    });
    setIsCommissionOpen(true);
  };

  const handleProceedFromEstimator = (data: {
    typology: string;
    area: number;
    climate: string;
    sustainability: string;
    scope: string;
    estimatedCostRange: string;
    estimatedTimelineMonths: number;
  }) => {
    setCommissionPrefill({
      typology: data.typology,
      area: data.area,
      climate: data.climate,
      sustainability: data.sustainability,
      scope: data.scope,
      estimatedCostRange: data.estimatedCostRange,
    });
    setIsCommissionOpen(true);
  };

  const handleExploreWorks = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-[100dvh] flex flex-col font-sans transition-colors duration-500 ${
        isBlueprintMode ? 'blueprint-mode' : 'bg-studio-950 text-studio-100'
      }`}
    >
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-clay-500 focus:text-white focus:outline-none rounded text-xs font-mono uppercase tracking-wider"
      >
        Skip to main content
      </a>

      <Navbar
        onOpenCommission={handleOpenCommission}
        isBlueprintMode={isBlueprintMode}
        onToggleBlueprint={() => setIsBlueprintMode(!isBlueprintMode)}
      />

      <main id="main-content" className="flex-1">
        <Hero
          onOpenCommission={handleOpenCommission}
          onExploreWorks={handleExploreWorks}
        />

        <ProjectGallery
          onSelectProject={(project) => setSelectedProject(project)}
          onInquireProject={handleInquireFromProject}
        />

        <PhilosophySection />

        <MaterialityLab />

        <ProjectEstimator
          onProceedToCommission={handleProceedFromEstimator}
        />

        <StudioFellows />

        <MonographsSection />
      </main>

      <Footer />

      {/* Accessible Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireTypology={handleInquireFromProject}
      />

      <CommissionModal
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
        prefillData={commissionPrefill}
      />
    </div>
  );
};

export default App;
