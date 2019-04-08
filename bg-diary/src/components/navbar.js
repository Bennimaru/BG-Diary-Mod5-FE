import React from 'react'
import { connect } from 'react-redux'

class NavBar extends React.Component{

  render(){
    console.log(this.props.user)
    return(
      <div>
      Hello User: {this.props.user.name}

      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(NavBar)
