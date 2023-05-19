import "./styles.css";

import React from 'react'
import ReactDOM from 'react-dom'

function Button({id, onClick}) {
  return (
    <div className="button">
      <button id={id} onClick={onClick}>Let’s go!</button>
    </div>
  )
}

export default Button;