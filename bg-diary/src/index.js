import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

// Redux stuff
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './Redux/reducer'


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store= {store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
