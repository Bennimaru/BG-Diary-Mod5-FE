import React, { Component } from 'react'
import NavBar from '../components/navbar'
import LogGlucose from '../components/logGlucose'
import ChartGlucose from '../components/chartGlucose'
import { connect } from 'react-redux'

class Glucose extends Component{

  render(){
    return(
      <div>
        <NavBar />
        <LogGlucose />
        <ChartGlucose />
      </div>
    )
  }
}

export default connect()(Glucose)
