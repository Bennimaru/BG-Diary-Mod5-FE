import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import Pic from '/Users/flatironschool/BG-Diary-Mod5-FE/bg-diary/src/New-Food-Pyramid.jpg'
import { connect } from 'react-redux'
require('dotenv').config()

class LogMeal extends React.Component{

  state={
    user_id:'',
    datetime: new Date(),
    meal:''
  }

  DateChange = datetime =>{
    this.setState({datetime})
  }

  render(){
    return(
      <div className='logmeal' style={{backgroundImage: `url(${Pic})`}} >
        <div>
        <DateTimePicker onChange={this.DateChange}
        value={this.state.datetime}/>
        </div>
        <div >
          <form>
            <input type='text' name='datetime' value={this.state.datetime}/>
          </form>
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

export default connect(mapStateToProps)(LogMeal)
