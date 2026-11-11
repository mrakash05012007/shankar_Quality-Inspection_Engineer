// src/data/portfolioData.js
// Central data file for Shankar J's portfolio

export const personalInfo = {
  name: "Shankar J",
  title: "Inspection & Quality Engineer",
  subtitle: "Mechanical Engineer | Third-Party Inspection | Quality Assurance",
  tagline: "Precision in Inspection. Confidence in Quality.",
  description:
    "Mechanical Engineer with experience in Quality Inspection and Third-Party Inspection for industrial and Oil & Gas projects. Specialized in material, welding, dimensional and painting inspections, quality documentation and compliance verification.",
  professionalSummary:
    "Mechanical Engineer with 2 years of experience in Quality Inspection and Third-Party Inspection (TPI) for industrial and Oil & Gas projects. Experienced in material, welding, dimensional and painting inspections. Skilled in reviewing engineering drawings, QAP/ITP and quality documents to ensure compliance with project requirements and quality standards.",
  location: "Ponneri, Thiruvallur, Tamil Nadu",
  email: "Shankarshankar09421@gmail.com",
  phone: "+91 7449177467",
  linkedin: "https://www.linkedin.com/in/shankar-j-480059210",
  profileImage: "/images/shankar-profile.jpg",
  resumeFile: "/resume/shankar-j-resume.pdf",
  footerTagline: "Engineering Quality. Ensuring Reliability.",
  developer: "Genze Technologies",
  languages: ["English", "Tamil"],
  softSkills: ["Adaptable", "Leadership", "Initiative"],
};

export const expertise = [
  { id: 1, title: "Third-Party Inspection (TPI)", icon: "Shield", description: "Independent inspection at vendor premises ensuring compliance with project specs and international standards." },
  { id: 2, title: "Quality Assurance & Quality Control", icon: "CheckCircle", description: "Systematic QA/QC activities to ensure product and process conformance with established quality standards." },
  { id: 3, title: "Material Inspection", icon: "Layers", description: "Verification of material certificates, traceability, heat number checks and PMI testing." },
  { id: 4, title: "Welding Inspection", icon: "Zap", description: "Inspection of welding procedures, welder qualifications, joint preparation and weld quality verification." },
  { id: 5, title: "Dimensional Inspection", icon: "Ruler", description: "Precision dimensional verification using calibrated instruments against engineering drawings and tolerances." },
  { id: 6, title: "Painting & Coating Inspection", icon: "Droplets", description: "Surface preparation, DFT measurement, holiday detection and coating system compliance verification." },
  { id: 7, title: "Fabrication Inspection", icon: "Settings", description: "Stage-wise fabrication monitoring from raw material to final product including pre-dispatch inspection." },
  { id: 8, title: "Vendor Assessment & Audit", icon: "ClipboardCheck", description: "Evaluation of vendor quality systems, facilities, processes and compliance with project requirements." },
  { id: 9, title: "Manufacturing Surveillance", icon: "Eye", description: "Continuous monitoring of manufacturing activities to ensure adherence to approved procedures and drawings." },
  { id: 10, title: "Expediting Activities", icon: "TrendingUp", description: "Monitoring manufacturing progress and reporting milestones to ensure timely delivery." },
  { id: 11, title: "Quality Documentation", icon: "FileText", description: "Preparation of inspection reports, release notes, punch lists, data dossiers and final documentation packages." },
  { id: 12, title: "Non-Conformance Reporting", icon: "AlertTriangle", description: "Identification, documentation and follow-up of NCRs with corrective action verification." },
];

export const ndtMethods = [
  {
    id: 1,
    code: "VT",
    name: "Visual Testing",
    description: "Direct and remote visual examination of welds, surfaces and components for surface defects and discontinuities.",
    icon: "Eye",
    color: "#164E78",
  },
  {
    id: 2,
    code: "PT / LPT",
    name: "Liquid Penetrant Testing",
    description: "Detection of surface-breaking defects in non-porous materials using fluorescent or visible dye penetrants.",
    icon: "Droplets",
    color: "#E58A32",
  },
  {
    id: 3,
    code: "MT / MPT",
    name: "Magnetic Particle Testing",
    description: "Detection of surface and near-surface discontinuities in ferromagnetic materials using magnetic fields.",
    icon: "Magnet",
    color: "#164E78",
  },
  {
    id: 4,
    code: "UT",
    name: "Ultrasonic Testing",
    description: "Volumetric examination using high-frequency sound waves for detection of internal flaws and thickness measurement.",
    icon: "Activity",
    color: "#E58A32",
  },
  {
    id: 5,
    code: "RT",
    name: "Radiographic Testing",
    description: "Volumetric examination using X-ray or gamma radiation to reveal internal discontinuities and weld defects.",
    icon: "Radio",
    color: "#164E78",
  },
  {
    id: 6,
    code: "PMI",
    name: "Positive Material Identification",
    description: "Chemical composition verification of materials using XRF or OES to confirm material grade and prevent mix-ups.",
    icon: "Search",
    color: "#E58A32",
  },
  {
    id: 7,
    code: "HT",
    name: "Hardness Testing",
    description: "Measurement of material hardness to verify heat treatment effectiveness and material properties compliance.",
    icon: "Target",
    color: "#164E78",
  },
];

