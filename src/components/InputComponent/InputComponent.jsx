import React from 'react'
import PropTypes from 'prop-types'

export const InputComponent = ({name, value, disabled, type, placeholder, onChange, label}) => <div className={'input'}>
  {label && <label>{label}</label>}
  <input
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    disabled={disabled}
    type={type}
  />
</div>

InputComponent.displayName = "InputComponent"

InputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
  
InputComponent.defaulProps = {
  placeholder: '',
  type: '',
  label: '',
  value: '',
  name: '',
  disabled: false,
}

export default InputComponent
