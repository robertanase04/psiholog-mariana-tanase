import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/data/constants";
import { services } from "@/data/services";
import SEO from "@/components/SEO";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const HomePage = () => {
  return (
    <>
      <SEO
        title="Avize psihologice și psihoterapie"
        description="Cabinet psihologic acreditat în București. Avize psihologice pentru permis auto, port-armă, angajare. Eliberare aviz în aceeași zi. Psihoterapie cognitiv-comportamentală. Programează online."
        path="/"
      />
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-olive-200/30 rounded-full blur-[100px] -top-20 -left-40 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] bg-brick-100/30 rounded-full blur-[100px] bottom-0 right-0 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <span className="inline-block text-sm tracking-widest uppercase text-olive-600 font-medium mb-4">
                Psiholog Clinician · Psihoterapeut
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-beige-900 mb-6">
                Echilibru și claritate pentru mintea ta
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-beige-700 mb-8 max-w-lg">
                Servicii acreditate de evaluare psihologică, consiliere și psihoterapie în București. 
                Cu peste 15 ani de experiență, te ajut să descoperi resursele interioare pentru o viață mai armonioasă.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programari">
                  <Button className="bg-olive-500 hover:bg-olive-600 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 shadow-lg shadow-olive-500/20">
                    Programează o ședință
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/servicii">
                  <Button
                    variant="outline"
                    className="border-2 border-olive-500 text-olive-600 hover:bg-olive-50 rounded-full px-8 py-6 text-lg font-medium"
                  >
                    Descoperă serviciile
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 sm:gap-8 mt-12 pt-8 border-t border-beige-300">
                <div>
                  <p className="font-heading text-3xl font-semibold text-olive-600">15+</p>
                  <p className="text-sm text-beige-600">Ani experiență</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold text-olive-600">4</p>
                  <p className="text-sm text-beige-600">Specializări</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold text-olive-600">1000+</p>
                  <p className="text-sm text-beige-600">Clienți ajutați</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-olive-900/10 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                  <img
                    src={IMAGES.portrait}
                    alt="Psiholog Mariana Tanase"
                    className="w-full max-w-md lg:max-w-lg max-h-[60vh] object-cover"
                    data-testid="hero-image"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-beige-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-olive-600" />
                    </div>
                    <div>
                      <p className="font-medium text-beige-900 text-sm">Acreditat COPSI</p>
                      <p className="text-xs text-beige-600">4 Specializări</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
              Servicii
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
              Cum te pot ajuta
            </h2>
            <p className="text-lg text-beige-700">
              Servicii complete de evaluare psihologică și consiliere, adaptate nevoilor tale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/servicii/${service.slug}`}
                  className="group block bg-beige-50 rounded-3xl p-8 border border-beige-200 hover:border-olive-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  data-testid={`service-card-${index}`}
                >
                  <div className="w-14 h-14 bg-olive-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-olive-500 transition-colors">
                    <service.icon className="w-7 h-7 text-olive-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-beige-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-beige-700 mb-6">{service.shortDescription}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-beige-600">
                        <CheckCircle className="w-4 h-4 text-olive-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-olive-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Află mai multe <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-olive-600" />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-6">
              Fă primul pas spre echilibru
            </h2>
            <p className="text-lg text-olive-100 mb-8 max-w-2xl mx-auto">
              Programează o consultație și descoperă împreună cum putem lucra la obiectivele tale.
            </p>
            <Link to="/programari">
              <Button className="bg-white text-olive-700 hover:bg-beige-100 rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Programează acum
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
