package controller;

import business.Employee;
import business.LabCompanion;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;

/**
 *This class is the connection view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class ConnexionController {

    @FXML
    private Button connectionButton;

    @FXML
    private TextField idTextField;

    @FXML
    private TextField passwordField;

    /**
     * This function is the connection button action that set the connected employee and make the connection.
     *
     * @param event
     */
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
