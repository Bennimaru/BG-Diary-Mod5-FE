import React from 'react'
import NavBar from '../components/navbar'
import Pic from '/Users/flatironschool/BG-Diary-Mod5-FE/bg-diary/src/diabetes_word_cloud.jpg'

class Home extends React.Component{

  render(){
    return(
      <div className="home" style={{backgroundImage: `url(${Pic})`}}>
        <NavBar />
        <p>Welcome back to your personalized logbook to help monitor and manage your diabetes. Check out our new feature to log a meal above in the navbar.
        <br/>
        Site is still under construction with more new and exciting features. Please bear with us as we rollout these features.
        </p>
      </div>
    )
  }
}

export default Home
