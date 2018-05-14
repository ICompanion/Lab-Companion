import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import WarningIcon from 'material-ui-icons/ReportProblem';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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

class DisconnectComponent extends React.Component {

    disconnect = (answer) => {
        if(answer == 'yes') {
            fetch('/authenticate/disconnect',{
                method: 'GET',
                credentials: 'include'
            });
		}
        window.location.reload();
    };
	
	render() {
		const { classes } = this.props;
		
		return (
			<div>
				<WarningIcon color="error"/><Typography variant="display1" noWrap>{'Are you sure?'}</Typography>
				<br/><br/><br/>
				<Button variant="raised" color="secondary" type="submit" className={classes.button} onClick={this.disconnect.bind(this, 'yes')}>Yes</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Button variant="raised" color="primary" type="submit" className={classes.button} onClick={this.disconnect.bind(this, 'no')}>No</Button>
			</div>
		)
	}
}

DisconnectComponent.propTypes = {
	classes: PropTypes.object.isRequired,
}

DisconnectComponent = withStyles(styles)(DisconnectComponent);
export {DisconnectComponent};