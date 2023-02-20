import React from "react";
import PropTypes from 'prop-types';

const Button = ({ id, value, name, text, color, type, sizing, onClick, className }) => {
  return (
    <span className={`buttonContainer ${sizing}`}>
      <button
        id={id}
        name={name}
        type={type}
        value={value}
        className={`${className} ${color}`}
        onClick={onClick}>
        {text}
      </button>
    </span>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sizing: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
