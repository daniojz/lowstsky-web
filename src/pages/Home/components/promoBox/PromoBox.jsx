import React from "react";
import PropTypes from 'prop-types'
import { Link } from "wouter";

const PromoBox = ({title, imgUrl, pageUrl}) => {
  return (
    <>
      <Link href={pageUrl}>
        <div className="promoBoxContainer">
          <img src={imgUrl}></img>
          <h1>{title}</h1>
        </div>
      </Link>
    </>
  );
}

PromoBox.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
}

export default PromoBox