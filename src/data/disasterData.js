// Lucena City Disaster Preparedness & Relief Hub Data

export const emergencyHotlines = [
  { id: 1, agency: "Lucena CDRRMO (Disaster Risk Reduction)", number: "(042) 710-0911 / 0917-562-2311", category: "Primary Emergency" },
  { id: 2, agency: "Lucena City Police Station", number: "(042) 373-1383 / 0998-598-5781", category: "Law Enforcement" },
  { id: 3, agency: "Bureau of Fire Protection - Lucena", number: "(042) 373-2151 / (042) 710-5321", category: "Fire & Rescue" },
  { id: 4, agency: "Lucena United Doctors Hospital", number: "(042) 373-6711 to 15", category: "Medical" },
  { id: 5, agency: "Quezon Medical Center (QMC)", number: "(042) 710-2552", category: "Medical" },
  { id: 6, agency: "Quezon Electric Cooperative (QUEZELCO I)", number: "(042) 710-3056", category: "Utilities" }
];

export const evacuationCenters = [
  {
    id: 1,
    name: "Lucena City Government Gymnasium",
    barangay: "Barangay Cotta",
    capacity: "1,500 individuals",
    status: "Open",
    facilities: "Generator, Medical Station, Restrooms, Water Tank",
    coordinates: "13.9355° N, 121.6155° E"
  },
  {
    id: 2,
    name: "Pacencia Songco Elementary School",
    barangay: "Barangay Gulang-Gulang",
    capacity: "800 individuals",
    status: "Standby",
    facilities: "Classrooms, Multi-purpose Hall, Handwashing Stations",
    coordinates: "13.9412° N, 121.6042° E"
  },
  {
    id: 3,
    name: "Lucena East 1 Elementary School",
    barangay: "Barangay 6 (Poblacion)",
    capacity: "600 individuals",
    status: "Open",
    facilities: "Elevated structures, Kitchen area, Clinic",
    coordinates: "13.9351° N, 121.6180° E"
  },
  {
    id: 4,
    name: "Ibabang Dupay Covered Court",
    barangay: "Barangay Ibabang Dupay",
    capacity: "500 individuals",
    status: "Standby",
    facilities: "Covered court, Ventilation fans, First aid posts",
    coordinates: "13.9480° N, 121.6210° E"
  }
];

export const preparednessSteps = [
  {
    phase: "Before (Pre-Disaster / Preparedness)",
    icon: "bi-shield-check",
    steps: [
      "Monitor weather updates from PAGASA and Lucena CDRRMO via radio or local social media pages.",
      "Prepare a Go-Bag (Go-Kit) containing 3 days' worth of non-perishable food, bottled water, flashlight, extra batteries, whistle, and important documents.",
      "Identify the nearest evacuation center in your barangay (e.g., Cotta Gym or local school).",
      "Check and trim heavy tree branches near your house and secure loose roofing sheets."
    ]
  },
  {
    phase: "During (Response / Action)",
    icon: "bi-exclamation-triangle",
    steps: [
      "Stay calm, keep updated on emergency broadcasts, and follow evacuation orders issued by local authorities immediately.",
      "Turn off main electrical switches and gas valves before leaving your home if instructed or if floods rise.",
      "Avoid crossing flooded streets, rivers, or moving waters where undercurrents can be deceptive.",
      "Move to higher ground or designated evacuation shelters early before flash floods or storm surges peak."
    ]
  },
  {
    phase: "After (Recovery / Assessment)",
    icon: "bi-heart-pulse",
    steps: [
      "Wait for official clearance from local disaster management before returning home.",
      "Check your house for structural damages, electrical wire hazards, and gas leaks before turning utilities back on.",
      "Boil drinking water or use water purification tablets to prevent waterborne diseases common after typhoons.",
      "Report missing family members or needs for relief assistance to your local Barangay Hall or CDRRMO."
    ]
  }
];
export const initialAlerts = [
  {
    id: 1,
    title: "Typhoon Weather Advisory",
    level: "Warning",
    message: "Heavy rainfall expected in coastal barangays (Cotta, Dalahican). Prepare Go-Bags.",
    timestamp: "10 minutes ago"
  }
];