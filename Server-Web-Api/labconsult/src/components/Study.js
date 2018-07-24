import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
var questionName = '';
var radioGroupId = '';

class Study extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            results: [],
            answers: [],
            value: 'female',
            qcount: 0,
            confirmCb: false
        }
        idq = 0;
        this.studyDetails = this.studyDetails.bind(this);
        this.displayQuestions = this.displayQuestions.bind(this);
        this.generateQuestions = this.generateQuestions.bind(this);
        this.countQuestions = this.countQuestions.bind(this);
        this.submitQuestions = this.submitQuestions.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

        this.studyDetails(props)
            .then(res => {
                this.setState({details: res});
                document.getElementById('details').innerHTML = "<b>Nom : </b><i>"+res[0].nom+"</i><br/><b>Description : </b><i>"+res[0].description+"</i><br/>"
                this.displayQuestions(props)
                    .then(res => {
                        this.setState({results: res});
                        this.countQuestions(props)
                            .then(res => {
                                for (var i = 1; i <= res[0].count; i++) {
                                    questionName = 'question' + i;
                                    this.setState({[questionName]: 0})
                                    this.setState({qcount: res[0].count})
                                }
                            })
                            .catch(err => console.log(' error 1 ' + err))
                    })
                    .catch(err => console.log(' error 2 ' + err))
            })
            .catch(err => console.log(' error 3 ' + err))





    }

    studyDetails = async (props) => {
        const url = '/etude/'+props.etudeID
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        const datas = await response.json();
        console.log(datas);

        return datas;
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

    countQuestions = async (props) => {
        var url =  '/etude/'+props.etudeID+'/qcount/'
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'include'
        });
        const datas = await response.json();
        console.log(datas);

        return datas;
    }

    handleChange = event => {
        console.log(event.target.name);
        this.setState({ [event.target.name]: parseInt(event.target.value) });
    };

    handleCheckbox = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    generateQuestions = (datas,question,classes) => {
        questionName = 'question'+idq;
        radioGroupId = 'rg'+questionName;
        return (
            <div>
                <Typography variant="body2" id={questionName}>Question n°{idq} : {question.intitule}</Typography>
                <FormControl>
                    <RadioGroup className={classes.group} value={this.state[questionName]} id={questionName} onChange={this.handleChange}>
                        {datas.map(answer => {
                            if (question.id_question === answer.id_question) {
                                return (<FormControlLabel value={answer.id_reponse} control={<Radio name={questionName}/>} label={answer.reponse}/>)
                            }
                        })}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }

    submitAnswer = async (etudeID, answerID, questionID) => {
        var url =  '/etude/'+etudeID+'/answer/add/'+answerID+'/'+questionID
        fetch(url,{
            method: 'POST',
            credentials: 'include'
        });
    }

    submitQuestions = (props) => {
        var index = '';
        var completeq = true;
        for (var i = 1; i<=this.state.qcount; i++) {
            index = 'question'+i;
            if (this.state[index] === 0) {
                completeq = false;
                document.getElementById("errormsg").innerHTML = " <p style='color: red; margin-top: -5px; margin-bottom: 0px'>Please answer to every questions.</p>"
            }
        }

        if (completeq === true && this.state.confirmCb === true) {
            previousq = '';
            i = 1;
            this.state.results.map(question => {
                if (question.intitule !== previousq) {
                    previousq = question.intitule;
                    index = 'question'+i;
                    this.submitAnswer(this.state.details[0].id,this.state[index],question.id_question)
                    i += 1;
                }
            })

            alert("Formulaire envoyé. Vous allez maintenant être redirigé vers la page d'accueil.")
            window.location.reload();
        }

        if (this.state.confirmCb === false) {
            alert("Veuillez cocher la checkbox afin de soumettre votre autorisation");
        }
    }

    render() {

        const { classes } = this.props;
        idq = 0;
        return (
            <div>
                <Typography variant="title" noWrap>{'Etude: '}{this.props.etudeID}</Typography>
                <div id="details"></div>
                <Button variant="raised" id="backbtn" size="small" color="secondary" type="submit" onClick={() => this.props.backHandler('list')}>Retour</Button>
                    <br/><br/>
                    <div id="errormsg"></div>
                    <Paper>
                        {this.state.results.map(question => {
                            if (question.intitule !== previousq) {
                                idq = idq+1;
                                previousq = question.intitule;
                                return (this.generateQuestions(this.state.results,question,classes))
                            }
                        })}
                    </Paper>
                    <br/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="confirm"
                                color="secondary"
                                checked={this.state.confirmCb}
                                onChange={this.handleCheckbox('confirmCb')}
                            />
                        }
                        label="J'accepte de partager des données confidentielles à des fins statistiques"
                    /><br/>
                    <Button id="submitform" variant="raised" size="small" color ="secondary" type="submit" onClick={() => {this.submitQuestions(this.props)}}>Envoyer</Button>
            </div>
        );
    }
}

Study.propTypes = {
    classes: PropTypes.object.isRequired,
};

Study = withStyles(styles)(Study);
export {Study};
