package controller;

import business.Employee;
import business.LabCompanion;
import business.Patient;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;

import java.net.MalformedURLException;

public class ParametersController {

    @FXML
    private Button pluginsBtn;

    @FXML
    private Button homeBtn;

    @FXML
    private Button passwordBtn;

    @FXML
    private Button emailBtn;

    @FXML
    private PasswordField newPasswordInput;

    @FXML
    private PasswordField confirmPasswordInput;

    @FXML
    private TextField emailInput;

    @FXML
    private void pluginsButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initPluginManagerOverview();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @FXML
    private void homeButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initWelcomePanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @FXML
    private void passwordModificationAction(ActionEvent event) {
        if (!newPasswordInput.getText().equals("") && !confirmPasswordInput.equals("")) {
            if (newPasswordInput.getText().equals(confirmPasswordInput.getText())) {
                //TODO
            } else {
                LabCompanion.singleton.initAlertPane("Erreur de formulaire","Champs non identiques.","Votre nouveau mot de passe et le champ de confirmation doivent être identiques.");
            }
        } else {
            LabCompanion.singleton.initAlertPane("Erreur de formulaire","Veuillez remplir tout les champs.","");
        }
    }

    @FXML
    private void emailModificationAction(ActionEvent event) {
        //TODO
    }

    private static Employee employee;

    public void setEmployee(Employee employee) {
        this.employee = employee;
        emailInput.setText(employee.getMail());
    }
}
