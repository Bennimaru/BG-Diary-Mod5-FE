import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class Chart extends React.Component{

  state={
    user:''
  }

  chartMyWeight= event =>{
    event.preventDefault()
    const userId= this.props.user.id
    console.log("hi");
    return fetch(`http://localhost:3005/api/v1/users/${userId}`,{
      method:"GET",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        Authorization:`Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(user => this.setState({
      user: user
    }),console.log(this.state.user.weights))
  }


  render(){
    let data = this.state.user? this.state.user.weights:null
    // let xValues = data.map(weights=>weights.datetime)
    // let yValues = data.map(weights=>weights.weight)

    return(
      <div className='chart'>
        <button onClick={this.chartMyWeight}>Chart</button>
        <Line



        />
      </div>
    )
  }
}
// ,
// options={{
//   responsive: true,
//   maintainAspectRatio: false
// }}
const mapStateToProps= state =>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(Chart)
