import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Result} from './Result.js';
import {Study} from './Study.js';

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

let data = []
let display = "";

class StudiesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'list',
            datas: []
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.displayResults = this.displayResults.bind(this);
        this.evaluateStudy = this.evaluateStudy.bind(this);

        if (this.state.display == 'list') {
            this.displayResults(props)
                .then(res => this.setState({datas: res}))
                .catch(err => console.log(err))
        }
    }

    handleDisplay = (id) => {
        this.setState({display: id})
    }

    evaluateStudy = (status) => {
        if (status == true) {
            return <Typography color="primary" variant="body2">Completed</Typography>
        } else {
            return <Typography color="error" variant="body2">Not Completed</Typography>
        }
    }

    displayResults = async (props) => {
        data = [];
        var url =  '/etude/patient/liste/'+props.id
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        const datas = await response.json();
        console.log(datas);

        return datas;
    }


    render() {

        const { classes } = this.props;
        if (this.state.display == 'list') {
            var promise = this.displayResults(this.props);
            promise.then(result => {data = result});
            return (
                <>
                <Typography variant="title" noWrap>{'Bienvenue M. '+this.props.name+' ('}<i>{this.props.id}</i>{')'}</Typography><br/>
                    <Typography variant="subheading" noWrap>{'Liste de vos études :'}</Typography>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>Référence</CustomTableCell>
                                    <CustomTableCell numeric>Participation</CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <Typography>{data.toString()}</Typography>
                                {this.state.datas.map(n => {
                                    return (
                                        <TableRow className={classes.row} key={n.id}>
                                            <CustomTableCell><Button variant="raised" size="small" color="secondary" type="submit" className={classes.button} onClick={() => this.handleDisplay(n.code_etude)}>{'Etude n° '}<i>{n.code_etude}</i></Button></CustomTableCell>
                                            <CustomTableCell numeric><i>{this.evaluateStudy(n.statut)}</i></CustomTableCell>
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
                <Study etudeID={this.state.display} backHandler={this.handleDisplay}/>
            );
        }

    }
}

StudiesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

StudiesList = withStyles(styles)(StudiesList);
export {StudiesList};