export const asntQualification = {
  level: "ASNT LEVEL II",
  methods: ["VT", "RT", "UT", "LPT", "MPT"],
  note: "ASNT Level II qualified in the above NDT methods",
};

export const equipment = [
  { id: 1, name: "Pressure Vessels", image: "/images/equipment/pressure-vessels.jpg", description: "Inspection of pressure vessels including shell-and-tube, reactor vessels and separators for compliance with ASME Section VIII requirements. Covers dimensional, weld, NDT, hydrotest and documentation review.", icon: "Cylinder" },
  { id: 2, name: "Storage Tanks", image: "/images/equipment/storage-tanks.jpg", description: "Inspection of atmospheric and low-pressure storage tanks per API 650 and API 620 standards including dimensional check, weld inspection and leak testing.", icon: "Database" },
  { id: 3, name: "Valves", image: "/images/equipment/valves.jpg", description: "Inspection of gate, globe, ball, check and control valves including dimensional, material, pressure testing and documentation review per API and project specs.", icon: "Settings2" },
  { id: 4, name: "Piping & Spools", image: "/images/equipment/piping-spools.jpg", description: "Fabricated piping spool inspection covering dimensional, weld quality, NDT, hydrostatic testing and material traceability verification.", icon: "GitBranch" },
  { id: 5, name: "Heat Exchangers", image: "/images/equipment/heat-exchangers.jpg", description: "Shell & tube and air-fin cooler heat exchanger inspection including bundle assembly, dimensional, hydrotest and final inspection documentation.", icon: "Thermometer" },
  { id: 6, name: "Skids & Packages", image: "/images/equipment/skids-packages.jpg", description: "Inspection of packaged equipment skids including structural, piping, instruments, electrical components and overall dimensional compliance.", icon: "Package" },
  { id: 7, name: "Structural Components", image: "/images/equipment/structural.jpg", description: "Structural steel fabrication inspection including dimensional check, weld quality, coating and compliance with applicable structural codes.", icon: "Building" },
  { id: 8, name: "Mechanical Equipment", image: "/images/equipment/mechanical.jpg", description: "Inspection of rotating and static mechanical equipment at vendor premises during manufacturing and before dispatch.", icon: "Cog" },
  { id: 9, name: "Flanges & Fittings", image: "/images/equipment/flanges-fittings.jpg", description: "Incoming inspection of flanges, elbows, tees and other fittings for dimensional accuracy, material compliance and surface quality.", icon: "Circle" },
  { id: 10, name: "Raw Materials", image: "/images/equipment/raw-materials.jpg", description: "Incoming material inspection including certificate review, dimensional check, visual inspection, PMI and hardness testing.", icon: "Layers" },
  { id: 11, name: "Coating & Special Coatings", image: "/images/equipment/coatings.jpg", description: "Inspection of protective coating systems including surface preparation, application monitoring, DFT measurement and holiday detection.", icon: "Paintbrush" },
];

