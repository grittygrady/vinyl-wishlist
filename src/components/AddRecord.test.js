import React from 'react'
import ReactDOM from 'react-dom'
import AddRecord from './AddRecord'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddRecord />, div)
  ReactDOM.unmountComponentAtNode(div)
})