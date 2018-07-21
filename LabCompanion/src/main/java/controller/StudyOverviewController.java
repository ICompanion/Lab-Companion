package controller;

import business.LabCompanion;
import business.Proposal;
import business.Question;
import business.Survey;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.control.SplitPane;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;

import java.net.MalformedURLException;
import java.util.ArrayList;

public class StudyOverviewController {

    @FXML
    private Button studyListButton;

    @FXML
    private Label studyNameLabel;

    @FXML
    private Label studyDateLabel;

    @FXML
    private Label studyInfoDescLabel;

    @FXML
    private Label studyPatientsLabel;

    @FXML
    private VBox studyVBox;

    @FXML
    private SplitPane splitPane;

    @FXML
    private Pane statsPane;

    private Survey survey;

    private static Label precQLabel;
    private static Label precPLabel;


    @FXML
    private void initialize() {
        studyListButton.setOnAction(this::studyListButtonAction);
    }

    @FXML
    private void studyListButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorStudyPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    public void setSurvey(Survey survey) throws Exception {
        this.survey = survey;
        studyNameLabel.setText(survey.getName());
        studyDateLabel.setText(survey.getDate().toString());
        studyInfoDescLabel.setText(survey.getDescription());
        studyPatientsLabel.setText(String.valueOf(RequestManager.statsByParticipation(survey.getId())));
        displayStats();
    }

    public void displayStats() throws Exception {
        try {
            for (Question question : survey.getQuestions()) {
                Label currentQLabel = new Label(question.getTitle() + " : ");
                if(precQLabel != null) {
                    currentQLabel.setLayoutY(precQLabel.getLayoutY()+35);
                }

                precPLabel = currentQLabel;

                for (Proposal proposal : question.getProposals()) {
                    currentQLabel.setText(currentQLabel.getText()+"   "+proposal.getTitle()+" : "+String.valueOf(RequestManager.statsByReponse(survey.getId(),question.getId(),proposal.getId())));
                }

                currentQLabel.getStyleClass().add("stats_label");

                statsPane.getChildren().add(currentQLabel);

                precQLabel = currentQLabel;
            }
        } catch (NullPointerException e) {
            Label noParticipations = new Label("Pas encore de participations.");
            noParticipations.getStyleClass().add("stats_label");
            statsPane.getChildren().add(noParticipations);
        }

    }
}
