import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { vehicles } from "@/data/vehicleData";

const statusStyle: Record<string, string> = {
  Available: "bg-status-confirmed-bg text-status-confirmed",
  "In Use": "bg-status-prepping-bg text-status-prepping",
  Maintenance: "bg-status-live-bg text-status-live",
};

export default function VehiclesPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return vehicles;
    const q = search.toLowerCase();
    return vehicles.filter(
      (v) =>
        v.name.toLowerCase().includes(q) ||
        v.type.toLowerCase().includes(q) ||
        v.plate.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="flex flex-col h-screen">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-border px-6 h-14">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-semibold text-foreground">Vehicles</h1>
          <span className="text-xs text-muted-foreground">{filtered.length} vehicles</span>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search vehicles…"
            className="pl-8 h-9 text-xs"
          />
        </div>
      </div>

      {/* Vehicle list */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-2 max-w-4xl">
          {filtered.length > 0 ? (
            filtered.map((v) => (
              <div
                key={v.id}
                className="bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground shrink-0">
                    {v.type.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-card-foreground">{v.name}</p>
                    <p className="text-xs text-muted-foreground">{v.plate}</p>
                  </div>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-secondary text-secondary-foreground">
                    {v.type}
                  </span>
                  <span className="hidden sm:inline text-xs text-muted-foreground">{v.capacity}</span>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 ${statusStyle[v.status]}`}>
                  {v.status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground py-8 text-center">No vehicles found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
