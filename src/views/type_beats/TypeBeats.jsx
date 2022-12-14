import React from "react";
import PropTypes from 'prop-types'
import beatCard from "../../components/beatCard/beatCard";

const typeBeats = ({beatList}) => {

  const beats = [
    {title: "hola1", price: "3", photoUrl: "asdfasdf.com"},
    {title: "hola2", price: "5", photoUrl: "asdfasdf.com"},
    {title: "hola3", price: "9", photoUrl: "asdfasdf.com"},
    {title: "hola4", price: "3", photoUrl: "asdfasdf.com"},
  ]

  const renderBeat = (beat) => {
    const {title, price, photourl} = beat;

    return (
      <beatCard title={title} price={price} photoUrl={photourl}></beatCard>
    )
  }

  return (
    <>
      <section id="typeBeats_section">
        {beats.map(beat => renderBeat(beat))}
      </section>  
    </>
  );
}

typeBeats.propTypes = {
  beatList: PropTypes.arrayOf()
}

export default typeBeats
