import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { prices } from "@/data/prices";
import SEO from "@/components/SEO";

const PricingPage = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Prețuri avize psihologice București"
        description="Tarife transparente: aviz psihologic permis auto 150 RON, port-armă 200 RON, angajare 100 RON. Psihoterapie 150 RON/ședință. Plată numerar sau transfer."
        path="/preturi"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
              Prețuri
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
              Tarife transparente
            </h1>
            <p className="text-lg text-beige-700">
              Prețuri clare pentru toate serviciile oferite. Plata se poate efectua în numerar 
              sau prin transfer bancar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prices.map((item, index) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-beige-200 hover:border-olive-300 hover:shadow-md transition-all"
                data-testid={`price-card-${index}`}
              >
                <h3 className="font-heading text-lg font-medium text-beige-900 mb-2">
                  {item.service}
                </h3>
                <p className="text-sm text-beige-600 mb-4">{item.description}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-heading text-3xl font-semibold text-olive-600">
                    {item.price}
                  </span>
                  <span className="text-beige-600 text-sm">RON</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-beige-500">
                  <Clock className="w-4 h-4" />
                  {item.duration}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            {/* Info box */}
            <div className="bg-beige-50 rounded-2xl p-6 md:p-8 border border-beige-200 mb-8">
              <h3 className="font-heading text-lg font-medium text-beige-900 mb-4">Informații utile</h3>
              <ul className="space-y-2 text-sm text-beige-700">
                <li className="flex items-start gap-2">
                  <span className="text-olive-500 mt-0.5">•</span>
                  Prețurile afișate sunt finale și includ eliberarea avizului psihologic.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-500 mt-0.5">•</span>
                  Plata se poate face în numerar sau prin transfer bancar.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-500 mt-0.5">•</span>
                  Avizele psihologice se eliberează în aceeași zi, la finalul evaluării.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-500 mt-0.5">•</span>
                  Este necesară prezentarea actului de identitate (buletin/CI) la evaluare.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-500 mt-0.5">•</span>
                  Prețurile pot varia în funcție de complexitatea evaluării. Contactează-mă pentru detalii.
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/programari">
                <Button className="bg-olive-500 hover:bg-olive-600 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 shadow-lg shadow-olive-500/20">
                  <Calendar className="w-5 h-5 mr-2" />
                  Programează acum
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
