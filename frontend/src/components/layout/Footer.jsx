import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/data/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-700 pt-16 pb-20 lg:pb-8" data-testid="footer">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-medium text-white">
              Mariana Tanase
            </Link>
            <p className="mt-4 text-olive-200 leading-relaxed">
              Psiholog clinician și psihoterapeut cu peste 15 ani de experiență. 
              Servicii acreditate de evaluare psihologică în București.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium text-white mb-4">Navigare</h4>
            <div className="space-y-3">
              {[
                { to: "/despre", label: "Despre mine" },
                { to: "/servicii", label: "Servicii" },
                { to: "/resurse", label: "Resurse" },
                { to: "/preturi", label: "Prețuri" },
                { to: "/programari", label: "Programări" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-olive-200 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium text-white mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 text-olive-200 hover:text-white transition-colors text-sm"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {CONTACT_INFO.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-olive-200 hover:text-white transition-colors text-sm"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-center gap-3 text-olive-200 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {CONTACT_INFO.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-olive-600 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-olive-300 text-sm">
            © {currentYear} Psiholog Mariana Tanase. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/confidentialitate" className="text-olive-400 hover:text-olive-200 text-xs transition-colors">
              Politica de confidențialitate
            </Link>
            <span className="text-olive-500 text-xs">•</span>
            <span className="text-olive-400 text-xs">Acreditat COPSI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
