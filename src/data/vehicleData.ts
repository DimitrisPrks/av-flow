export interface VehicleProfile {
  id: string;
  name: string;
  type: string;
  plate: string;
  capacity: string;
  status: "Available" | "In Use" | "Maintenance";
}

export const vehicles: VehicleProfile[] = [
  { id: "v1", name: "Van 1 — Mercedes Sprinter", type: "Sprinter", plate: "GBJ 014", capacity: "1.5t / 8 pallets", status: "In Use" },
  { id: "v2", name: "Van 2 — VW Crafter", type: "Crafter", plate: "HCK 227", capacity: "1.5t / 8 pallets", status: "Available" },
  { id: "v3", name: "Van 3 — Fiat Ducato", type: "Ducato", plate: "FMR 881", capacity: "1.2t / 6 pallets", status: "Available" },
  { id: "v4", name: "Truck 1 — 7.5t Iveco", type: "Truck", plate: "KAL 550", capacity: "3.5t / 16 pallets", status: "In Use" },
  { id: "v5", name: "Van 4 — Ford Transit", type: "Transit", plate: "JPN 443", capacity: "1.4t / 7 pallets", status: "Maintenance" },
  { id: "v6", name: "Van 5 — Mercedes Sprinter", type: "Sprinter", plate: "LBQ 912", capacity: "1.5t / 8 pallets", status: "Available" },
  { id: "v7", name: "Truck 2 — 3.5t Iveco Daily", type: "Truck", plate: "GRT 338", capacity: "1.8t / 10 pallets", status: "Available" },
  { id: "v8", name: "Car 1 — VW Caddy", type: "Caddy", plate: "MNP 119", capacity: "0.5t / site visits", status: "Available" },
];
