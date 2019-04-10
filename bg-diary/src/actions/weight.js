export const createWeight = (weightObj)=>{
  return{
    type: 'CREATE_WEIGHT',
    payload: weightObj.weight
  }
}

export const postWeight = (weightObj)=>{
  return dispatch => {
    return fetch('http://localhost:3005/api/v1/weights',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({weight:weightObj})
    })
    .then(res => res.json())
    .then(weightObj => dispatch(createWeight(weightObj)))
    .then(resp => console.log(resp))
  }
}
