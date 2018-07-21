package controller;

import business.LabCompanion;
import business.Proposal;
import business.Question;
import business.Survey;
import dao.RequestManager;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.SplitPane;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;
import java.net.MalformedURLException;
import java.util.ArrayList;

/**
 *This class is the study overview controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class StudyOverviewController {

    @FXML
    private Button studyListButton;

    @FXML
    private Label studyNameLabel;

    @FXML
    private Label studyDateLabel;

    @FXML
    private Label studyInfoDescLabel;

    @FXML
    private Label studyPatientsLabel;

    @FXML
    private TableView<QuestionRow> studyTable;

    @FXML
    private TableColumn titleColumn;

    @FXML
    private TableColumn answer1Column;

    @FXML
    private TableColumn answer2Column;

    @FXML
    private TableColumn answer3Column;

    @FXML
    private TableColumn answer1CountColumn;

    @FXML
    private TableColumn answer2CountColumn;

    @FXML
    private TableColumn answer3CountColumn;

    @FXML
    private VBox studyVBox;

    private Survey survey;
    private static ObservableList<QuestionRow> rows = FXCollections.observableArrayList();

    /**
     * This function initialise the view and make treatments before rendering(set button action event).
     *
     * @throws Exception
     */
    @FXML
    private void initialize() {

        studyListButton.setOnAction(this::studyListButtonAction);

        double widthOfCount = LabCompanionController.maxPaneWidth/10;
        double widthOfTitle = LabCompanionController.maxPaneWidth/3.8-widthOfCount;

        this.titleColumn.setStyle( "-fx-alignment: CENTER;");
        this.titleColumn.setPrefWidth(widthOfTitle);
        this.titleColumn.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("title"));

        this.answer1Column.setStyle( "-fx-alignment: CENTER;");
        this.answer1Column.setPrefWidth(widthOfTitle);
        this.answer1Column.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer1"));

        this.answer1CountColumn.setStyle( "-fx-alignment: CENTER;");
        this.answer1CountColumn.setPrefWidth(widthOfCount);
        this.answer1CountColumn.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer1Count"));

        this.answer2Column.setStyle( "-fx-alignment: CENTER;");
        this.answer2Column.setPrefWidth(widthOfTitle);
        this.answer2Column.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer2"));

        this.answer2CountColumn.setStyle( "-fx-alignment: CENTER;");
        this.answer2CountColumn.setPrefWidth(widthOfCount);
        this.answer2CountColumn.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer2Count"));

        this.answer3Column.setStyle( "-fx-alignment: CENTER;");
        this.answer3Column.setPrefWidth(widthOfTitle);
        this.answer3Column.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer3"));

        this.answer3CountColumn.setStyle( "-fx-alignment: CENTER;");
        this.answer3CountColumn.setPrefWidth(widthOfCount);
        this.answer3CountColumn.setCellValueFactory(
                new PropertyValueFactory<QuestionRow, String>("answer3Count"));

        this.studyTable.setItems(rows);
    }

    /**
     * This function is the studyList button event which redirect to the studyList view.
     *
     * @param event
     */
    @FXML
    private void studyListButtonAction(ActionEvent event) {
        try {
            rows.clear();
            LabCompanion.singleton.initDoctorStudyPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function set a survey informations in labels and call statistics display.
     *
     * @param survey
     * @throws Exception
     */
    public void setSurvey(Survey survey) throws Exception {
        this.survey = survey;
        studyNameLabel.setText(survey.getName());
        studyDateLabel.setText(survey.getDate().toString());
        studyInfoDescLabel.setText(survey.getDescription());
        studyPatientsLabel.setText(String.valueOf(RequestManager.statsByParticipation(survey.getId())));
        displayStats();
        studyTable.setItems(rows);
    }

    /**
     * This function make treatments to display study statistics
     *
     * @throws Exception
     */
    public void displayStats() throws Exception {
        try {
            for (Question question : survey.getQuestions()) {
                String title = question.getTitle();
                String answer1, answer2, answer3, answer1Count, answer2Count, answer3Count;
                float count1 = 0, count2 = 0, count3 = 0, countTotal =  0;

                ArrayList<Proposal> proposals = question.getProposals();
                answer1 = proposals.get(0).getTitle();
                answer2 = proposals.get(1).getTitle();

                //Traitement des réponses


                count1 = RequestManager.statsByReponse(survey.getId(),question.getId(),proposals.get(0).getId());
                count2 = RequestManager.statsByReponse(survey.getId(),question.getId(),proposals.get(1).getId());
                count3 = 0;

                countTotal = count1+count2;
                answer3 = "";
                answer3Count = "";
                if (proposals.size() == 3) {
                    answer3 = proposals.get(2).getTitle();
                    count3 = RequestManager.statsByReponse(survey.getId(),question.getId(),proposals.get(2).getId());
                    countTotal += count3;
                }

                //Traitement du pourcentage
                answer1Count = String.valueOf((100/countTotal)*count1).substring(0,2)+" %";

                answer2Count = String.valueOf((100/countTotal)*count2).substring(0,2)+" %";

                if (proposals.size() == 2) {
                    if (answer1Count.equals("0. %")) {
                        answer1Count = "0 %";
                        answer2Count = "100 %";
                    } else if (answer2Count.equals("0. %")) {
                        answer2Count = "0 %";
                        answer1Count = "100 %";
                    }
                }

                if (proposals.size() == 3) {
                    answer3Count = String.valueOf((100/countTotal)*count3).substring(0,2)+" %";
                    answer3Count = answer1.substring(0,answer3.indexOf("."));

                    if (answer1Count.equals("0. %") && answer2Count.equals("0. %")) {
                        answer3Count = "100 %";
                        answer1Count = "0 %";
                        answer2Count = "0 %";
                    } else if (answer1Count.equals("0. %") && answer3Count.equals("0. %")) {
                        answer2Count = "100 %";
                        answer3Count = "0 %";
                        answer1Count = "0 %";
                    } else if (answer2Count.equals("0. %") && answer3Count.equals("0. %")) {
                        answer1Count = "100 %";
                        answer2Count = "0 %";
                        answer3Count = "0 %";
                    }
                }

                rows.add(new QuestionRow(title,answer1,answer1Count,answer2,answer2Count,answer3,answer3Count));
            }
        } catch (NullPointerException e) {
            rows.add(new QuestionRow("Pas encore de participations.","","","","","",""));
        }

    }

    public class QuestionRow {
        private String title;
        private String answer1;
        private String answer1Count;
        private String answer2;
        private String answer2Count;
        private String answer3;
        private String answer3Count;

        public QuestionRow(String title, String answer1, String answer1Count, String answer2, String answer2Count, String answer3, String answer3Count) {
            this.title = title;
            this.answer1 = answer1;
            this.answer2 = answer2;
            this.answer3 = answer3;
            this.answer1Count = answer1Count;
            this.answer2Count = answer2Count;
            this.answer3Count = answer3Count;
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

        public String getAnswer1Count() {
            return answer1Count;
        }

        public void setAnswer1Count(String answer1Count) {
            this.answer1Count = answer1Count;
        }

        public String getAnswer2Count() {
            return answer2Count;
        }

        public void setAnswer2Count(String answer2Count) {
            this.answer2Count = answer2Count;
        }

        public String getAnswer3Count() {
            return answer3Count;
        }

        public void setAnswer3Count(String answer3Count) {
            this.answer3Count = answer3Count;
        }
    }
}
