import React from 'react'

const NutritionLabel = props =>{
  console.log(props.food);
  return(

    <div id='nutrition_outer'>
      {props.food!==undefined?
      <table id='nutrition_inner'>
      <tr><td>Calories:</td><td>{props.food[0].nf_calories} </td></tr>
      <tr><td>Cholesterol:</td> <td>{props.food[0].nf_cholesterol}</td></tr>
      <tr><td>Dietary Fiber:</td> <td>{props.food[0].nf_dietary_fiber}</td></tr>
      <tr><td>Potassium:</td> <td>{props.food[0].nf_potassium}</td></tr>
      <tr><td>Protein:</td> <td>{props.food[0].nf_protein}</td></tr>
      <tr><td>Saturated Fat:</td> <td>{props.food[0].nf_saturated_fat}</td></tr>
      <tr><td>Sodium:</td> <td>{props.food[0].nf_sodium}</td></tr>
      <tr><td>Sugars:</td> <td>{props.food[0].nf_sugars}</td></tr>
      <tr><td>Total Carbohydrate:</td> <td>{props.food[0].nf_total_carbohydrate}</td></tr>
      <tr><td>Total Fat:</td> <td>{props.food[0].nf_total_fat}</td></tr>
      </table>:null}
    </div>
  )
}

export default NutritionLabel
