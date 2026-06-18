import { Product, Industry, ProcessStep, FeatureCard } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "core-cutters",
    name: "Core Cutters",
    shortDescription: "Ultra-precise circular core cutting knives engineered with custom bevel angles for clean, dust-free cuts of high-density cardboard cores.",
    fullDescription: "Built specifically to withstand high-volume processing in core mills and paper conversion lines. Our industrial Core Cutters are forged with vacuum heat-treated premium tool steel, ensuring maximum operational longevity and pristine, square edge profiles on standard or extra-thick paper tubes.",
    category: "Cutting Blades & Knives",
    imageAlt: "Precision Industrial Core Cutter Blades",
    image: "/core-cutter.png",
    specifications: [
      { label: "Material Grade", value: "D2 (1.2379) / M2 High-Speed Steel" },
      { label: "Hardness Rating", value: "60 - 64 HRC (Vacuum-Quenched)" },
      { label: "Outer Diameter Range", value: "75mm to 350mm" },
      { label: "Corpus Thickness", value: "5MM" },
      { label: "Surface Treatment", value: "Satin-Polish or TiN (Titanium Nitride) Coated" },
      { label: "Cutting Profile", value: "Single-Bevel / Double-Bevel Pre-Engineered" },
      { label: "Dimensional Tolerance", value: "±0.01mm concentricity guarantee" }
    ],
    features: [
      "Zero-conflagration non-friction heat generation profile during continuous feed programs",
      "99.8% reduction in cardboard slitting dust, maximizing clean-room operations and sensor-lifetimes",
      "Extended grind-retention curve (up to 4.2x greater than standard carbon-steel alternatives)",
      "Vibration-dampening face alignment geometry"
    ],
    useCases: [
      "High-speed paper mill winding lines",
      "Rigid mailing tube manufacturing centers",
      "Heavy-duty protective industrial packing cores",
      "Adhesive tape core precision extrusion-cutting"
    ],
    bladeGeometry: {
      outerDiameter: "250mm",
      innerDiameter: "150mm",
      thickness: "5.0mm",
      materialGrade: "D2 High-Carbon Tool Steel",
      hardnessRating: "62 HRC"
    }
  },
  {
    id: "top-slitting-cutters",
    name: "Top Slitting Cutters",
    shortDescription: "High-performance rotary shear slitter blades, precision-ground with absolute face flat tolerances for perfect edge slitting.",
    fullDescription: "Our Top Slitting Cutters set the gold standard in premium slitting industries. Designed with micro-finished ground faces to eliminate runout, these cutters work in perfect synchronization with bottom anvils to deliver flawless, straight-slit webs without fraying or burr formation.",
    category: "Cutting Blades & Knives",
    imageAlt: "Premium Top Slitting Rotary Blades",
    image: "/top-slitting-cutter.png",
    specifications: [
      { label: "Composition", value: "C98, D2 GRADE" },
      { label: "Hardness Rating", value: "63 - 66 HRC (Cryogenically Treated)" },
      { label: "Thickness", value: "0.55MM TO 4 MM" },
      { label: "Runout Tolerance", value: "≤ 0.005mm axially and radially" },
      { label: "Edge Polish Index", value: "Ra 0.05 µm (Mirror Finish)" },
      { label: "Clamping Compatibility", value: "Pneumatic, manual, or bayonet rapid-lock shafts" }
    ],
    features: [
      "Cryogenic stabilization phase removes internal crystal stress for structural stability",
      "Perfect shear angle optimization ensures consistent slit friction curves",
      "Compatible with major mechanical and pneumatic holders including Tidland, Mario Cotta",
      "Anti-galling material surface prevents residue build-up from self-adhesive tapes"
    ],
    useCases: [
      "Pressure-sensitive tape raw material slitting",
      "High-speed copper and aluminum foil dividing",
      "Coated, metalized, and laminated film slitting",
      "Heavy kraft paper and board trimming"
    ],
    bladeGeometry: {
      outerDiameter: "150mm",
      innerDiameter: "80mm",
      thickness: "2.0mm",
      materialGrade: "C98 / D2 Grade",
      hardnessRating: "65 HRC"
    }
  },
  {
    id: "teeth-cutters",
    name: "Teeth Cutters",
    shortDescription: "Bespoke tooth-profile knives and linear serrated blades for rapid-tear packaging and tape dispensers.",
    fullDescription: "Engineering the perfect puncture-tear and slice profile requires extreme accuracy. RS Industries' Teeth Cutters feature chemically sharpened tooth tips with highly customized pitch alignments (including standard V-tooth, scalloped, and asymmetric configurations) for reliable, tactile severance.",
    category: "Cutting Blades & Knives",
    imageAlt: "Industrial Teeth Cutters and Serrated Blades",
    image: "/teeth-cutter.jpg",
    specifications: [
      { label: "Material Base", value: "SUS420J2 / SKH-51 High-Carbon Stainless Steel / Spring Steel" },
      { label: "Serration Pitch", value: "Custom engineered (0.8mm to 6.35mm pitch)" },
      { label: "Corrosion Shield", value: "Sub-surface Passivated / Teflon Base Dry lubrication" },
      { label: "Outer Diameter Range", value: "200 MM TO 1200 MM" },
      { label: "Tensile Threshold", value: "1450 MPa minimum structural yield" },
      { label: "Profile Variants", value: "V-Teeth, Wave, Flat-top, Razor-puncture" },
      { label: "Application Type", value: "Linear strip, circular disc, or punch-die segments" }
    ],
    features: [
      "Ultra-sharp micro-facets on each tooth tip reduce tearing resistance by 35%",
      "Proprietary dry-lubricating Teflon coating protects from active adhesive transfer",
      "Excellent shock resistance preventing tip chipping under cyclic impact loading",
      "Laser-welded mounting backports for seamless modular machine integration"
    ],
    useCases: [
      "Carton sealing machine automated dispenser systems",
      "Tamper-evident medical packaging film cutters",
      "Serrated adhesive tape dispenser blades",
      "Specialty composite and aluminum separation foils"
    ],
    bladeGeometry: {
      outerDiameter: "200mm to 1200mm",
      innerDiameter: "Standard slot mounting ports",
      thickness: "1.2mm",
      materialGrade: "SUS 440C Stainless / Spring Steel",
      hardnessRating: "59 HRC"
    }
  },
  {
    id: "knife-holders",
    name: "Knife Holders",
    shortDescription: "Pneumatic and manual rotary knife holders featuring micro-depth adjustment and high-rigidity clamping.",
    fullDescription: "Engineering for vibration-free slitting requires robust clamping. Our high-precision Knife Holders support both pneumatic lateral movement and manual collar lock positioning, ensuring absolute stability for top slitting cutters during high-velocity mill runs.",
    category: "Cutting Blades & Knives",
    imageAlt: "Precision Pneumatic and Manual Knife Holders",
    image: "/holder.jpg",
    specifications: [
      { label: "Material Body", value: "High-Tensile Aluminum Alloy & Case-Hardened Steel" },
      { label: "Clamping Method", value: "Pneumatic lateral lock or manual clamping collar" },
      { label: "Shaft Diameter Compatibility", value: "40mm to 150mm standard keyway shafts" },
      { label: "Depth Adjustment", value: "Micro-screw dial fine adjust (±0.02mm resolution)" },
      { label: "Guideway Travel", value: "Precision dovetail or linear ball rails" },
      { label: "Maximum Line Speed", value: "1,500 meters per minute" }
    ],
    features: [
      "Rigid housing dampens cyclic runout and dynamic cutting vibration",
      "Pneumatic quick-connect valves for rapid shaft configuration and repositioning",
      "Backlash-free micro-depth collar protects knife overlap edge boundaries",
      "Easy maintenance layout with self-lubricating seal rings"
    ],
    useCases: [
      "Primary paper converter slitting sections",
      "High-speed adhesive tape rotary division lines",
      "Foil and optical film slitting machine assemblies"
    ],
    bladeGeometry: {
      outerDiameter: "90mm (Housing)",
      innerDiameter: "45mm / 60mm Bore",
      thickness: "15.0mm (Width)",
      materialGrade: "Hard-Anodized Alum / Tool Steel",
      hardnessRating: "58 HRC (Steel inserts)"
    }
  },
  {
    id: "bottom-slitting-cutters",
    name: "Bottom Slitting Cutters (Bottoms)",
    shortDescription: "Premium bottom anvils, multi-groove sleeves, and female blades with sub-micron axial runout tolerance.",
    fullDescription: "Working in tandem with top slitting cutters, our Bottom Slitting Cutters and multi-groove anvils ensure perfect shear cutting. Forged with vacuum cryo-treated tool steel or fitted with tungsten carbide inserts, they maintain clean, dust-free edges across high-tonnage web feeds.",
    category: "Cutting Blades & Knives",
    imageAlt: "Industrial Bottom Slitting Knives and Multi-groove Anvils",
    image: "/bottoms.jpg",
    specifications: [
      { label: "Material Grade", value: "D2 Grade Tool Steel or Tungsten Carbide Inlay" },
      { label: "Hardness Matrix", value: "62 - 64 HRC (Steel) / 91 - 92 HRA (Carbide)" },
      { label: "Axial Runout Limit", value: "≤ 0.003mm axial face flatness guarantee" },
      { label: "Bore Size Tolerance", value: "H7 precision push-fit tolerance class" },
      { label: "Surface Finish Polish", value: "Mirror micro-lapped (Ra <0.08 µm)" },
      { label: "Locking Configurations", value: "Split collar, set-screws, or expansion sleeves" }
    ],
    features: [
      "Sub-micron runout eliminates micro-gap variations, reducing edge fraying",
      "Option of solid steel or wear-resistant tungsten carbide rings",
      "Symmetrically balanced bodies prevent dynamic shaft deflection at high RPMs",
      "Double-sided cutting edges allow reversing for double operational service life"
    ],
    useCases: [
      "Newspaper and kraft paper high-volume slitting plants",
      "Alu-foil and copper battery web splitting stations",
      "Laminated board and multi-wall packaging slitting"
    ],
    bladeGeometry: {
      outerDiameter: "100mm to 220mm",
      innerDiameter: "Custom shaft bore (e.g. 80mm)",
      thickness: "10.0mm / 15.0mm standard",
      materialGrade: "D2 H-C Tool Steel / YG12X Carbide",
      hardnessRating: "63 HRC"
    }
  },
  {
    id: "tiger-polyester-cord-belts",
    name: "Tiger Polyester Belt (Orange Belt & Black Belt)",
    shortDescription: "Ultra-tensile polyester cord strapping with engineered shock absorption for securing heavy cargo shipment modules.",
    fullDescription: "Under extreme industrial dynamic transport, traditional steel banding cuts into pack-goods, while basic plastic breaks. The 'Tiger' Polyester Cord Belt utilizes woven high-tenacity polyester threads, providing massive breakout force resistance coupled with structural elastic elasticity to maintain bundle tension over global supply transit.",
    category: "Securing & Packaging Systems",
    imageAlt: "High-Tensile Tiger Polyester Cord Belts",
    image: "/tiger-polyester-belt.png",
    specifications: [
      { label: "Base Yarn Matrix", value: "Multi-filament Woven High-Tenacity Polyester (Orange Belt and Black Belt)" },
      { label: "Breakout Force Strength", value: "500kg up to 2400kg linear force payload" },
      { label: "Thickness", value: "6MM TO 15MM" },
      { label: "Ribband Widths", value: "13mm, 16mm, 19mm, 25mm, up to 32mm" },
      { label: "Elongation Properties", value: "10-15% elastic-memory stretch" },
      { label: "Environmental Rating", value: "100% UV-resistant, rust-free, acid-vapor inert" },
      { label: "Buckle Quality Specs", value: "Compatible with phosphate-coated steel wire wire-buckles" }
    ],
    features: [
      "Elastic buffer response absorbs critical impacts during container ocean tossing and rail shunting",
      "Non-abrasive surface protects expensive gloss surfaces, paper reels, and lacquered pipes",
      "Safe to apply and cut—zero tension recoil danger compared to snapping steel strapping band",
      "Superb weather-proofing system; will not rust, rot, or deteriorate under outdoor logging yards"
    ],
    useCases: [
      "Binding massive paper mill reels and rolled web bundles",
      "Strapping heavy machinery and metal framing during crates dispatch",
      "Securing building core mill stocks, cement, and brick pallets",
      "Marine container freight block-and-tally rigging systems"
    ]
  },
  {
    id: "glue-pump",
    name: "Glue Pump",
    shortDescription: "Heavy-duty double-acting pneumatic diaphragm pumps designed specifically for viscous industrial starch, adhesive, and ink delivery.",
    fullDescription: "Pumping abrasive glue requires high torque and low shear. Engineered with a self-cleaning, low-pulsation chamber outline, the RS Industries' Glue Pump maintains a perfectly uniform mass flow rate of starch adhesive and solvent-free polymers directly to production rollers with zero motor-heat transmission.",
    category: "Machinery Auxiliaries",
    imageAlt: "Industrial Starch Adhesive Pneumatic Pump",
    image: "/glue-pump.png",
    specifications: [
      { label: "Operating Principle", value: "Pneumatic Double-Acting Diaphragm System" },
      { label: "Flow Consistency Curve", value: "Max 45 Liters/min (Variable Speed Control)" },
      { label: "Air Supply Regulator", value: "2 to 8 Bar compressed dynamic-air connection" },
      { label: "Wetted Material Block", value: "Electro-polished Stainless Steel 316 / PTFE bellows" },
      { label: "Viscosity Index Range", value: "Up to 25,000 cPs (highly-viscous starch glue)" },
      { label: "Suction Lift Profile", value: "Dry suction up to 4.5 meters; wet up to 8.2 meters" }
    ],
    features: [
      "Stall-free, pilot-operated pneumatic valve configuration avoids mechanical dead-states",
      "Fully oil-free operation guarantees zero contamination of organic starch adhesives",
      "Extreme-durability pure PTFE diaphragms offer 5,000+ continuous production hours",
      "Easy-flush split manifold layout decreases batch cleanup times from 2 hours to 10 minutes"
    ],
    useCases: [
      "Corrugated box board fluting starch dispersion feed lines",
      "Paper core winding line dual-station adhesive baths",
      "Solvent and water-based ink recirculation in wide web printing",
      "High-pressure coating lines and laminate adhesive application"
    ]
  },
  {
    id: "corrugated-thin-blades",
    name: "Corrugated Thin Blades",
    shortDescription: "Ultra-thin tungsten carbide slitting knives designed for high-speed corrugated board manufacturing, ensuring crush-free edges.",
    fullDescription: "Traditional thich blades squeeze and crush the delicate flute structures of corrugated cartons, destroying box compression strength. Our Corrugated Thin Blades are sintered from premium, ultra-fine-grain tungsten carbide, keeping an absolute razor edge for dustless slitting with maximum board structural strength.",
    category: "Cutting Blades & Knives",
    imageAlt: "Tungsten Carbide Corrugated Thin Slitters",
    image: "/corrugated-thin-blade.png",
    specifications: [
      { label: "Sintering material", value: "Sub-Micron Tungsten Carbide (WC-Co 9%)" },
      { label: "Hardness Matrix", value: "91.5 - 93.5 HRA (Extreme Wear Defense)" },
      { label: "Thickness Scale", value: "1.0mm to 1.4mm body width with dynamic tapers" },
      { label: "Bevel Profile", value: "Dual bevel with double facet micro-geometry" },
      { label: "Edge Sharpness Index", value: "Laser tested cutting edge radius < 1.0 µm" },
      { label: "Solder Bonding", value: "Silver-induction vacuum brazed mounting hubs" }
    ],
    features: [
      "Razor performance prevents flute crushing, safeguarding complete structural box strength",
      "Super-polished blade flanks prevent hot starch crust accumulation on knife bodies",
      "Designed specifically to work with automatic spray-mist lubrication systems",
      "Saves up to 75% on downtime with self-sharpening pneumatic grinding wheels"
    ],
    useCases: [
      "High-output slotter-scorer lines (Marquip, BHS, Fosber, Marquip-Ward-United)",
      "Multi-wall flute combination board slitting (A, B, C, E, BC, AAA flutes)",
      "Premium corrugated retail presentation boxes clean slitting",
      "Heavy industrial grade triple-wall board dividing operations"
    ],
    bladeGeometry: {
      outerDiameter: "260mm",
      innerDiameter: "168mm",
      thickness: "1.2mm",
      materialGrade: "Tungsten Carbide YG12X",
      hardnessRating: "92 HRA"
    }
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "paper-mills",
    name: "Paper Mills",
    accentTitle: "Primary Paper Production & Post-Slitting Plants",
    description: "High-volume paper converters demand extreme uptime and clean slitting. We supply mill-grade circular slitters, log saws, and core cutting knives that easily survive the demanding heat and humidity of non-stop 24/7 web winding machinery.",
    metrics: [
      { label: "Max Speed Limit", value: "2,200 m/min" },
      { label: "Average Blade Life", value: "850+ Reels" },
      { label: "Friction Output", value: "-25% Less Heat" }
    ],
    useCases: [
      "Edge-trimming of high-tonnage jumbo paper reels",
      "High-speed shaft slitting under massive web tension",
      "Continuous unwinding reel core trimming",
      "Sanitary paper and tissue roll log-cutting"
    ]
  },
  {
    id: "core-mills",
    name: "Core Mills",
    accentTitle: "High-Density Cardboard Tube & Core Plants",
    description: "Forming rigid cardboard tubes requires relentless heavy pressure. Our Core Cutters, adhesive pumps, and Tiger straps work in tandem to power heavy cardboard tube spiral winding, cut-offs, and shipping packing.",
    metrics: [
      { label: "Cardboard Thickness", value: "Up to 35mm" },
      { label: "Cutting Cleanliness", value: "99.8% Dust-Free" },
      { label: "Pump Yield Run", value: "24/7 Continuous" }
    ],
    useCases: [
      "Pneumatic core cutter multi-blade slitting sets",
      "High-viscosity silicate adhesive pump circulation",
      "Core wall thick paper sheet-edge scoring",
      "Finished heavy-walled pipe bundle strapping"
    ]
  },
  {
    id: "tape-industries",
    name: "Tape Industries",
    accentTitle: "Pressure-Sensitive & Specialty Adhesive Slitting",
    description: "Adhesives tend to rapidly transfer and gum up blades. Our specialized non-stick slitting discs and teeth cutters feature micro-finished profiles and Teflon-grade compounds to separate backing papers and high-tack glues without adhesive drag.",
    metrics: [
      { label: "Tolerance Index", value: "±0.005mm" },
      { label: "Adhesive Drag Curve", value: "-75% Drag Force" },
      { label: "Speed Target", value: "450 m/min" }
    ],
    useCases: [
      "BOPP self-adhesive carton tape slitting",
      "Double-sided foam and masking tape continuous splitting",
      "Pre-installation of serrated dispensers in automated boxes",
      "Premium Kraft paper gummed tape linear scoring"
    ]
  },
  {
    id: "slitting-industries",
    name: "Slitting Industries",
    accentTitle: "Metals, Foils, Plastics & Film Conversion",
    description: "From micro-thin copper battery foils to multi-layer packaging laminates, mechanical precision is non-negotiable. Our top rotary shear knives achieve sub-micron runout indexes, promising flat, pristine slits zero distortion.",
    metrics: [
      { label: "Flatness Limit", value: "≤ 0.002mm" },
      { label: "Web Slit Width", value: "Down to 8.0mm" },
      { label: "Edge Sharpness", value: "<1.0 µm Radius" }
    ],
    useCases: [
      "Automotive aluminum and battery lithium coil slitting",
      "Flexible packaging laminated pouch film separation",
      "Polycarbonate and PET optical sheet slitting",
      "Textile web and medical non-woven roll dividing"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Raw Material Selection",
    subtitle: "Vacuum-Furnace Hot Forged Steels",
    description: "We source our chemical compounds exclusively from certified metallurgists in Germany, Sweden, and Japan. Every batch undergoes ultrasonic testing to verify total structural density and zero internal molecular micro-voids.",
    technicalMetric: "Material Purity: >99.98%"
  },
  {
    stepNumber: "02",
    title: "Precision CNC Machining",
    subtitle: "5-Axis CAD/CAM Sintering & Turning",
    description: "Blades and pump components are turned on high-end Okuma and DMG MORI 5-axis lathe centers, milling cutting geometries and internal clamping bores to mechanical concentric absolute tolerances.",
    technicalMetric: "Physical Hub Runout: ≤0.005mm"
  },
  {
    stepNumber: "03",
    title: "Vacuum Cryo Heat-Treatment",
    subtitle: "Advanced Hardness Phase-Shifting",
    description: "Components are vacuum-hardened up to 1180°C and then deep-submerged into liquid nitrogen at -196°C. This converts residual austenite into ultra-hard martensite, increasing blade chip resistance and wear limits.",
    technicalMetric: "Core Hardness Index: 62-65 HRC"
  },
  {
    stepNumber: "04",
    title: "Lap Grinding & Mirror Polish",
    subtitle: "Sub-Micron Bevel Friction Diagnostics",
    description: "We grind our cutting edges on high-precision German grinding stations. Micro-lap finishing scales blade bevels to a glassy mirror finish, preventing friction heat build-up and adhesive drag during high-speed runs.",
    technicalMetric: "Edge Finish Polish: Ra <0.05 µm"
  },
  {
    stepNumber: "05",
    title: "Laser Quality Inspection",
    subtitle: "Absolute Quality Conformance Assurance",
    description: "Every cutter undergoes a touchless 3D coordinate evaluation, inspecting facet angles, diameter flat indexes, and dynamic runout. Only after passing the stringent ISO-conformance testing is it packed and dispatched.",
    technicalMetric: "QA Tolerance Standard: Zero Defect"
  }
];

export const TECHNICAL_METRICS = [
  { value: "25+", label: "Years of Engineering Expertise" },
  { value: "4.8M+", label: "Precision Blades Crafted and Supplied" },
  { value: "1,200+", label: "Global Manufacturing Partnerships" },
  { value: "99.9%", label: "On-Time Bulk Dispatch Rate" }
];
