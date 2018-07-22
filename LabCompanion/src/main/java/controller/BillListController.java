package controller;

import business.Bill;
import business.LabCompanion;
import dao.RequestManager;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.property.SimpleIntegerProperty;
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
 *This class is the bill list view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
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

    private static ArrayList<Bill> billList = new ArrayList<>();

    /**
     * This function initialise the view and make treatments before rendering (tableView initialisation).
     *
     * @throws Exception
     */
    @FXML
    private void initialize(){
        try {
            billList = RequestManager.getBills();
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

        if(billList != null){
            for (Bill current : billList) {
                System.out.println(current.getId());
                billRecord toAdd = new billRecord(
                        current.getPatient().getUsername(),
                        current.getAnalyse().getCode(),
                        current.getCreationDate().toString(),
                        (current.isPayed() ? "Payé" : "Impayée"),
                        current.getBillingAdress(),
                        String.valueOf(current.getAmount()),
                        current.getId());

                dataList.add(toAdd);
                }
            }
        billTableView.setItems(dataList);
    }

    /**
     * This function is the backButton event to return to the previous view.
     *
     * @param event
     */
    @FXML
    private void backButtonAction(ActionEvent event) {
        LabCompanion.singleton.initLabCompanionPanel();
    }

    /**
     * Class that represent a button to be inserted in each row of the tableView .
     */
    private static class ButtonCell extends TableCell<billRecord, Boolean> {

    final Button cellButton = new Button("Modifier");

        /**
         * Button constructor (initialise button)
         */
    public ButtonCell() {
        cellButton.getStyleClass().add("btn_primary");
        cellButton.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent t) {
                String id = String.valueOf(ButtonCell.this
                        .getTableView().getItems()
                        .get(ButtonCell.this.getIndex()).getId());
                    Bill currentBill = billList.get(ButtonCell.this.getIndex());
                    LabCompanion.singleton.initBillCreationUpdateCasePane(currentBill);
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
    public class billRecord {
        private final SimpleStringProperty numPatient;
        private final SimpleStringProperty numAnalyse;
        private final SimpleStringProperty date;
        private final SimpleStringProperty statut;
        private final SimpleStringProperty amount;
        private final SimpleStringProperty adresse;
        private final SimpleIntegerProperty id;

        public billRecord(String numPatient, String numAnalyse, String date, String statut, String amount,
                          String adresse, int id) {
            this.numPatient = new SimpleStringProperty(numPatient);
            this.numAnalyse = new SimpleStringProperty(numAnalyse);
            this.date = new SimpleStringProperty(date);
            this.statut = new SimpleStringProperty(statut);
            this.amount = new SimpleStringProperty(amount);
            this.adresse = new SimpleStringProperty(adresse);
            this.id = new SimpleIntegerProperty(id);

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

        public int getId() {
            return id.get();
        }

        public SimpleIntegerProperty idProperty() {
            return id;
        }
    }
}

