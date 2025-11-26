import React from "react";
import HeroSection from "../Components/home/HeroSection";
import SignatureDishes from "../Components/home/SignatureDishes";
import ChefsSection from "../Components/home/ChefsSection";
import Ambiance from "../Components/home/Ambiance";
import Testimonials from "../Components/home/Testimonials";
import BookTable from "../Components/contact/BookTable";
import SEO from "../Components/common/SEO";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <SEO
        title="Spice & Soul - Home"
        description="Discover world-class flavors at Spice & Soul. Experience authentic cuisine crafted with passion and served with soul. Book your table today for an unforgettable dining experience."
        keywords="restaurant, fine dining, spice and soul, authentic cuisine, food, dining, reservations, gourmet food, chef specials, signature dishes"
        url="https://spice-and-soul.vercel.app/"
      />
      <div className="home-page" id="main-content">
        <div className="hero-sticky-wrapper">
          <HeroSection />
        </div>
        <div className="content-wrapper">
          <SignatureDishes />
          <ChefsSection />
          <Ambiance />
          <Testimonials />
          <div className="bookTable">
            <BookTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
