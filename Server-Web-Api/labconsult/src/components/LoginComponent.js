import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import logo from '../logo.svg';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
	
	let boolzer = true;
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
		stateid = {
			name: 'ID',
		};
		
		statepwd = {
			name: 'Password',
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
					<Grid container spacing={12} align="center">
						<Grid item xs={4}/>
						<Grid item xs={4}>
							<Paper className={classes.paper}>
								<Grid container spacing={12} justify="center" alignItems="center">
								  <div className={classes.container}>
									<FormControl className={classes.formControl}>
									  <InputLabel htmlFor="name-simple">ID</InputLabel>
									  <Input id="login" />
									</FormControl>
									<FormControl className={classes.formControl}>
									  <InputLabel className={classes.formLabel} htmlFor="name-simple">Password</InputLabel>
									  <Input className={classes.formLabel} id="password" />
									</FormControl>
								  </div>
								</Grid>
								<Grid container spacing={12} justify="center" alignItems="center">
									<Button color="primary" className={classes.button}>Login</Button>
								</Grid>
							</Paper>
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