export interface CrewMemberProfile {
  id: string;
  name: string;
  role: string;
  skills: string[];
  available: boolean;
  phone: string;
}

export const crewMembers: CrewMemberProfile[] = [
  { id: "c1", name: "Luke Vella", role: "Sound Engineer", skills: ["FOH", "A1", "System Tech"], available: true, phone: "7921 1001" },
  { id: "c2", name: "Sarah Borg", role: "Lighting Tech", skills: ["Lighting Designer", "Spot Op", "Dimmer Tech"], available: true, phone: "7921 1002" },
  { id: "c3", name: "Daniel Camilleri", role: "Video Operator", skills: ["LED Tech", "Camera Op", "Playback"], available: false, phone: "7921 1003" },
  { id: "c4", name: "Maria Grech", role: "Stage Manager", skills: ["Stage Manager", "Production Asst"], available: true, phone: "7921 1004" },
  { id: "c5", name: "James Attard", role: "AV Tech", skills: ["AV Tech", "Lighting Designer", "Rigger"], available: true, phone: "7921 1005" },
  { id: "c6", name: "Nina Farrugia", role: "AV Tech", skills: ["AV Tech", "DJ Tech", "Playback"], available: true, phone: "7921 1006" },
  { id: "c7", name: "Mark Zammit", role: "Head Rigger", skills: ["Rigger", "Truss", "Motor Controller"], available: false, phone: "7921 1007" },
  { id: "c8", name: "Lara Mifsud", role: "Runner", skills: ["Runner", "Production Asst"], available: true, phone: "7921 1008" },
  { id: "c9", name: "Chris Galea", role: "Sound Engineer", skills: ["FOH", "Monitor Engineer", "A1"], available: true, phone: "7921 1009" },
  { id: "c10", name: "Amy Pace", role: "Lighting Tech", skills: ["Lighting Designer", "Backline Tech", "Spot Op"], available: false, phone: "7921 1010" },
  { id: "c11", name: "Kurt Schembri", role: "Rigger", skills: ["Rigger", "Truss", "Backline Tech"], available: true, phone: "7921 1011" },
  { id: "c12", name: "Paul Debono", role: "Rigger", skills: ["Rigger", "Stage Hand", "Motor Controller"], available: true, phone: "7921 1012" },
  { id: "c13", name: "Jana Sultana", role: "AV Tech", skills: ["AV Tech", "Spot Op", "Camera Op"], available: true, phone: "7921 1013" },
  { id: "c14", name: "Ryan Spiteri", role: "AV Tech", skills: ["AV Tech", "LED Tech", "Playback"], available: false, phone: "7921 1014" },
  { id: "c15", name: "Mia Buttigieg", role: "Production Assistant", skills: ["Production Asst", "Stage Manager", "Runner"], available: true, phone: "7921 1015" },
  { id: "c16", name: "Karl Brincat", role: "Stage Hand", skills: ["Stage Hand", "Rigger"], available: true, phone: "7921 1016" },
  { id: "c17", name: "Tina Vella", role: "Spot Operator", skills: ["Spot Op", "Lighting Designer"], available: true, phone: "7921 1017" },
];

export const allSkillTags: string[] = Array.from(
  new Set(crewMembers.flatMap((m) => m.skills))
).sort();
