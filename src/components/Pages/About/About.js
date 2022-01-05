import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./About.css";
import AboutCompany from "./AboutCompany/AboutCompany";
import MissionVission from "./MissionVission/MissionVission";
import Team from "./Team/Team";

const About = () => {
  // dynamic title
  useDocumentTitle("About");

  return (
    <>
      <OthersBanner>About Us</OthersBanner>
      <MissionVission></MissionVission>
      <AboutCompany></AboutCompany>
      <Team></Team>
    </>
  );
};

export default About;
