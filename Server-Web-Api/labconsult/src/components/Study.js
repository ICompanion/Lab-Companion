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

var idq = 0;

class Study extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            answers: []
        }

        this.displayQuestions = this.displayQuestions.bind(this);

        this.displayQuestions(props)
            .then(res => this.setState({results: res}))
            .catch(err => console.log(err))
    }

    displayQuestions = async (props) => {
        const url = '/etude/'+props.etudeID+'/questions/'
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        const datas = await response.json();
        console.log(datas);

        return datas;
    }

    /*displayQuestions = async (props) => {
        const url = '/etude/'+props.etudeID+'/answer/'
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        const datas = await response.json();
        console.log(datas);

        return datas;
    }*/

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Typography variant="title" noWrap>{'Etude: '}{this.props.etudeID}</Typography>
                <Button variant="raised" size="small" color="secondary" type="submit" onClick={() => this.props.backHandler('list')}>Retour</Button>
                    {this.state.results.map(n => {
                        idq = idq+1;
                        return (
                            <Paper className={classes.root}>
                                <Typography variant="headline"><b>Question n°{idq} : </b></Typography><Typography variant="subheading">{n.intitule}</Typography>
                            </Paper>
                        );
                    })}
            </div>
        );
    }
}

Study.propTypes = {
    classes: PropTypes.object.isRequired,
};

Study = withStyles(styles)(Study);
export {Study};
