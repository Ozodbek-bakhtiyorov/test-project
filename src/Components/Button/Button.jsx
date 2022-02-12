import React from 'react'
import { ButtonEl } from './Button.element'

const Button = ({title,type}) => {
  return (
    <ButtonEl type={type}>
      {title}
    </ButtonEl>
  )
}

export default Button;