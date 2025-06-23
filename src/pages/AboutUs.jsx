import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SectionTitleWithText from "../components/about-component/Sectiontitlewithtext";
import BannerOne from "../components/about-component/BannerOne";
import TextGridOne from "../components/about-component/Textgridone";
import FunFactOne from "../components/about-component/FunFact";
import TeamMemberOne from "../components/about-component/Teammemberone";
import BrandLogoSliderOne from "../components/about-component/BrandLogoSliderone";
function About() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      
      <SectionTitleWithText/>
      <BannerOne/>
      <TextGridOne/>
      <FunFactOne/>
      <TeamMemberOne/>
      <BrandLogoSliderOne/>
    </Fragment>
  );
}

export default About;
