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
import {Study} from './Study.js';

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
 * Component qui affiche la liste des études disponibles du patient.
 * @constructor
 */
class StudiesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'list',
            patientid: 0,
            datas: []
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.displayResults = this.displayResults.bind(this);
        this.evaluateStudy = this.evaluateStudy.bind(this);
        this.evaluateButton = this.evaluateButton.bind(this);

        if (this.state.display == 'list') {
            this.displayResults(props)
                .then(res => this.setState({datas: res}))
                .catch(err => console.log(err))
        }
    }

    /**
     * Fonction donnée en paramètre de chaque bouton d'études, afin de changer l'état Liste/Formulaire.
     * @param id - Id de l'étude.
     * @param id_patient - Id du patient.
     */
    handleDisplay = (id,id_patient) => {
        this.setState({patientid: id_patient})
        this.setState({display: id})
    }


    /**
     * Fonction qui remplit la dernière cellule afin de savoir si le formulaire est rempli ou non.
     * @param status - Booléen (True si étude remplie/False si étude non remplie).
     */
    evaluateStudy = (status) => {
        if (status == true) {
            return <Typography color="primary" variant="body2">Completed</Typography>
        } else {
            return <Typography color="error" variant="body2">Not Completed</Typography>
        }
    }

    /**
     * Fonction qui active/désactive le bouton d'accès au formulaire en fonction de la participation
     * @param status - Booléen (True si étude remplie/False si étude non remplie).
     */
    evaluateButton = (status) => {
        if (status == true) {
            return "disabled"
        } else {
            return ""
        }
    }


    /**
     * Get the list of studies of the patient
     * @param props - Props given from precedent components.
     */
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


    /**
     * Render a StudiesList component
     */
    render() {

        const { classes } = this.props;
        if (this.state.display == 'list') {
            var promise = this.displayResults(this.props);
            promise.then(result => {data = result});
            return (
                <div>
                <Typography variant="title" noWrap>{'Bienvenue M. '+this.props.name+' ('}<i>{this.props.id}</i>{')'}</Typography><br/>
                    <Typography variant="subheading" id="listtype" noWrap>{'Liste de vos études :'}</Typography>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>Référence</CustomTableCell>
                                    <CustomTableCell numeric>Participation</CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.datas.map(n => {
                                    return (
                                        <TableRow className={classes.row} key={n.id}>
                                            <CustomTableCell><Button variant="raised"  id={n.code_etude} size="small" color="secondary" type="submit" className={classes.button} onClick={() => this.handleDisplay(n.code_etude,n.patient_id)} disabled={n.statut}>{'Etude n° '}<i>{n.code_etude}</i></Button></CustomTableCell>
                                            <CustomTableCell name="status" numeric><i>{this.evaluateStudy(n.statut)}</i></CustomTableCell>
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
                <Study etudeID={this.state.display} patientID={this.state.patientid} backHandler={this.handleDisplay} qcount={this.countQuestions}/>
            );
        }

    }
}

StudiesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

StudiesList = withStyles(styles)(StudiesList);
export {StudiesList};
