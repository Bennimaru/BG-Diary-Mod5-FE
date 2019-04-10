import React from 'react'
import NavBar from '../components/navbar'
import Weight from '../components/weight'

class Home extends React.Component{

  render(){
    return(
      <div className="home">
        <NavBar />
        <Weight />
      </div>
    )
  }
}

export default Home
