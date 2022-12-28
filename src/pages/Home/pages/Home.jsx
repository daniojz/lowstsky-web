import { React, useState } from "react";
import Presentation from "../components/Presentation/Presentation";

const Home = ({}) => {
  return (
    <>
      <section className="presentationSection">
        <div className="presentationContent">
          <Presentation></Presentation>
        </div>
      </section>
      <section className="lastReleasesSection"></section>
      <section className="lastReleasesSection"></section>
    </>
  );
};

export default Home;
