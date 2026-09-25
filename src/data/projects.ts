import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'kigali-residence',
    title: 'Nyirangarama Ridge Sanctuary',
    tagline: 'Sculpted rammed earth residence floating above terraced hillsides',
    category: 'residential',
    categoryLabel: 'Private Residence',
    location: 'Kigali, Rwanda',
    year: '2024',
    image: '/assets/projects/kigali-residence.webp',
    description: 'Embedded into the topography of Kigali’s thousand hills, the Nyirangarama Ridge Sanctuary harmonizes monolithic compressed earth construction with cantilevered timber sunshades. The residence harnesses gravity-fed valley breezes to eliminate conventional mechanical air conditioning.',
    architecturalConcept: 'The building is structured as a series of stepped geological strata. Excavated volcanic red soil from site footing was stabilized on-site with 6% pozzolanic binder and pressed into 450mm thermal mass walls. Glazed sliding facades recess completely into wall pockets during dusk, merging the central salon with endemic flora terraces.',
    specs: {
      client: 'Private Commission',
      year: '2024',
      location: 'Gasabo District, Kigali',
      country: 'Rwanda',
      grossFloorArea: '780 m²',
      typology: 'Highland Biophilic Villa (Study)',
      climateZone: 'Subtropical Highland (Köppen Cwb)',
      passiveStrategies: [
        'Diurnal thermal mass absorption',
        'Stack-effect ventilation light towers',
        'Deep 2.4m timber eaves',
        'Integrated subterranean rainwater retention (120,000L)'
      ],
      materials: [
        'Site-stabilized volcanic earth blocks',
        'Rwandan grevillea timber brise-soleil',
        'Honed black basalt floor slabs',
        'Recycled hand-cast brass hardware'
      ],
      structuralSystem: 'Load-bearing stabilized earth masonry with post-tensioned recycled aggregate concrete lintels',
      embodiedCarbonSaving: '-58% estimated vs baseline concrete frame',
      status: 'Built',
      awards: [
        'Atelier Sustainable Residence Citation 2024',
        'Equatorial Passive Design Case Study'
      ]
    },
    quote: {
      text: 'The architecture acts as a natural extension of the ridge, excavated from its core by geometry and light.',
      author: 'BEKO Atelier Design Journal'
    },
    highlightFeature: '450mm self-cooling compressed earth masonry with zero active HVAC requirement.',
    coordinates: { lat: -1.9441, lng: 30.0619 }
  },
  {
    id: 'nairobi-innovation-hub',
    title: 'Kilimani Tectonic Innovation Campus',
    tagline: 'Perforated terracotta lattice & mass-timber workspace for continental technologists',
    category: 'commercial',
    categoryLabel: 'Workplace & R&D',
    location: 'Nairobi, Kenya',
    year: '2023',
    image: '/assets/projects/nairobi-innovation-hub.webp',
    description: 'A 6-storey civic workplace engineered as a lung for high-density Nairobi. Wrapped in a double-skin kinetic terracotta brise-soleil crafted in collaboration with Murang’a ceramicists, the campus reduces solar heat gain by 64% while maintaining abundant natural daylight.',
    architecturalConcept: 'Rather than a sealed glass tower, we conceived a permeable vertical village. Atrium stepped lightwells induce continuous vertical air draft, pulling cooler air from shaded courtyard gardens through working floors. The structural framework combines regional eucalyptus mass-timber glue-laminated columns with low-clinker hybrid slabs.',
    specs: {
      client: 'Equator Tech Foundation (Concept)',
      year: '2023',
      location: 'Kilimani, Nairobi',
      country: 'Kenya',
      grossFloorArea: '6,450 m²',
      typology: 'Civic Innovation & Research Headquarters',
      climateZone: 'Temperate Highland Tropical',
      passiveStrategies: [
        'Terracotta solar shading envelope with 42% perforation ratio',
        'Central solar chimney atrium driving natural displacement ventilation',
        'Photovoltaic solar canopy generating 110% of daytime operational power',
        'Greywater botanical filtration reed beds'
      ],
      materials: [
        'Locally fired kiln-tempered terracotta baguettes',
        'Certified PEFC mass-timber eucalyptus Glulam',
        'Exposed pozzolana concrete',
        'Acoustic sisal woven baffle ceilings'
      ],
      structuralSystem: 'Hybrid mass-timber frame with seismic pozzolana concrete stabilization core',
      embodiedCarbonSaving: '-44% lifecycle carbon vs conventional Nairobi office benchmark',
      status: 'Built',
      awards: [
        'Tropical Commercial Prototype Honor',
        'Low-Carbon Mass Timber Feasibility Study'
      ]
    },
    quote: {
      text: 'Demonstrating how tropical commercial architecture can be porous, humane, and radically energy independent.',
      author: 'BEKO Atelier Monograph Series'
    },
    highlightFeature: 'Solar chimney atrium drawing continuous filtered fresh air naturally.',
    coordinates: { lat: -1.2921, lng: 36.8219 }
  },
  {
    id: 'zanzibar-sanctuary',
    title: 'Matemwe Coral & Mangrove Sanctuary',
    tagline: 'Tidal oceanfront retreat crafted from reclaimed coral rag and hand-woven makuti thatch',
    category: 'hospitality',
    categoryLabel: 'Eco-Hospitality',
    location: 'Matemwe, Zanzibar',
    year: '2024',
    image: '/assets/projects/zanzibar-sanctuary.webp',
    description: 'Set between mangrove saltwater estuaries and the Indian Ocean reef, this low-impact sanctuary reinterprets Swahili coastal tectonic traditions. Raised on stilts above fragile littoral ecologies, the pavilion roofs capture monsoon trade winds to cool ocean suites passively.',
    architecturalConcept: 'To respect coastal erosion dynamics and sacred mangrove channels, zero concrete was poured in the intertidal zone. Foundations utilize screw-piles with zero marine disturbance. Pavilions are crafted from storm-felled dhow timber, lime-mortared indigenous fossilized stone, and permeable palm thatch canopies.',
    specs: {
      client: 'Boutique Conservation Hospitality (Speculative)',
      year: '2024',
      location: 'Matemwe Coast, Zanzibar North',
      country: 'Tanzania',
      grossFloorArea: '3,200 m²',
      typology: 'Regenerative Marine Sanctuary & Retreat',
      climateZone: 'Equatorial Marine Tropical (Köppen Af)',
      passiveStrategies: [
        'Cross-ventilated pavilions aligned with seasonal monsoon winds',
        'Elevated stilt architecture preventing disruption to tidal watercourses',
        'Double-layered steep makuti thatched roofs releasing hot air cushions',
        'Closed-loop marine desalination powered by solar arrays'
      ],
      materials: [
        'Reclaimed mangrove and dhow teak structural posts',
        'Natural lime and powdered coral plaster (zero cement)',
        'Hand-woven coconut coir privacy screens',
        'Poured shell terrazzo pathways'
      ],
      structuralSystem: 'Timber post-and-beam pinned to minimally invasive stainless ground anchors',
      embodiedCarbonSaving: 'Net Carbon Negative (-120 tons CO2eq stored in biomass)',
      status: 'Built',
      awards: [
        'Regenerative Coastal Design Study',
        'Swahili Tectonic Heritage Recognition'
      ]
    },
    quote: {
      text: 'Architecture that lets the tide, the wind, and the sound of the reef take center stage.',
      author: 'Vernacular Architecture Notes'
    },
    highlightFeature: '100% off-grid freshwater & solar operation with zero cement in intertidal zones.',
    coordinates: { lat: -5.8674, lng: 39.3516 }
  },
  {
    id: 'lagos-arts-centre',
    title: 'Eko Pavilion for Contemporary Arts',
    tagline: 'Monumental folded concrete and perforated brass cultural beacon on the lagoon',
    category: 'civic',
    categoryLabel: 'Civic & Cultural',
    location: 'Victoria Island, Lagos',
    year: '2025',
    image: '/assets/projects/lagos-arts-centre.webp',
    description: 'Conceived as an open living room for Lagos’ vibrant creative vanguard, the Eko Pavilion opens its perimeter completely to the maritime lagoon. Monolithic folded plates cast with crushed oyster shell aggregate shield galleries from tropical downpours while framing dramatic water vistas.',
    architecturalConcept: 'The design mediates between the immense energy of Lagos and the contemplative silence required for art. A continuous public ramp weaves visitors through sculpture courts, open-air amphitheaters, and climate-controlled vault galleries, crowned by an acoustic brass ceiling modeled on regional textile geometry.',
    specs: {
      client: 'Civic Endowment Concept',
      year: '2025',
      location: 'Ozumba Mbadiwe Lagoon Waterfront, Lagos',
      country: 'Nigeria',
      grossFloorArea: '8,900 m²',
      typology: 'Museum, Auditorium & Public Sculpture Park',
      climateZone: 'Tropical Wet & Dry / Coastal Monsoon',
      passiveStrategies: [
        'Water-cooled lagoon air intake ducts beneath public amphitheater',
        'Deep protective folded cantilevers resisting torrential monsoon rains',
        'Indirect diffused clerestory daylighting with zero UV penetration to galleries',
        'Thermal buffer-zones protecting delicate contemporary artworks'
      ],
      materials: [
        'Oyster shell exposed aggregate architectural concrete',
        'Hand-hammered perforated brass sunscreens',
        'Iroko hardwood acoustic baffles',
        'Polished terrazzo incorporating regional river quartz'
      ],
      structuralSystem: 'Post-tensioned architectural concrete folded plate roof with 38m clear column-free spans',
      embodiedCarbonSaving: '-38% through 40% slag/pozzolan replacement in cement mix',
      status: 'Commission / Design Phase',
      awards: [
        'Civic Masterplan Design Commendation',
        'Future Cultural Institution Concept'
      ]
    },
    quote: {
      text: 'A design that channels the maritime vitality of the lagoon into a monumental civic shelter.',
      author: 'Studio Exhibition Catalog'
    },
    highlightFeature: '38-meter column-free folded concrete roof providing civic shelter on the lagoon edge.',
    coordinates: { lat: 6.4281, lng: 3.4219 }
  },
  {
    id: 'cape-winelands-estate',
    title: 'Franschhoek Monolithic Cellar & Estate',
    tagline: 'Subterranean earth-sheltered gravity winery and minimalist stone residential villa',
    category: 'residential',
    categoryLabel: 'Estate & Cellar',
    location: 'Franschhoek, South Africa',
    year: '2023',
    image: '/assets/projects/cape-winelands-estate.webp',
    description: 'Carved directly into the granitic slopes of the Franschhoek Valley, this estate merges viticulture with serene residential pavilions. The subterranean barrel cellar maintains a constant 14°C year-round without mechanical cooling through massive thermal earth coupling.',
    architecturalConcept: 'Two parallel dry-stacked Paarl granite walls anchor the project into the mountain incline. Between these geological spine walls, frameless glass sheets slide into pockets, opening expansive living spaces to vineyards and jagged peaks. Native fynbos vegetation covers the continuous green roofs.',
    specs: {
      client: 'Private Estate Commission',
      year: '2023',
      location: 'Franschhoek Valley, Western Cape',
      country: 'South Africa',
      grossFloorArea: '1,450 m²',
      typology: 'Estate Residence & Subterranean Gravity Cellar',
      climateZone: 'Mediterranean Semi-Arid (Köppen Csb)',
      passiveStrategies: [
        'Subterranean earth berming providing continuous 14°C cellar insulation',
        'Deep thermal mass dry-stack granite spine walls',
        'Fynbos biodiversity green roof absorbing 90% of solar radiation',
        'Mountain spring water capture and natural retention ponds'
      ],
      materials: [
        'Paarl mountain dry-stacked granite stone',
        'Charred oak cladding salvaged from historic wine casks',
        'Off-shutter board-marked architectural concrete',
        'Weathered Corten steel entry portals'
      ],
      structuralSystem: 'Reinforced earth-retaining concrete core with lightweight steel & timber pavilion roofs',
      embodiedCarbonSaving: '-51% lifecycle operational energy savings',
      status: 'Built',
      awards: [
        'Landscape Integration Design Study',
        'Subterranean Thermal Architecture Citation'
      ]
    },
    quote: {
      text: 'The architecture acts as a magnifying lens for the surrounding mountain amphitheater.',
      author: 'Cape Architecture Review'
    },
    highlightFeature: '100% passive subterranean barrel cellar holding 14°C through 2.5m earth-sheltered berms.',
    coordinates: { lat: -33.9142, lng: 19.1235 }
  },
  {
    id: 'dakar-interior-penthouse',
    title: 'Almadies Monolith & Ocean Penthouse',
    tagline: 'Minimalist coastal sanctuary fusing polished basalt, sculpted brass, and bleached oak',
    category: 'residential',
    categoryLabel: 'Interior Architecture',
    location: 'Les Almadies, Dakar, Senegal',
    year: '2024',
    image: '/assets/projects/dakar-interior-penthouse.webp',
    description: 'Perched on the westernmost point of the African continent, this 520 m² penthouse celebrates the dramatic confrontation between volcanic Atlantic cliffs and open ocean horizon. Hand-cast lime plaster walls curve organically to soften intense coastal glare.',
    architecturalConcept: 'We removed all decorative cladding to expose the pure structural muscle of the building. In place of standard partitions, sculpted fluted lime plaster volumes separate private chambers from public entertaining salons. Custom furniture was carved by Dakar master woodworkers from salvaged West African teak.',
    specs: {
      client: 'Private Client Commission',
      year: '2024',
      location: 'Pointe des Almadies, Dakar',
      country: 'Senegal',
      grossFloorArea: '520 m²',
      typology: 'Luxury Penthouse & Curated Gallery',
      climateZone: 'Hot Semi-Arid Coastal (Köppen BSh)',
      passiveStrategies: [
        'Dual-aspect cross-ventilation capturing maritime trade winds',
        'Custom operable bronze louvered brise-soleil to the west',
        'Light-diffusing curved plaster finishes preventing harsh glare',
        'Thermal isolation floor build-up with recycled cork'
      ],
      materials: [
        'Senegalese hand-troweled lime and wax tadelakt',
        'Reclaimed West African Mukwa / Teak joinery',
        'Honed black Cap-Vert volcanic stone',
        'Brushed unlacquered marine bronze'
      ],
      structuralSystem: 'Custom interior monolithic massing integrated into existing reinforced framework',
      embodiedCarbonSaving: '95% locally sourced and hand-finished craft materials',
      status: 'Built',
      awards: [
        'Vernacular Interior Craft Citation',
        'Atlantic Coastal Living Study'
      ]
    },
    quote: {
      text: 'Where tactile regional craftsmanship and severe modernism meet the Atlantic spray.',
      author: 'Atelier Interior Dossier'
    },
    highlightFeature: 'Curved acoustic tadelakt walls handcrafted by local master plaster artisans.',
    coordinates: { lat: 14.7431, lng: -17.5186 }
  }
];

export const projectFilters = [
  { id: 'all', label: 'All Typologies' },
  { id: 'residential', label: 'Residences & Estates' },
  { id: 'civic', label: 'Civic & Cultural' },
  { id: 'commercial', label: 'Workplace & Campuses' },
  { id: 'hospitality', label: 'Retreats & Sanctuaries' }
];
