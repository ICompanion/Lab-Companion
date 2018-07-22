package controller;

import business.Doctor;
import business.LabCompanion;
import business.Survey;
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
 *This class is the DoctorStudyOverview view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class DoctorStudyOverviewController {

    @FXML
    private Button welcomeButton;

    @FXML
    private Button addStudyButton;

    @FXML
    private TableView<SurveyRecord> studyTableView;

    @FXML
    private TableColumn studyCodeColumn;

    @FXML
    private TableColumn studyNameColumn;

    @FXML
    private TableColumn studyDateColumn;

    @FXML
    private TableColumn studyViewColumn;

    private static ArrayList<Survey> surveysList = new ArrayList<>();
    private static Doctor doctor = new Doctor(LabCompanion.singleton.getConnectedEmployee());

    /**
     * This function initialise the view and make treatments before rendering (tableView initialisation).
     *
     * @throws Exception
     */
    @FXML
    private void initialize() throws Exception {
        surveysList = RequestManager.getSurveys(doctor);
        this.studyTableView.setEditable(false);

        this.studyCodeColumn.setStyle( "-fx-alignment: CENTER;");
        this.studyCodeColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.studyCodeColumn.setCellValueFactory(
                new PropertyValueFactory<SurveyRecord, String>("code"));

        this.studyNameColumn.setStyle( "-fx-alignment: CENTER;");
        this.studyNameColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.studyNameColumn.setCellValueFactory(
                new PropertyValueFactory<SurveyRecord, String>("name"));

        this.studyDateColumn.setStyle( "-fx-alignment: CENTER;");
        this.studyDateColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.studyDateColumn.setCellValueFactory(
                new PropertyValueFactory<SurveyRecord, String>("date"));

        this.studyViewColumn.setCellValueFactory(
                new Callback<TableColumn.CellDataFeatures<SurveyRecord, Boolean>,
                        ObservableValue<Boolean>>() {
                    @Override
                    public ObservableValue<Boolean> call(TableColumn.CellDataFeatures<SurveyRecord, Boolean> p) {
                        return new SimpleBooleanProperty(p.getValue() != null);
                    }
                });

        this.studyViewColumn.setCellFactory(
                new Callback<TableColumn<SurveyRecord, Boolean>, TableCell<SurveyRecord, Boolean>>() {
                    @Override
                    public TableCell<SurveyRecord, Boolean> call(TableColumn<SurveyRecord, Boolean> p) {
                        return new ButtonCell();
                    }

                });

        this.studyViewColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.studyViewColumn.setStyle( "-fx-alignment: CENTER;");

        ObservableList<SurveyRecord> dataList = FXCollections.observableArrayList();

        for (Survey current : surveysList) {

            SurveyRecord toAdd = new SurveyRecord(
                    String.valueOf(current.getCode()),
                    String.valueOf(current.getName()),
                    current.getDate().toString().substring(0,10));

            dataList.add(toAdd);
        }

        studyTableView.setItems(dataList);
    }

    /**
     * This function is the add ButtonAction event that redirect to the studyCreation view.
     *
     * @param event
     */
    @FXML
    private void addStudyButtonAction(ActionEvent event) {
        LabCompanion.singleton.initStudyCreationPane();
    }

    /**
     * This function is the welcome ButtonAction event that redirect to the mainn view.
     *
     * @param event
     */
    @FXML
    private void welcomeButtonAction(ActionEvent event) {
        LabCompanion.singleton.initWelcomePanel();
    }

    /**
     * Class that represent a button to be inserted in each row of the tableView .
     */
    private static class ButtonCell extends TableCell<SurveyRecord, Boolean> {

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
                            .get(ButtonCell.this.getIndex()).getCode());
                    Survey currentSurvey = surveysList.get(ButtonCell.this.getIndex());
                    LabCompanion.singleton.initStudyOverviewPane(currentSurvey);
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
    public class SurveyRecord {
        private final SimpleStringProperty code;
        private final SimpleStringProperty name;
        private final SimpleStringProperty date;

        public SurveyRecord(String code, String name, String date) {
            this.code = new SimpleStringProperty(code);
            this.name = new SimpleStringProperty(name);
            this.date = new SimpleStringProperty(date);
        }

        public String getCode() {
            return code.get();
        }

        public SimpleStringProperty codeProperty() {
            return code;
        }

        public String getName() {
            return name.get();
        }

        public SimpleStringProperty nameProperty() {
            return name;
        }

        public String getDate() {
            return date.get();
        }

        public SimpleStringProperty dateProperty() {
            return date;
        }
    }
}
