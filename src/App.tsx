// import { Toaster } from "@/components/ui/toaster";
import { Toaster } from 'sonner';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import SocialMedia from "./pages/SocialMedia";
import NotFound from "./pages/NotFound";
import ReferencePage from "./pages/ReferencePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        {/* <Toaster /> */}
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            classNames: {
              success: 'bg-green-600 text-white',
              error: 'bg-red-600 text-white',
            },
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/reference" element={<ReferencePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/social-media" element={<SocialMedia />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
