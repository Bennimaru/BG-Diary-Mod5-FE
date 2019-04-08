import React from 'react'
import { connect } from 'react-redux'


class LogInForm extends React.Component{

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
        Log In
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder= "Existing Username" name="userInputName" value={this.state.userInputName} onChange={this.handleChange}/>
          <input type="password" placeholder= "Password" name="userInputPass" value={this.state.userInputPass} onChange={this.handleChange}/>
          <input type="submit" value= "Submit"/>
        </form>
      </div>
    )
  }
}

export default connect()(LogInForm)
