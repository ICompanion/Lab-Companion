package controller;

import business.LabCompanion;
import business.Patient;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.DatePicker;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import java.net.MalformedURLException;
import java.time.DateTimeException;

/**
 *This class is the patient creation view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class PatientCreationController {

    @FXML
    private DatePicker birthdatePicker;

    @FXML
    private TextField nameTextField;

    @FXML
    private TextField firstnameTextField;

    @FXML
    private TextField mailTextField;

    @FXML
    private TextField secuTextField;

    @FXML
    private TextField addressTextField;

    @FXML
    private TextField cityTextField;

    @FXML
    private TextField postalCodeTextField;

    @FXML
    private TextField usernameTextField;

    @FXML
    private TextField passwordTextField;

    @FXML
    private Label warningLabel;

    @FXML
    private Button registerButton;

    @FXML
    private Button updateButtonAction;

    Patient patient;

    /**
     * This function initialise the view and make treatments before rendering (input validations).
     *
     * @throws Exception
     */
    @FXML
    private void initialize() {
        mailTextField.focusedProperty().addListener((arg0, oldValue, newValue) -> {
            if (!newValue) { //when focus lost
                if(!mailTextField.getText().matches("^[a-z0-9._-]+@[a-z0-9._-]{2,}\\.[a-z]{2,4}$")){
                    //when it not matches the pattern (1.0 - 6.0)
                    //set the textField empty
                    mailTextField.setText("Format mail non valide");
                    mailTextField.setStyle("-fx-text-fill:red");
                }
                else {
                    mailTextField.setStyle("-fx-text-fill:green");
                }
            }
        });

        secuTextField.focusedProperty().addListener((arg0, oldValue, newValue) -> {
            if (!newValue) { //when focus lost
                if(!secuTextField.getText().matches("^\\d+$")){
                    //when it not matches the pattern (1.0 - 6.0)
                    //set the textField empty
                    secuTextField.setText("Pas de lettres");
                    secuTextField.setStyle("-fx-text-fill:red");
                }
                else {
                    secuTextField.setStyle("-fx-text-fill:green");
                }
            }
        });

        postalCodeTextField.focusedProperty().addListener((arg0, oldValue, newValue) -> {
            if (!newValue) { //when focus lost
                if(!postalCodeTextField.getText().matches("^\\d+$")){
                    //when it not matches the pattern (1.0 - 6.0)
                    //set the textField empty
                    postalCodeTextField.setText("Pas de lettres");
                    postalCodeTextField.setStyle("-fx-text-fill:red");
                }
                else {
                    postalCodeTextField.setStyle("-fx-text-fill:green");
                }
            }
        });
    }

    /**
     * This function is the backButton event to return to the previous view.
     *
     * @param event
     */
    @FXML
    private void backButtonAction(ActionEvent event) {
        LabCompanion.singleton.initDoctorPatientCasePane();
    }

    /**
     * This function is the registerButton Action event that make treatments to create and save a patient.
     *
     * @param event
     */
    @FXML
    private void registerButtonAction(ActionEvent event) {
        if(this.nameTextField.getText().equals("") || this.firstnameTextField.getText().equals("")
            || java.sql.Date.valueOf(this.birthdatePicker.getValue()) == null
            || this.mailTextField.getText().equals("") || this.secuTextField.getText().equals("")
            || this.addressTextField.getText().equals("") || this.cityTextField.getText().equals("")
            || this.postalCodeTextField.getText().equals("") || this.usernameTextField.getText().equals("")
            || this.passwordTextField.getText().equals(""))
        {
            this.warningLabel.setVisible(true);
            return;
        }

        java.util.Date date = null;
        String name = this.nameTextField.getText();
        String firstname = this.firstnameTextField.getText();
        String mail = this.mailTextField.getText();
        String numSecu =  this.secuTextField.getText();
        String address = this.addressTextField.getText();
        String city = this.cityTextField.getText();
        String postalCode = this.postalCodeTextField.getText();
        String username = this.usernameTextField.getText();
        String password = this.passwordTextField.getText();

        try{
            date = java.sql.Date.valueOf(this.birthdatePicker.getValue());
        }
        catch (DateTimeException e){
            System.out.println(e.getMessage());
        }

        Patient patient = new Patient(name, firstname,date, mail, Integer.parseInt(numSecu), address, city,
                                        Integer.parseInt(postalCode), username,password);


        try {
            RequestManager.addPatient(patient);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LabCompanion.singleton.initDoctorPatientCasePane();
    }

    /**
     * This function set inputs with patient informations in case of an update.
     *
     * @param patient
     */
    public void setPatient(Patient patient){

        this.registerButton.setVisible(false);
        this.updateButtonAction.setVisible(true);
        this.patient = patient;

        this.nameTextField.setText(patient.getName());
        this.firstnameTextField.setText(patient.getFirstname());
        this.mailTextField.setText(patient.getMail());
        this.secuTextField.setText(String.valueOf(patient.getSecuNumber()));
        this.addressTextField.setText(patient.getAdress());
        this.cityTextField.setText(patient.getCity());
        this.postalCodeTextField.setText(String.valueOf(patient.getPostalCode()));
        this.usernameTextField.setText(patient.getUsername());
        this.passwordTextField.setText(patient.getPasswowrd());
        this.birthdatePicker.setValue(new java.sql.Date(patient.getBirthdate().getTime()).toLocalDate());
    }

    /**
     * This function is the registerButton Action event that make treatments to save modifications on a patient.
     *
     * @param event
     */
    @FXML
    private void saveButtonAction(ActionEvent event) {
        if(this.nameTextField.getText().equals("") || this.firstnameTextField.getText().equals("")
                || java.sql.Date.valueOf(this.birthdatePicker.getValue()) == null
                || this.mailTextField.getText().equals("") || this.secuTextField.getText().equals("")
                || this.addressTextField.getText().equals("") || this.cityTextField.getText().equals("")
                || this.postalCodeTextField.getText().equals("") || this.usernameTextField.getText().equals("")
                || this.passwordTextField.getText().equals(""))
        {
            this.warningLabel.setVisible(true);
            return;
        }

        java.util.Date date = null;
        String name = this.nameTextField.getText();
        String firstname = this.firstnameTextField.getText();
        String mail = this.mailTextField.getText();
        String numSecu =  this.secuTextField.getText();
        String address = this.addressTextField.getText();
        String city = this.cityTextField.getText();
        String postalCode = this.postalCodeTextField.getText();
        String username = this.usernameTextField.getText();
        String password = this.passwordTextField.getText();

        try{
            date = java.sql.Date.valueOf(this.birthdatePicker.getValue());
        }
        catch (DateTimeException e){
            System.out.println(e.getMessage());
        }

        Patient patient = new Patient(name, firstname,date, mail, Integer.parseInt(numSecu), address, city,
                Integer.parseInt(postalCode), username,password);

        patient.setId(this.patient.getId());

        try {
            RequestManager.updatePatient(patient);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LabCompanion.singleton.initDoctorPatientCasePane();
    }
}
