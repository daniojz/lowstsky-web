import { React, useEffect, useState } from "react";
import {useTranslation} from "react-i18next"
import BeatCard from "../../components/BeatCard/BeatCard";
import { connect } from "react-redux";

const TypeBeatsList = ({fetching, typeBeats, error, onRequestTypeBeats}) => {
  const [ t, i18n ] = useTranslation('typesBeats');
  useEffect(() => {
    onRequestTypeBeats()
  }, [])
  
  const renderBeat = (beat) => {
    const {title, price, photourl} = beat;

    return (
      <BeatCard title={title} price={price} photoUrl={photourl}></BeatCard>
    )
  }

  return (
    <div className="typeBeatsListContent">
      <div className="typeBeatsButtons">
        <button></button>
        <button></button>
      </div>
      <div className="typeBeatsList">
        {typeBeats!=null ? typeBeats.map(beat => renderBeat(beat.data())) : "A ocurrido un error"}
      </div>
  </div>
  );
};

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    typeBeats: state.typeBeats,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestTypeBeats: () => dispatch({ type: "CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeBeatsList);
