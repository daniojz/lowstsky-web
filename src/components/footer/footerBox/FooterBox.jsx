import React from "react";
import PropTypes from 'prop-types'

const FooterBox = ({title, links}) => {
  return (
    <div className="footerBoxContainer">
      <h1 className="footerBoxTitle">{title}</h1>
      <div className="footerBoxContent">
        <ul>
          {renderLinks(links)}
        </ul>
      </div>
    </div>
  );
}

const renderLinks = (links) => {
  return links.map((link) => {
    return <li key={link}><a href={link.link}>{link.linkTitle}</a></li>
  });
}

FooterBox.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default FooterBox