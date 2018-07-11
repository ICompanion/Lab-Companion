package controller;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;

import javax.swing.text.TableView;

public class BillListController {

    @FXML
    private Button backButton;

    @FXML
    private Button addBillButton;

    @FXML
    private TableView billTableView;

    @FXML
    private TableColumn patientIdColumn;

    @FXML
    private TableColumn analysisIdColumn;

    @FXML
    private TableColumn analysisStatusColumn;

    @FXML
    private TableColumn analysisDateColumn;

    @FXML
    private TableColumn viewColumn;

    @FXML
    private void addBillButtonAction(ActionEvent event) {

    }

    @FXML
    private void backButtonAction(ActionEvent event) {

    }

}
