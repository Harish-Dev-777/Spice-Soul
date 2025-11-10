import React from "react";
import HeroSection from "../Components/home/HeroSection";
import SignatureDishes from "../Components/home/SignatureDishes";
import ChefsHighlight from "../Components/home/ChefHighlight";
import Ambiance from "../Components/home/Ambiance";
import Testimonials from "../Components/home/Testimonials";
import BookTable from "../Components/contact/BookTable";

const Home = () => {
  return (
    <section id="home">
      <HeroSection />
      <SignatureDishes />
      <ChefsHighlight />
      <Ambiance />
      <Testimonials />
      <BookTable/>
    </section>
  );
};

export default Home;
