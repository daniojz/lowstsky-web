import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { connect } from "react-redux";

const Loading = ({fetching}) => { 
  return (
    <>
      <div className={`loadingContainer ${fetching ? "show" : "hidden"}`}>
        <span className="loadingIcon">
          <Icon icon="akar-icons:arrow-clockwise" width="30"></Icon>
        </span>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.typeBeats.fetching,
  };
};

export default connect(mapStateToProps)(Loading);