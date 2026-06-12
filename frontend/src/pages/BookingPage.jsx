import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Heart, Car, Shield, Briefcase } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { Phone, Mail } from "lucide-react";
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
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <div className="pt-20">
      <SEO
        title="Programări online – Aviz psihologic în aceeași zi"
        description="Programează online pentru aviz psihologic permis auto, port-armă sau angajare. Eliberare rapidă, în aceeași zi. Cabinet în București."
        path="/programari"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
              Programări
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
              Fă primul pas
            </h1>
            <p className="text-lg text-beige-700">
              Selectează tipul de serviciu dorit și alege data și ora care ți se potrivesc.
            </p>
          </motion.div>

          {/* Event Type Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {CALENDLY_EVENTS.map((event, index) => {
              const Icon = iconMap[event.slug] || Brain;
              return (
                <button
                  key={event.slug}
                  onClick={() => setActiveEvent(index)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                    activeEvent === index
                      ? "bg-olive-500 text-white shadow-lg shadow-olive-500/20"
                      : "bg-white text-beige-700 border border-beige-300 hover:border-olive-300 hover:text-olive-600"
                  }`}
                  data-testid={`event-tab-${index}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{event.name}</span>
                  <span className="sm:hidden text-xs">{event.name.split(" ").pop()}</span>
                </button>
              );
            })}
          </div>

          {/* Calendly Widget */}
          <motion.div
            key={activeEvent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
            data-testid="calendly-widget"
          >
            <InlineWidget
              url={CALENDLY_EVENTS[activeEvent].url}
              styles={{ height: "700px", minWidth: "320px" }}
            />
          </motion.div>

          {/* Alternative contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-beige-600 mb-4">Preferi să vorbești direct?</p>
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
