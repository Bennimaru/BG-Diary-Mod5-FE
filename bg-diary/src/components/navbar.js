import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/user'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component{

  handleLogOut = () => {
   this.props.logOut()
   this.props.history.push("/welcome")
  }

  render(){
    return(
      <div>
      Welcome
      <button onClick={this.handleLogOut}>Log Out</button>  
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps, { logOut })(withRouter(NavBar))
