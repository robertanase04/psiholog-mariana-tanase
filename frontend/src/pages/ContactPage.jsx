import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CONTACT_INFO } from "@/data/constants";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send (no backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Mesajul a fost trimis cu succes! Voi reveni cu un răspuns în cel mai scurt timp.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-20">
      <SEO
        title="Contact – Cabinet psihologic București"
        description="Contactează cabinetul psihologic Mariana Tanase din București. Telefon: 0720 053 572. Program: L-V 17:30-20:00, S 09:00-14:00."
        path="/contact"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
                Contact
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
                Hai să vorbim
              </h1>
              <p className="text-lg text-beige-700 mb-10">
                Ai întrebări sau dorești mai multe informații despre serviciile mele? 
                Nu ezita să mă contactezi prin oricare dintre metodele de mai jos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <p className="font-medium text-beige-900 mb-1">Telefon</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-beige-700 hover:text-olive-600 transition-colors"
                      data-testid="contact-phone"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <p className="font-medium text-beige-900 mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-beige-700 hover:text-olive-600 transition-colors"
                      data-testid="contact-email"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <p className="font-medium text-beige-900 mb-1">Locație</p>
                    <p className="text-beige-700">{CONTACT_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <p className="font-medium text-beige-900 mb-1">Program</p>
                    <p className="text-beige-700">{CONTACT_INFO.schedule.weekdays}</p>
                    <p className="text-beige-700">{CONTACT_INFO.schedule.weekend}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 border border-beige-200 shadow-sm"
                data-testid="contact-form"
              >
                <h2 className="font-heading text-2xl font-medium text-beige-900 mb-6">
                  Trimite un mesaj
                </h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-beige-700 mb-2">
                      Nume complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-500/10 transition-all bg-beige-50"
                      placeholder="Numele tău"
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-beige-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-500/10 transition-all bg-beige-50"
                      placeholder="email@exemplu.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-beige-700 mb-2">
                      Telefon (opțional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-500/10 transition-all bg-beige-50"
                      placeholder="07XX XXX XXX"
                      data-testid="input-phone"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-beige-700 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-500/10 transition-all resize-none bg-beige-50"
                      placeholder="Cu ce te pot ajuta?"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-olive-500 hover:bg-olive-600 text-white rounded-xl px-6 py-4 text-lg font-medium transition-all disabled:opacity-50"
                    data-testid="submit-btn"
                  >
                    {isSubmitting ? (
                      "Se trimite..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Trimite mesajul
                      </>
                    )}
                  </Button>
                </div>

                <p className="mt-4 text-xs text-beige-500 text-center">
                  Datele tale sunt confidențiale și nu vor fi partajate cu terți.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