export const standards = {
  asme: [
    { code: "ASME Section II", description: "Materials – Specifications for ferrous and non-ferrous materials" },
    { code: "ASME Section V", description: "Non-Destructive Examination methods and procedures" },
    { code: "ASME Section VIII", description: "Pressure Vessels – Design, fabrication and inspection rules" },
    { code: "ASME Section IX", description: "Welding, Brazing and Fusing Qualifications" },
  ],
  api: [
    { code: "API 510", description: "Pressure Vessel Inspection Code – In-service inspection" },
    { code: "API 570", description: "Piping Inspection Code – In-service inspection of piping systems" },
    { code: "API 650", description: "Welded Tanks for Oil Storage" },
    { code: "API 620", description: "Design and Construction of Large, Welded, Low-Pressure Storage Tanks" },
  ],
  other: [
    { code: "ASTM International", description: "Material standards for metals, testing methods and specifications" },
    { code: "ANSI", description: "American National Standards Institute standards for dimensions and processes" },
    { code: "ISO Standards", description: "International standards for quality management and inspection processes" },
    { code: "NACE MR0175", description: "Sulfide Stress Cracking Resistant Metallic Materials for Oilfield Equipment" },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "IRclass Systems and Solution Limited",
    designation: "Engineer",
    duration: "October 2025 – Present",
    type: "current",
    responsibilities: [
      "Independent third-party inspections at vendor premises",
      "Incoming, in-process, stage-wise, final and pre-dispatch inspections",
      "Reviewing drawings, specifications, QAPs and ITPs",
      "Monitoring NDT activities",
      "Welding procedure and material compliance verification",
      "Material traceability and heat number verification",
      "Dimensional inspection",
      "Hydrostatic, pneumatic and functional testing witness",
      "NCR identification and corrective action follow-up",
      "Inspection reports, release notes, punch lists and final documentation",
      "Vendor assessments and audits",
      "Manufacturing progress monitoring and expediting reports",
    ],
  },
  {
    id: 2,
    company: "BGR Energy Systems Ltd.",
    division: "Air Fin Cooler",
    designation: "Quality Engineer",
    duration: "September 2021 – September 2022",
    type: "past",
    responsibilities: [
      "Customer quality plan review",
      "Inspection as per applicable codes and customer requirements",
      "Dimensional and weld quality verification",
      "Hardness and PMI testing",
      "Fabrication stage inspection",
      "NDT result evaluation and RT film interpretation",
      "NCR issuance and final inspection",
      "Pneumatic and hydrostatic testing witness",
      "Material knowledge: CS, SS, DSS and Incoloy",
      "FMEA, Six Sigma DMAIC and 7 QC Tools",
      "PDCA and CAPA",
      "Quality documentation and data dossier preparation",
      "Coordination with clients, authorized inspectors and third-party agencies",
    ],
  },
];

export const qualityMethodologies = [
  { id: 1, name: "FMEA", fullName: "Failure Mode & Effects Analysis", icon: "AlertOctagon" },
  { id: 2, name: "Six Sigma – DMAIC", fullName: "Define, Measure, Analyze, Improve, Control", icon: "BarChart3" },
  { id: 3, name: "7 QC Tools", fullName: "Seven Quality Control Tools", icon: "Tool" },
  { id: 4, name: "PDCA Cycle", fullName: "Plan, Do, Check, Act Cycle", icon: "RefreshCw" },
  { id: 5, name: "CAPA", fullName: "Corrective Action & Preventive Action", icon: "CheckSquare" },
  { id: 6, name: "Root Cause Analysis", fullName: "Systematic Problem Investigation", icon: "Search" },
  { id: 7, name: "NCR Management", fullName: "Non-Conformance Report Management", icon: "FileWarning" },
];

export const technicalSoftware = [
  { id: 1, name: "PTC Creo", category: "CAD Software", icon: "Box" },
  { id: 2, name: "CATIA", category: "3D Design", icon: "Layers" },
  { id: 3, name: "AutoCAD", category: "2D Drafting", icon: "PenTool" },
  { id: 4, name: "Microsoft Office", category: "Documentation & Reporting", icon: "FileText" },
];

export const education = [
  {
    id: 1,
    degree: "B.E. – Mechanical Engineering",
    institution: "College of Engineering Guindy, Anna University, Chennai",
    year: "2022–2025",
    score: "CGPA: 7.62",
    type: "degree",
    icon: "GraduationCap",
  },
  {
    id: 2,
    degree: "Diploma – Mechanical Engineering",
    institution: "Sri Durga Devi Polytechnic College, Kavaraipettai",
    year: "2018–2021",
    score: "97%",
    type: "diploma",
    icon: "Award",
  },
  {
    id: 3,
    degree: "SSLC",
    institution: "St. Gabriel's Higher Secondary School, Chennai",
    year: "2018",
    score: "84.2%",
    type: "school",
    icon: "BookOpen",
  },
];

export const achievement = {
  title: "Certification of Appreciation",
  issuer: "BGR Energy Systems Ltd.",
  recognition: "For ensuring quality and dispatch operations of tube bundle assembly",
  project: "IOCL Baruni Project",
  date: "April 2022",
  icon: "Award",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "NDT", href: "#ndt" },
  { label: "Equipment", href: "#equipment" },
  { label: "Standards", href: "#standards" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

