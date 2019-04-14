import React from 'react'
import NavBar from '../components/navbar'
import Log from '../components/log'
import Chart from '../components/chart'
import { connect } from 'react-redux'

class Weight extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
        <Log />
        <Chart />
      </div>
    )
  }
}

export default connect()(Weight)
