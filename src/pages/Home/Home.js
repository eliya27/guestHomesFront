import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeContainer-title_container">
          <h1 className="homeContainer-title">Browse by property type</h1>
        </div>
        <PropertyList />
        <div className="homeContainer-title_container">
          <h1 className="homeContainer-title">Most picked Hotels</h1>
        </div>
        <FeaturedProperties />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
