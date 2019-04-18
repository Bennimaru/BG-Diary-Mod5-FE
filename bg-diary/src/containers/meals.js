import React from 'react'
import NavBar from '../components/navbar'
import LogMeal from '../components/logMeal'
import Attribution from '../components/apiAttribution'
import { connect } from 'react-redux'

class Meals extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
        <LogMeal />
        <Attribution />
      </div>
    )
  }
}

export default connect()(Meals)
