import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/data/constants";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Don't show on booking page (already has CTAs)
  const hideOnPages = ["/programari"];
  const shouldHide = hideOnPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (shouldHide || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-beige-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3">
      <div className="flex gap-3 max-w-md mx-auto">
        <Link
          to="/programari"
          className="flex-1 flex items-center justify-center gap-2 bg-olive-500 hover:bg-olive-600 text-white rounded-full py-3 px-4 text-sm font-medium transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Programează
        </Link>
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center justify-center gap-2 border-2 border-olive-500 text-olive-600 rounded-full py-3 px-5 text-sm font-medium transition-colors hover:bg-olive-50"
        >
          <Phone className="w-4 h-4" />
          Sună
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
