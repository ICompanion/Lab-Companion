package controller;

import business.*;
import dao.RequestManager;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.scene.control.cell.ComboBoxTableCell;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.cell.TextFieldTableCell;
import javafx.util.Callback;
import org.json.JSONObject;

import javax.swing.*;
import java.net.MalformedURLException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;

public class AnalysisCreationController {

    @FXML
    private ComboBox<String> patientSelector;

    @FXML
    private TextField codeInput;

    @FXML
    private TableView<AnalysisRow> formAnalysis;

    @FXML
    private TableColumn natureColumn;

    @FXML
    private ComboBox<String> natureSelector;

    @FXML
    private TableColumn valueColumn;

    @FXML
    private Button deleteBtn;

    @FXML
    private Button addButton;

    private static ObservableList<AnalysisRow> rows = FXCollections.observableArrayList();
    private static ObservableList<String> results = FXCollections.observableArrayList();

    public void initialize() throws Exception {
        this.deleteBtn.setDisable(true);
        this.addButton.setDisable(true);

        this.natureSelector.setItems(results.sorted());


        this.natureColumn.setStyle( "-fx-alignment: CENTER;");
        this.natureColumn.setPrefWidth(LabCompanionController.maxPaneWidth/2);
        this.natureColumn.setCellValueFactory(
                new PropertyValueFactory<AnalysisRow, String>("selected"));


        this.valueColumn.setStyle( "-fx-alignment: CENTER;");
        this.valueColumn.setPrefWidth(LabCompanionController.maxPaneWidth/2);
        this.valueColumn.setEditable(true);
        this.valueColumn.setCellValueFactory(
                new PropertyValueFactory<AnalysisRow, String>("value"));
        this.valueColumn.setCellFactory(TextFieldTableCell.forTableColumn());
        this.valueColumn.setOnEditCommit(
                new EventHandler<TableColumn.CellEditEvent<AnalysisRow, String>>() {
                    @Override
                    public void handle(TableColumn.CellEditEvent<AnalysisRow, String> item) {
                        try {
                            ((AnalysisRow) item.getTableView().getItems().get(item.getTablePosition().getRow())).setValue(item.getNewValue());
                            Float test = Float.parseFloat(item.getNewValue());
                        } catch (NumberFormatException e){
                            LabCompanion.singleton.initAlertPane("Donnée incorrecte","La donnée doit être un nombre/chiffre","Rappel: Les nombres/chiffres à virgule sont autorisés");
                            ((AnalysisRow) item.getTableView().getItems().get(item.getTablePosition().getRow())).setValue(null);
                            formAnalysis.refresh();
                        }
                    }
                }
        );

        initializePatientSelector(patientSelector);

        ObservableList<String> items = FXCollections.observableArrayList();
        ArrayList<Result> list = RequestManager.getAllResult();
        for (Result result : list) {
            results.add(result.getTitle() + " ("+String.valueOf(result.getId())+")");
        }

        formAnalysis.setEditable(true);
        formAnalysis.setItems(rows);
        this.formAnalysis.getSelectionModel().selectedItemProperty()
                .addListener(new ChangeListener() {
                    @Override
                    public void changed(ObservableValue observableValue,
                                        Object oldValue, Object newValue) {
                        if(AnalysisCreationController.this.formAnalysis
                                .getSelectionModel().getSelectedItem() != null)
                        {
                            AnalysisRow selectedItem = (AnalysisRow) AnalysisCreationController
                                    .this.formAnalysis
                                    .getSelectionModel().getSelectedItem();
                            AnalysisCreationController.this.deleteBtn.setDisable(false);


                        } else {
                            AnalysisCreationController.this.deleteBtn.setDisable(true);
                        }
                    }
                });

    }

