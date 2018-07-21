package controller;

import business.*;
import dao.RequestManager;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.util.Callback;

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
    private TableColumn viewCaseColumn;

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
            LabCompanion.singleton.initDoctorPatientCasePane();
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


        this.viewCaseColumn.setCellValueFactory(
                new Callback<TableColumn.CellDataFeatures<AppointMentRecord, Boolean>,
                        ObservableValue<Boolean>>() {
                    @Override
                    public ObservableValue<Boolean> call(TableColumn.CellDataFeatures<AppointMentRecord, Boolean> p) {
                        return new SimpleBooleanProperty(p.getValue() != null);
                    }
                });

        this.viewCaseColumn.setCellFactory(
                new Callback<TableColumn<AppointMentRecord, Boolean>, TableCell<AppointMentRecord, Boolean>>() {
                    @Override
                    public TableCell<AppointMentRecord, Boolean> call(TableColumn<AppointMentRecord, Boolean> p) {
                        return new ButtonCell();
                    }

                });

        this.viewCaseColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.viewCaseColumn.setStyle( "-fx-alignment: CENTER;");

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


    private static class ButtonCell extends TableCell<AppointMentRecord, Boolean> {

        final Button cellButton = new Button("Créer une facture");

        public ButtonCell() {
            cellButton.getStyleClass().add("btn_primary");
            cellButton.setOnAction(new EventHandler<ActionEvent>() {
                @Override
                public void handle(ActionEvent t) {
                    String date = String.valueOf(ButtonCell.this
                            .getTableView().getItems()
                            .get(ButtonCell.this.getIndex()).getDate());
                    try {
                        Appointment currentAppointment = appointmentsList.get(ButtonCell.this.getIndex());
                        LabCompanion.singleton.initBillCreationCasePane(currentAppointment);
                    } catch (MalformedURLException ex) {
                        System.err.println("Ici " + date);
                        // TODO
                    } catch (Exception ex) {
                        System.err.println("Là " + date);
                        // on peut pas recup l'analyse
                    }
                }
            });
        }
        //Display button if the row is not empty
        @Override
        protected void updateItem(Boolean t, boolean empty) {
            super.updateItem(t, empty);
            if(!empty){
                setGraphic(cellButton);
            }
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
