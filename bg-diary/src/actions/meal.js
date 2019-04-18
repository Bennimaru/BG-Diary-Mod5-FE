export const createMeal = (mealObj)=>{
  return{
    type: 'CREATE_MEAL',
    payload: mealObj.meal
  }
}

export const postMeal = (mealObj)=>{
  return dispatch => {
    return fetch('http://localhost:3005/api/v1/meals',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({meal:{
        user_id: mealObj.user_id,
        datetime: mealObj.datetime,
        meal: mealObj.meal,
        category: mealObj.type
      }})
    })
    .then(res => res.json())
    .then(resp => dispatch(createMeal(resp)))
    .then(reply =>console.log(reply))
  }
}
