import { React, useState } from "react";
import Presentation from "../views/Presentation/Presentation";
import Promotion from "../views/Promotion/Promotion";
import LastReleases from "../views/LastReleases/LastReleases";

const Home = ({}) => {
  return (
    <>
      <section id="presentation" className="presentationSection">
        <Presentation></Presentation>
      </section>
      <section id="promo" className="promoSection">
        <Promotion></Promotion>
      </section>
      <section id="lastReleases" className="lastReleasesSection">
        <LastReleases></LastReleases>
      </section>
    </>
  );
};

export default Home;
