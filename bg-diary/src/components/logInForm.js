import React from 'react'
import { connect } from 'react-redux'
import { getAuth } from '../actions/user'
import {withRouter} from 'react-router-dom'

class LogInForm extends React.Component{

  state={
    username:'',
    password:''
  }

  handleChange= event=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit= event=>{
    event.preventDefault()
    this.props.getAuth(this.state)
    setTimeout(()=>{
      if (localStorage.token) {
        this.props.history.push("/home")
      }else {
        this.props.history.push("/welcome")
      }
    }, 1000)
  }

  render(){
    return(
      <div>
        Log In
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder= "Existing Username" name="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="password" placeholder= "Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" value= "Submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null,{ getAuth })(withRouter(LogInForm))
