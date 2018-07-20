package controller;

import business.LabCompanion;
import business.Patient;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.DatePicker;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

import java.net.MalformedURLException;
import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

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

    @FXML
    private void backButtonAction(ActionEvent event) {
        try{
            LabCompanion.singleton.initDoctorPatientCasePane();
        }
        catch(MalformedURLException e){
            e.printStackTrace();
        }
    }

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

        try{
            LabCompanion.singleton.initDoctorPatientCasePane();
        }catch (MalformedURLException e){
            e.printStackTrace();
        }
    }

}
