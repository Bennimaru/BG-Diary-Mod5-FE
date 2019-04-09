const initialState= {
  user:{}
}

const reducer =(state= initialState, action)=>{
  switch(action.type){
    case "CREATE_USER":
      localStorage.setItem('token',action.payload.jwt)
      console.log(action.payload);
      return{
        ...state,
        user: action.payload
      }
    case "LOG_IN":
      localStorage.setItem('token',action.payload.jwt)
      return{
        ...state,
        user: action.payload.user
      }
    case "LOG_OUT":
      localStorage.clear()
      return {...state, user: {} }
      
    default:
      return state
  }
}

export default reducer
