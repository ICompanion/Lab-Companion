import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import ReactRouter from 'react-router';
import {LoginComponent} from './components/LoginComponent.js';
import {LeftPanel} from './components/LeftPanel.js';
import {Component404} from './components/404Component.js';
import './App.css';

class App extends Component {

	state = {
      response: ''
    };

    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('/api');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);

      return body;
    };

  render() {
	const { classes } = this.props;  
	  
    return (
		<BrowserRouter>
		  <div className='App'>
			<Switch>
				<Route path='/login' exact={true} component={LoginComponent} /> 
				<Route path='/home' exact={true} component={LeftPanel} />
				<Route path='*' component={Component404}/>
			</Switch>
		  </div>
		</BrowserRouter>
    );
  }
}

export default App;
