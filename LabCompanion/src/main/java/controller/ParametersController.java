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
    private void passwordModificationAction(ActionEvent event) throws Exception {
        if (!newPasswordInput.getText().equals("") && !confirmPasswordInput.equals("")) {
            if (newPasswordInput.getText().equals(confirmPasswordInput.getText())) {
                RequestManager.updateEmploye(LabCompanion.singleton.getConnectedEmployee(),newPasswordInput.getText());
                LabCompanion.singleton.initSuccessPane("Information","Votre mot de passe vient d'être changé avec succès.","");
            } else {
                LabCompanion.singleton.initAlertPane("Erreur de formulaire","Champs non identiques.","Votre nouveau mot de passe et le champ de confirmation doivent être identiques.");
            }
        } else {
            LabCompanion.singleton.initAlertPane("Erreur de formulaire","Veuillez remplir tout les champs.","");
        }
    }

    @FXML
    private void emailModificationAction(ActionEvent event) throws Exception {
        if (!emailInput.getText().equals(employee.getMail())) {
            RequestManager.updateEmployeEmail(LabCompanion.singleton.getConnectedEmployee(),emailInput.getText());
            LabCompanion.singleton.initSuccessPane("Information","Votre e-mail vient d'être changé avec succès.","");
            employee.setMail(emailInput.getText());
            LabCompanion.singleton.setConnectedEmployee(employee);
        } else {
            LabCompanion.singleton.initAlertPane("Erreur de formulaire","L'e-mail rentré est identique à votre e-mail actuel.","Veuillez modifier.");
        }
    }

    private static Employee employee;

    public void setEmployee(Employee employee) {
        this.employee = employee;
        emailInput.setText(employee.getMail());
    }
}
