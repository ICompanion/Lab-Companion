package controller;

import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.layout.Pane;

public class ConnexionController {

    @FXML
    private Button connectionButton;

    @FXML
    private TextField idTextField;

    @FXML
    private TextField passwordField;

    @FXML
    private void connectionButtonAction(ActionEvent event) {
        try {
            RequestManager.connect(idTextField.getText(), passwordField.getText());
        } catch (Exception e) {
            // afficher erreur de connexion
        }
    }

}
