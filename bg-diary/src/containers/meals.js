import React from 'react'
import NavBar from '../components/navbar'
import LogMeal from '../components/logMeal'
import { connect } from 'react-redux'

class Meals extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
        <LogMeal />
      </div>
    )
  }
}

export default connect()(Meals)
