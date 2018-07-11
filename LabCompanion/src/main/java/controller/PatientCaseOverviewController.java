package controller;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;

public class PatientCaseOverviewController {

    @FXML
    private Label patientIdLabel;

    @FXML
    private Label patientNameLabel;

    @FXML
    private Label patientFirstnameLabel;

    @FXML
    private Label patientNumberLabel;

    @FXML
    private Label patientBirthdateLabel;

    @FXML
    private Button backButton;

    @FXML
    private Button addRdvButton;

    @FXML
    private TableView rdvTableView;

    @FXML
    private TableColumn dateColumn;

    @FXML
    private TableColumn doctorColumn;


    @FXML
    private void backButtonAction(ActionEvent event) {

    }

    @FXML
    private void addRdvButtonAction(ActionEvent event) {

    }

}
