import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import Pic from '/Users/flatironschool/BG-Diary-Mod5-FE/bg-diary/src/New-Food-Pyramid.jpg'
import Attribution from './apiAttribution'
import { connect } from 'react-redux'
require('dotenv').config()


class LogMeal extends React.Component{

  state={
    user_id:'',
    datetime: new Date(),
    foodItem:''
  }

  DateChange = datetime =>{
    this.setState({datetime})
  }

  handleSubmit = event =>{
    event.preventDefault()
    console.log("hi");
    this.setState({
      user_id:this.props.user.id
    })
  }

  render(){
    return(
      <div className='logmeal' style={{backgroundImage: `url(${Pic})`}} >
        <div>
        <DateTimePicker onChange={this.DateChange}
        value={this.state.datetime}/>
        </div>
        <div >
          <form onSubmit= {this.handleSubmit}>
            <input type='text' name='datetime' value={this.state.datetime}/>
            <input type='text' name='foodItem' placeholder='What did you eat?' />
            <input type="submit"/>
          </form>
        </div>
        <div>
          <input type='text' name=''/>
        </div>
        <footer>
          <Attribution />
        </footer>
      </div>
    )
  }
}

const mapStateToProps= state=>{
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(LogMeal)
