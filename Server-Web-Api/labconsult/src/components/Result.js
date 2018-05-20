import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import PositiveIcon from 'material-ui-icons/Done';
import DownIcon from 'material-ui-icons/ArrowDropDown';
import UpIcon from 'material-ui-icons/ArrowDropUp';

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

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }

        this.displayResult = this.displayResult.bind(this);
        this.evaluate = this.evaluate.bind(this);

        this.displayResult(props)
            .then(res => this.setState({results: res}))
            .catch(err => console.log(err))
    }

    displayResult = async (props) => {
        var data = []
        const url = '/analyse/display/'+props.analyseID
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        const datas = await response.json();
        console.log(datas);

        return datas;
    }

    evaluate = (value, valuemin, valuemax) => {
        if (value >= valuemin && value <= valuemax) {
            return <PositiveIcon color="primary"/>
        } else if (value < valuemin) {
            return <DownIcon color="error"/>
        } else if (value > valuemax) {
            return <UpIcon color="error"/>
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Typography variant="title" noWrap>{'Analyse: '}{this.props.analyseID}</Typography>
                <Button variant="raised" size="small" color="secondary" type="submit" onClick={() => this.props.backHandler('list')}>Retour</Button>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Name</CustomTableCell>
                                <CustomTableCell numeric>Min Value</CustomTableCell>
                                <CustomTableCell numeric>Max Value</CustomTableCell>
                                <CustomTableCell numeric>Your Value</CustomTableCell>
                                <CustomTableCell>Unit</CustomTableCell>
                                <CustomTableCell></CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.results.map(n => {
                                return (
                                    <TableRow className={classes.row} key={n.id}>
                                        <CustomTableCell>{n.resultat_nom}</CustomTableCell>
                                        <CustomTableCell numeric><i>{n.valeur_min}</i></CustomTableCell>
                                        <CustomTableCell numeric><i>{n.valeur_max}</i></CustomTableCell>
                                        <CustomTableCell numeric><i>{n.valeur}</i></CustomTableCell>
                                        <CustomTableCell><b>{n.unit}</b></CustomTableCell>
                                        <CustomTableCell>{this.evaluate(n.valeur, n.valeur_min, n.valeur_max)}</CustomTableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

Result.propTypes = {
    classes: PropTypes.object.isRequired,
};

Result = withStyles(styles)(Result);
export {Result};
