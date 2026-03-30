import { Badge } from "@/components/ui/badge";

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  available: boolean;
}

interface CrewMemberRowProps {
  member: CrewMember;
  onClick?: (member: CrewMember) => void;
}

export function CrewMemberRow({ member, onClick }: CrewMemberRowProps) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(member)}
      className="w-full text-left flex items-center gap-3 px-3 py-2.5 bg-card hover:bg-accent transition-colors"
    >
      {/* Availability dot */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        {member.available && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-confirmed opacity-75" />
        )}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
          member.available ? "bg-status-confirmed" : "bg-muted-foreground"
        }`} />
      </span>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-card-foreground truncate">{member.name}</p>
        <p className="text-xs text-muted-foreground">{member.role}</p>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-1 justify-end max-w-[200px]">
        {member.skills.slice(0, 3).map((skill) => (
          <Badge key={skill} variant="secondary" className="text-[10px] px-1.5 py-0">
            {skill}
          </Badge>
        ))}
        {member.skills.length > 3 && (
          <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
            +{member.skills.length - 3}
          </Badge>
        )}
      </div>
    </button>
  );
}
