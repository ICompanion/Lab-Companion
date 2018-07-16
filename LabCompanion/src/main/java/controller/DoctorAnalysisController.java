package controller;

import business.Analysis;
import business.Patient;
import dao.RequestManager;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.Date;
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
import javafx.util.Callback;

public class DoctorAnalysisController {

    @FXML
    private Button addAnalysisButton;

    @FXML
    private Button welcomeButton;

    @FXML
    private TableView analysisTab;

    @FXML
    private TableColumn patientIdColumn;

    @FXML
    private TableColumn analysisIdColumn;

    @FXML
    private TableColumn dateColumn;

    @FXML
    private TableColumn viewAnalysisColumn;


    @FXML
    public void initialize() {
        try {
//            ArrayList<Analysis> doctorAnalysis = RequestManager.getAnalysis(
//                    (Doctor) LabCompanion.singleton.getConnectedEmployee());
            this.analysisTab.setEditable(false);


            ArrayList<Analysis> doctorAnalysis = new ArrayList<>();
            doctorAnalysis.add(new Analysis(0, "analysisCode", new Date(2018, 07, 15), "analysisDescription", null, new Patient(15, "", "", null, "", 0, "", "", 0, "", ""), null));

            ObservableList<Record> dataList = FXCollections.observableArrayList();
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

            for (Analysis current : doctorAnalysis) {

                Record toAdd = new Record(
                        String.valueOf(current.getPatient().getId()),
                        String.valueOf(current.getId()),
                        current.getDateAnalyse().toString());

                dataList.add(toAdd);
            }
            analysisTab.setItems(dataList);

        } catch (Exception ex) {
            Logger.getLogger(DoctorAnalysisController.class.getName()).log(Level.SEVERE, null, ex);
        }
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
            cellButton.setStyle("btn_primary");
            cellButton.setOnAction(new EventHandler<ActionEvent>() {
                @Override
                public void handle(ActionEvent t) {
                    int currentAnalysisId = Integer.valueOf(ButtonCell.this
                            .getTableView().getItems()
                            .get(ButtonCell.this.getIndex()).getAnalysisID());
                    try {
                        Analysis currentAnalysis = (Analysis) RequestManager
                                .getAnalysisById(currentAnalysisId);
                        LabCompanion.singleton.initAnalysisOverviewPane(currentAnalysis);
                    } catch (MalformedURLException ex) {
                        // TODO
                    } catch (Exception ex) {
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


    private class Record {
        private final SimpleStringProperty patientID;
        private final SimpleStringProperty analysisID;
        private final SimpleStringProperty date;

        public Record(String patientID, String analysisID, String date) {
            this.patientID = new SimpleStringProperty(patientID);
            this.analysisID = new SimpleStringProperty(analysisID);
            this.date = new SimpleStringProperty(date);
        }

        public String getAnalysisID() {
            return analysisID.get();
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

        public void setAnalysisID(String newValue) {
            analysisID.set(newValue);
        }

        public void setDate(String newValue) {
            date.set(newValue);
        }
    }
}
