import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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
            createData('Test n°LY587', '12/04/2018', 6.0, 24, 4.0),
        ];

    } else if (props.type == 'études') {
        display = "display:none";
        data = [
            createData('', 'Pas d\'études pour le moment :(', 6.0, 24, 4.0),
        ];
    }
}

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { classes } = this.props;
        displayResults(this.props);

        return (
            <div>
                <Typography variant="title" noWrap>{'Analyse: '}{this.props.analyseID}</Typography>
                <Button>Retour</Button>
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
                                        <CustomTableCell><Button variant="raised" size="small" color="secondary" type="submit" className={classes.button}>{n.name}</Button></CustomTableCell>
                                        <CustomTableCell numeric><i>{n.calories}</i></CustomTableCell>
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
