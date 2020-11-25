import React, { Component } from 'react'
import { v4 as uuidv4} from 'uuid'
import './AddRecord.css'

class AddRecord extends Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewRecord({ ...this.state, id: uuidv4() })
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form className='AddRecordForm' onSubmit={this.handleSubmit}>
        <label htmlFor="title">Add a record</label>
        <input 
          type="text" 
          name="title" 
          id="title" 
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='e.g. (Van Halen - 1984)' 
          aria-label='Add a record'
          required
          />
          <button>Add a Record</button>
      </form>
    )
  }
}

export default AddRecord