    @FXML
    private void addAnalysisAction(ActionEvent event) throws Exception {

        boolean unique = true;

        String toModify = this.natureSelector.getValue();
        String type = toModify.substring(0,toModify.indexOf("(")-1);

        for(AnalysisRow row : rows) {
            if(row.getSelected().equals(type)) {
                unique = false;
            }
        }

        if (unique) {
            String id = toModify.substring(toModify.indexOf("(")+1,toModify.indexOf(")"));
            AnalysisRow newRow = new AnalysisRow(Integer.parseInt(id),type,null);
            rows.add(newRow);
        } else {
            LabCompanion.singleton.initAlertPane("Résultat non unique","Le type de résultat suivant figure déjà dans votre formulaire:",type);
        }


    }

    @FXML
    private void deleteButtonAction(ActionEvent event) {
        AnalysisRow selectedItem = (AnalysisRow) this.formAnalysis.getSelectionModel().getSelectedItem();
        this.formAnalysis.getItems().remove(selectedItem);
    }

    @FXML
    private void backButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorAnalysisPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @FXML
    private void comboBoxSelection(ActionEvent event) {
        this.addButton.setDisable(false);
    }

    @FXML
    private void sendAnalysis(ActionEvent event) throws Exception {
        boolean complete = true;
        if(!rows.isEmpty()) {
            if(patientSelector.getValue() != null && !codeInput.getText().equals("")) {
                ArrayList<AnalysisResult> results = new ArrayList<>();

                Doctor doctor = new Doctor(LabCompanion.singleton.getConnectedEmployee());
                DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                LocalDate currentDate = LocalDate.now();
                Date date = Date.from(currentDate.atStartOfDay(ZoneId.systemDefault()).toInstant());

                String patientCode = patientSelector.getValue();
                Patient patient = RequestManager.getPatientByCode(patientSelector.getValue().substring(0,patientCode.indexOf(" ")));
                Analysis analysisToPush = new Analysis(0,codeInput.getText(),date,"",null,patient,doctor);

                for(AnalysisRow currentRow : rows) {
                    if (currentRow.getValue() == null || currentRow.getValue().equals("")) {
                        complete = false;
                    } else {
                        Result resultInfos = RequestManager.getResult(currentRow.getId());
                        AnalysisResult resultToAdd = new AnalysisResult(0,Float.parseFloat(currentRow.getValue()),resultInfos,analysisToPush);
                        results.add(resultToAdd);
                    }
                }

                if (complete) {
                    analysisToPush.setResults(results);
                    RequestManager.addAnalysis(analysisToPush);
                    LabCompanion.singleton.initDoctorAnalysisPanel();
                } else {
                    LabCompanion.singleton.initAlertPane("Erreur d'envoi","Certains de vos résultats n'ont pas de valeur","Merci de re-vérifier.");
                }
            } else {
                // INFOS MANQUANTES
                LabCompanion.singleton.initAlertPane("Erreur d'envoi","Les informations ne sont pas remplies","Rappel: Sélectionnez un patient, entrez un code unique");
            }
        } else {
            // PAS DE RESULTATS
            LabCompanion.singleton.initAlertPane("Erreur d'envoi","Nombre minimum de résultats non atteint","Rappel: 1 résultat minimum");
        }
    }

    public void initializePatientSelector(ComboBox<String> comboBoxInit) throws Exception {
        ArrayList<Patient> patients = RequestManager.getPatients();
        ObservableList<String> items = FXCollections.observableArrayList();

        for (Patient patient : patients) {
            items.add(patient.getUsername() + " - "+patient.getName());
        }

        items = items.sorted();

        comboBoxInit.setVisibleRowCount(5);
        comboBoxInit.setItems(items);
    }

    public class AnalysisRow {
        private int id;
        private String selected;
        private String value;

        public AnalysisRow(int id, String selected, String value) throws Exception {
            this.id = id;
            this.selected = selected;
            this.value = value;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getSelected() {
            return selected;
        }

        public void setSelected(String selected) {
            this.selected = selected;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }
    }
}
