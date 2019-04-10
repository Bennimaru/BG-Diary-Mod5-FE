import React, { Component } from 'react';
import './App.css';
import Welcome from './containers/welcome'
import Home from './containers/home'
import { Route,Switch,withRouter } from "react-router-dom"
import {checkToken} from './actions/user'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount = () => {
   return localStorage.token
     ? this.props.checkToken()
     : this.props.history.push("/welcome");
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/logout" component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default connect(null,{ checkToken } )(withRouter(App));
