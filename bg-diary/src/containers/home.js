import React from 'react'
import NavBar from '../components/navbar'
import Log from '../components/log'
import Chart from '../components/chart'


class Home extends React.Component{

  render(){
    return(
      <div className="home">
        <NavBar />
        <Log />
        <Chart />
      </div>
    )
  }
}

export default Home
