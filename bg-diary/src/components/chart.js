import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class Chart extends React.Component{

  state={
    user:{}
  }

  componentDidMount(){
    const userId= this.props.user.id
    console.log(userId);
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

  render(){
    console.log(this.state.user.weights);
    return(
      <div className='chart'>
        <Line
          // data= {this.state.user}
          options={{
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

export default connect(mapStateToProps)(Chart)
