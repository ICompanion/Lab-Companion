package controller;

import business.Employee;
import business.LabCompanion;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import java.net.MalformedURLException;

/**
 *This class is the parameters view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
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

    /**
     * This function redirect to the pluginManager view.
     *
     * @param event
     */
    @FXML
    private void pluginsButtonAction(ActionEvent event) {
        LabCompanion.singleton.initPluginManagerOverview();
    }

    /**
     * This function redirect to the main view.
     *
     * @param event
     */
    @FXML
    private void homeButtonAction(ActionEvent event) {
        LabCompanion.singleton.initWelcomePanel();
    }

    /**
     * This function make treatments to change the connected user's password.
     *
     * @param event
     * @throws Exception
     */
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

    /**
     * This function make treatments to change the connected user's mail.
     *
     * @param event
     * @throws Exception
     */
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

    /**
     * This function set the Employee.
     * @param employee
     */
    public void setEmployee(Employee employee) {
        this.employee = employee;
        emailInput.setText(employee.getMail());
    }
}
