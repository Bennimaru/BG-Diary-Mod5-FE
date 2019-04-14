import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker'
import { connect } from 'react-redux'
import { postWeight } from '../actions/weight.js'


class Log extends Component{

  state={
    user_id:'',
    datetime: new Date(),
    weight:''
  }

  DateChange = datetime =>{
    this.setState({ datetime })
  }

  handleWeight = event =>{
    let weight = parseInt(event.target.value)
    this.setState({
      [event.target.name]: weight
    })
  }

  handleSubmit = event =>{
    event.preventDefault()
    this.setState({
      user_id:this.props.user.id
    })
    this.props.postWeight(this.state)
    this.setState({
      weight:''
    })
  }

  render(){
    return(
      <div className="log">
        <div>
        <DateTimePicker
        onChange={this.DateChange}
        value={this.state.datetime} />
        </div>
        <div id='weight'>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="datetime"   value={this.state.datetime}/>
            <input type="number" placeholder='Enter weight in  lbs' name='weight' value={this.state.weight}   onChange={this.handleWeight}/>
            <input type="submit"/>
          </form>
          <p>Your last recorded weight: {this.props.user.weight} lbs
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

export default connect(mapStateToProps,{ postWeight })(Log)
