const initialState= {
  user:{}
}

const reducer =(state= initialState, action)=>{
  switch(action.type){
    case "CREATE_USER":
      localStorage.setItem('token',action.payload.jwt)
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
      return {
        ...state,
        user: {}
      }
    case "SET_USER":
      return {
        ...state,
        user:action.payload.user
      }
    case "CREATE_WEIGHT":
      return{
        ...state,
        user: {...state.user, weight: action.payload}
      }
    case "CREATE_GLUCOSE":
      return{
        ...state,
        user: {...state.user, glucose: action.payload}
      }
    case "CREATE_MEAL":
      return{
        ...state,
        user:{...state.user, meal: action.payload}
      }

    default:
      return state
  }
}

export default reducer
