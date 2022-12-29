import React from "react";
import PropTypes from 'prop-types'
import { Link } from "wouter";

const infoBox = ({title, imgUrl, pageUrl}) => {
  return (
    <>
      <Link href={pageUrl}>
        <div className="promoBoxContainer">
          <img src={imgUrl}></img>
          <h1 className="promoBox">{title}</h1>
        </div>
      </Link>
    </>
  );
}

infoBox.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
}

export default infoBox