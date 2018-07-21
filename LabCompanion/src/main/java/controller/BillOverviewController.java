package controller;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;


public class BillOverviewController {

    @FXML
    private Button backButton;

    @FXML
    private Label patientIdLabel;

    @FXML
    private Label analysisIdLabel;

    @FXML
    private Label billIdLabel;

    @FXML
    private Label creationDateLabel;

    @FXML
    private Label statusLabel;

    @FXML
    private Label totalCostLabel;

    @FXML
    private TableView detailsTableView;

    @FXML
    private TableColumn resutlNameColumn;

    @FXML
    private TableColumn costColumn;

    @FXML
    private TableColumn typeColumn;

    @FXML
    private void backButtonAction(ActionEvent event) {

    }
}
