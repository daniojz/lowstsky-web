import { React, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"
import { Icon } from "@iconify/react";
import BeatCard from "../../../../components/BeatCard/BeatCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TypeBeats = ({ typeBeats, getAllTypeBeats }) => {

  //estado 0-> normal
  //estado 1-> edit mode
  const [listState, setListState] = useState(0);

  useEffect(() => {
    getAllTypeBeats()
  }, [])

  const renderBeat = (beat, key) => {
    const { title, price, photourl } = beat;
    return (
      <BeatCard key={key} title={title} price={price} photoUrl={photourl}></BeatCard>
    )
  }

  const handleButtonEdit = () => {
    listState == 0 ? setListState(1) : setListState(0)
  }

  return (
    <>
      <div className="typeBeatsListContent">
        <div className="typeBeatsButtons">
          <button className="typeBeatButtonView">
            <Icon icon="akar-icons:sort"></Icon>
          </button>
          <button className={`typeBeatButtonEdit ${listState === 1 ? "typeBeatButtonEdit-active" : "typeBeatButtonEdit-normal"}`} onClick={handleButtonEdit}>
            Edit
          </button>
          <Link to="/typeBeats/addTypeBeat" className="active">
            <button className="typeBeatButtonAdd" >
              <Icon icon="akar-icons:circle-plus-fill"></Icon>
            </button>
          </Link>
          { 
            listState === 1 ? 
            <button className="typeBeatButtonDelete">
              <Icon icon="akar-icons:trash-can"></Icon>
            </button> : ""
          }
        </div>
        <div className={`typeBeatsList ${listState === 1 ? "typeBeatsList-active" : "typeBeatsList-normal"}`}>
          {typeBeats != null ? typeBeats.map(beat => renderBeat(beat.data(), beat.id)) : "A ocurrido un error"}
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
