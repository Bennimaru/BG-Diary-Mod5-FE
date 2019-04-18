import React from 'react'

const FoodItems = props =>{

  return(
    <div onClick={e=>props.search(e,props.food.food_name)}>
      <p>{props.food.food_name}</p>
      <img src={props.food.photo.thumb} alt=''/>
    </div>
  )
}

export default FoodItems
