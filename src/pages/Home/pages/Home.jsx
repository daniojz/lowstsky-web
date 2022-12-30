import { React, useState } from "react";
import Presentation from "../views/Presentation/Presentation";
import Promotion from "../views/Promotion/Promotion";
import LastReleases from "../views/LastReleases/LastReleases";

const Home = ({}) => {
  return (
    <>
      <section className="presentationSection">
        <Presentation></Presentation>
      </section>
      <section className="promoSection">
        <Promotion></Promotion>
      </section>
      <section className="lastReleasesSection">
        <LastReleases></LastReleases>
      </section>
    </>
  );
};

export default Home;
