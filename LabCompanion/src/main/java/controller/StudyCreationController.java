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
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.cell.TextFieldTableCell;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.TilePane;
import javafx.util.Callback;

import java.net.MalformedURLException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;

public class StudyCreationController {

    @FXML
    private TextField titleInput;

    @FXML
    private TextField descInput;

    @FXML
    private TextField codeInput;

    @FXML
    private Button addButton;

    @FXML
    private Button deleteBtn;

    @FXML
    private Button sendStudyBtn;

    @FXML
    private Button backToStudyButton;

    @FXML
    private GridPane infosGrid;

    @FXML
    private TableView<QuestionRow> formStudy;

    @FXML
    private TableColumn titleColumn;

    @FXML
    private TableColumn answer1Column;

    @FXML
    private TableColumn answer2Column;

    @FXML
    private TableColumn answer3Column;

    @FXML
    private TilePane tilePane;

    private static ObservableList<QuestionRow> rows = FXCollections.observableArrayList();

    @FXML
    private void initialize() {

        infosGrid.setMaxWidth(LabCompanionController.maxPaneWidth-20);
        sendStudyBtn.setPrefWidth(LabCompanionController.maxPaneWidth/2.2);

        this.titleColumn.setStyle( "-fx-alignment: CENTER;");
        this.titleColumn.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.titleColumn.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("title"));
        this.titleColumn.setCellFactory(TextFieldTableCell.forTableColumn());
        this.titleColumn.setOnEditCommit(
                new EventHandler<TableColumn.CellEditEvent<QuestionRow, String>>() {
                    @Override
                    public void handle(TableColumn.CellEditEvent<QuestionRow, String> item) {
                        ((QuestionRow) item.getTableView().getItems().get(item.getTablePosition().getRow())).setTitle(item.getNewValue());
                    }
                }
        );

        this.answer1Column.setStyle( "-fx-alignment: CENTER;");
        this.answer1Column.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.answer1Column.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer1"));
        this.answer1Column.setCellFactory(TextFieldTableCell.forTableColumn());
        this.answer1Column.setOnEditCommit(
                new EventHandler<TableColumn.CellEditEvent<QuestionRow, String>>() {
                    @Override
                    public void handle(TableColumn.CellEditEvent<QuestionRow, String> item) {
                        ((QuestionRow) item.getTableView().getItems().get(item.getTablePosition().getRow())).setAnswer1(item.getNewValue());
                    }
                }
        );

        this.answer2Column.setStyle( "-fx-alignment: CENTER;");
        this.answer2Column.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.answer2Column.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer2"));
        this.answer2Column.setEditable(true);
        this.answer2Column.setCellFactory(TextFieldTableCell.forTableColumn());
        this.answer2Column.setOnEditCommit(
                new EventHandler<TableColumn.CellEditEvent<QuestionRow, String>>() {
                    @Override
                    public void handle(TableColumn.CellEditEvent<QuestionRow, String> item) {
                        ((QuestionRow) item.getTableView().getItems().get(item.getTablePosition().getRow())).setAnswer2(item.getNewValue());
                    }
                }
        );


        this.answer3Column.setStyle( "-fx-alignment: CENTER;");
        this.answer3Column.setPrefWidth(LabCompanionController.maxPaneWidth/4);
        this.answer3Column.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer3"));
        this.answer3Column.setCellFactory(TextFieldTableCell.forTableColumn());
        this.answer3Column.setOnEditCommit(
                new EventHandler<TableColumn.CellEditEvent<QuestionRow, String>>() {
                    @Override
                    public void handle(TableColumn.CellEditEvent<QuestionRow, String> item) {
                        ((QuestionRow) item.getTableView().getItems().get(item.getTablePosition().getRow())).setAnswer3(item.getNewValue());
                    }
                }
        );

