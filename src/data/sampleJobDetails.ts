export interface CrewMember {
  name: string;
  role: string;
  callTime: string;
}

export interface Vehicle {
  name: string;
  driver: string;
  loaded: boolean;
}

export interface JobDetails {
  jobId: string;
  type: string;
  crew: CrewMember[];
  vehicles: Vehicle[];
  notes: string;
}

export const sampleJobDetails: Record<string, JobDetails> = {
  "1": {
    jobId: "1",
    type: "Corporate",
    crew: [
      { name: "Luke Vella", role: "Sound Engineer", callTime: "06:30" },
      { name: "Sarah Borg", role: "Lighting Tech", callTime: "06:30" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "07:00" },
      { name: "Maria Grech", role: "Stage Manager", callTime: "06:00" },
      { name: "James Attard", role: "AV Tech", callTime: "07:00" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "07:00" },
      { name: "Mark Zammit", role: "Rigger", callTime: "06:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "07:30" },
    ],
    vehicles: [
      { name: "Van 1 — Mercedes Sprinter", driver: "Mark Zammit", loaded: true },
      { name: "Van 3 — Fiat Ducato", driver: "James Attard", loaded: false },
    ],
    notes: "Client requests lapel mics for 3 speakers. Parking arranged at MCC loading bay. Contact: Ms. Spiteri 7921 XXXX.",
  },
  "2": {
    jobId: "2",
    type: "Wedding",
    crew: [
      { name: "Chris Galea", role: "Sound Engineer", callTime: "13:00" },
      { name: "Amy Pace", role: "Lighting Tech", callTime: "13:00" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "14:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "13:30" },
      { name: "Nina Farrugia", role: "DJ Tech", callTime: "14:00" },
    ],
    vehicles: [
      { name: "Van 2 — VW Crafter", driver: "Chris Galea", loaded: true },
    ],
    notes: "Ceremony at chapel garden, reception in main hall. Band arrives at 20:00. No fog machines — venue restriction.",
  },
  "3": {
    jobId: "3",
    type: "Concert",
    crew: [
      { name: "Luke Vella", role: "FOH Engineer", callTime: "14:00" },
      { name: "Sarah Borg", role: "Monitor Engineer", callTime: "14:00" },
      { name: "Mark Zammit", role: "Head Rigger", callTime: "12:00" },
      { name: "James Attard", role: "Lighting Designer", callTime: "13:00" },
      { name: "Daniel Camilleri", role: "LED Tech", callTime: "14:00" },
      { name: "Amy Pace", role: "Backline Tech", callTime: "15:00" },
      { name: "Chris Galea", role: "Stage Hand", callTime: "12:00" },
      { name: "Nina Farrugia", role: "Stage Hand", callTime: "12:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "14:00" },
      { name: "Kurt Schembri", role: "Rigger", callTime: "12:00" },
      { name: "Paul Debono", role: "Rigger", callTime: "12:00" },
      { name: "Jana Sultana", role: "AV Tech", callTime: "14:00" },
      { name: "Ryan Spiteri", role: "AV Tech", callTime: "14:00" },
      { name: "Mia Buttigieg", role: "Production Asst", callTime: "13:00" },
    ],
    vehicles: [
      { name: "Truck 1 — 7.5t Iveco", driver: "Mark Zammit", loaded: true },
      { name: "Van 1 — Mercedes Sprinter", driver: "James Attard", loaded: true },
      { name: "Van 2 — VW Crafter", driver: "Chris Galea", loaded: false },
    ],
    notes: "Load-in via Sarria Street entrance. Headliner rider attached separately. Power: 3-phase 63A confirmed.",
  },
  "4": {
    jobId: "4",
    type: "Corporate",
    crew: [
      { name: "Sarah Borg", role: "Lighting Tech", callTime: "08:30" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "08:30" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "09:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "09:00" },
    ],
    vehicles: [
      { name: "Van 3 — Fiat Ducato", driver: "Nina Farrugia", loaded: true },
    ],
    notes: "Small launch event. LED wall 3×2m. Playback from client laptop via HDMI.",
  },
  "5": {
    jobId: "5",
    type: "Corporate",
    crew: [
      { name: "Luke Vella", role: "Sound Engineer", callTime: "07:00" },
      { name: "Amy Pace", role: "AV Tech", callTime: "07:30" },
      { name: "James Attard", role: "AV Tech", callTime: "07:30" },
      { name: "Chris Galea", role: "Video Operator", callTime: "07:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "08:00" },
      { name: "Mark Zammit", role: "Rigger", callTime: "07:00" },
    ],
    vehicles: [
      { name: "Van 1 — Mercedes Sprinter", driver: "Mark Zammit", loaded: true },
      { name: "Van 2 — VW Crafter", driver: "Chris Galea", loaded: false },
    ],
    notes: "Outdoor ceremony — weather backup plan is Aula Magna. Confirm with registrar on arrival.",
  },
  "6": {
    jobId: "6",
    type: "Festival",
    crew: [
      { name: "Luke Vella", role: "FOH Engineer", callTime: "15:00" },
      { name: "Sarah Borg", role: "Monitor Engineer", callTime: "15:00" },
      { name: "Mark Zammit", role: "Rigger", callTime: "13:00" },
      { name: "James Attard", role: "Lighting Designer", callTime: "14:00" },
      { name: "Daniel Camilleri", role: "LED Tech", callTime: "15:00" },
      { name: "Amy Pace", role: "Stage Hand", callTime: "13:00" },
      { name: "Chris Galea", role: "Stage Hand", callTime: "13:00" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "15:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "15:00" },
      { name: "Kurt Schembri", role: "Backline Tech", callTime: "16:00" },
    ],
    vehicles: [
      { name: "Truck 1 — 7.5t Iveco", driver: "Mark Zammit", loaded: true },
      { name: "Van 1 — Mercedes Sprinter", driver: "James Attard", loaded: false },
    ],
    notes: "Council contact: Mr. Bonnici. Stage dimensions 8×6m. Noise curfew 23:00 strict.",
  },
  "7": {
    jobId: "7",
    type: "Corporate",
    crew: [
      { name: "Chris Galea", role: "Sound Engineer", callTime: "16:00" },
      { name: "Sarah Borg", role: "Lighting Tech", callTime: "16:00" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "16:30" },
      { name: "Amy Pace", role: "AV Tech", callTime: "16:30" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "17:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "17:00" },
    ],
    vehicles: [
      { name: "Van 2 — VW Crafter", driver: "Chris Galea", loaded: true },
    ],
    notes: "Awards ceremony with 12 categories. Confidence monitors ×2 needed. AV desk in balcony.",
  },
  "p1": {
    jobId: "p1",
    type: "Corporate",
    crew: [
      { name: "Luke Vella", role: "Sound Engineer", callTime: "06:30" },
      { name: "Sarah Borg", role: "Lighting Tech", callTime: "06:30" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "07:00" },
      { name: "Maria Grech", role: "Stage Manager", callTime: "06:00" },
      { name: "James Attard", role: "AV Tech", callTime: "07:00" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "07:00" },
      { name: "Mark Zammit", role: "Rigger", callTime: "06:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "07:30" },
      { name: "Kurt Schembri", role: "LED Tech", callTime: "07:00" },
      { name: "Ryan Spiteri", role: "AV Tech", callTime: "07:30" },
    ],
    vehicles: [
      { name: "Van 1 — Mercedes Sprinter", driver: "Mark Zammit", loaded: true },
      { name: "Van 3 — Fiat Ducato", driver: "James Attard", loaded: true },
    ],
    notes: "Post-event: all gear returned. Client very happy with LED wall setup.",
  },
  "p2": {
    jobId: "p2",
    type: "Wedding",
    crew: [
      { name: "Chris Galea", role: "Sound Engineer", callTime: "12:00" },
      { name: "Amy Pace", role: "Lighting Tech", callTime: "12:00" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "13:00" },
      { name: "Nina Farrugia", role: "DJ Tech", callTime: "13:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "12:30" },
    ],
    vehicles: [
      { name: "Van 2 — VW Crafter", driver: "Chris Galea", loaded: true },
    ],
    notes: "Smooth event. Band was 15 min late but recovered. Fairy lights left for next-day collection.",
  },
  "p3": {
    jobId: "p3",
    type: "Concert",
    crew: [
      { name: "Luke Vella", role: "FOH Engineer", callTime: "13:00" },
      { name: "Sarah Borg", role: "Monitor Engineer", callTime: "13:00" },
      { name: "Mark Zammit", role: "Head Rigger", callTime: "11:00" },
      { name: "James Attard", role: "Lighting Designer", callTime: "12:00" },
      { name: "Daniel Camilleri", role: "LED Tech", callTime: "13:00" },
      { name: "Amy Pace", role: "Backline Tech", callTime: "14:00" },
      { name: "Chris Galea", role: "Stage Hand", callTime: "11:00" },
      { name: "Nina Farrugia", role: "Stage Hand", callTime: "11:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "13:00" },
      { name: "Kurt Schembri", role: "Rigger", callTime: "11:00" },
      { name: "Paul Debono", role: "Rigger", callTime: "11:00" },
      { name: "Jana Sultana", role: "AV Tech", callTime: "13:00" },
      { name: "Ryan Spiteri", role: "AV Tech", callTime: "13:00" },
      { name: "Mia Buttigieg", role: "Production Asst", callTime: "12:00" },
      { name: "Karl Brincat", role: "Stage Hand", callTime: "11:00" },
      { name: "Tina Vella", role: "Spot Op", callTime: "16:00" },
    ],
    vehicles: [
      { name: "Truck 1 — 7.5t Iveco", driver: "Mark Zammit", loaded: true },
      { name: "Van 1 — Mercedes Sprinter", driver: "James Attard", loaded: true },
      { name: "Van 2 — VW Crafter", driver: "Chris Galea", loaded: true },
    ],
    notes: "Rain delay 30 min. All gear weatherproofed. Minor cable damage on snake — flagged for repair.",
  },
  "p4": {
    jobId: "p4",
    type: "Corporate",
    crew: [
      { name: "Luke Vella", role: "Sound Engineer", callTime: "07:00" },
      { name: "Sarah Borg", role: "Lighting Tech", callTime: "07:00" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "07:30" },
      { name: "James Attard", role: "AV Tech", callTime: "07:30" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "08:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "08:00" },
      { name: "Mark Zammit", role: "Rigger", callTime: "07:00" },
    ],
    vehicles: [
      { name: "Van 1 — Mercedes Sprinter", driver: "Mark Zammit", loaded: true },
      { name: "Van 3 — Fiat Ducato", driver: "James Attard", loaded: true },
    ],
    notes: "Ministerial keynote required last-minute lectern mic. Handled on-site. Client invoiced.",
  },
  "p5": {
    jobId: "p5",
    type: "Wedding",
    crew: [
      { name: "Chris Galea", role: "Sound Engineer", callTime: "13:00" },
      { name: "Amy Pace", role: "Lighting Tech", callTime: "13:00" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "14:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "13:30" },
    ],
    vehicles: [
      { name: "Van 2 — VW Crafter", driver: "Chris Galea", loaded: true },
    ],
    notes: "Small intimate wedding. Uplighters in garden. All gear collected same night.",
  },
  "p6": {
    jobId: "p6",
    type: "Corporate",
    crew: [
      { name: "Chris Galea", role: "Sound Engineer", callTime: "16:00" },
      { name: "Sarah Borg", role: "Lighting Tech", callTime: "16:00" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "16:30" },
      { name: "Amy Pace", role: "AV Tech", callTime: "16:30" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "17:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "17:00" },
    ],
    vehicles: [
      { name: "Van 2 — VW Crafter", driver: "Chris Galea", loaded: true },
    ],
    notes: "Awards dinner with 8 categories. Playback ran smoothly. Positive feedback from HR team.",
  },
  "p7": {
    jobId: "p7",
    type: "Concert",
    crew: [
      { name: "Luke Vella", role: "FOH Engineer", callTime: "14:00" },
      { name: "Sarah Borg", role: "Monitor Engineer", callTime: "14:00" },
      { name: "Mark Zammit", role: "Head Rigger", callTime: "12:00" },
      { name: "James Attard", role: "Lighting Designer", callTime: "13:00" },
      { name: "Daniel Camilleri", role: "LED Tech", callTime: "14:00" },
      { name: "Amy Pace", role: "Stage Hand", callTime: "12:00" },
      { name: "Chris Galea", role: "Stage Hand", callTime: "12:00" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "14:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "14:00" },
      { name: "Kurt Schembri", role: "Backline Tech", callTime: "15:00" },
      { name: "Paul Debono", role: "Rigger", callTime: "12:00" },
      { name: "Jana Sultana", role: "Spot Op", callTime: "16:00" },
    ],
    vehicles: [
      { name: "Truck 1 — 7.5t Iveco", driver: "Mark Zammit", loaded: true },
      { name: "Van 1 — Mercedes Sprinter", driver: "James Attard", loaded: true },
    ],
    notes: "Pre-launch press event. Sound check at 16:00. All acts confirmed. Pyro cleared by MTA.",
  },
  "p8": {
    jobId: "p8",
    type: "Corporate",
    crew: [
      { name: "Luke Vella", role: "Sound Engineer", callTime: "14:00" },
      { name: "Sarah Borg", role: "Lighting Tech", callTime: "14:00" },
      { name: "Daniel Camilleri", role: "Video Operator", callTime: "14:30" },
      { name: "James Attard", role: "AV Tech", callTime: "14:30" },
      { name: "Mark Zammit", role: "Rigger", callTime: "13:00" },
      { name: "Nina Farrugia", role: "AV Tech", callTime: "15:00" },
      { name: "Amy Pace", role: "Stage Hand", callTime: "13:00" },
      { name: "Lara Mifsud", role: "Runner", callTime: "15:00" },
    ],
    vehicles: [
      { name: "Van 1 — Mercedes Sprinter", driver: "Mark Zammit", loaded: true },
      { name: "Van 3 — Fiat Ducato", driver: "James Attard", loaded: true },
    ],
    notes: "High-security event. All crew vetted in advance. Gear inspected on entry. Smooth load-out by 23:30.",
  },
};
