package controller;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.SplitPane;
import javafx.scene.layout.Pane;


public class LabCompanionController {

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
    private void disconnectButtonAction(ActionEvent event) {

    }

    public void setEditedPane(Pane editedPane) {
        this.editedPane = editedPane;
        this.editedContainer.getItems().set(1, this.editedPane);
    }
}
