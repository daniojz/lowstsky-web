import { React, useEffect, useState } from "react";
import {useTranslation} from "react-i18next"
import { Icon } from "@iconify/react";
import BeatCard from "../../components/BeatCard/BeatCard";
import { connect } from "react-redux";

const TypeBeats = ({fetching, typeBeats, error, onRequestTypeBeats}) => {
  const [ t, i18n ] = useTranslation('typesBeats');

  useEffect(() => {
    onRequestTypeBeats()
  }, [])
  
  const renderBeat = (beat, key) => {
    const {title, price, photourl} = beat;
    return (
      <BeatCard key={key} title={title} price={price} photoUrl={photourl}></BeatCard>
    )
  }

  return (
    <div className="typeBeatsListContent">
      <div className="typeBeatsButtons">
        <button className="typeBeatButtonView"><Icon icon="akar-icons:sort"></Icon></button>
      </div>
      <div className="typeBeatsList">
        {typeBeats!=null ? typeBeats.map(beat => renderBeat(beat.data(), beat.id)) : "A ocurrido un error"}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetching: state.addTypeBeat.fetching,
    typeBeats: state.addTypeBeat.typeBeats,
    error: state.addTypeBeat.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestTypeBeats: () => dispatch({ type: "CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeBeats);
