import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { allSkillTags } from "@/data/crewData";

interface NewCrewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewCrewDialog({ open, onOpenChange }: NewCrewDialogProps) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const reset = () => {
    setName(""); setRole(""); setPhone(""); setSelectedSkills([]);
  };

  const handleSave = () => {
    reset();
    onOpenChange(false);
  };

  const handleCancel = () => {
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Crew Member</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid gap-1.5">
            <Label htmlFor="crewName" className="text-xs">Full Name</Label>
            <Input id="crewName" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. John Borg" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="crewRole" className="text-xs">Role</Label>
              <Input id="crewRole" value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. Sound Engineer" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="crewPhone" className="text-xs">Phone</Label>
              <Input id="crewPhone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. 7921 1234" />
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label className="text-xs">Skills</Label>
            <div className="flex flex-wrap gap-1.5 p-3 border border-input rounded-md bg-background max-h-40 overflow-y-auto">
              {allSkillTags.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedSkills.includes(skill)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
