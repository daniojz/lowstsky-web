import { React, useEffect, useRef, useState } from "react";
import {useTranslation} from "react-i18next"
import { Icon } from "@iconify/react";
import BeatCard from "../../../../components/BeatCard/BeatCard";
import { connect } from "react-redux";
import { Link } from "wouter";

const TypeBeats = ({typeBeats, error, getAllTypeBeats}) => {
  const [ t, i18n ] = useTranslation('typesBeats');
 
  useEffect(() => {
    getAllTypeBeats()
  }, [])
  
  const renderBeat = (beat, key) => {
    const {title, price, photourl} = beat;
    return (
      <BeatCard key={key} title={title} price={price} photoUrl={photourl}></BeatCard>
    )
  }

  return (
    <>
      <div className="typeBeatsListContent">
        <div className="typeBeatsButtons">
          <button className="typeBeatButtonView"><Icon icon="akar-icons:sort"></Icon></button>
          <Link href="/typeBeats/addTypeBeat" className="active"><button className="typeBeatButtonAdd" ><Icon icon="akar-icons:circle-plus-fill"></Icon></button></Link>
        </div>
        <div className="typeBeatsList">
          {typeBeats!=null ? typeBeats.map(beat => renderBeat(beat.data(), beat.id)) : "A ocurrido un error"}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.typeBeats.loading,
    typeBeats: state.typeBeats.typeBeats,
    error: state.typeBeats.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllTypeBeats: () => dispatch({ type: "GET_TYPEBEATS" }),
    deleteTypeBeat: () => dispatch({ type: "DELETE_TYPEBEAT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeBeats);
