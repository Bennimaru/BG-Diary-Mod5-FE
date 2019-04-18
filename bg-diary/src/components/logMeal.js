import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import FoodItems from './foodItems'
import Pic from '/Users/flatironschool/BG-Diary-Mod5-FE/bg-diary/src/New-Food-Pyramid.jpg'
import { connect } from 'react-redux'
require('dotenv').config()


class LogMeal extends React.Component{

  state={
    user_id:'',
    datetime: new Date(),
    foodItems:'',
    userInput:''
  }

  DateChange = datetime =>{
    this.setState({datetime})
  }

  handleInput = event =>{
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSearch = event =>{
    event.preventDefault()
    let searchTerm = this.state.userInput
    console.log(searchTerm);
    return fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${searchTerm}`,{
      method:'GET',
      headers:{
        "x-app-id": process.env.REACT_APP_ID,
        "x-app-key": process.env.REACT_APP_KEY
      }
    })
    .then(res => res.json())
    .then(data => this.setState({foodItems: data}))
  }

  handleSubmit = event =>{
    event.preventDefault()
    console.log("hi");
    this.setState({
      user_id:this.props.user.id
    })

    // stuffs....
  }


  render(){
    console.log(this.state.foodItems);

    let searchData = this.state.foodItems? this.state.foodItems.branded : []

    console.log(searchData);

    let foodList= searchData.map(food=>
      <FoodItems key={food.id} food={food}/>)

    return(
      <div className='logmeal' style={{backgroundImage: `url(${Pic})`}} >
        <div>
        <DateTimePicker onChange={this.DateChange}
        value={this.state.datetime}/>
        </div>
        <div >
          <form onSubmit= {this.handleSubmit}>
            <input type='text' name='datetime' value={this.state.datetime} />
            <input type='text' name='foodItem' />
            <input type="submit" value="Log Meal"/>
          </form>
        </div>
        <div>
          <form onSubmit= {this.handleSearch}>
            <input type='text' name='userInput' placeholder='Search for a food item' onChange={this.handleInput} />
            <input type='submit' value="Search" />
          </form>
        </div>
        <ul id='foodItem'>
          {foodList}
        </ul>
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
