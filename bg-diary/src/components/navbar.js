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
        <button onClick={this.handleLogOut}>Log Out</button>

        Am I Here?
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
