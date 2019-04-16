import React from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'


class ChartWeight extends React.Component{

  state={
    user:''
  }

  chartMyWeight= event =>{
    event.preventDefault()
    const userId= this.props.user.id
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
    }))
  }

  weightArr = (weightData)=>{
    let y=[]
    if (weightData) {
      weightData.forEach( weightObj =>{
        for (var key in weightObj) {
          if (weightObj.hasOwnProperty(key)){
          y.push(weightObj.weight)
          }
        }
      })
    }
    return y
  }

  timeArr = (weightData)=>{
    let x=[]
    if (weightData) {
      weightData.forEach( weightObj =>{
        for (var key in weightObj) {
          if (weightObj.hasOwnProperty(key)){
          x.push(weightObj.datetime)
          }
        }
      });
    }
    return x
  }

  render(){
    let weightData = this.state.user? this.state.user.weights:null

    const data = {
      labels: this.timeArr(weightData),
      datasets: [
        {
          label: 'My Body Weight',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.weightArr(weightData)
        }
      ]
    };

    return(
      <div className='chart'>
        <button onClick={this.chartMyWeight}>Chart</button>
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

const mapStateToProps= state =>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(ChartWeight)
