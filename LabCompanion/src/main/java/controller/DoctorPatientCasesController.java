package controller;

import business.LabCompanion;
import business.Patient;
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
 *This class is the DoctorPatient view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class DoctorPatientCasesController {

    @FXML
    private Button addCaseButton;

    @FXML
    private Button backButton;

    @FXML
    private TableView casesTableView;

    @FXML
    private TableColumn patientIdColumn;

    @FXML
    private TableColumn patientNameColumn;

    @FXML
    private TableColumn viewCaseColumn;

    @FXML
    private TableColumn viewCaseColumn2;

    private static ArrayList<Patient> patientList = new ArrayList<>();

    /**
     * This function initialise the view and make treatments before rendering (tableView initialisation).
     *
     * @throws Exception
     */
    @FXML
    public void initialize() throws Exception {

        patientList = RequestManager.getPatients();
        this.casesTableView.setEditable(false);

        this.patientIdColumn.setStyle( "-fx-alignment: CENTER;");
        this.patientIdColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.patientIdColumn.setCellValueFactory(
                new PropertyValueFactory<PatientRecord, String>("code"));
        this.patientNameColumn.setStyle( "-fx-alignment: CENTER;");
        this.patientNameColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.patientNameColumn.setCellValueFactory(
                new PropertyValueFactory<PatientRecord, String>("name"));

        this.viewCaseColumn.setCellValueFactory(
                new Callback<TableColumn.CellDataFeatures<PatientRecord, Boolean>,
                        ObservableValue<Boolean>>() {
                    @Override
                    public ObservableValue<Boolean> call(TableColumn.CellDataFeatures<PatientRecord, Boolean> p) {
                        return new SimpleBooleanProperty(p.getValue() != null);
                    }
                });

        this.viewCaseColumn.setCellFactory(
                new Callback<TableColumn<PatientRecord, Boolean>, TableCell<PatientRecord, Boolean>>() {
                    @Override
                    public TableCell<PatientRecord, Boolean> call(TableColumn<PatientRecord, Boolean> p) {
                        return new ButtonCell();
                    }

                });

        this.viewCaseColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.viewCaseColumn.setStyle( "-fx-alignment: CENTER;");

        this.viewCaseColumn2.setCellValueFactory(
                new Callback<TableColumn.CellDataFeatures<PatientRecord, Boolean>,
                        ObservableValue<Boolean>>() {
                    @Override
                    public ObservableValue<Boolean> call(TableColumn.CellDataFeatures<PatientRecord, Boolean> p) {
                        return new SimpleBooleanProperty(p.getValue() != null);
                    }
                });

        this.viewCaseColumn2.setCellFactory(
                new Callback<TableColumn<PatientRecord, Boolean>, TableCell<PatientRecord, Boolean>>() {
                    @Override
                    public TableCell<PatientRecord, Boolean> call(TableColumn<PatientRecord, Boolean> p) {
                        return new ButtonCell2();
                    }

                });

        this.viewCaseColumn2.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.viewCaseColumn2.setStyle( "-fx-alignment: CENTER;");

        ObservableList<PatientRecord> dataList = FXCollections.observableArrayList();

        if(patientList != null){
            for (Patient current : patientList) {
                PatientRecord toAdd = new PatientRecord(
                        String.valueOf(current.getUsername()),
                        String.valueOf(current.getName() + " " +current.getFirstname()));

                dataList.add(toAdd);
            }

            casesTableView.setItems(dataList);
        }

    }

    /**
     * This function is the add ButtonAction event that redirect to the PatientCreation view.
     *
     * @param event
     */
    @FXML
    private void addCaseButtonAction(ActionEvent event) {
        try{
            LabCompanion.singleton.initCreatePatientCasePane();
        }
        catch(MalformedURLException e){
            e.printStackTrace();
        }
    }

    /**
     * This function is the backButton event to return to the previous view.
     *
     * @param event
     */
    @FXML
    private void backButtonAction(ActionEvent event) {
        try{
            LabCompanion.singleton.initLabCompanionPanel();
        }
        catch(MalformedURLException e){
            e.printStackTrace();
        }
    }

    /**
     * Class that represent a button to be inserted in each row of the tableView .
     */
    private static class ButtonCell extends TableCell<PatientRecord, Boolean> {

        final Button cellButton = new Button("Voir");

        /**
         * Button constructor (initialise button)
         */
        public ButtonCell() {
                cellButton.getStyleClass().add("btn_primary");
                cellButton.setOnAction(new EventHandler<ActionEvent>() {
                    @Override
                    public void handle(ActionEvent t) {
                        String code = String.valueOf(ButtonCell.this
                                .getTableView().getItems()
                                .get(ButtonCell.this.getIndex()).getCode());
                        try {
                            Patient currentPatient = patientList.get(ButtonCell.this.getIndex());
                            LabCompanion.singleton.initPatientCaseOverviewPane(currentPatient);
                        } catch (MalformedURLException ex) {
                            System.err.println("Ici " + code);
                            // TODO
                        } catch (Exception ex) {
                            System.err.println("Là " + code);
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
     * Class that represent a button to be inserted in each row of the tableView .
     */
    private static class ButtonCell2 extends TableCell<PatientRecord, Boolean> {

        final Button cellButton = new Button("Modifier");

        /**
         * Button constructor (initialise button)
         */
        public ButtonCell2() {
            cellButton.getStyleClass().add("btn_primary");
            cellButton.setOnAction(new EventHandler<ActionEvent>() {
                @Override
                public void handle(ActionEvent t) {
                    String code = String.valueOf(ButtonCell2.this
                            .getTableView().getItems()
                            .get(ButtonCell2.this.getIndex()).getCode());
                    try {
                        Patient currentPatient = patientList.get(ButtonCell2.this.getIndex());
                        LabCompanion.singleton.initCreatePatientUpdateCasePane(currentPatient);
                    } catch (MalformedURLException ex) {
                        System.err.println("Ici " + code);
                        // TODO
                    } catch (Exception ex) {
                        System.err.println("Là " + code);
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
    public class PatientRecord {
        private final SimpleStringProperty code;
        private final SimpleStringProperty name;

        public PatientRecord(String code, String name) {
            this.code = new SimpleStringProperty(code);
            this.name = new SimpleStringProperty(name);
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

    }
}