export const createUser =(user)=>{
  return{
    type:"CREATE_USER",
    payload: user
  }
}

export const setUser = userObj => {
 return {
  type: "SET_USER",
  payload: userObj
  };
};

export const logIn = (userObj) => {
  return {
    type:"LOG_IN",
    payload: userObj
  }
}

export const logOut = () => {
  return {
    type:"LOG_OUT"
  }
}

export const addUser = (userObj) =>{
  return dispatch => {
    return fetch('http://localhost:3005/api/v1/users', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({user: userObj})
    })
    .then(res => res.json())
    .then(user => dispatch(createUser(user))
    )
  }
}

export const getAuth = (userInfo) => {
  return dispatch => {
    return fetch('http://localhost:3005/api/v1/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accepts: 'application/json'
    },
    body: JSON.stringify({ user: userInfo })
    })
    .then(res => res.json())
    .then(json =>
      { if (!json.error) {
        dispatch(logIn(json))
        return true
      } else {
        return false
      }})
    .catch(error => console.log(error))
  }
}

export const checkToken = () => {
  return dispatch => {
    if (localStorage.token){
      return fetch("http://localhost:3005/api/v1/profile", {
        method: "GET",
        headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then(json => dispatch(setUser(json)));
    }
  };
}
