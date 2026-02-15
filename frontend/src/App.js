import { useState, useEffect } from "react";
import "@/App.css";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Heart, 
  Brain, 
  Car, 
  Shield, 
  Briefcase,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

// Images from assets
const IMAGES = {
  portrait: "https://customer-assets.emergentagent.com/job_counseling-hub-20/artifacts/rx28xbik_WhatsApp%20Image%202026-02-15%20at%2013.18.25%287%29.jpeg",
  office: "https://customer-assets.emergentagent.com/job_counseling-hub-20/artifacts/glsmldev_WhatsApp%20Image%202026-02-15%20at%2013.18.25%281%29.jpeg",
  family: "https://customer-assets.emergentagent.com/job_counseling-hub-20/artifacts/xuqtckxv_WhatsApp%20Image%202026-02-15%20at%2013.18.25%286%29.jpeg",
  lifestyle: "https://customer-assets.emergentagent.com/job_counseling-hub-20/artifacts/1n9zc545_WhatsApp%20Image%202026-02-15%20at%2013.18.25%288%29.jpeg"
};

// Navigation Component
const Navigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#despre", label: "Despre Mine" },
    { href: "#servicii", label: "Servicii" },
    { href: "#learning", label: "Learning" },
    { href: "#preturi", label: "Prețuri" },
    { href: "#programari", label: "Programări" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header 
      data-testid="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-beige-100/90 glass-header shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <nav className="flex items-center justify-between h-20">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-heading text-xl md:text-2xl font-medium text-olive-700 hover:text-olive-600 transition-colors"
            data-testid="logo"
          >
            Mariana Tanase
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative font-body text-sm font-medium transition-colors hover:text-olive-600 ${
                  activeSection === link.href.slice(1) ? "text-olive-600" : "text-beige-700"
                }`}
                data-testid={`nav-${link.href.slice(1)}`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-olive-500" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("#programari")}
            className="hidden lg:flex bg-olive-500 hover:bg-olive-600 text-white rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105"
            data-testid="cta-programeaza"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Programează
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-olive-600"
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-beige-100/95 glass-header border-t border-beige-200 py-6"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-base font-medium text-beige-800 hover:text-olive-600 text-left py-2"
                  data-testid={`mobile-nav-${link.href.slice(1)}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#programari")}
                className="bg-olive-500 hover:bg-olive-600 text-white rounded-full px-6 py-3 mt-4"
                data-testid="mobile-cta"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Programează o ședință
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-16 md:py-0 relative overflow-hidden"
      data-testid="hero-section"
    >
      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-olive-200 top-20 -left-48" />
      <div className="blob w-72 h-72 bg-brick-100 bottom-20 right-10" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-sm tracking-widest uppercase text-olive-600 font-medium mb-4">
              Psiholog Clinician • Psihoterapeut
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-beige-900 mb-6">
              Echilibru și claritate pentru mintea ta
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-beige-700 mb-8 max-w-lg">
              Servicii acreditate de evaluare psihologică, consiliere și psihoterapie în București. 
              Cu peste 15 ani de experiență, te ajut să descoperi resursele interioare pentru o viață mai armonioasă.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#programari")}
                className="bg-olive-500 hover:bg-olive-600 text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 shadow-lg shadow-olive-500/20"
                data-testid="hero-cta-primary"
              >
                Programează o ședință
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection("#servicii")}
                variant="outline"
                className="border-2 border-olive-500 text-olive-600 hover:bg-olive-50 rounded-full px-8 py-6 text-lg font-medium"
                data-testid="hero-cta-secondary"
              >
                Descoperă serviciile
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-beige-300">
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

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="hero-image-container shadow-2xl shadow-olive-900/10 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <img
                  src={IMAGES.portrait}
                  alt="Psiholog Mariana Tanase"
                  className="w-full max-w-md lg:max-w-lg object-cover"
                  data-testid="hero-image"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
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
  );
};

