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
function createData(analysisid, date) {
  id += 1;
  return { id, analysisid, date};
}

let data = []
let display = "";

class ResultsList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          display: 'list',
          datas: []
      }
      this.handleDisplay = this.handleDisplay.bind(this);
      this.displayResults = this.displayResults.bind(this);

      if (this.state.display == 'list') {
          this.displayResults(props)
              .then(res => this.setState({datas: res}))
              .catch(err => console.log(err))
      }
  }

    handleDisplay = (id) => {
      this.setState({display: id})
        console.log("id changed to"+id)
    }

    displayResults = async (props) => {
        data = [];
        const url = '/analyse/patient/liste/'+props.id
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        const datas = await response.json();
        console.log(datas);

        if (props.type == 'résultats') {

            data = [
                createData('SG-MO-1245', '12/04/2018'),
                createData('SG-MO-1784', '08/04/2018'),
                createData('SG-MO-2145', '08/04/2018'),
                createData('SG-MO-0345', '07/04/2018'),
                createData('SG-MO-9843', '02/04/2018')
            ];

        } else if (props.type == 'études') {
            display = "display:none";
            data = [
                createData('', 'Pas d\'études pour le moment :(', 6.0, 24, 4.0),
            ];
        }

        return datas;
    }

  
  render() {
	  
	  const { classes } = this.props;
	  if(this.state.display == 'list') {
          var promise = this.displayResults(this.props);
          promise.then(result => {data = result});
	      return (
              <div>
                  <Typography variant="title" noWrap>{'Bienvenue M. '+this.props.name+' ('+this.props.id+')'}</Typography>
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
                              <Typography>{data.toString()}</Typography>
                              {this.state.datas.map(n => {
                                  return (
                                      <TableRow className={classes.row} key={n.id}>
                                          <CustomTableCell><Button variant="raised" size="small" color="secondary" type="submit" className={classes.button} onClick={() => this.handleDisplay(n.code_analyse)}>{'Résultat n° '}<i>{n.code_analyse}</i></Button></CustomTableCell>
                                          <CustomTableCell numeric><i>{n.date_analyse.substring(0,10)}</i></CustomTableCell>
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
