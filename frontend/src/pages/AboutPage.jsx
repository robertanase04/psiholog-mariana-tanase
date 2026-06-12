import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { IMAGES } from "@/data/constants";
import SEO from "@/components/SEO";

const AboutPage = () => {
  const certifications = [
    "Psihologie Clinică și Psihoterapie",
    "Psihologia Muncii și Organizațională",
    "Psihologia Transporturilor",
    "Psihologie Aplicată în Domeniul Securității Naționale"
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Despre mine"
        description="Psiholog clinician cu peste 15 ani de experiență în București. Acreditare COPSI în 4 specializări: psihologie clinică, muncii, transporturi și securitate națională."
        path="/despre"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={IMAGES.office}
                    alt="Cabinet psihologie"
                    className="rounded-2xl w-full h-48 object-cover"
                    data-testid="about-image-1"
                  />
                  <img
                    src={IMAGES.family}
                    alt="Mariana Tanase"
                    className="rounded-2xl w-full h-48 object-cover"
                    data-testid="about-image-2"
                  />
                </div>
                <div className="pt-8">
                  <img
                    src={IMAGES.lifestyle}
                    alt="Stil de viață"
                    className="rounded-2xl w-full h-full object-cover min-h-[260px]"
                    data-testid="about-image-3"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
                Despre mine
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
                Experiență și empatie în slujba ta
              </h1>

              <div className="space-y-4 text-lg leading-relaxed text-beige-700 mb-8">
                <p>
                  Sunt Mariana Tanase, psiholog clinician și psihoterapeut cu peste 15 ani de experiență 
                  în evaluare psihologică și consiliere. Am lucrat în domenii variate — de la psihologia 
                  pediatrică oncologică la psihologia muncii și a transporturilor.
                </p>
                <p>
                  Dincolo de cariera profesională, sunt mamă a doi băieți minunați. Această experiență 
                  personală îmi oferă o perspectivă unică asupra provocărilor familiale și mă ajută 
                  să înțeleg mai bine nevoile celor care apelează la mine.
                </p>
                <p>
                  Abordarea mea combină tehnici cognitiv-comportamentale cu empatie și respect, 
                  oferindu-ți un spațiu sigur pentru explorare, înțelegere și creștere personală.
                </p>
              </div>

              {/* Certifications */}
              <div className="bg-beige-100 rounded-2xl p-6 mb-8">
                <h3 className="font-heading text-xl font-medium text-beige-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-olive-600" />
                  Acreditări și Specializări
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-olive-500 mt-0.5 flex-shrink-0" />
                      <span className="text-beige-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-olive-50 border border-olive-200 px-4 py-2 rounded-full text-sm font-medium text-olive-700">
                  Universitatea Spiru Haret
                </span>
                <span className="bg-olive-50 border border-olive-200 px-4 py-2 rounded-full text-sm font-medium text-olive-700">
                  Master Management Organizațional
                </span>
                <span className="bg-olive-50 border border-olive-200 px-4 py-2 rounded-full text-sm font-medium text-olive-700">
                  Acreditare COPSI
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-beige-900 mb-4">
              Valorile mele profesionale
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Confidențialitate",
                desc: "Tot ceea ce discutăm în cadrul ședințelor rămâne strict confidențial, conform codului deontologic."
              },
              {
                title: "Empatie",
                desc: "Ascult fără judecată și creez un spațiu sigur în care te poți exprima liber și autentic."
              },
              {
                title: "Profesionalism",
                desc: "Folosesc metode validate științific și mă perfecționez continuu pentru a-ți oferi cele mai bune servicii."
              }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8"
              >
                <h3 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-beige-700 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
