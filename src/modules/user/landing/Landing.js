import React from "react";
import "./Landing.css";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import MainContent from "./components/MainContent";
import FooterContent from "./components/FooterContent";

function Landing() {
  return (
    <>
      <ResponsiveAppBar />
      <MainContent />
      <FooterContent />
    </>
  );
}

export default Landing;
