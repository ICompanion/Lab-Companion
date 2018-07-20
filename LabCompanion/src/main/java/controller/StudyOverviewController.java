package controller;

import business.Survey;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

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

    private Survey survey;

    @FXML
    private void initialize() {

    }

    @FXML
    private void studyListButtonAction(ActionEvent event) {

    }

    public void setSurvey(Survey survey) {
        this.survey = survey;
        studyNameLabel.setText(survey.getName());
        studyDateLabel.setText(survey.getDate().toString());
        studyInfoDescLabel.setText(survey.getDescription());
    }
}
