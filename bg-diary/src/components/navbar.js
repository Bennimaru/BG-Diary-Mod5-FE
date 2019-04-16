import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/user'
import { withRouter, NavLink } from 'react-router-dom'


class NavBar extends React.Component{

  handleLogOut = () => {
   this.props.logOut()
   this.props.history.push("/welcome")
   localStorage.clear()
  }

  render(){
    return(
      <div className="navbar">
        Welcome {this.props.user.username}
        <NavLink className='link'
        to="/home"
        exact
        >Home</NavLink>
        <NavLink className='link'
        to="/glucose"
        exact
        >Glucose</NavLink>
        <NavLink className='link'
        to="/meals"
        exact
        >Meals</NavLink>
        <NavLink className='link'
        to="/weight"
        exact
        >Weight</NavLink>
        <NavLink className='link'
        to="/logout"
        exact
        onClick={this.handleLogOut}
        >LogOut</NavLink>
      </div>
    )
  }
}


const mapStateToProps = state =>{
  return{
    user:state.user
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseVote: (id) => dispatch({ type: "INCREASE_VOTE", payload: id }),
//     decreaseVote: (id) => dispatch({ type: "DECREASE_VOTE", payload: id })
//   }
// }

export default connect(mapStateToProps, { logOut })(withRouter(NavBar))
