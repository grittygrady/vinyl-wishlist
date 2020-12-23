import React from 'react'
import ReactDOM from 'react-dom'
import RecordsList from './RecordsList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<RecordsList />, div)
  ReactDOM.unmountComponentAtNode(div)
})