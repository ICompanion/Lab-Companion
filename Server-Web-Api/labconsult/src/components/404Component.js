import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import NopeIcon from 'material-ui-icons/Report';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  main: {
    height: '100%',
	backgroundColor: 'EEEEEE',
  },
  paper: {
	padding: theme.spacing.unit * 2,
	textAlign: 'center',
	color: theme.palette.text.secondary,
  },
})

class Component404 extends React.Component {
	
	
	render() {
		const { classes } = this.props;
		
		return (
			<div className={classes.main}>
				<Grid container spacing={16} align="center">
					<Grid item xs={4}/>
					<Grid item xs={4}>
						<br/><br/><br/><br/><br/><br/><br/><br/>
						<Paper className={classes.paper}>
							<Grid container spacing={16} justify="center" alignItems="center">
								<NopeIcon color="error" style={{ fontSize: 80 }} /><h2> Oops ! The page you asked for seems not to exist ! </h2>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}	

Component404.propTypes = {
	classes: PropTypes.object.isRequired,
}
	
Component404 = withStyles(styles)(Component404);
export {Component404};