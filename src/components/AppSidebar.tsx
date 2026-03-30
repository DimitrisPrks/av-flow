import { Calendar, Users, Truck, FileText, UserCheck, Settings, Sun, Moon, Palette } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { title: "Schedule", url: "/", icon: Calendar },
  { title: "Crew", url: "/crew", icon: Users },
  { title: "Vehicles", url: "/vehicles", icon: Truck },
  { title: "Call Sheets", url: "/call-sheets", icon: FileText },
  { title: "Contractors", url: "/contractors", icon: UserCheck },
  { title: "UI Demo", url: "/demo", icon: Palette },
];

export function AppSidebar() {
  const location = useLocation();
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <TooltipProvider delayDuration={200}>
      <aside className="fixed left-0 top-0 bottom-0 w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 z-50">
        {/* Avatar */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold mb-8 cursor-default">
              AV
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">AV Events</TooltipContent>
        </Tooltip>

        {/* Nav */}
        <nav className="flex-1 flex flex-col items-center gap-1">
          {navItems.map((item) => {
            const active = location.pathname === item.url;
            return (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.url}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <item.icon className="w-[18px] h-[18px]" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.title}</TooltipContent>
              </Tooltip>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setDark(!dark)}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              >
                {dark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">{dark ? "Light mode" : "Dark mode"}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/settings"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              >
                <Settings className="w-[18px] h-[18px]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </div>
      </aside>
    </TooltipProvider>
  );
}
