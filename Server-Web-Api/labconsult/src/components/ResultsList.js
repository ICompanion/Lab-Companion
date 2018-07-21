import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Result} from './Result.js';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary.main,
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

let data = []

/**
 * Component which displays the available patient analysis.
 * @constructor
 */
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

    /**
     * Display either the list or an analysis.
     * @param id - ID of the analysis.
     */
    handleDisplay = (id) => {
      this.setState({display: id})
    }

    /**
     * Get the datas of the patient analysis
     * @param props - Props given by precedent components.
     */
    displayResults = async (props) => {
        data = [];
        var url = '/analyse/patient/liste/'+props.id
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        const datas = await response.json();
        console.log(datas);

        return datas;
    }

    /**
     * Render a ResultsList component.
     */
  render() {
	  
	  const { classes } = this.props;
	  if(this.state.display == 'list') {
          var promise = this.displayResults(this.props);
          promise.then(result => {data = result});
	      return (
              <div>
                  <Typography variant="title" noWrap>{'Bienvenue M. '+this.props.name+' ('}<i>{this.props.id}</i>{')'}</Typography><br/>
                  <Typography variant="subheading" id="listtype" noWrap>{'Liste de vos résultats :'}</Typography>
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                              <TableRow>
                                  <CustomTableCell>Référence</CustomTableCell>
                                  <CustomTableCell numeric>Date</CustomTableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              <Typography>{data.toString()}</Typography>
                              {this.state.datas.map(n => {
                                  return (
                                      <TableRow className={classes.row} key={n.id}>
                                          <CustomTableCell><Button variant="raised" id={n.code_analyse} size="small" color="secondary" type="submit" className={classes.button} onClick={() => this.handleDisplay(n.code_analyse)}>{'Résultat n° '}<i>{n.code_analyse}</i></Button></CustomTableCell>
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
