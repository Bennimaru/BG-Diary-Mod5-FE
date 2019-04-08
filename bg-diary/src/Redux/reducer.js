const initialState= {
  user:{}
}

const reducer =(state= initialState, action)=>{
  switch(action.type){
    case "CREATE_USER":
      return{
        ...state,
        user:[action.payload]
      }
    default:
      return state
  }
}

export default reducer
