import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Radio from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

var idq = 0;
var previousq = '';

class Study extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            answers: []
        }
        idq = 0;
        this.displayQuestions = this.displayQuestions.bind(this);
        this.displayAnswers = this.displayAnswers.bind(this);

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

    displayAnswers = (questionID) => {
        const url = '/etude/'+questionID+'/answer/'
        const response = fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        /*const datas = response.json();
        console.log(datas);*/

        return response;
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Typography variant="title" noWrap>{'Etude: '}{this.props.etudeID}</Typography>
                <Button variant="raised" size="small" color="secondary" type="submit" onClick={() => this.props.backHandler('list')}>Retour</Button>
                    {this.state.results.map(n => {
                        console.log(previousq);
                        if (n.intitule != previousq) {
                            idq = idq+1;
                            previousq = n.intitule;
                            return (
                                <div>
                                    <Paper className={classes.root}>
                                        <Typography variant="headline"><b>Question n°{idq} : </b></Typography><Typography variant="subheading">{n.intitule}</Typography>
                                    </Paper>
                                    <FormControl component="fieldset" required error className={classes.formControl}>
                                        <FormControlLabel value="other" control={<Radio color="primary" />} label={n.reponse} />
                                    </FormControl>
                                </div>
                            );

                        } else {
                            return (
                                    <FormControlLabel value="other" control={<Radio color="primary" />} label={n.reponse} />
                            );
                        }

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
