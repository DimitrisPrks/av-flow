import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { crewMembers, allSkillTags } from "@/data/crewData";

export default function CrewPage() {
  const [search, setSearch] = useState("");
  const [activeSkills, setActiveSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setActiveSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filtered = useMemo(() => {
    return crewMembers.filter((m) => {
      const matchesSearch =
        !search ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.role.toLowerCase().includes(search.toLowerCase());
      const matchesSkills =
        activeSkills.length === 0 || activeSkills.some((s) => m.skills.includes(s));
      return matchesSearch && matchesSkills;
    });
  }, [search, activeSkills]);

  return (
    <div className="flex flex-col h-screen">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-border px-6 h-14">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-semibold text-foreground">Crew</h1>
          <span className="text-xs text-muted-foreground">{filtered.length} technicians</span>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search crew…"
            className="pl-8 h-9 text-xs"
          />
        </div>
      </div>

      {/* Skill tag filter bar */}
      <div className="flex items-center gap-1.5 px-6 py-3 border-b border-border overflow-x-auto">
        {activeSkills.length > 0 && (
          <button
            onClick={() => setActiveSkills([])}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <X className="w-3 h-3" />
            Clear
          </button>
        )}
        {allSkillTags.map((skill) => (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium transition-colors shrink-0 ${
              activeSkills.includes(skill)
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Crew list */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-2 max-w-4xl">
          {filtered.length > 0 ? (
            filtered.map((member) => (
              <div
                key={member.id}
                className="bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Avatar */}
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground shrink-0">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-card-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  {/* Skill tags */}
                  <div className="hidden sm:flex items-center gap-1 flex-wrap">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Availability */}
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 ${
                    member.available
                      ? "bg-status-confirmed-bg text-status-confirmed"
                      : "bg-status-live-bg text-status-live"
                  }`}
                >
                  {member.available ? "Available" : "Unavailable"}
                </span>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground py-8 text-center">No crew members found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
