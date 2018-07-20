package controller;

import business.Analysis;
import business.Doctor;
import business.LabCompanion;
import business.Patient;
import dao.RequestManager;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableCell;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.MapValueFactory;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.util.Callback;

public class DoctorAnalysisController {

    @FXML
    private Button addAnalysisButton;

    @FXML
    private Button welcomeButton;

    @FXML
    private TableView<Record> analysisTab;

    @FXML
    private TableColumn patientIdColumn;

    @FXML
    private TableColumn analysisIdColumn;

    @FXML
    private TableColumn dateColumn;

    @FXML
    private TableColumn viewAnalysisColumn;


    private static ArrayList<Analysis> analysisList = new ArrayList<>();
    private static Doctor doctor = new Doctor(LabCompanion.singleton.getConnectedEmployee());

    @FXML
    public void initialize() throws Exception {
        analysisList = RequestManager.getAnalysis(doctor);
        this.analysisTab.setEditable(false);

        this.patientIdColumn.setStyle( "-fx-alignment: CENTER;");
        this.patientIdColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.patientIdColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("patientID"));

        this.analysisIdColumn.setStyle( "-fx-alignment: CENTER;");
        this.analysisIdColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.analysisIdColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("analysisCode"));

        this.dateColumn.setStyle( "-fx-alignment: CENTER;");
        this.dateColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.dateColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("date"));




        this.viewAnalysisColumn.setCellValueFactory(
                new Callback<TableColumn.CellDataFeatures<Record, Boolean>,
                        ObservableValue<Boolean>>() {
                    @Override
                    public ObservableValue<Boolean> call(TableColumn.CellDataFeatures<Record, Boolean> p) {
                        return new SimpleBooleanProperty(p.getValue() != null);
                    }
                });

        this.viewAnalysisColumn.setCellFactory(
                new Callback<TableColumn<Record, Boolean>, TableCell<Record, Boolean>>() {
                    @Override
                    public TableCell<Record, Boolean> call(TableColumn<Record, Boolean> p) {
                        return new ButtonCell();
                    }

                });

        this.viewAnalysisColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.viewAnalysisColumn.setStyle( "-fx-alignment: CENTER;");


        ObservableList<Record> dataList = FXCollections.observableArrayList();

        for (Analysis current : analysisList) {

            Record toAdd = new Record(
                    String.valueOf(current.getPatient().getUsername()),
                    String.valueOf(current.getCode()),
                    current.getDateAnalyse().toString());

            dataList.add(toAdd);
        }

        analysisTab.setItems(dataList);
    }

    @FXML
    private void addAnalysisButtonAction(ActionEvent event) {

    }

    @FXML
    private void welcomeButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initLabCompanionPanel();
        } catch (MalformedURLException ex) {
            // AlertPane
        }
    }

    private static class ButtonCell extends TableCell<Record, Boolean> {

        final Button cellButton = new Button("Voir");
        public ButtonCell() {
            cellButton.getStyleClass().add("btn_primary");
            cellButton.setOnAction(new EventHandler<ActionEvent>() {
                @Override
                public void handle(ActionEvent t) {
                    String currentAnalysisCode = String.valueOf(ButtonCell.this
                            .getTableView().getItems()
                            .get(ButtonCell.this.getIndex()).getAnalysisCode());
                    try {
                        Analysis currentAnalysis = analysisList.get(ButtonCell.this.getIndex());
                        LabCompanion.singleton.initAnalysisOverviewPane(currentAnalysis);
                    } catch (MalformedURLException ex) {
                        System.err.println("Ici " + currentAnalysisCode);
                        // TODO
                    } catch (Exception ex) {
                        System.err.println("Là " + currentAnalysisCode);
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


    public class Record {
        private final SimpleStringProperty patientID;
        private final SimpleStringProperty analysisCode;
        private final SimpleStringProperty date;

        public Record(String patientID, String analysisCode, String date) {
            this.patientID = new SimpleStringProperty(patientID);
            this.analysisCode = new SimpleStringProperty(analysisCode);
            this.date = new SimpleStringProperty(date);
        }

        public String getAnalysisCode() {
            return analysisCode.get();
        }

        public String getDate() {
            return date.get();
        }

        public String getPatientID() {
            return patientID.get();
        }

        public void setPatientID(String newValue) {
            patientID.set(newValue);
        }

        public void getAnalysisCode(String newValue) {
            analysisCode.set(newValue);
        }

        public void setDate(String newValue) {
            date.set(newValue);
        }
    }
}
