import { VehicleStatusBadge, type VehicleStatus } from "./VehicleStatusBadge";

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  plate: string;
  capacity: number;
  status: VehicleStatus;
}

interface VehicleRowProps {
  vehicle: Vehicle;
  onClick?: (vehicle: Vehicle) => void;
}

export function VehicleRow({ vehicle, onClick }: VehicleRowProps) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(vehicle)}
      className="w-full text-left flex items-center justify-between px-3 py-2.5 bg-card hover:bg-accent transition-colors"
    >
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-card-foreground truncate">{vehicle.name}</p>
        <p className="text-xs text-muted-foreground">
          {vehicle.type} · {vehicle.plate} · {vehicle.capacity} seats
        </p>
      </div>
      <VehicleStatusBadge status={vehicle.status} />
    </button>
  );
}
