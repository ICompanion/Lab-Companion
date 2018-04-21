import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
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
	});
	
	class OptionComponent extends React.Component {
		state = 
		{
			oldpwd: '', 
			pwd: '',
			confirmpwd: '',
		};
		
		handleOldPwd = oldpwd => event => {
			this.setState({ [oldpwd]: event.target.value });
		};
		
		handlePwd = pwd => event => {
			this.setState({ [pwd]: event.target.value });
		};
		
		handleconfirmpwd = confirmpwd => event => {
			this.setState({ [confirmpwd]: event.target.value });
		};
		
		render() {
			const { classes } = this.props;

			return (
					<Grid container spacing={16} align="center">
						<Grid item xs={4}/>
						<Grid item xs={4}>
							<Paper className={classes.paper} justify="center" alignItems="center">
								<Grid container spacing={16} justify="center" alignItems="center">
								  <div className={classes.container}>
									<FormControl className={classes.formControl}>
									  <InputLabel htmlFor="name-simple">Old Password</InputLabel>
									  <Input 
										id="oldpwd"
										type="password"
										onChange={this.handlePwd('oldpwd').bind(this)}	
										value={this.state.oldpwd}
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
									<FormControl className={classes.formControl}>
									  <InputLabel htmlFor="name-simple">Confirm Password</InputLabel>
									  <Input className={classes.formLabel} 
										id="confirmpwd" 
										type="password"
										onChange={this.handlePwd('confirmpwd').bind(this)}	
										value={this.state.confirmpwd} 
									  />
									</FormControl>
								  </div>
								</Grid>
								<br/>
								<Grid container spacing={16} justify="center" alignItems="center">
									<Button variant="raised" color="primary" type="submit" className={classes.button}>Confirm</Button>
								</Grid>
							</Paper>
						</Grid>
					 </Grid>
			);
		  }
	}
	
	OptionComponent.propTypes = {
		classes: PropTypes.object.isRequired,
	}
	
	OptionComponent = withStyles(styles)(OptionComponent);
	export {OptionComponent};