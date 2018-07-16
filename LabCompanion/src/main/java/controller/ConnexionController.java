package controller;

import business.LabCompanion;
import business.Employee;
import dao.RequestManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;
import javafx.stage.Modality;
import javafx.stage.Stage;

public class ConnexionController {

    @FXML
    private Button connectionButton;

    @FXML
    private TextField idTextField;

    @FXML
    private TextField passwordField;

    @FXML
    private void connectionButtonAction(ActionEvent event) {
        try {
            Employee connected = RequestManager.connect(idTextField.getText(),
                    passwordField.getText());
            LabCompanion.singleton.setConnectedEmployee(connected);
            LabCompanion.singleton.initLabCompanionPanel();
        } catch (Exception e) {
            //@TODO change to view.AlertPane ?
            Stage dialogStage = new Stage();
            dialogStage.initModality(Modality.WINDOW_MODAL);

            VBox vbox = new VBox(new Text("Connection Failed"), new Button("Ok"));
            vbox.setAlignment(Pos.CENTER);
            vbox.setPadding(new Insets(15));

            dialogStage.setScene(new Scene(vbox));
            dialogStage.show();
        }
    }

}
