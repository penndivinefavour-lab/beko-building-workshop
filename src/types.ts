export type ProjectCategory = 'all' | 'residential' | 'civic' | 'commercial' | 'hospitality';

export interface ProjectSpecification {
  client: string;
  year: string;
  location: string;
  country: string;
  grossFloorArea: string;
  typology: string;
  climateZone: string;
  passiveStrategies: string[];
  materials: string[];
  structuralSystem: string;
  embodiedCarbonSaving: string;
  status: 'Built' | 'Under Construction' | 'Commission / Design Phase';
  awards?: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  galleryImages?: string[];
  description: string;
  architecturalConcept: string;
  specs: ProjectSpecification;
  quote?: {
    text: string;
    author: string;
  };
  highlightFeature: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Material {
  id: string;
  name: string;
  localName?: string;
  category: 'Earth & Stone' | 'Timber & Bamboo' | 'Metals & Ceramics' | 'Composites & Glass';
  origin: string;
  embodiedCarbonRating: 'Ultra-Low' | 'Negative Carbon' | 'Low Impact' | 'Recycled Circular';
  thermalMass: string;
  tactileFeel: string;
  durability: string;
  description: string;
  application: string;
  colorHex: string;
  textureCode: string;
  associatedProjects: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  studioLocation: string;
  bio: string;
  focus: string;
  publicationsOrProjects: string;
}

export interface Publication {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'Monograph' | 'Research Paper' | 'Exhibition' | 'Lecture';
  outlet: string;
  abstract: string;
  downloadUrl?: string;
  readTime: string;
}

export interface EstimatorState {
  typology: string;
  area: number; // in sq meters
  climate: string;
  sustainabilityStandard: string;
  workshopScope: string;
}
