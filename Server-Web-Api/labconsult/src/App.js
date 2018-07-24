import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import {LoginComponent} from './components/LoginComponent.js';
import {MainApp} from './components/MainApp.js';
import { instanceOf } from 'prop-types';
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

/**
 * React App
 * @param constructor
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.authentificationCheck = this.authentificationCheck.bind(this);

        this.authentificationCheck()
            .then(res => this.setState({ token: res }))
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        return prevState.token !== this.state.token;
    }

    /**
     * Check the presence of the JWT token.
     */
    authentificationCheck = async () => {
        const response = await fetch('/authenticate/check',{
            method: 'GET',
            credentials: 'include'
        });
        const body = await response.json();
        return body.success;
    };

    render() {
        const { classes } = this.props;

        if (!this.state.token) {
            return(
                <MuiThemeProvider theme={theme}>
                    <div className='App'>
                        <LoginComponent/>
                    </div>
                </MuiThemeProvider>
            )
        } else {
            return (

                <MuiThemeProvider theme={theme}>
                    <div className='App'>
                        <MainApp/>
                    </div>
                </MuiThemeProvider>
            )
        }
    }
}

export default App;
