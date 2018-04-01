import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import logo from '../logo.svg';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
	
	const styles = theme => ({	
	  grid: {
		alignContent: 'center',
	  },
	  container: {
		display: 'flex',
		flexWrap: 'wrap',
	  },
	  formControl: {
		margin: theme.spacing.unit,
	  },
	  root: {
		flexGrow: 1,
	  },
	  paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	  },
	  formLabel: {
		  color: '#c6ebd6',
		  borderColor: '#c6ebd6!important',
	  }
	});
		
	class LoginComponent extends React.Component {
		
		state = 
		{
			login: '', 
			pwd: '',
		};
		
		handleSubmit = async () => {
				let url = '/patient/connect/'+this.state.login+'/'+this.state.pwd+'';
				const response = await fetch(url);
				const body = await response.json();

				if (response.status !== 200) {
					document.getElementById('serveranswer').innerHTML = "Invalide";
				} else if (response.status === 200) {
					document.getElementById('serveranswer').innerHTML = ''+ body +'';
				}
				
				return body;
		};
		
		handleLogin = login => event => {
			this.setState({ [login]: event.target.value });
		};
		
		handlePwd = pwd => event => {
			this.setState({ [pwd]: event.target.value });
		};
		
		render() {
			const { classes } = this.props;

			return (
				<div className="Main">
					<header className="App-header">
					  <img src={logo} className="App-logo" alt="logo" />
					  <h1 className="App-title">Lab Companion</h1>
					</header>
					<br/><br/><br/>
					<Grid container spacing={16} align="center">
						<Grid item xs={4}/>
						<Grid item xs={4}>
							<Paper className={classes.paper}>
								<Grid container spacing={16} justify="center" alignItems="center">
								  <div className={classes.container}>
									<FormControl className={classes.formControl}>
									  <InputLabel htmlFor="name-simple">ID</InputLabel>
									  <Input 
										id="login"
										onChange={this.handleLogin('login').bind(this)}
										value={this.state.login}
									  />
									</FormControl>
									<FormControl className={classes.formControl}>
									  <InputLabel htmlFor="name-simple">Password</InputLabel>
									  <Input className={classes.formLabel} 
										id="pwd" 
										onChange={this.handlePwd('pwd').bind(this)}	
										value={this.state.pwd} 
									  />
									</FormControl>
								  </div>
								</Grid>
								<Grid container spacing={16} justify="center" alignItems="center">
									<Button color="primary" type="submit" onClick={this.handleSubmit.bind(this)} className={classes.button}>Login</Button>
								</Grid>
							</Paper>
							<div id="serveranswer"></div>
						</Grid>
					 </Grid>
				</div>
			);
		  }
	}
	
	LoginComponent.propTypes = {
		classes: PropTypes.object.isRequired,
	}
	
	LoginComponent = withStyles(styles)(LoginComponent);
	export {LoginComponent};