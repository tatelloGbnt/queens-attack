import React from 'react'
import PropTypes from 'prop-types'
import './_ButtonComponent.styl'

const ButtonComponent = ({onClick, disabled, text}) => (
  <button className={'startButton'} onClick={() => onClick()} disabled={disabled}>
    {text}
  </button>
)

ButtonComponent.displayName = 'ButtonComponent'

ButtonComponent.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,

}
ButtonComponent.defaultProps = {
  text: '',
  disabled: false,
  onClick: () => { console.log('click default') },

}

export default ButtonComponent