import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { CrewMemberRow, type CrewMember } from "./CrewMemberRow";

interface AssignCrewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  crewMembers: CrewMember[];
  onAssign?: (member: CrewMember, role: string, callTime: string) => void;
}

export function AssignCrewModal({ open, onOpenChange, crewMembers, onAssign }: AssignCrewModalProps) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<CrewMember | null>(null);
  const [role, setRole] = useState("");
  const [callTime, setCallTime] = useState("");

  const filtered = crewMembers.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase()) ||
    m.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  const reset = () => {
    setSearch(""); setSelected(null); setRole(""); setCallTime("");
  };

  const handleAssign = () => {
    if (selected) {
      onAssign?.(selected, role, callTime);
    }
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) reset(); onOpenChange(v); }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Assign Crew Member</DialogTitle>
        </DialogHeader>

        {!selected ? (
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, role, or skill…"
                className="pl-9"
              />
            </div>
            <div className="divide-y divide-border rounded-lg border border-border overflow-hidden max-h-64 overflow-y-auto">
              {filtered.length ? filtered.map((m) => (
                <CrewMemberRow key={m.id} member={m} onClick={setSelected} />
              )) : (
                <p className="p-4 text-sm text-muted-foreground text-center">No crew members found.</p>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="text-sm font-medium text-card-foreground">{selected.name}</p>
              <p className="text-xs text-muted-foreground">{selected.role}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label className="text-xs">Assigned Role</Label>
                <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. FOH Engineer" />
              </div>
              <div className="grid gap-1.5">
                <Label className="text-xs">Call Time</Label>
                <Input type="time" value={callTime} onChange={(e) => setCallTime(e.target.value)} />
              </div>
            </div>
          </div>
        )}

        <DialogFooter className="gap-2 sm:gap-0">
          {selected ? (
            <>
              <Button variant="outline" onClick={() => setSelected(null)}>Back</Button>
              <Button onClick={handleAssign}>Assign</Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
