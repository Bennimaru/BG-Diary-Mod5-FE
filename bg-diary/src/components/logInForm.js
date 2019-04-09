import React from 'react'
import { connect } from 'react-redux'
import { getAuth } from '../actions/user'
import {withRouter} from 'react-router-dom'


class LogInForm extends React.Component{

  state={
    username:'',
    password:'',
    password_confirmation:''
  }

  handleChange= event=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit= event=>{
    event.preventDefault()
    if (this.props.getAuth(this.state)) {
      this.props.history.push("/home")
    }

  }

  render(){
    return(
      <div>
        Log In
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder= "Existing Username" name="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="password" placeholder= "Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="password" placeholder= "Password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange}/>
          <input type="submit" value= "Submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null,{ getAuth })(withRouter(LogInForm))
