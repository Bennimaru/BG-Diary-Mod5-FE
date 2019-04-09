export const createUser =(user)=>{
  return{
    type:"CREATE_USER",
    payload: user
  }
}

export const logIn = (userObj) => {
  return {type:"LOG_IN", payload: userObj}
}

export const addUser = userObj =>{
  // const userInfo = { user: userObj }
  console.log(userObj);
  return dispatch => {
    return fetch('http://localhost:3005/api/v1/users', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({user: userObj})
    })
    .then(res => res.json())
    .then(resp => dispatch(createUser(resp)))
  }
}

export const getAuth = (userInfo) => {
  return dispatch => {
    return fetch('http://localhost:3005/api/v1/login',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accepts: 'application/json'
    },
    body: JSON.stringify({ user: userInfo })
  }).then(resp => resp.json())
    .then(json => dispatch(logIn(json)) )
  }
}

export const logOut = () => {
 return {type:"LOG_OUT"}
}
