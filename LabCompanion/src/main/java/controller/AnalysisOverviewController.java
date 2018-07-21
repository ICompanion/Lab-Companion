package controller;

import business.Analysis;
import business.AnalysisResult;
import business.LabCompanion;
import javafx.beans.property.SimpleStringProperty;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.VBox;
import java.net.MalformedURLException;

/**
 *This class is the Analysis view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class AnalysisOverviewController {

    @FXML
    private Label analysisLabel;

    @FXML
    private Label codeAnalysis;

    @FXML
    private Label patientIdLabel;

    @FXML
    private Label codePatient;

    @FXML
    private Button backButton;

    @FXML
    private VBox analysisVBox;

    @FXML
    private TableView<AnalysisRecord> analysisTable;

    @FXML
    private TableColumn nameColumn;

    @FXML
    private TableColumn minValueColumn;

    @FXML
    private TableColumn maxValueColumn;

    @FXML
    private TableColumn valueColumn;

    @FXML
    private TableColumn unitColumn;

    private Analysis analysis;

    /**
     * This function initialise the view and make treatments before rendering (tableView initialisation).
     *
     * @throws Exception
     */
    @FXML
    private void initialize() {
        this.nameColumn.setStyle( "-fx-alignment: CENTER;");
        this.nameColumn.setPrefWidth(LabCompanionController.maxPaneWidth/5);
        this.nameColumn.setCellValueFactory(
                new PropertyValueFactory<AnalysisRecord, String>("name"));

        this.minValueColumn.setStyle( "-fx-alignment: CENTER;");
        this.minValueColumn.setPrefWidth(LabCompanionController.maxPaneWidth/5);
        this.minValueColumn.setCellValueFactory(
                new PropertyValueFactory<AnalysisRecord, String>("minValue"));

        this.maxValueColumn.setStyle( "-fx-alignment: CENTER;");
        this.maxValueColumn.setPrefWidth(LabCompanionController.maxPaneWidth/5);
        this.maxValueColumn.setCellValueFactory(
                new PropertyValueFactory<AnalysisRecord, String>("maxValue"));

        this.valueColumn.setStyle( "-fx-alignment: CENTER;");
        this.valueColumn.setPrefWidth(LabCompanionController.maxPaneWidth/5);
        this.valueColumn.setCellValueFactory(
                new PropertyValueFactory<AnalysisRecord, String>("value"));

        this.unitColumn.setStyle( "-fx-alignment: CENTER;");
        this.unitColumn.setPrefWidth(LabCompanionController.maxPaneWidth/5);
        this.unitColumn.setCellValueFactory(
                new PropertyValueFactory<AnalysisRecord, String>("unit"));

        backButton.setOnAction(this::backButtonAction);
    }

    /**
     * This function is the backButton event to return to the previous view.
     *
     * @param event
     */
    @FXML
    private void backButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorAnalysisPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function set an analysis.
     *
     * @param analysis
     */
    public void setAnalysis(Analysis analysis) {
        this.analysis = analysis;
        codePatient.setText(analysis.getPatient().getUsername());
        codeAnalysis.setText(analysis.getCode());
        displayTable(analysis);

    }

    /**
     * This function display the tableView with analysis data.
     *
     * @param analysis
     */
    private void displayTable(Analysis analysis) {
        ObservableList<AnalysisRecord> dataList = FXCollections.observableArrayList();

        for (AnalysisResult current : analysis.getResults()) {

            AnalysisRecord toAdd = new AnalysisRecord(
                    String.valueOf(current.getResult().getTitle()),
                    String.valueOf(current.getResult().getValue_min()),
                    String.valueOf(current.getResult().getValue_max()),
                    String.valueOf(current.getValue()),
                    String.valueOf(current.getResult().getUnit()));

            dataList.add(toAdd);
        }

        analysisTable.setItems(dataList);
    }

    /**
     * Class that represent the tableView row.
     */
    public class AnalysisRecord {
        private final SimpleStringProperty name;
        private final SimpleStringProperty minValue;
        private final SimpleStringProperty maxValue;
        private final SimpleStringProperty value;
        private final SimpleStringProperty unit;

        public AnalysisRecord(String name, String minValue, String maxValue, String value, String unit) {
            this.name = new SimpleStringProperty(name);
            this.minValue = new SimpleStringProperty(minValue);
            this.maxValue = new SimpleStringProperty(maxValue);
            this.value = new SimpleStringProperty(value);
            this.unit = new SimpleStringProperty(unit);
        }

        public String getName() {
            return name.get();
        }

        public SimpleStringProperty nameProperty() {
            return name;
        }

        public String getMinValue() {
            return minValue.get();
        }

        public SimpleStringProperty minValueProperty() {
            return minValue;
        }

        public String getMaxValue() {
            return maxValue.get();
        }

        public SimpleStringProperty maxValueProperty() {
            return maxValue;
        }

        public String getValue() {
            return value.get();
        }

        public SimpleStringProperty valueProperty() {
            return value;
        }

        public String getUnit() {
            return unit.get();
        }

        public SimpleStringProperty unitProperty() {
            return unit;
        }
    }

}
