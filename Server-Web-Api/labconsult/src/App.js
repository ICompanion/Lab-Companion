import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { green } from 'material-ui/colors';
import { yellow } from 'material-ui/colors';
import ReactRouter from 'react-router';
import {LoginComponent} from './components/LoginComponent.js';
import {MainApp} from './components/MainApp.js';
import {Component404} from './components/404Component.js';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { light: green[100], main: green[200], dark: green[300]},
	secondary: { light: yellow[300], main: yellow[600], dark: yellow[700]},
	alternateTextColor: 'white',
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
	  raisedSecondary: {
		color: 'white',
	  },
    },
  }
});

class App extends Component {
    static propTypes = {
      cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
      const { cookies } = this.props;

      this.state = {
        response: '',
        //token: cookies.get('x-access-token') || 'none'}
      };
    }

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

    if (this.state.token == "none") {
      return(
        <MuiThemeProvider theme={theme}>
    			  <div className='App'>
    				    <MainApp/>
    			  </div>
    		</MuiThemeProvider>
      )
    }

    return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
			  <div className='App'>
				<Switch>
					<Route path='/' exact={true}>
						<Redirect to='/login'/>
					</Route>
					<Route path='/login' exact={true} component={LoginComponent} />
					<Route path='/home' exact={true} component={MainApp} />
					<Route path='*' component={Component404}/>
				</Switch>
			  </div>
			</BrowserRouter>
		</MuiThemeProvider>
    );
  }
}

export default App;