// About Section
const AboutSection = () => {
  const certifications = [
    "Psihologie Clinică și Psihoterapie",
    "Psihologia Muncii și Organizațională",
    "Psihologia Transporturilor",
    "Psihologie Aplicată în Domeniul Securității Naționale"
  ];

  return (
    <section 
      id="despre" 
      className="py-24 md:py-32 relative"
      data-testid="despre-section"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Images Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={IMAGES.office}
                  alt="Cabinet psihologie"
                  className="rounded-2xl w-full h-50 object-cover"
                  data-testid="about-image-1"
                />
                <img
                  src={IMAGES.family}
                  alt="Mariana cu familia"
                  className="rounded-2xl w-full h-50 object-cover"
                  data-testid="about-image-2"
                />
              </div>
              <div className="pt-8">
                <img
                  src={IMAGES.lifestyle}
                  alt="Personal"
                  className="rounded-2xl w-full h-full object-cover"
                  data-testid="about-image-3"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
              Despre Mine
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
              Experiență și empatie în slujba ta
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-beige-700 mb-8">
              <p>
                Sunt Mariana Tanase, psiholog clinician și psihoterapeut cu peste 15 ani de experiență 
                în evaluare psihologică și consiliere. Am lucrat în domenii variate, de la psihologie 
                pediatrică oncologică la psihologia muncii și transporturilor.
              </p>
              <p>
                Dincolo de cariera profesională, sunt o mamă devotată a doi băieți minunați. 
                Această experiență personală îmi oferă o perspectivă unică asupra provocărilor 
                familiale și mă ajută să înțeleg mai bine nevoile clienților mei.
              </p>
              <p>
                Abordarea mea combină tehnici cognitiv-comportamentale cu empatie și înțelegere, 
                oferind un spațiu sigur pentru explorare și vindecare.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-beige-200/50 rounded-2xl p-6 mb-8">
              <h3 className="font-heading text-xl font-medium text-beige-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-olive-600" />
                Acreditări și Specializări
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-olive-500 mt-0.5 flex-shrink-0" />
                    <span className="text-beige-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="certification-badge px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-olive-700">Universitatea Spiru Haret</span>
              </div>
              <div className="certification-badge px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-olive-700">Master în Management Organizațional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Psihologie Clinică",
      description: "Evaluare clinică și psihodiagnostic pentru copii și adulți. Consiliere pentru dezvoltare emoțională armonioasă.",
      features: ["Evaluare psihologică", "Consiliere individuală", "Terapie cognitiv-comportamentală"]
    },
    {
      icon: Briefcase,
      title: "Psihologia Muncii",
      description: "Avize psihologice pentru angajare și control periodic. Evaluări pentru selecție și recrutare personal.",
      features: ["Avize angajare", "Control periodic", "Evaluare personal"]
    },
    {
      icon: Car,
      title: "Psihologia Transporturilor",
      description: "Testare psihologică pentru obținerea sau preschimbarea permisului auto categoria B, C, D, E.",
      features: ["Permis auto", "Preschimbare permis", "Toate categoriile"]
    },
    {
      icon: Shield,
      title: "Securitate Națională",
      description: "Evaluări psihologice pentru permise port-armă și profesii în domeniul apărării și siguranței.",
      features: ["Permis port-armă", "Evaluări speciale", "Domeniul securității"]
    }
  ];

  return (
    <section 
      id="servicii" 
      className="py-24 md:py-32 bg-white relative"
      data-testid="servicii-section"
    >
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
            Ofer servicii complete de evaluare psihologică și consiliere, adaptate nevoilor tale specifice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card group bg-beige-50 rounded-3xl p-8 border border-beige-200 hover:border-olive-300"
              data-testid={`service-card-${index}`}
            >
              <div className="w-14 h-14 bg-olive-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-olive-500 transition-colors">
                <service.icon className="w-7 h-7 text-olive-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-2xl font-medium text-beige-900 mb-3">
                {service.title}
              </h3>
              <p className="text-beige-700 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-beige-600">
                    <CheckCircle className="w-4 h-4 text-olive-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-beige-600">
            Toate serviciile includ eliberarea avizelor psihologice necesare conform legislației în vigoare.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Learning Section
const LearningSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Gestionarea Stresului",
      description: "Tehnici și strategii pentru a face față stresului cotidian și profesional.",
      type: "Articol"
    },
    {
      icon: Heart,
      title: "Inteligența Emoțională",
      description: "Cum să îți dezvolți capacitatea de a înțelege și gestiona emoțiile.",
      type: "Ghid"
    },
    {
      icon: Users,
      title: "Comunicare în Familie",
      description: "Sfaturi pentru îmbunătățirea relațiilor și comunicării familiale.",
      type: "Articol"
    }
  ];

  return (
    <section 
      id="learning" 
      className="py-24 md:py-32 relative"
      data-testid="learning-section"
    >
      <div className="blob w-80 h-80 bg-olive-100 -top-20 right-0" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
            Learning
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
            Resurse și Cunoștințe
          </h2>
          <p className="text-lg text-beige-700">
            Materiale educaționale pentru dezvoltare personală și înțelegerea sănătății mentale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="learning-card rounded-2xl p-6 border border-beige-200 hover:border-olive-300 transition-all hover:shadow-lg cursor-pointer"
              data-testid={`learning-card-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-olive-600" />
                </div>
                <span className="text-xs font-medium text-olive-600 bg-olive-50 px-3 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>
              <h3 className="font-heading text-xl font-medium text-beige-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-beige-700 text-sm">
                {resource.description}
              </p>
              <button className="mt-4 text-olive-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Citește mai mult
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-olive-50 rounded-2xl p-6"
        >
          <p className="text-olive-700">
            <span className="font-medium">În curând:</span> Webinarii și cursuri online despre sănătate mentală și dezvoltare personală.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const prices = [
    {
      service: "Evaluare Psihologică Clinică",
      price: "200",
      duration: "60 min",
      description: "Evaluare completă și recomandări personalizate"
    },
    {
      service: "Ședință Consiliere / Psihoterapie",
      price: "150",
      duration: "50 min",
      description: "Sesiune individuală de terapie"
    },
    {
      service: "Aviz Psihologic Transporturi",
      price: "150",
      duration: "30-45 min",
      description: "Pentru permis auto (toate categoriile)"
    },
    {
      service: "Aviz Port-Armă",
      price: "200",
      duration: "45-60 min",
      description: "Evaluare completă conform legislației"
    },
    {
      service: "Aviz Angajare",
      price: "100",
      duration: "30 min",
      description: "Pentru locuri de muncă specifice"
    },
    {
      service: "Consiliere Cuplu / Familie",
      price: "200",
      duration: "60 min",
      description: "Sesiune pentru cuplu sau familie"
    }
  ];

  return (
    <section 
      id="preturi" 
      className="py-24 md:py-32 bg-white"
      data-testid="preturi-section"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
            Prețuri
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
            Tarife Transparente
          </h2>
          <p className="text-lg text-beige-700">
            Prețuri clare pentru toate serviciile oferite. Plata se poate face în numerar sau prin transfer bancar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((item, index) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="price-card bg-beige-50 rounded-2xl p-6 border border-beige-200"
              data-testid={`price-card-${index}`}
            >
              <h3 className="font-heading text-lg font-medium text-beige-900 mb-2">
                {item.service}
              </h3>
              <p className="text-sm text-beige-600 mb-4">
                {item.description}
              </p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading text-3xl font-semibold text-olive-600">
                  {item.price}
                </span>
                <span className="text-beige-600">RON</span>
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-beige-600"
        >
          <p>* Prețurile pot varia în funcție de complexitatea evaluării. Contactează-mă pentru oferte personalizate.</p>
        </motion.div>
      </div>
    </section>
  );
};

// Booking Section with Calendly
const BookingSection = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const eventTypes = [
    {
      name: "Psihoterapie",
      url: "https://calendly.com/robertanase04/evaluare-psihologica-clone",
      icon: Brain
    },
    {
      name: "Evaluare Psihologică",
      url: "https://calendly.com/robertanase04/evaluare-psihologica",
      icon: Heart
    },
    {
      name: "Aviz Transporturi",
      url: "https://calendly.com/robertanase04/evaluare-psihologica-clone-1",
      icon: Car
    },
    {
      name: "Aviz Port-Armă",
      url: "https://calendly.com/robertanase04/aviz-psihologic-transporturi-clone",
      icon: Shield
    },
    {
      name: "Aviz Angajare",
      url: "https://calendly.com/robertanase04/aviz-psihologic-port-arma-clone",
      icon: Briefcase
    }
  ];

  return (
    <section 
      id="programari" 
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="programari-section"
    >
      <div className="blob w-96 h-96 bg-brick-100 -bottom-48 -left-48" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
            Programări
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
            Fă Primul Pas
          </h2>
          <p className="text-lg text-beige-700">
            Selectează tipul de serviciu dorit și alege data și ora care ți se potrivește.
          </p>
        </motion.div>

        {/* Event Type Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {eventTypes.map((event, index) => (
            <button
              key={event.name}
              onClick={() => setActiveEvent(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                activeEvent === index
                  ? "bg-olive-500 text-white shadow-lg shadow-olive-500/20"
                  : "bg-white text-beige-700 border border-beige-300 hover:border-olive-300 hover:text-olive-600"
              }`}
              data-testid={`event-tab-${index}`}
            >
              <event.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{event.name}</span>
              <span className="sm:hidden">{event.name.split(' ').pop()}</span>
            </button>
          ))}
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
            url={eventTypes[activeEvent].url}
            styles={{
              height: '700px',
              minWidth: '320px'
            }}
          />
        </motion.div>

        {/* Alternative Contact */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-beige-600 mb-4">
            Preferi să vorbești direct? Sună-mă sau trimite un mesaj:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+40720053572"
              className="flex items-center gap-2 bg-olive-100 text-olive-700 px-4 py-2 rounded-full hover:bg-olive-200 transition-colors"
              data-testid="booking-phone"
            >
              <Phone className="w-4 h-4" />
              0720 053 572
            </a>
            <a 
              href="mailto:maryantanase@yahoo.com"
              className="flex items-center gap-2 bg-olive-100 text-olive-700 px-4 py-2 rounded-full hover:bg-olive-200 transition-colors"
              data-testid="booking-email"
            >
              <Mail className="w-4 h-4" />
              maryantanase@yahoo.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


// Contact Section
const ContactSection = () => {
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Mesajul a fost trimis cu succes! Voi reveni cu un răspuns în cel mai scurt timp.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-olive-600"
      data-testid="contact-section"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-widest uppercase text-olive-200 font-medium">
              Contact
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mt-4 mb-6">
              Hai să Vorbim
            </h2>
            <p className="text-lg text-olive-100 mb-8">
              Ai întrebări sau vrei să afli mai multe despre serviciile mele? 
              Nu ezita să mă contactezi prin orice metodă preferi.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-olive-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Telefon</p>
                  <a 
                    href="tel:+40720053572" 
                    className="text-olive-100 hover:text-white transition-colors"
                    data-testid="contact-phone"
                  >
                    0720 053 572
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-olive-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <a 
                    href="mailto:maryantanase@yahoo.com" 
                    className="text-olive-100 hover:text-white transition-colors"
                    data-testid="contact-email"
                  >
                    maryantanase@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-olive-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Locație</p>
                  <p className="text-olive-100">București, România</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-olive-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Program</p>
                  <p className="text-olive-100">Luni - Vineri: 17:30 - 20:00</p>
                  <p className="text-olive-100">Sâmbătă: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8"
              data-testid="contact-form"
            >
              <h3 className="font-heading text-2xl font-medium text-beige-900 mb-6">
                Trimite un mesaj
              </h3>

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
                    className="contact-input w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none transition-all"
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
                    className="contact-input w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none transition-all"
                    placeholder="email@exemplu.com"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-beige-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none transition-all"
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
                    rows={4}
                    className="contact-input w-full px-4 py-3 rounded-xl border border-beige-300 focus:outline-none transition-all resize-none"
                    placeholder="Scrie mesajul tău aici..."
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
                      Trimite Mesajul
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-700 py-8" data-testid="footer">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-olive-200 text-sm">
            © {currentYear} Psiholog Mariana Tanase. Toate drepturile rezervate.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="tel:+40720053572" 
              className="text-olive-200 hover:text-white transition-colors text-sm"
              data-testid="footer-phone"
            >
              0720 053 572
            </a>
            <a 
              href="mailto:maryantanase@yahoo.com" 
              className="text-olive-200 hover:text-white transition-colors text-sm"
              data-testid="footer-email"
            >
              maryantanase@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["despre", "servicii", "learning", "preturi", "programari", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App font-body" data-testid="app">
      <Toaster position="top-right" richColors />
      <div className="grain-overlay" />
      
      <Navigation activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LearningSection />
        <PricingSection />
        <BookingSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
