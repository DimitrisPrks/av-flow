import { AppSidebar } from "./AppSidebar";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 ml-16">{children}</main>
    </div>
  );
}
