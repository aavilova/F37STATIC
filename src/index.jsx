import './index.css'
import "@fontsource/roboto-mono";

import React from 'react'
import ReactDOM from 'react-dom'

import App from './javascript/App.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('genart')
  ReactDOM.render(<App />, container)
})