import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker'
import { connect } from 'react-redux'
import { postGlucose } from '../actions/glucose'

class LogGlucose extends Component{

  state={
    user_id:'',
    datetime: new Date(),
    glucose:''
  }

  DateChange = datetime =>{
    this.setState({ datetime })
  }

  handleGlucose = event =>{
    let glucose = parseInt(event.target.value)
    this.setState({
      [event.target.name]: glucose
    })
  }

  handleSubmit = event =>{
    event.preventDefault()
    this.setState({
      user_id:this.props.user.id
    }, () => this.props.postGlucose(this.state))
  }

  render(){
    return(
      <div className="logglucose">
        <div>
        <DateTimePicker
        onChange={this.DateChange}
        value={this.state.datetime} />
        </div>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="datetime"   value={this.state.datetime}/>
            <input type="number" placeholder='Enter blood glucose in mg/dl' name='glucose' value={this.state.glucose}   onChange={this.handleGlucose}/>
            <input type="submit"/>
          </form>
          <p>Your last recorded blood glucose: {this.props.user.glucose} mg/dl
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps= state=>{
  return{
    user: state.user
  }
}

export default connect(mapStateToProps,{ postGlucose })(LogGlucose)
