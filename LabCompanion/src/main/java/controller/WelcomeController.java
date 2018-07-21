package controller;

import business.LabCompanion;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;

import java.net.MalformedURLException;

public class WelcomeController {

    @FXML
    private Label welcomeLabel;

    @FXML
    private void analysisButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorAnalysisPanel();
        } catch (MalformedURLException ex) {
            // can't happen
        }
    }

    @FXML
    private void studyButtonAction(ActionEvent event) {

    }

    @FXML
    private void parametersButtonAction(ActionEvent event) {

    }
}
