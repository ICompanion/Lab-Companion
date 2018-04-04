import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import {Component404} from './404Component.js';
import {OptionComponent} from './OptionComponent.js';
import {DisconnectComponent} from './DisconnectComponent.js';
import classNames from 'classnames';
import SettingsIcon from 'material-ui-icons/Settings';
import ExitIcon from 'material-ui-icons/ExitToApp';
import StudiesIcon from 'material-ui-icons/QuestionAnswer';
import ResultIcon from 'material-ui-icons/LocalHospital';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
	color: 'white',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class MainApp extends React.Component {
  state = {
    open: false,
	render: '',
  };
  
  renderingSwitch(compName, e) {
	this.setState({render:compName});
  }
  
  _renderSubComp(){
	switch(this.state.render) {
		case 'results': return <Component404/>
		case 'options': return <OptionComponent/>
		case 'disconnect': return <DisconnectComponent/>
		case '': return <Typography variant="display2" noWrap>{'Welcome'}</Typography>
	}
  }
  
  // Drawer (don't touch)

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Lab Companion
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
			<ListItem button onClick={this.renderingSwitch.bind(this, 'results')}>
			  <ListItemIcon>
				<ResultIcon />
			  </ListItemIcon>
			  <ListItemText primary="Your results" />
			</ListItem>
			<Divider />
			<ListItem button>
			  <ListItemIcon>
				<StudiesIcon />
			  </ListItemIcon>
			  <ListItemText primary="Your studies" />
			</ListItem>
			<Divider />
			<ListItem button onClick={this.renderingSwitch.bind(this, 'options')}>
			  <ListItemIcon>
				<SettingsIcon />
			  </ListItemIcon>
			  <ListItemText primary="Options" />
			</ListItem>
			<Divider />
			<ListItem button onClick={this.renderingSwitch.bind(this, 'disconnect')}>
			  <ListItemIcon>
				<ExitIcon />
			  </ListItemIcon>
			  <ListItemText primary="Disconnect" />
			</ListItem>
			<Divider />
		  </List>
          <List></List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
		  <div className={classes.insideContent}>
			  {this._renderSubComp()}
		  </div>
        </main>
      </div>
    );
  }
}

MainApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


MainApp = withStyles(styles)(MainApp);
export {MainApp}; 