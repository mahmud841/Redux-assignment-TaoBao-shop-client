import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import FeatureContact from "./FeatureContact/FeatureContact";
import "./Home.css";
import ServiceSection from "./ServiceSection/ServiceSection";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  useDocumentTitle("Deliveryhut - Professional delivery services", false);
  return (
    <div>
      <Banner></Banner>
      <FeatureContact></FeatureContact>
      <ServiceSection></ServiceSection>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
