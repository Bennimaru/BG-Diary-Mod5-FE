import React from 'react'
import SignUpForm from '../components/signUpForm'
import LogInForm from '../components/logInForm'
import NavBar from '../components/navbar'

class Welcome extends React.Component{

  render(){
    return(
      <div>
        <SignUpForm />
        <LogInForm />
        <NavBar />
      </div>
    )
  }
}

export default Welcome
