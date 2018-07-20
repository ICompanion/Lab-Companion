package controller;

import business.Appointment;
import business.Doctor;
import business.LabCompanion;
import business.Patient;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.scene.text.Font;

import java.awt.event.KeyEvent;
import java.net.MalformedURLException;
import java.sql.Timestamp;
import java.time.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;

public class VisitCreationController {

    @FXML
    private Button backButton;

    @FXML
    private Button registerButton;

    @FXML
    private Label patientIdLabel;

    @FXML
    private Label warningLabel;

    @FXML
    private Label patientNameLabel;

    @FXML
    private DatePicker visitDate;

    @FXML
    private ComboBox doctorCombo;

    @FXML
    private TextField visitTime;

    private static ArrayList<Doctor> doctorList = new ArrayList<>();
    private static Patient patient;
    private static String patientId = "";

    public void setPatientId(String patientId)
    {
        try {
            this.patientId = patientId;
            this.doctorList = RequestManager.getAllDoctor();
            this.patient = RequestManager.getPatientById(Integer.parseInt(this.patientId));
        }catch(Exception e){
            e.printStackTrace();
        }

        patientIdLabel.setText(patientId);
        patientNameLabel.setText(patient.getName());
        if(doctorList != null) {


            Iterator<Doctor> it = doctorList.iterator();
            Doctor current;

            while (it.hasNext()) {
                current = it.next();
                this.doctorCombo.getItems().addAll(current.getFirstname());
            }
        }

        visitDate.focusedProperty().addListener((arg0, oldValue, newValue) -> {
            if (!newValue) { //when focus lost
                if(!visitDate.getValue().isAfter(LocalDate.now())){
                    visitDate.setStyle("-fx-control-inner-background:red");
                }
                else {
                    visitDate.setStyle("-fx-text-fill:green");
                }
            }
        });

        visitTime.focusedProperty().addListener((arg0, oldValue, newValue) -> {
            if (!newValue) { //when focus lost
                if(!visitTime.getText().matches("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")){
                    //when it not matches the pattern (1.0 - 6.0)
                    //set the textField empty
                    visitTime.setText("Mauvais format d'heure");
                    visitTime.setStyle("-fx-text-fill:red");
                }
                else {
                    visitTime.setStyle("-fx-text-fill:green");
                }
            }
        });
    }


    @FXML
    private void backButtonAction(ActionEvent event) {
        try{
            LabCompanion.singleton.initLabCompanionPanel();
        }
        catch(MalformedURLException e){
            e.printStackTrace();
        }
    }

    @FXML
    private void registerButtonAction(ActionEvent event) {

        if(this.visitTime.getText().equals("") || this.doctorCombo.getValue().toString().equals("") || java.sql.Date.valueOf(this.visitDate.getValue()) == null ){
            this.warningLabel.setVisible(true);
            return;
        }

        Date date = null;
        String doctorFirstname = this.doctorCombo.getValue().toString();
        String time = this.visitTime.getText();

        try{
            LocalTime t = LocalTime.parse( time );
            LocalDateTime dateTime = LocalDateTime.of(this.visitDate.getValue(), t);
            date  = java.sql.Timestamp.valueOf(dateTime);
        }
        catch (DateTimeException e){
            System.out.println(e.getMessage());
        }

        Doctor doctor = null;

        for(Doctor doctorP : doctorList){
            if(doctorP.getFirstname().equals(doctorFirstname)){
                doctor = doctorP;
            }
        }

        Appointment appointment = new Appointment(date, "planifiée", patient, doctor);

        try{
            RequestManager.addAppointment(appointment);
        }catch (Exception e){
            e.printStackTrace();
        }
        try{
            LabCompanion.singleton.initPatientCaseOverviewPane(patient);
        }catch (MalformedURLException e){
            e.printStackTrace();
        }
    }
}
