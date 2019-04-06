import React from 'react'
import SignUpForm from '../components/signUpForm'
import LogInForm from '../components/logInForm'


class Welcome extends React.Component{

  render(){
    return(
      <div>
        <SignUpForm />
        <LogInForm />
      </div>
    )
  }
}

export default Welcome
