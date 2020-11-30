import React, { Component } from 'react'
import AddRecord from './AddRecord'
import Record from './Record'
import config from '../config'
import './RecordsList.css'

class RecordsList extends Component {
  state = {
    records: []
  }

  //Set state after fetch -- then() change home to record or something more descriptive
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/recordslist`)
      .then(recordsRes => {
        if (!recordsRes.ok)
          return recordsRes.json().then(e => Promise.reject(e))
          
        return recordsRes.json()
          .then(records => {
            this.setState({ records })
          })
          .catch(error => {
            console.error({ error })
          })
      })
  }

  create = (newRecord) => {
    this.setState({
      records: [ ...this.state.records, newRecord]
    })
  }

  deleteRecord = (id) => {
    this.setState({
      records: this.state.records.filter(rec => rec.id !== id)
    })
  }

  updateRecord = (id, updatedRecord) => {
    const updatedRecords = this.state.records.map(record => {
      if (record.id === id) {
        return {...record, title: updatedRecord}
      }
      return record
    })

    this.setState({
      records: updatedRecords
    })
  }

  render() {
    const records = this.state.records.map(record => {
      return <Record 
                key={record.id} 
                id={record.id}
                title={record.title} 
                deleteRecord={this.deleteRecord}
                completed={record.completed}
                updateRecord={this.updateRecord}
              />
    })
    return (
      <div className='RecordsList'>
        <h1><span>Find Your Dream Records!</span></h1>
        <AddRecord addNewRecord={this.create} />
        <ul>
          {records}
        </ul>
      </div>
    )
  }
}

export default RecordsList