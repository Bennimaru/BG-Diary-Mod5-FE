import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class ChartGlucose extends Component{

  render(){
    return(
      <div>
       <Line

       />
      </div>
    )
  }
}

const mapStateToProps= state=>{
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(ChartGlucose)
