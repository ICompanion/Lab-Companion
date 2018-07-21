package controller;

import business.*;
import dao.RequestManager;
import javafx.beans.property.SimpleStringProperty;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;

import java.net.MalformedURLException;
import java.util.ArrayList;

public class PatientCaseOverviewController {

    @FXML
    private Label patientIdLabel;

    @FXML
    private Label patientNameLabel;

    @FXML
    private Label patientFirstnameLabel;

    @FXML
    private Label patientNumberLabel;

    @FXML
    private Label patientBirthdateLabel;

    @FXML
    private Button backButton;

    @FXML
    private Button addRdvButton;

    @FXML
    private TableView rdvTableView;

    @FXML
    private TableColumn dateColumn;

    @FXML
    private TableColumn doctorColumn;

    @FXML
    private ComboBox participationComboBox;

    @FXML
    private Button addParticipationButton;

    private static Patient patient;
    private static ArrayList<Appointment> appointmentsList;
    private static ArrayList<Survey> surveyList;

    @FXML
    private void backButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initLabCompanionPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @FXML
    private void addRdvButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initVisitCreationPane(String.valueOf(patient.getId()));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @FXML
    private void addParticipationButtonAction(ActionEvent event) {
        String surveyCode = this.participationComboBox.getValue().toString();

        if(this.participationComboBox.getValue().toString().equals("")){
            return;
        }
         Survey survey = null;

        for(Survey surveyP : surveyList){
            if(surveyP.getCode().equals(surveyCode)){
                survey = surveyP;
            }
        }

        try {
            RequestManager.addParticipation(survey, this.patient);
        } catch (Exception e) {
            e.printStackTrace();
        }

        try {
            LabCompanion.singleton.initDoctorPatientCasePane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    public void setPatient(Patient patient){
        this.patient = patient;

        this.patientNumberLabel.setText(patient.getUsername());
        this.patientBirthdateLabel.setText(this.patient.getBirthdate().toString());
        this.patientFirstnameLabel.setText(this.patient.getFirstname() + " " + this.patient.getName());
        this.patientNameLabel.setText(this.patient.getFirstname() + " " + this.patient.getName());

        this.rdvTableView.setEditable(false);

        this.dateColumn.setStyle( "-fx-alignment: CENTER;");
        this.dateColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.dateColumn.setCellValueFactory(
                new PropertyValueFactory<AppointMentRecord, String>("date"));

        this.doctorColumn.setStyle( "-fx-alignment: CENTER;");
        this.doctorColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.doctorColumn.setCellValueFactory(
                new PropertyValueFactory<AppointMentRecord, String>("doctorName"));

        try {
            appointmentsList = RequestManager.getPatientAppointments(patient);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        try {
            surveyList = RequestManager.getAllSurveys();
        } catch (Exception e) {
            e.printStackTrace();
        }

        if(surveyList != null){
            for(Survey survey : surveyList){
                this.participationComboBox.getItems().addAll(survey.getCode());
            }
        }

        ObservableList<AppointMentRecord> dataList = FXCollections.observableArrayList();

        if(appointmentsList != null){
            for (Appointment current : appointmentsList) {
                AppointMentRecord toAdd = new AppointMentRecord(
                        String.valueOf(current.getDate().toString()),
                        String.valueOf(current.getDoctor().getName() + " " +current.getDoctor().getFirstname()));

                dataList.add(toAdd);
            }

            rdvTableView.setItems(dataList);
        }

    }

    public class AppointMentRecord {
        private final SimpleStringProperty date;
        private final SimpleStringProperty doctorName;

        public AppointMentRecord(String date, String doctorName) {
            this.date = new SimpleStringProperty(date);
            this.doctorName = new SimpleStringProperty(doctorName);
        }

        public String getDate() {
            return date.get();
        }

        public SimpleStringProperty dateProperty() {
            return date;
        }

        public String getDoctorName() {
            return doctorName.get();
        }

        public SimpleStringProperty doctorNameProperty() {
            return doctorName;
        }

    }
}
