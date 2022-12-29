import { React, useState } from "react";
import Presentation from "../views/Presentation/Presentation";
import Promotion from "../views/Promotion/Promotion";

const Home = ({}) => {
  return (
    <>
      <section className="presentationSection">
        <div className="presentationContent">
          <Presentation></Presentation>
        </div>
      </section>
      <section className="promoSection">
        <div className="promoContent">
          <Promotion></Promotion>
        </div>
      </section>
      <section className="lastReleasesSection"></section>
    </>
  );
};

export default Home;