        deleteBtn.setDisable(true);
        formStudy.setEditable(true);
        formStudy.setItems(rows);
        this.formStudy.getSelectionModel().selectedItemProperty()
                .addListener(new ChangeListener() {
                    @Override
                    public void changed(ObservableValue observableValue,
                                        Object oldValue, Object newValue) {
                        if(StudyCreationController.this.formStudy
                                .getSelectionModel().getSelectedItem() != null)
                        {
                            QuestionRow selectedItem = (QuestionRow) StudyCreationController
                                    .this.formStudy
                                    .getSelectionModel().getSelectedItem();
                            StudyCreationController.this.deleteBtn.setDisable(false);


                        } else {
                            StudyCreationController.this.deleteBtn.setDisable(true);
                        }
                    }
                });
    }



    @FXML
    private void addButtonAction(ActionEvent event) {
        QuestionRow newRow = new QuestionRow("//A remplir",null,null,null);
        rows.add(newRow);
    }

    @FXML
    private void deleteButtonAction(ActionEvent event) {
        QuestionRow selectedItem = (QuestionRow) this.formStudy.getSelectionModel().getSelectedItem();
        this.formStudy.getItems().remove(selectedItem);
    }

    @FXML
    private void backToStudyButtonAction(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorStudyPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @FXML
    private void sendStudyAction(ActionEvent event) throws Exception {
        if (!rows.isEmpty()){
            ArrayList<Question> questionsList = new ArrayList<>();
            for (QuestionRow currentRow : rows) {
                if (!currentRow.getTitle().equals("// A remplir") && currentRow.getTitle() != null && currentRow.getAnswer1() != null && currentRow.getAnswer2() != null) {
                    ArrayList<Proposal> proposals = new ArrayList<>();
                    Proposal proposal1 = new Proposal(0,currentRow.getAnswer1());
                    Proposal proposal2 = new Proposal(0,currentRow.getAnswer2());
                    proposals.add(proposal1);
                    proposals.add(proposal2);
                    if (currentRow.getAnswer3() != null) {
                        Proposal proposal3 = new Proposal(0,currentRow.getAnswer3());
                        proposals.add(proposal3);
                    }

                    questionsList.add(new Question(0,currentRow.getTitle(),proposals));
                }
            }

            if (!questionsList.isEmpty() && !codeInput.getText().equals("") && !titleInput.getText().equals("") && !descInput.getText().equals("")) {
                Doctor doctor = new Doctor(LabCompanion.singleton.getConnectedEmployee());
                DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
                LocalDate currentDate = LocalDate.now();
                Date date = Date.from(currentDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
                Survey survey = new Survey(0,codeInput.getText(),titleInput.getText(),date,descInput.getText(),doctor,questionsList);

                RequestManager.addSurvey(survey);
                LabCompanion.singleton.initDoctorStudyPanel();
            } else {
                LabCompanion.singleton.initAlertPane("Formulaire non valide",
                        "Certains champs ne sont pas remplis",
                        "Rappel: 1 question minimum, 2 réponses minimum par question.");
            }
        } else {
            LabCompanion.singleton.initAlertPane("Formulaire non valide",
                    "Le formulaire ne dispose pas de suffisamment de questions",
                    "Rappel: 1 question minimum, 2 réponses minimum par question.");
        }

    }

    public class QuestionRow {
        private String title;
        private String answer1;
        private String answer2;
        private String answer3;

        public QuestionRow(String title, String answer1, String answer2, String answer3) {
            this.title = title;
            this.answer1 = answer1;
            this.answer2 = answer2;
            this.answer3 = answer3;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getAnswer1() {
            return answer1;
        }

        public void setAnswer1(String answer1) {
            this.answer1 = answer1;
        }

        public String getAnswer2() {
            return answer2;
        }

        public void setAnswer2(String answer2) {
            this.answer2 = answer2;
        }

        public String getAnswer3() {
            return answer3;
        }

        public void setAnswer3(String answer3) {
            this.answer3 = answer3;
        }
    }


}
