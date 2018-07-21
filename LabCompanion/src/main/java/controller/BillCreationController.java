package controller;

import business.Analysis;
import business.Appointment;
import business.Bill;
import business.LabCompanion;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import java.net.MalformedURLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *This class is the Bill creation view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class BillCreationController {

    @FXML
    private TextField priceTextField;

    @FXML
    private TextField adressTextField;

    @FXML
    private TextField analysisNumTextField;

    @FXML
    private Label warningLabel;

    @FXML
    private Button registerButton;

    @FXML
    private Button updateButtonAction;

    @FXML
    private ComboBox statutComboBox;

    private Bill bill;
    private Analysis analysis;
    private Appointment appointment;

    /**
     * This function initialise the view and make treatments before rendering (input validation and comboBox data insertion).
     *
     * @throws Exception
     */
    @FXML
    private void initialize() {

        priceTextField.focusedProperty().addListener((arg0, oldValue, newValue) -> {
            if (!newValue) { //when focus lost
                if(!priceTextField.getText().matches("^\\d+$")){
                    //when it not matches the pattern (1.0 - 6.0)
                    //set the textField empty
                    priceTextField.setText("Pas de lettres");
                    priceTextField.setStyle("-fx-text-fill:red");
                }
                else {
                    priceTextField.setStyle("-fx-text-fill:green");
                }
            }
        });

        this.statutComboBox.getItems().addAll("Payée", "Impayée");
    }

    /**
     * This function is the backButton event to return to the previous view.
     *
     * @param event
     */
    @FXML
    private void backButtonAction(ActionEvent event) {
        try{
            LabCompanion.singleton.initSecretaryBillListPane();
        }
        catch(MalformedURLException e){
            e.printStackTrace();
        }
    }

    /**
     * This function is the registerButton Action event that make treatments to create and save a bill.
     *
     * @param event
     */
    @FXML
    private void registerButtonAction(ActionEvent event) {
        if(this.priceTextField.getText().equals("") || this.adressTextField.getText().equals("")
                || this.analysisNumTextField.getText().equals(""))
        {
            this.warningLabel.setVisible(true);
            return;
        }
        this.warningLabel.setVisible(false);
        this.warningLabel.setText("Veuillez renseigner tous les champs.");
        String amount = this.priceTextField.getText();
        String adresse = this.adressTextField.getText();
        String analysisNum = this.analysisNumTextField.getText();
        Date date = new Date();
        String statut = null;
        try{
            statut = this.statutComboBox.getValue().toString();
        }
         catch(NullPointerException e){
            statut = "";
        }

        String dateStr;
        boolean statutBool = false;

        if(statut.equals("Payée")){ statutBool = true; }

        try{
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
            dateStr = dateFormat.format(date);
            date = dateFormat.parse(dateStr);
        }
        catch (ParseException e){
            System.out.println(e.getMessage());
        }
        try {
            this.analysis = RequestManager.getAnalysisByCode(analysisNum);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if(this.analysis == null){
            this.warningLabel.setText("L'analyse que vous avez renseignées n'existe pas");
            this.warningLabel.setVisible(true);
            return;
        }

        Bill bill = new Bill(Integer.parseInt(amount), date, statutBool, adresse, this.appointment, this.appointment.getPatient(), this.analysis );


        try {
            RequestManager.addBill(bill);
        } catch (Exception e) {
            e.printStackTrace();
        }

        try{
            LabCompanion.singleton.initPatientCaseOverviewPane(bill.getPatient());
        }catch (MalformedURLException e){
            e.printStackTrace();
        }
    }

    /**
     * This function set inputs with patient informations.
     *
     * @param bill
     */
    public void setPatient(Bill bill){
        this.bill = bill;
        this.registerButton.setVisible(false);
        this.updateButtonAction.setVisible(true);
        this.appointment = bill.getAppointment();
        this.analysis = bill.getAnalyse();

        this.priceTextField.setText(String.valueOf(bill.getAmount()));
        this.adressTextField.setText(bill.getBillingAdress());
        this.analysisNumTextField.setText(analysis.getCode());
    }

    /**
     * This function set the appointment.
     *
     * @param appointment
     */
    public void setAppointment(Appointment appointment){
        this.appointment = appointment;
    }

    /**
     * This function is a save button action event to save patient changes in case of update.
     *
     * @param event
     */
    @FXML
    private void saveButtonAction(ActionEvent event) {
        if(this.priceTextField.getText().equals("") || this.adressTextField.getText().equals("")
                || this.analysisNumTextField.getText().equals(""))
        {
            this.warningLabel.setVisible(true);
            return;
        }

        String amount = this.priceTextField.getText();
        String adresse = this.adressTextField.getText();
        String analysisNum = this.analysisNumTextField.getText();
        Date date = bill.getCreationDate();
        String statut;
        String dateStr;
        boolean statutBool = false;

        try{
            statut = this.statutComboBox.getValue().toString();
        }
        catch(NullPointerException e){
            statut = "";
        }

        if(statut.equals("Payée")){ statutBool = true; }

        try {
            this.analysis = this.bill.getAnalyse();
        } catch (Exception e) {
            e.printStackTrace();
        }

        Bill bill = new Bill(this.bill.getId(), Integer.parseInt(amount), date, statutBool, adresse, this.appointment, this.appointment.getPatient(), this.analysis );


        try {
            RequestManager.updateBill(bill);
        } catch (Exception e) {
            e.printStackTrace();
        }

        try{
            LabCompanion.singleton.initSecretaryBillListPane();
        }catch (MalformedURLException e){
            e.printStackTrace();
        }
    }
}
