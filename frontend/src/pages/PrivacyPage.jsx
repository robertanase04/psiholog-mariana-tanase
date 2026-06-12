import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CONTACT_INFO } from "@/data/constants";

const PrivacyPage = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Politica de confidențialitate"
        description="Politica de confidențialitate a cabinetului psihologic Mariana Tanase. Informații despre prelucrarea datelor personale conform GDPR."
        path="/confidentialitate"
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-beige-900 mb-8">
              Politica de confidențialitate
            </h1>

            <div className="space-y-8 text-beige-700 leading-relaxed">
              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  1. Cine suntem
                </h2>
                <p>
                  Cabinetul Psihologic Mariana Tanase, cu sediul în București, România. 
                  Date de contact: {CONTACT_INFO.email}, telefon {CONTACT_INFO.phoneDisplay}.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  2. Ce date colectăm
                </h2>
                <p className="mb-3">
                  Prin intermediul acestui site putem colecta următoarele categorii de date personale:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Nume și prenume (formularul de contact)</li>
                  <li>Adresă de email (formularul de contact)</li>
                  <li>Număr de telefon (formularul de contact, opțional)</li>
                  <li>Conținutul mesajului trimis</li>
                </ul>
                <p className="mt-3">
                  <strong>Nu</strong> colectăm date prin cookies. Site-ul nu utilizează cookies proprii 
                  sau instrumente de tracking care colectează date personale.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  3. Scopul prelucrării datelor
                </h2>
                <p>
                  Datele personale furnizate prin formularul de contact sunt utilizate exclusiv pentru 
                  a răspunde solicitărilor dumneavoastră și pentru a facilita programarea unei consultații.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  4. Temeiul legal
                </h2>
                <p>
                  Prelucrarea datelor se realizează pe baza consimțământului dumneavoastră 
                  (Art. 6 alin. 1 lit. a din Regulamentul UE 2016/679 – GDPR), acordat prin 
                  completarea și trimiterea formularului de contact.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  5. Durata stocării
                </h2>
                <p>
                  Datele din formularul de contact sunt păstrate pe durata necesară îndeplinirii 
                  scopului pentru care au fost colectate, dar nu mai mult de 12 luni de la ultima 
                  interacțiune.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  6. Drepturile dumneavoastră
                </h2>
                <p className="mb-3">Conform GDPR, aveți următoarele drepturi:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Dreptul de acces la datele personale</li>
                  <li>Dreptul la rectificarea datelor inexacte</li>
                  <li>Dreptul la ștergerea datelor („dreptul de a fi uitat")</li>
                  <li>Dreptul la restricționarea prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul de a retrage consimțământul în orice moment</li>
                  <li>Dreptul de a depune o plângere la ANSPDCP</li>
                </ul>
                <p className="mt-3">
                  Pentru exercitarea acestor drepturi, ne puteți contacta la adresa de email: {CONTACT_INFO.email}.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  7. Servicii terțe
                </h2>
                <p>
                  Pagina de programări redirecționează către platforma Calendly. Vă rugăm să consultați{" "}
                  <a
                    href="https://calendly.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive-600 underline hover:text-olive-700"
                  >
                    politica de confidențialitate Calendly
                  </a>{" "}
                  pentru informații despre prelucrarea datelor pe platforma lor.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  8. Confidențialitatea relației terapeutice
                </h2>
                <p>
                  Toate informațiile comunicate în cadrul ședințelor de evaluare psihologică sau 
                  psihoterapie sunt strict confidențiale, conform Codului Deontologic al Psihologului 
                  din România și legislației în vigoare. Derogări de la confidențialitate sunt posibile 
                  doar în situațiile prevăzute expres de lege.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-medium text-beige-900 mb-3">
                  9. Modificări ale politicii
                </h2>
                <p>
                  Ne rezervăm dreptul de a actualiza această politică. Ultima actualizare: iunie 2026.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
