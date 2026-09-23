import { useEffect, useState } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Index from "./pages/Index";
import EventsPage from "./pages/EventsPage";
import FacultyPage from "./pages/FacultyPage";
import NotFound from "./pages/NotFound";

import Preloader from "./components/Preloader";
import ClickSpark from "@/components/ClickSpark";
import Staff from "./components/Staff";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        <Toaster />
        <Sonner />

        <BrowserRouter>

          {/* Preloader */}
          {loading && <Preloader />}

          <Routes>

            {/* =========================
                HOME PAGE
            ========================= */}
            <Route
              path="/"
              element={<Index />}
            />

            {/* =========================
                EVENTS PAGE
            ========================= */}
            <Route
              path="/events"
              element={<EventsPage />}
            />

            {/* =========================
                STAFF PAGE
            ========================= */}
            <Route
              path="/staff"
              element={<Staff />}
            />

            {/* =========================
                ALL STAFF PAGE
            ========================= */}
            <Route
              path="/all-staff"
              element={<FacultyPage />}
            />

            {/* =========================
                404 PAGE
            ========================= */}
            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

          {/* Click Spark Effect */}
          <ClickSpark
            sparkColor="#7DA0CA"
            sparkSize={10}
            sparkRadius={18}
            sparkCount={8}
            duration={400}
            easing="ease-out"
            extraScale={1}
          />

        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;