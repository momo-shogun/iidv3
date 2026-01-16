import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectReports from "./pages/ProjectReports";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Franchise from "./pages/Franchise";
import Workshops from "./pages/Workshops";
import EDPPrograms from "./pages/EDPPrograms";
import SupplierConnect from "./pages/SupplierConnect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project-reports" element={<ProjectReports />} />
          <Route path="/project-reports/:category" element={<ProjectReports />} />
          <Route path="/services/:type" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/edp-programs" element={<EDPPrograms />} />
          <Route path="/supplier-connect" element={<SupplierConnect />} />
          <Route path="/govt-schemes" element={<Services />} />
          <Route path="/funding" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
