import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Acasă" },
    { to: "/despre", label: "Despre" },
    { to: "/servicii", label: "Servicii" },
    { to: "/resurse", label: "Resurse" },
    { to: "/preturi", label: "Prețuri" },
    { to: "/contact", label: "Contact" }
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-beige-100/90 backdrop-blur-md shadow-sm border-b border-beige-200/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <nav className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="font-heading text-xl md:text-2xl font-medium text-olive-700 hover:text-olive-500 transition-colors"
            data-testid="logo"
          >
            Mariana Tanase
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-body text-sm font-medium transition-colors hover:text-olive-600 ${
                  isActive(link.to) ? "text-olive-600" : "text-beige-700"
                }`}
                data-testid={`nav-${link.to.slice(1) || "home"}`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-olive-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <Link to="/programari" className="hidden lg:block">
            <Button
              className="bg-olive-500 hover:bg-olive-600 text-white rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105 shadow-md shadow-olive-500/20"
              data-testid="cta-programeaza"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Programează
            </Button>
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-olive-600"
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-beige-200/50"
              data-testid="mobile-menu"
            >
              <div className="flex flex-col gap-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-body text-base font-medium py-2 px-4 rounded-xl transition-colors ${
                      isActive(link.to)
                        ? "text-olive-600 bg-olive-50"
                        : "text-beige-800 hover:text-olive-600 hover:bg-olive-50"
                    }`}
                    data-testid={`mobile-nav-${link.to.slice(1) || "home"}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/programari" className="mt-4 px-4">
                  <Button className="w-full bg-olive-500 hover:bg-olive-600 text-white rounded-full px-6 py-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    Programează o ședință
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
