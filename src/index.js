import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

require('./base.scss')

render(
  <App />,
  document.getElementById('app')
)
