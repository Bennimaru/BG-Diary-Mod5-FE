import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/user'

class SignUpForm extends React.Component{

  state={
    name:'',
    password:''
  }

  handleChange= event=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit= event=>{
    event.preventDefault()
    console.log(this.state);
    this.props.createUser(this.state)
  }

  render(){
    return(
      <div>
        Sign Up:
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder= "Make New Username" name="name" value={this.state.name} onChange={this.handleChange}/>
          <input type="password" placeholder= "Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" value= "Submit"/>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) =>{
  // return {
  //   createUser: user => dispatch({
  //     type:"CREATE_USER",
  //     payload: user
  //   })
  // }
// }

export default connect(null, {createUser})(SignUpForm)
