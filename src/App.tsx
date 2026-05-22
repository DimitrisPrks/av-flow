import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index.tsx";
import CrewPage from "./pages/Crew.tsx";
import VehiclesPage from "./pages/Vehicles.tsx";
import DemoComparison from "./pages/DemoComparison.tsx";
import Landing from "./pages/Landing.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen">
    <AppSidebar />
    <main className="flex-1 ml-16">{children}</main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<AppLayout><Index /></AppLayout>} />
          <Route path="/crew" element={<AppLayout><CrewPage /></AppLayout>} />
          <Route path="/vehicles" element={<AppLayout><VehiclesPage /></AppLayout>} />
          <Route path="/demo" element={<AppLayout><DemoComparison /></AppLayout>} />
          <Route path="*" element={<AppLayout><NotFound /></AppLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
