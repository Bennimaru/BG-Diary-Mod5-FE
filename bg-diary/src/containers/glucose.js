import React, { Component } from 'react'
import NavBar from '../components/navbar'
import { connect } from 'react-redux'

class Glucose extends Component{

  render(){
    return(
      <div>
        <NavBar />
      </div>
    )
  }
}

export default connect()(Glucose)
