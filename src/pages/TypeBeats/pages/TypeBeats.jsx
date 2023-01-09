import React from "react";
import PropTypes from 'prop-types'
import BeatCard from "../components/BeatCard/BeatCard";
import Header from "../views/Header/Header";
import TypeBeatsList from "../views/TypeBeatsList/TypeBeastList"

const TypeBeats = ({}) => {
  return (
    <>
      <section id="typeBeatsHeaderSection" className="typeBeatsHeaderSection">
        <Header></Header>
      </section>
      <section id="typeBeatsListSection" className="typeBeatsListSection">
        <TypeBeatsList></TypeBeatsList>
      </section>
    </>
  );
}

export default TypeBeats
