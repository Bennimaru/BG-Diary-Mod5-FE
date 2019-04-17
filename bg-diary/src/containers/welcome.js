import React from 'react'
import SignUpForm from '../components/signUpForm'
import LogInForm from '../components/logInForm'
import Pic from '/Users/flatironschool/BG-Diary-Mod5-FE/bg-diary/src/food_cubes.jpg'


class Welcome extends React.Component{

  render(){
    return(
      <div className='welcome' style={{backgroundImage:`url(${Pic})`}}>
        <SignUpForm />
        <LogInForm />
      </div>
    )
  }
}

export default Welcome
