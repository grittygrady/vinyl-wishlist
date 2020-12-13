import React, { Component } from 'react'
import { v4 as uuidv4} from 'uuid'
import config from '../config'
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
    const newRecord = {
      title: this.state.title, id: uuidv4()
    }
    fetch(`${config.API_ENDPOINT}/recordslist`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRecord)
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(record => {
        this.props.addNewRecord(record)
        this.setState({
          title: ''
        })
      })
      .catch(error => {
        console.error({ error })
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
