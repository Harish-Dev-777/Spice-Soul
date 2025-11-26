import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEO = ({
  title = "Spice & Soul - Authentic Restaurant",
  description = "Discover world-class flavors at Spice & Soul. Experience authentic cuisine crafted with passion and served with soul.",
  keywords = "restaurant, fine dining, spice and soul, authentic cuisine, food, dining",
  ogImage = "https://spice-and-soul.vercel.app/restaurant.png",
  url = "https://spice-and-soul.vercel.app/",
  schema = null,
}) => {
  const fullTitle = title.includes("Spice & Soul")
    ? title
    : `${title} | Spice & Soul`;

  // Default Restaurant Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Spice & Soul",
    image: ["https://spice-and-soul.vercel.app/restaurant.png"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Flavor Street, Culinary Avenue",
      addressLocality: "Chennai",
      addressRegion: "TN",
      postalCode: "600001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    url: "https://spice-and-soul.vercel.app/",
    telephone: "+919876543210",
    servesCuisine: "Authentic Multi-Cuisine",
    priceRange: "₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    menu: "https://spice-and-soul.vercel.app/menu",
    acceptsReservations: "True",
  };

  const structuredData = schema || defaultSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0a0a0a" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Spice & Soul" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  url: PropTypes.string,
  schema: PropTypes.object,
};

export default SEO;
