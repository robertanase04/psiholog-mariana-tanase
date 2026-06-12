import { motion } from "framer-motion";
import { Brain, Heart, Car, Shield, Briefcase, ExternalLink, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_EVENTS, CONTACT_INFO } from "@/data/constants";
import SEO from "@/components/SEO";

const iconMap = {
  psihoterapie: Brain,
  evaluare: Heart,
  transporturi: Car,
  "port-arma": Shield,
  angajare: Briefcase
};

const BookingPage = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Programări online – Aviz psihologic în aceeași zi"
        description="Programează online pentru aviz psihologic permis auto, port-armă sau angajare. Eliberare rapidă, în aceeași zi. Cabinet în București."
        path="/programari"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
              Programări
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
              Fă primul pas
            </h1>
            <p className="text-lg text-beige-700">
              Alege tipul de serviciu dorit și vei fi redirecționat către calendarul de programări.
            </p>
          </motion.div>

          {/* Service cards with booking links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {CALENDLY_EVENTS.map((event, index) => {
              const Icon = iconMap[event.slug] || Brain;
              return (
                <motion.a
                  key={event.slug}
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-beige-200 hover:border-olive-300 hover:shadow-lg transition-all duration-300"
                  data-testid={`booking-card-${index}`}
                >
                  <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-olive-500 transition-colors">
                    <Icon className="w-6 h-6 text-olive-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-beige-900 group-hover:text-olive-700 transition-colors">
                      {event.name}
                    </p>
                    <p className="text-sm text-beige-500">Alege data și ora</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-beige-400 group-hover:text-olive-500 transition-colors" />
                </motion.a>
              );
            })}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-16"
          >
            <Button
              asChild
              className="bg-olive-500 hover:bg-olive-600 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 shadow-lg shadow-olive-500/20"
            >
              <a
                href={CALENDLY_EVENTS[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Programează acum
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          {/* Alternative contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center bg-beige-50 rounded-2xl p-8 border border-beige-200"
          >
            <p className="text-beige-700 mb-4 font-medium">Preferi să vorbești direct?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 bg-olive-100 text-olive-700 px-5 py-2.5 rounded-full hover:bg-olive-200 transition-colors font-medium text-sm"
                data-testid="booking-phone"
              >
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 bg-olive-100 text-olive-700 px-5 py-2.5 rounded-full hover:bg-olive-200 transition-colors font-medium text-sm"
                data-testid="booking-email"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_INFO.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
