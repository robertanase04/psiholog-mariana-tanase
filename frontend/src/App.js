import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "@/components/ErrorBoundary";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import LearningPage from "@/pages/LearningPage";
import PricingPage from "@/pages/PricingPage";
import BookingPage from "@/pages/BookingPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import "@/App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App font-body" data-testid="app">
          <Toaster position="top-right" richColors />
          <Analytics />
          <ScrollToTop />
          <Navigation />

          <main>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/despre" element={<AboutPage />} />
                <Route path="/servicii" element={<ServicesPage />} />
                <Route path="/servicii/:slug" element={<ServicesPage />} />
                <Route path="/resurse" element={<LearningPage />} />
                <Route path="/resurse/:id" element={<LearningPage />} />
                <Route path="/preturi" element={<PricingPage />} />
                <Route path="/programari" element={<BookingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/confidentialitate" element={<PrivacyPage />} />
              </Routes>
            </ErrorBoundary>
          </main>

          <Footer />
          <StickyMobileCTA />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
