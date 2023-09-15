import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const InputSelect = ({
  id,
  key,
  className,
  list,
  name,
  color,
  sizing,
  defaultValue,
  onChange,
  onClick,
}) => {
  return (
    <div className={`selectContainer`}>
      <Select
        id={id}
        name={name}
        key={key}
        className={`${color} ${sizing} ${className}`}
        options={list}
        defaultValue={defaultValue}
        onClick={onClick}
        onChange={onChange}
      >
        {/* {
          list.map((key) => {
            return <option key={key} value={key}>{key}</option>
          })} */}
      </Select>
    </div>
  )
}

InputSelect.propTypes = {
  sizing: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

InputSelect.defaultProps = {
  name: 'select',
  className: '',
  sizing: '',
  color: '',
}

export default InputSelect
