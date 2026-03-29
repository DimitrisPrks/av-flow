import { Calendar, Users, Truck, FileText, UserCheck, Settings, Sun, Moon } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const navItems = [
  { title: "Schedule", url: "/", icon: Calendar },
  { title: "Crew", url: "/crew", icon: Users },
  { title: "Vehicles", url: "/vehicles", icon: Truck },
  { title: "Call Sheets", url: "/call-sheets", icon: FileText },
  { title: "Contractors", url: "/contractors", icon: UserCheck },
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
    <aside className="fixed left-0 top-0 bottom-0 w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 z-50">
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold mb-8">
        AV
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col items-center gap-1">
        {navItems.map((item) => {
          const active = location.pathname === item.url;
          return (
            <Link
              key={item.title}
              to={item.url}
              title={item.title}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="w-[18px] h-[18px]" />
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={() => setDark(!dark)}
          title="Toggle theme"
          className="w-10 h-10 rounded-lg flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          {dark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
        </button>
        <Link
          to="/settings"
          title="Settings"
          className="w-10 h-10 rounded-lg flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <Settings className="w-[18px] h-[18px]" />
        </Link>
      </div>
    </aside>
  );
}
