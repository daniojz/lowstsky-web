import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from 'prop-types'

/**
 * 
 * @param {number} anchor element to scroll to when the users clicks on the icon 
 * @param {string} color color of the icon
 * 
 */
const ScrollDownButton = ({anchor, color}) => {
  return (
    <a href={anchor} className={`scrollDownButtonContainer ${color}`}>
      <Icon icon="akar-icons:chevron-down" width="20" height="20" />
    </a>
  );
}

ScrollDownButton.propTypes = {
  anchor: PropTypes.string.isRequired,
  color: PropTypes.string
}
ScrollDownButton.defaultProps = {
  color: 'grey'
};

export default ScrollDownButton
