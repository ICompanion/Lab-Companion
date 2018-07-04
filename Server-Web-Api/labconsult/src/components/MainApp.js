import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {OptionComponent} from './OptionComponent.js';
import {DisconnectComponent} from './DisconnectComponent.js';
import {ResultsList} from './ResultsList.js';
import classNames from 'classnames';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitIcon from '@material-ui/icons/ExitToApp';
import StudiesIcon from '@material-ui/icons/QuestionAnswer';
import ResultIcon from '@material-ui/icons/LocalHospital';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import logo from '../logowhitehorizontal.svg';
import {StudiesList} from "./StudiesList";

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
    overflow: 'auto'
  },
    insideContent: {
        height: '100%',
    },
});

class MainApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            render: '',
            name: '',
            id: ''
        };

        this.getName = this.getName.bind(this);
        this.getName()
            .then(res => this.setState({ name: res.name, id: res.id }))
            .catch(err => console.log(err));
    }


  renderingSwitch(compName, e) {
	this.setState({render:compName});
  }
  
  _renderSubComp(){
    var h = "";
    var d = new Date();
    h = d.toTimeString();
    h = h.substring(0,5);
    d = d.toDateString();
	switch(this.state.render) {
		case 'results': return <ResultsList name={this.state.name} id={this.state.id}/>
		case 'studies': return <StudiesList name={this.state.name} id={this.state.id}/>
		case 'options': return <OptionComponent/>
		case 'disconnect': return <DisconnectComponent/>
		case '': return (
		    <div>
		        <Typography variant="display2" id="welcome" noWrap>{'Welcome M. '+this.state.name}</Typography><br/><br/>
                <Typography variant="headline" color="primary" noWrap>{d}</Typography><br/><br/>
                <Typography variant="headline" color="primary" noWrap>{h}</Typography>
            </div>
        );
	}
  }

  getName = async () => {
      const response = await fetch('/authenticate/infos',{
          method: 'GET',
          credentials: 'include'
      });
      const infos = await response.json();
      return infos;
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
              <HomeIcon />
            </IconButton>
            <img src={logo} className="main-logo" alt="logo" />
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
			<ListItem button id="analysis" onClick={this.renderingSwitch.bind(this, 'results')}>
			  <ListItemIcon>
				<ResultIcon />
			  </ListItemIcon>
			  <ListItemText primary="Your results" />
			</ListItem>
			<Divider />
			<ListItem button id="studies" onClick={this.renderingSwitch.bind(this, 'studies')}>
			  <ListItemIcon>
				<StudiesIcon />
			  </ListItemIcon>
			  <ListItemText primary="Your studies" />
			</ListItem>
			<Divider />
			<ListItem button id="options" onClick={this.renderingSwitch.bind(this, 'options')}>
			  <ListItemIcon>
				<SettingsIcon />
			  </ListItemIcon>
			  <ListItemText primary="Options" />
			</ListItem>
			<Divider />
			<ListItem button id="disconnect" onClick={this.renderingSwitch.bind(this, 'disconnect')}>
			  <ListItemIcon>
				<ExitIcon />
			  </ListItemIcon>
			  <ListItemText primary="Disconnect" />
			</ListItem>
			<Divider />
		  </List>
          <List></List>
        </Drawer>
        <main className={classes.content} id="content">
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