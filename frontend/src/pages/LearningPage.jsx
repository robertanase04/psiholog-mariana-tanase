import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { learningMaterials } from "@/data/learning-materials";
import SEO from "@/components/SEO";

// Safely render text with **bold** markers
const renderBoldText = (text) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
};

const LearningPage = () => {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState("Toate");

  // Article detail view
  if (id) {
    const article = learningMaterials.find((m) => m.id === id);
    if (!article) {
      return (
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-3xl text-beige-900 mb-4">Articol negăsit</h1>
            <Link to="/resurse" className="text-olive-600 hover:underline">
              ← Înapoi la resurse
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-20">
        <SEO
          title={article.title}
          description={article.summary}
          path={`/resurse/${article.id}`}
        />
        <article className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <Link
              to="/resurse"
              className="inline-flex items-center gap-2 text-olive-600 hover:text-olive-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Toate resursele
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-olive-600 bg-olive-50 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-beige-500">
                  <Clock className="w-3 h-3" />
                  {article.readTime} lectură
                </span>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-beige-900 mb-4">
                {article.title}
              </h1>
              <p className="text-lg text-beige-600 mb-10">{article.summary}</p>

              {/* Render markdown-like content */}
              <div className="prose-article">
                {article.content.split("\n").map((line, i) => {
                  const trimmed = line.trim();
                  if (!trimmed) return <div key={i} className="h-4" />;
                  if (trimmed.startsWith("## "))
                    return (
                      <h2 key={i} className="font-heading text-2xl font-medium text-beige-900 mt-10 mb-4">
                        {trimmed.slice(3)}
                      </h2>
                    );
                  if (trimmed.startsWith("### "))
                    return (
                      <h3 key={i} className="font-heading text-lg font-medium text-beige-900 mt-6 mb-2">
                        {trimmed.slice(4)}
                      </h3>
                    );
                  if (trimmed.startsWith("- **"))
                    return (
                      <li key={i} className="ml-4 mb-2 text-beige-700 leading-relaxed list-disc">
                        {renderBoldText(trimmed.slice(2))}
                      </li>
                    );
                  if (trimmed.startsWith("- "))
                    return (
                      <li key={i} className="ml-4 mb-2 text-beige-700 leading-relaxed list-disc">
                        {trimmed.slice(2)}
                      </li>
                    );
                  if (trimmed.startsWith("---"))
                    return <hr key={i} className="my-8 border-beige-200" />;
                  if (trimmed.startsWith("*") && trimmed.endsWith("*"))
                    return (
                      <p key={i} className="text-sm text-beige-500 italic mt-4">
                        {trimmed.slice(1, -1)}
                      </p>
                    );
                  if (trimmed.startsWith("**"))
                    return (
                      <p key={i} className="text-beige-700 leading-relaxed mb-2">
                        {renderBoldText(trimmed)}
                      </p>
                    );
                  return (
                    <p key={i} className="text-beige-700 leading-relaxed mb-2">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {/* CTA after article */}
              <div className="mt-12 pt-8 border-t border-beige-200 text-center">
                <p className="text-beige-700 mb-4">
                  Ai nevoie de sprijin profesional? Programează o consultație.
                </p>
                <Link to="/programari">
                  <Button className="bg-olive-500 hover:bg-olive-600 text-white rounded-full px-6 py-3 font-medium transition-all hover:scale-105 shadow-md shadow-olive-500/20">
                    <Calendar className="w-4 h-4 mr-2" />
                    Programează o ședință
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    );
  }

  // List view
  const categories = ["Toate", ...new Set(learningMaterials.map((m) => m.category))];
  const filtered =
    activeCategory === "Toate"
      ? learningMaterials
      : learningMaterials.filter((m) => m.category === activeCategory);

  return (
    <div className="pt-20">
      <SEO
        title="Resurse – Articole despre sănătate mentală"
        description="Materiale educaționale gratuite: gestionarea stresului, anxietate, inteligență emoțională, comunicare, burnout. Scrise de psiholog clinician."
        path="/resurse"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-sm tracking-widest uppercase text-olive-600 font-medium">
              Resurse
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-beige-900 mt-4 mb-6">
              Materiale educaționale
            </h1>
            <p className="text-lg text-beige-700">
              Articole și ghiduri practice despre sănătate mentală, dezvoltare personală și relații 
              sănătoase. Gratuite și accesibile oricând.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-olive-500 text-white shadow-md"
                    : "bg-beige-100 text-beige-700 hover:bg-beige-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/resurse/${material.id}`}
                  className="group block h-full bg-white rounded-2xl p-6 border border-beige-200 hover:border-olive-300 hover:shadow-lg transition-all duration-300"
                  data-testid={`learning-card-${index}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-olive-50 rounded-xl flex items-center justify-center group-hover:bg-olive-100 transition-colors">
                      <material.icon className="w-6 h-6 text-olive-600" />
                    </div>
                    <span className="text-xs font-medium text-olive-600 bg-olive-50 px-3 py-1 rounded-full">
                      {material.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-beige-900 mb-2 group-hover:text-olive-700 transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-beige-600 text-sm mb-4 leading-relaxed">{material.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-beige-500">
                      <Clock className="w-3 h-3" />
                      {material.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-olive-600 text-sm font-medium group-hover:gap-2 transition-all">
                      Citește <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPage;
