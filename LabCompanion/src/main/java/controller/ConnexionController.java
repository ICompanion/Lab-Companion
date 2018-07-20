package controller;

import business.LabCompanion;
import business.Employee;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;
import javafx.stage.Modality;
import javafx.stage.Stage;

public class ConnexionController {

    @FXML
    private Button connectionButton;

    @FXML
    private TextField idTextField;

    @FXML
    private TextField passwordField;

    @FXML
    public void initialize() {
        //FOR DEVELOPMENT ONLY --> GOOD CREDENTIALS TO LOGIN QUICKLY
        idTextField.setText("apetit");
        passwordField.setText("admin1");

        //SECRETARY
        //idTextField.setText("mdesanges");
        //passwordField.setText("admin2");
    }

    @FXML
    private void connectionButtonAction(ActionEvent event) {
        try {
            Employee connectedUser = RequestManager.connect(idTextField.getText(),
                    passwordField.getText());
            LabCompanion.singleton.setConnectedEmployee(connectedUser);
            LabCompanion.singleton.initLabCompanionPanel();
        } catch (Exception e) {
            LabCompanion.singleton.initAlertPane("Erreur de connexion", 
                    "La connexion à échouée", 
                    "Veuillez vérifier l'identifiant et le mot de passe renseignés.");
        }
    }

}
