import { Helmet } from "react-helmet-async";

const BASE_URL = "https://psihologmarianatanase.ro";

const SEO = ({ title, description, path = "/", type = "website" }) => {
  const fullTitle = title
    ? `${title} | Psiholog Mariana Tănase București`
    : "Psiholog Mariana Tănase | Avize Psihologice și Psihoterapie București";

  const fullUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:site_name" content="Psiholog Mariana Tanase" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />
    </Helmet>
  );
};

export default SEO;
