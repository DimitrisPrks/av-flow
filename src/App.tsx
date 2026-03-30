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
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex-1 ml-16">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/crew" element={<CrewPage />} />
                <Route path="/vehicles" element={<VehiclesPage />} />
                <Route path="/demo" element={<DemoComparison />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </HeroUIProvider>
  </QueryClientProvider>
);

export default App;
