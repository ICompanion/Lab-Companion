package controller;

import business.Bill;
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


public class BillListController {

    @FXML
    private Button backButton;

    @FXML
    private Button addBillButton;

    @FXML
    private TableView billTableView;

    @FXML
    private TableColumn patientIdColumn;

    @FXML
    private TableColumn analysisIdColumn;

    @FXML
    private TableColumn analysisStatusColumn;

    @FXML
    private TableColumn analysisDateColumn;

    @FXML
    private TableColumn viewColumn;

    @FXML
    private TableColumn adresseColumn;

    @FXML
    private TableColumn amountColumn;

    private static ArrayList<Bill> billListe = new ArrayList<>();

    @FXML
    private void initialize(){
        try {
            billListe = RequestManager.getBills();
        } catch (Exception e) {
            e.printStackTrace();
        }

        this.billTableView.setEditable(false);

        this.patientIdColumn.setStyle( "-fx-alignment: CENTER;");
        this.patientIdColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.patientIdColumn.setCellValueFactory(
                new PropertyValueFactory<billRecord, String>("numPatient"));

        this.analysisIdColumn.setStyle( "-fx-alignment: CENTER;");
        this.analysisIdColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.analysisIdColumn.setCellValueFactory(
                new PropertyValueFactory<billRecord, String>("numAnalyse"));

        this.analysisStatusColumn.setStyle( "-fx-alignment: CENTER;");
        this.analysisStatusColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.analysisStatusColumn.setCellValueFactory(
                new PropertyValueFactory<billRecord, String>("statut"));

        this.analysisDateColumn.setStyle( "-fx-alignment: CENTER;");
        this.analysisDateColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.analysisDateColumn.setCellValueFactory(
                new PropertyValueFactory<billRecord, String>("date"));

        this.amountColumn.setStyle( "-fx-alignment: CENTER;");
        this.amountColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.amountColumn.setCellValueFactory(
                new PropertyValueFactory<billRecord, String>("amount"));

        this.adresseColumn.setStyle( "-fx-alignment: CENTER;");
        this.adresseColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.adresseColumn.setCellValueFactory(
                new PropertyValueFactory<billRecord, String>("adresse"));

        this.viewColumn.setCellValueFactory(
                new Callback<TableColumn.CellDataFeatures<billRecord, Boolean>,
                        ObservableValue<Boolean>>() {
                    @Override
                    public ObservableValue<Boolean> call(TableColumn.CellDataFeatures<billRecord, Boolean> p) {
                        return new SimpleBooleanProperty(p.getValue() != null);
                    }
                });

        this.viewColumn.setCellFactory(
                new Callback<TableColumn<billRecord, Boolean>, TableCell<billRecord, Boolean>>() {
                    @Override
                    public TableCell<billRecord, Boolean> call(TableColumn<billRecord, Boolean> p) {
                        return new ButtonCell();
                    }

                });

        this.viewColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.viewColumn.setStyle( "-fx-alignment: CENTER;");

        ObservableList<billRecord> dataList = FXCollections.observableArrayList();

        if(billListe != null){
            for (Bill current : billListe) {
                billRecord toAdd = new billRecord(
                        current.getPatient().getUsername(),
                        current.getAnalyse().getCode(),
                        current.getCreationDate().toString(),
                        (current.isPayed() ? "Payé" : "Impayée"),
                        current.getBillingAdress(),
                        String.valueOf(current.getAmount()));

                dataList.add(toAdd);
                }
            }
        billTableView.setItems(dataList);
    }

    @FXML
    private void addBillButtonAction(ActionEvent event) {

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

    private static class ButtonCell extends TableCell<billRecord, Boolean> {

    final Button cellButton = new Button("Voir");

    public ButtonCell() {
        cellButton.getStyleClass().add("btn_primary");
        cellButton.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent t) {
                String numPatient = String.valueOf(ButtonCell.this
                        .getTableView().getItems()
                        .get(ButtonCell.this.getIndex()).getNumPatient());
                try {
                    Bill currentBill = billListe.get(ButtonCell.this.getIndex());
                    LabCompanion.singleton.initBillOverviewPane(currentBill);
                } catch (MalformedURLException ex) {
                    System.err.println("Ici " + numPatient);
                    // TODO
                } catch (Exception ex) {
                    System.err.println("Là " + numPatient);
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

    public class billRecord {
        private final SimpleStringProperty numPatient;
        private final SimpleStringProperty numAnalyse;
        private final SimpleStringProperty date;
        private final SimpleStringProperty statut;
        private final SimpleStringProperty amount;
        private final SimpleStringProperty adresse;

        public billRecord(String numPatient, String numAnalyse, String date, String statut, String amount,
                          String adresse) {
            this.numPatient = new SimpleStringProperty(numPatient);
            this.numAnalyse = new SimpleStringProperty(numAnalyse);
            this.date = new SimpleStringProperty(date);
            this.statut = new SimpleStringProperty(statut);
            this.amount = new SimpleStringProperty(amount);
            this.adresse = new SimpleStringProperty(adresse);

        }

        public String getNumPatient() {
            return numPatient.get();
        }

        public SimpleStringProperty numPatientProperty() {
            return numPatient;
        }

        public String getNumAnalyse() {
            return numAnalyse.get();
        }

        public SimpleStringProperty numAnalyseProperty() {
            return numAnalyse;
        }

        public String getDate() {
            return date.get();
        }

        public SimpleStringProperty dateProperty() {
            return date;
        }

        public String getStatut() {
            return statut.get();
        }

        public SimpleStringProperty statutProperty() {
            return statut;
        }

        public String getAmount() {
            return amount.get();
        }

        public SimpleStringProperty amountProperty() {
            return amount;
        }

        public String getAdresse() {
            return adresse.get();
        }

        public SimpleStringProperty adresseProperty() {
            return adresse;
        }
    }
}

