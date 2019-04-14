import React from 'react'
import NavBar from '../components/navbar'
import { connect } from 'react-redux'

class Meals extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
      </div>
    )
  }
}

export default connect()(Meals)
