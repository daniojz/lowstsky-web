import React from "react";
import PropTypes from 'prop-types';

const Input = ({id, key, className, type, label, name, color, sizing, value, onChange, onClick }) => {

  return (
    <div className={`inputContainer`}>
      <label htmlFor={name}>
        <span>{label}</span>
      </label>
      <input
        id={id}
        name={name}
        key={key}
        type={type}
        className={`${color} ${sizing} ${className}`}
        value={value}
        onClick={onClick}
        onChange={onChange}>
      </input>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  sizing: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

Input.defaultProps = {
  name: "input",
  className: "",
  sizing: "",
  color: ""
}

export default Input
