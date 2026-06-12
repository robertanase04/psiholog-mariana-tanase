import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServicesPage = () => {
  const { slug } = useParams();

  if (slug) {
    const service = services.find((s) => s.slug === slug);
    if (!service) {
      return (
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-3xl text-beige-900 mb-4">Serviciu negăsit</h1>
            <Link to="/servicii" className="text-olive-600 hover:underline">
              ← Înapoi la servicii
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-20">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <Link
              to="/servicii"
              className="inline-flex items-center gap-2 text-olive-600 hover:text-olive-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Toate serviciile
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 bg-olive-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-olive-600" />
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mb-6">
                {service.title}
              </h1>

              <p className="text-lg leading-relaxed text-beige-700 mb-10 max-w-3xl">
                {service.fullDescription}
              </p>

              <div className="bg-beige-50 rounded-2xl p-8 border border-beige-200 mb-10">
                <h3 className="font-heading text-xl font-medium text-beige-900 mb-4">
                  Ce include
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-olive-500 mt-0.5 flex-shrink-0" />
                      <span className="text-beige-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-olive-50 rounded-2xl p-8 border border-olive-200 mb-10">
                <h3 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  Pentru cine este
                </h3>
                <p className="text-beige-700 leading-relaxed">{service.forWhom}</p>
              </div>

              <Link to="/programari">
                <Button className="bg-olive-500 hover:bg-olive-600 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 shadow-lg shadow-olive-500/20">
                  <Calendar className="w-5 h-5 mr-2" />
                  Programează pentru acest serviciu
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // Services list
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
              Servicii
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
              Servicii de evaluare psihologică
            </h1>
            <p className="text-lg text-beige-700">
              Ofer servicii complete de evaluare și consiliere psihologică, acreditate conform 
              legislației în vigoare, adaptate nevoilor fiecărui client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/servicii/${service.slug}`}
                  className="group block h-full bg-beige-50 rounded-3xl p-8 border border-beige-200 hover:border-olive-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  data-testid={`service-card-${index}`}
                >
                  <div className="w-14 h-14 bg-olive-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-olive-500 transition-colors">
                    <service.icon className="w-7 h-7 text-olive-600 group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="font-heading text-2xl font-medium text-beige-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-beige-700 mb-6">{service.shortDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-beige-600">
                        <CheckCircle className="w-4 h-4 text-olive-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-olive-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Detalii complete <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-beige-600"
          >
            Toate serviciile includ eliberarea avizelor psihologice conform legislației în vigoare.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
