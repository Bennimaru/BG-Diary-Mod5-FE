import React from 'react'
import NavBar from '../components/navbar'
import LogWeight from '../components/logWeight'
import ChartWeight from '../components/chartWeight'
import { connect } from 'react-redux'

class Weight extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
        <LogWeight />
        <ChartWeight />
      </div>
    )
  }
}

export default connect()(Weight)
