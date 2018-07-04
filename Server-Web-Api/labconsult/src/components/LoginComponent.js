import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import logo from '../logo.svg';
import NopeIcon from '@material-ui/icons/Report';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


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
		  borderColor: '#c6ebd6!important',
	  },
	  loginBtn: {
		backgroundColor: '#c6ebd6!important',
	  }
	});

	class LoginComponent extends React.Component {

		constructor(props) {
          super(props);
          this.state = {
                login: '',
                pwd: '',
          };
  	    }

		handleSubmit = async () => {
				let url = '/authenticate/'+this.state.login+'/'+this.state.pwd+'';
				const response = await fetch(url,{
					method: 'GET',
					credentials: 'include'
				});
				const result = await response.json();

				if (response.status === '(pending)') {
					document.getElementById('serveranswer').innerHTML = "Pending...";
				} else if (response.status === 200) {
					if (result.success == true) {
						window.location.reload();
					} else {
						document.getElementById('serveranswer').innerHTML = "<NopeIcon/><p class='errormsg'>"+result.message+"</p> ";
					}
				}

				return result;
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
										type="password"
										onChange={this.handlePwd('pwd').bind(this)}
										value={this.state.pwd}
									  />
									</FormControl>
								  </div>
								</Grid>
								<br/>
								<Grid container spacing={16} justify="center" alignItems="center">
									<Button className={classes.loginBtn} id="loginsubmit" variant="raised" color="primary" type="submit" onClick={this.handleSubmit.bind(this)} className={classes.button}>Login</Button>
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
