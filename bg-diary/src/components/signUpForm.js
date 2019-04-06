import React from 'react'

class SignUpForm extends React.Component{

  state={
    userInputName:'',
    userInputPass:''
  }

  handleChange= event=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit= event=>{
    event.preventDefault()
    console.log("hi");
  }

  render(){
    return(
      <div>
        Sign Up:
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder= "Make New Username" name="userInputName" value={this.state.userInputName} onChange={this.handleChange}/>
          <input type="password" placeholder= "Password" name="userInputPass" value={this.state.userInputPass} onChange={this.handleChange}/>
          <input type="submit" value= "Submit"/>
        </form>
      </div>
    )
  }
}

export default SignUpForm
