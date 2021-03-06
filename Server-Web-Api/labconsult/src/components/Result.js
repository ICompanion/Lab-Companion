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
import PositiveIcon from '@material-ui/icons/Done';
import DownIcon from '@material-ui/icons/ArrowDropDown';
import UpIcon from '@material-ui/icons/ArrowDropUp';
import Tooltip from '@material-ui/core/Tooltip';

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
    fab: {
        margin: theme.spacing.unit * 2,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            doctor: ''
        }

        this.displayResult = this.displayResult.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.print = this.print.bind(this);

        this.displayResult(props)
            .then(res => {
                document.getElementById('details').innerHTML = "<b>Date : </b><i>"+res[0].date_analyse.substring(0,10)+"</i><br/><b>Realized by Dr. : </b><i>"+res[0].employe_nom.toUpperCase()+"</i><br/>"
                this.setState({results: res})
                }
            )
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
            return (
                <Tooltip name="evalmsg" title="Result interpretation is correct.">
                    <PositiveIcon name="okresult" color="primary"/>
                </Tooltip>
            );
        } else if (value < valuemin) {
            return (
                <Tooltip name="evalmsg" title="Result interpretation is lower than average, please refer to your doctor.">
                    <DownIcon name="downresult" color="error"/>
                </Tooltip>
            );
        } else if (value > valuemax) {
            return (
                <Tooltip name="evalmsg" title="Result interpretation is higher than average, please refer to your doctor.">
                    <UpIcon name="upresult" color="error"/>
                </Tooltip>
            );
        }
    }

    print = () => {
        var printwindow = window.open('', 'PRINT', 'height=400,width=600');
        printwindow.document.write('<html><head><style>#details {margin-bottom: 15px; width:fit-content;} button {display: none} body {border-left: 35px solid #a5d6a7; font-family: sans-serif}</style></head></head.><body><center>' + document.getElementById('content').innerHTML + '</center></body></html>');
        printwindow.print();
        printwindow.close();
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Typography variant="title" noWrap>{'Analyse: '}{this.props.analyseID}</Typography>
                <div id="details"></div>
                <Button variant="raised" id="backbtn" size="small" color="secondary" type="submit" onClick={() => this.props.backHandler('list')}>Retour</Button>
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
                </Paper><br/>
                <Button variant="raised" size="small" color="secondary" type="submit" onClick={() => this.print()}>Imprimer</Button>
            </div>
        );
    }
}

Result.propTypes = {
    classes: PropTypes.object.isRequired,
};

Result = withStyles(styles)(Result);
export {Result};
