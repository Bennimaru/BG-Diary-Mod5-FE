import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/user'
import { withRouter } from 'react-router-dom'

class SignUpForm extends React.Component{

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
    if (this.props.addUser(this.state)) {
      this.props.history.push("/home")
    }
  }

  render(){
    return(
      <div>
        Sign Up:
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder= "Make New Username" name="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="password" placeholder= "Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" value= "Submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addUser })(withRouter(SignUpForm))
