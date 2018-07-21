package controller;

import business.Analysis;
import business.Doctor;
import business.LabCompanion;
import dao.RequestManager;
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
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.util.Callback;
import java.net.MalformedURLException;
import java.util.ArrayList;

/**
 *This class is the doctor analysis view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
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

    /**
     * This function initialise the view and make treatments before rendering (tableView initialisation).
     *
     * @throws Exception
     */
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
                    current.getDateAnalyse().toString().substring(0,10));

            dataList.add(toAdd);
        }

        analysisTab.setItems(dataList);
    }

    /**
     * This function is the add ButtonAction event that redirect to the AnalysisCreation view.
     *
     * @param event
     */
    @FXML
    private void addAnalysisButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initAnalysisCreationPane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is the welcome ButtonAction event that redirect to the mainn view.
     *
     * @param event
     */
    @FXML
    private void welcomeButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initLabCompanionPanel();
        } catch (MalformedURLException ex) {
            // AlertPane
        }
    }

    /**
     * Class that represent a button to be inserted in each row of the tableView .
     */
    private static class ButtonCell extends TableCell<Record, Boolean> {

        final Button cellButton = new Button("Voir");

        /**
         * Button constructor (initialise button)
         */
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

        /**
         * This function set visible the button in case if a row is not empty.
         * @param t
         * @param empty
         */
        @Override
        protected void updateItem(Boolean t, boolean empty) {
            super.updateItem(t, empty);
            if(!empty){
                setGraphic(cellButton);
            }
        }
    }

    /**
     * Class which modelise a tableView row.
     */
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
