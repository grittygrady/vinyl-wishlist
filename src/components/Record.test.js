import React from 'react'
import ReactDOM from 'react-dom'
import Record from './Record'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Record />, div)
  ReactDOM.unmountComponentAtNode(div)
})