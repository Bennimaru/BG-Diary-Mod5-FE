import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import FoodItems from './foodItems'
import Pic from '/Users/flatironschool/BG-Diary-Mod5-FE/bg-diary/src/New-Food-Pyramid.jpg'
import { connect } from 'react-redux'
import { postMeal } from '../actions/meal'
import NutritionLabel from './nutritionLabel'
require('dotenv').config()


class LogMeal extends React.Component{

  state={
    user_id:'',
    userInput:'',
    datetime: new Date(),
    foodItems:'',
    clickedFood:{},
    meal:'',
    type:''
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

  handleNutritionSearch = (event,food) =>{
    event.preventDefault()
    console.log(food);
    return fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`,{
      method:"POST",
      headers:{
        "Content-Type": 'application/json',
        "x-app-id": process.env.REACT_APP_ID,
        "x-app-key": process.env.REACT_APP_KEY
      },
      body:JSON.stringify({query:food})
    })
    .then(res => res.json())
    .then(data => this.setState({clickedFood: data}))
  }

  handleSubmit = event =>{
    event.preventDefault()
    console.log("hi");
    this.setState({
      user_id:this.props.user.id
    }, ()=>
    this.props.postMeal(this.state))
  }

  handleChange = event =>{
    event.preventDefault()
    this.setState({
      type: event.target.value
    })
  }

  render(){
    let searchData = this.state.foodItems? this.state.foodItems.common : []

    let foodList= searchData.slice(0,3).map(food=>
      <FoodItems key={food.food_name} food={food} search={this.handleNutritionSearch}/>)

    console.log(this.state.clickedFood.foods)
    if(this.state.clickedFood.foods !== undefined){
      console.log(this.state.clickedFood);
    }

    return(
      <div className='logmeal' style={{backgroundImage: `url(${Pic})`}} >
        <div>
        <DateTimePicker onChange={this.DateChange}
        value={this.state.datetime}/>
        </div>
        <div >
          <form onSubmit= {this.handleSubmit}>
            <input type='text' name='datetime' value={this.state.datetime} />
            <input type='text' name='meal' value={this.state.meal} onChange={this.handleInput}/>
            <select value={this.state.type} onChange={this.handleChange}>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option selected value="Snack">Snack</option>
            </select>
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
        <div>
          <NutritionLabel food={this.state.clickedFood.foods}/>
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

export default connect(mapStateToProps, { postMeal })(LogMeal)
