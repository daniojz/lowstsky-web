import React from "react";
import PropTypes from 'prop-types';

const Input = ({id, key, className, type, label, name, color, sizing, value, onChange, onClick }) => {
  return (
    <div className={`inputContainer ${sizing}`}>
      <label for={name}>
        <span>{label}</span>
      </label>
      <input
        id={id}
        name={name}
        key={key}
        type={type}
        className={`${className} ${color}`}
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
  name: PropTypes.default,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

Input.defaultProps = {
  name: "input",
}

export default Input
