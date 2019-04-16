export const createGlucose = (glucoseObj)=>{
  return{
    type: 'CREATE_GLUCOSE',
    payload: glucoseObj.glucose
  }
}

export const postGlucose = (glucoseObj)=>{
  return dispatch => {
    return fetch('http://localhost:3005/api/v1/glucoses',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({glucose:glucoseObj})
    })
    .then(res => res.json())
    .then(glucoseObj => dispatch(createGlucose(glucoseObj)))
    .then(resp => console.log(resp))
  }
}
