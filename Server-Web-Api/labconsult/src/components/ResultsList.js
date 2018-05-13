import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Result} from './Result.js';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#a5d6a7',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

let data = []
let display = "";
function displayResults(props) {
	data = [];
	if (props.type == 'résultats') {
	
		data = [
		  createData('SG-MO-1245', '12/04/2018', 6.0, 24, 4.0),
		  createData('SG-MO-1784', '08/04/2018', 9.0, 37, 4.3),
		  createData('SG-MO-2145', '08/04/2018', 16.0, 24, 6.0),
		  createData('SG-MO-0345', '07/04/2018', 3.7, 67, 4.3),
		  createData('SG-MO-9843', '02/04/2018', 16.0, 49, 3.9),
		];

	} else if (props.type == 'études') {
		display = "display:none";
		data = [
		  createData('', 'Pas d\'études pour le moment :(', 6.0, 24, 4.0),
		];
	}
}

class ResultsList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          display: 'list'
      }
      this.getName = this.getName.bind(this);
      this.handleDisplay = this.handleDisplay.bind(this);
      this.getName()
          .then(res => this.setState({ name: res }))
          .catch(err => console.log(err));

  }

    getName = async () => {
        const response = await fetch('/authenticate/infos',{
            method: 'GET',
            credentials: 'include'
        });
        const infos = await response.json();
        console.log(infos);
        return infos.name;
    }

    handleDisplay(id) {
      this.setState({display: id})
    }

  
  render() {
	  
	  const { classes } = this.props;
      displayResults(this.props);
	  if(this.state.display == 'list') {
          return (
              <div>
                  <Typography variant="title" noWrap>{'Bienvenue M. '+this.state.name}</Typography>
                  <Typography variant="subheading" noWrap>{'Liste de vos '}{this.props.type}{' :'}</Typography>
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                              <TableRow>
                                  <CustomTableCell>Numéro</CustomTableCell>
                                  <CustomTableCell numeric>Date</CustomTableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {data.map(n => {
                                  return (
                                      <TableRow className={classes.row} key={n.id}>
                                          <CustomTableCell><Button variant="raised" size="small" color="secondary" type="submit" className={classes.button} onClick={() => this.setState({display: n.name})}>{'Résultat n° '}{n.name}</Button></CustomTableCell>
                                          <CustomTableCell numeric><i>{n.calories}</i></CustomTableCell>
                                      </TableRow>
                                  );
                              })}
                          </TableBody>
                      </Table>
                  </Paper>
              </div>
          );
      } else {
	      return (
              <Result analyseID={this.state.display} backHandler={this.handleDisplay}/>
          );
      }

  }
}

ResultsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

ResultsList = withStyles(styles)(ResultsList);
export {ResultsList};
