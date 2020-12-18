import React, { Component } from 'react'
import config from '../config'
import './Record.css'

class Record extends Component {
  state = {
    isEditing: false,
    title: this.props.title
  }

  handleDelete = (e) => {
    e.preventDefault()
    const recordId = this.props.id
    fetch(`${config.API_ENDPOINT}/recordslist/${recordId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      credentials: "include"
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
      })
      .then(() => {
        this.props.deleteRecord(recordId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleUpdate = (e) => {
    e.preventDefault()
    const updatedRecord = {
      title: this.state.title,
      id: this.props.id
    }
    fetch(`${config.API_ENDPOINT}/recordslist/${this.props.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(updatedRecord)
    })
    console.log(this.props)
    .then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
    })
      .then(record => {
        this.props.updateRecord(record)
      })
      .catch(error => console.error({ error }))
    this.setState({
      isEditing: false
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div className='Record'>
          <form className='Record-edit-form' onSubmit={this.handleUpdate}>
            <input 
              type="text" 
              value={this.state.title}
              name='title'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      ) 
      } else {
        result = (
          <div className='Record'>
            <li className='Record-title'>{this.state.title}</li>
            <div className="Record-buttons">
              <button onClick={this.toggleForm}>
                <i className='fas fa-pen' />
              </button>
              <button onClick={(e) => this.handleDelete(e)}>
                <i className='fas fa-trash' />
              </button>
            </div>
          </div>
        )
      }
      return result
    }   
  }

export default Record
