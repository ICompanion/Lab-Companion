package controller;

import business.Doctor;
import business.Employee;
import business.Secretary;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.SplitPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;

import java.awt.*;

public class LabCompanionController {

    private double maxPaneHeight, maxPaneWidth;

    @FXML
    private BorderPane header;

    @FXML
    private Button disconnectButton;

    @FXML
    private Label usernameInfoLabel;

    @FXML
    private ListView menuListView;

    @FXML
    private Pane editedPane;

    @FXML
    private SplitPane editedContainer;

    @FXML
    private VBox menuVbox;

    @FXML
    public void initialize() {
        this.maxPaneHeight = Toolkit.getDefaultToolkit().getScreenSize().getHeight() - header.getHeight();
        this.maxPaneWidth = Toolkit.getDefaultToolkit().getScreenSize().getWidth() - menuVbox.getMaxWidth();
        editedContainer.setPrefHeight(this.maxPaneHeight);
        menuListView.setPrefHeight(editedContainer.getHeight());
    }

    @FXML
    private void disconnectButtonAction(ActionEvent event) {
        LabCompanion.singleton.disconnect();
    }

    public void setEditedPane(Pane editedPane, Employee connectedEmployee) {
        this.initValues(connectedEmployee);
        this.editedPane = editedPane;
        this.editedPane.setPrefWidth(this.maxPaneWidth);
        this.editedPane.setPrefHeight(this.maxPaneHeight);
        this.editedContainer.getItems().set(1, this.editedPane);
    }

    private void initValues(Employee connectedEmployee) {
        this.usernameInfoLabel.setText(connectedEmployee.getFirstanme()
                + " " + connectedEmployee.getName());
        if(connectedEmployee.getType() == Secretary.SECRETARY_TYPE) {
            //TODO : init Menu
        }
        else if (connectedEmployee.getType() == Doctor.DOCTOR_TYPE) {
            //TODO : init Menu
        }
    }
}
