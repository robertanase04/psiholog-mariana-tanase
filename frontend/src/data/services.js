import { Brain, Briefcase, Car, Shield } from "lucide-react";

export const services = [
  {
    icon: Brain,
    title: "Psihologie Clinică",
    slug: "psihologie-clinica",
    shortDescription: "Evaluare clinică, psihodiagnostic și consiliere psihologică pentru adulți și copii.",
    fullDescription: `Oferim servicii complete de evaluare psihologică clinică, incluzând psihodiagnostic, 
    consiliere individuală și intervenție terapeutică. Abordarea noastră este centrată pe persoană, 
    combinând tehnici cognitiv-comportamentale cu metode validate științific.`,
    features: [
      "Evaluare psihologică completă",
      "Consiliere individuală",
      "Terapie cognitiv-comportamentală",
      "Evaluare pentru copii și adolescenți",
      "Raport psihologic detaliat"
    ],
    forWhom: "Persoane care doresc o evaluare psihologică completă, consiliere pentru probleme emoționale, anxietate, depresie sau dificultăți de adaptare."
  },
  {
    icon: Briefcase,
    title: "Psihologia Muncii",
    slug: "psihologia-muncii",
    shortDescription: "Avize psihologice pentru angajare, control periodic și evaluare profesională.",
    fullDescription: `Eliberăm avize psihologice conform legislației în vigoare pentru angajare și 
    control periodic. Evaluarea include testarea aptitudinilor cognitive, a trăsăturilor de personalitate 
    și a compatibilității cu cerințele postului.`,
    features: [
      "Aviz psihologic pentru angajare",
      "Control psihologic periodic",
      "Evaluare aptitudini profesionale",
      "Compatibilitate post–persoană",
      "Consiliere organizațională"
    ],
    forWhom: "Angajați și candidați care necesită aviz psihologic pentru locuri de muncă ce implică responsabilitate sporită sau condiții speciale."
  },
  {
    icon: Car,
    title: "Psihologia Transporturilor",
    slug: "psihologia-transporturilor",
    shortDescription: "Testare psihologică pentru obținerea sau preschimbarea permisului auto.",
    fullDescription: `Efectuăm evaluări psihologice complete pentru toate categoriile de permis auto 
    (B, C, D, E). Testarea include evaluarea atenției, a timpului de reacție, a coordonării 
    perceptiv-motorii și a trăsăturilor de personalitate relevante pentru conducerea autovehiculelor.`,
    features: [
      "Permis auto – toate categoriile",
      "Preschimbare permis de conducere",
      "Evaluare atenție și timp de reacție",
      "Testare coordonare perceptiv-motorie",
      "Eliberare aviz în aceeași zi"
    ],
    forWhom: "Persoane care obțin sau preschimbă permisul de conducere, inclusiv categoriile profesionale (C, D, E)."
  },
  {
    icon: Shield,
    title: "Securitate Națională",
    slug: "securitate-nationala",
    shortDescription: "Evaluări psihologice pentru permis port-armă și profesii din domeniul securității.",
    fullDescription: `Realizăm evaluări psihologice pentru obținerea sau reînnoirea permisului de 
    port-armă, precum și pentru profesii din domeniul apărării și securității naționale. Evaluarea 
    respectă cerințele legale și include o baterie completă de teste psihologice.`,
    features: [
      "Aviz port-armă letală și neletală",
      "Reînnoire aviz port-armă",
      "Evaluare personal securitate",
      "Evaluare conform legislației specifice",
      "Baterie completă de teste"
    ],
    forWhom: "Persoane care solicită permis de port-armă, personal din domeniul pazei și protecției, militari și polițiști."
  }
];
