import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEO = ({
  title = "Spice & Soul - Authentic Restaurant",
  description = "Discover world-class flavors at Spice & Soul. Experience authentic cuisine crafted with passion and served with soul.",
  keywords = "restaurant, fine dining, spice and soul, authentic cuisine, food, dining",
  ogImage = "https://spice-and-soul.vercel.app/restaurant.png",
  url = "https://spice-and-soul.vercel.app/",
}) => {
  const fullTitle = `${title} | Where Every Bite Tells a Story`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  url: PropTypes.string,
};

export default SEO;
