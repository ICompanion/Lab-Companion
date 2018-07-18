package business;

import controller.LabCompanionController;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.scene.layout.GridPane;
import plugin.Plugin;
import plugin.PluginLoader;

public class LabCompanion extends Application {

    private Parent root;

    private Stage mainStage;

    public static LabCompanion singleton;

    private Employee connectedEmployee;

    private ArrayList<Plugin> loadedPlugins;

    private PluginLoader pluginLoader;

    @Override
    public void start(Stage primaryStage) throws Exception{
        singleton = this;
        this.connectedEmployee = null;
//        this.pluginLoader = new PluginLoader(files);

        this.mainStage = primaryStage;

        URL loaded = Paths.get("src/main/java/view/connexion.fxml").toUri().toURL();
        FXMLLoader loader = new FXMLLoader(loaded);
        root = (GridPane) loader.load();

        Scene scene = new Scene(root);
        primaryStage.setScene(scene);
        primaryStage.setMaximized(true);
        primaryStage.setResizable(false);
        primaryStage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }

    /**** Common ****/

    private void setCurrentEditedPane(FXMLLoader currentEditedLoader) {
        try {
            FXMLLoader rootLoader = new FXMLLoader();
            URL rootUrl = Paths.get("src/main/java/view/labCompanion.fxml").toUri().toURL();
            rootLoader.setLocation(rootUrl);
            root = (VBox) rootLoader.load();
            LabCompanionController labCompanionController =
                    (LabCompanionController) rootLoader.getController();
            Pane currentEditedNode = currentEditedLoader.load();
            labCompanionController.setEditedPane(currentEditedNode,
                    this.connectedEmployee);

            mainStage.close();
            Scene scene = new Scene(root);
            mainStage.setScene(scene);
            mainStage.show();

        } catch (IOException e) {
            System.out.println("Can't load current editedLoader");
        }
    }

    public void initConnectionPanel() throws MalformedURLException {
        try {
            URL loaded = Paths.get("src/main/java/view/connexion.fxml").toUri().toURL();
            FXMLLoader loader = new FXMLLoader(loaded);
            root = (GridPane) loader.load();

            Scene scene = new Scene(root);
            mainStage.setScene(scene);
        } catch (IOException ex) {
            //TODO
        }

    }

    public void initLabCompanionPanel() throws MalformedURLException {
        try {
            if(connectedEmployee.getType() == Doctor.DOCTOR_TYPE) {
                initDoctorWelcomePanel();
            }
            else if (connectedEmployee.getType() == Secretary.SECRETARY_TYPE) {
                initDoctorWelcomePanel();
            }
        } catch (IOException ex) {
            Logger.getLogger(LabCompanion.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public void initPlugin(Plugin toInit) throws MalformedURLException {
        try {
            FXMLLoader rootLoader = new FXMLLoader();
            URL rootUrl = Paths.get("src/main/java/view/labCompanion.fxml").toUri().toURL();
            rootLoader.setLocation(rootUrl);
            root = (VBox) rootLoader.load();
            LabCompanionController labCompanionController =
                    (LabCompanionController) rootLoader.getController();
            labCompanionController.setEditedPane(toInit.getPane(),
                    this.connectedEmployee);

            mainStage.close();
            Scene scene = new Scene(root);
            mainStage.setScene(scene);
            mainStage.show();
        } catch (IOException ex) {
            Logger.getLogger(LabCompanion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void setConnectedEmployee(Employee connectedEmployee) {
        this.connectedEmployee = connectedEmployee;
    }

    public void disconnect() {
        this.setConnectedEmployee(null);
        try {
            this.initConnectionPanel();
        } catch (MalformedURLException ex) {
            // TODO call AlertPane
            Logger.getLogger(LabCompanion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Employee getConnectedEmployee() {
        return this.connectedEmployee;
    }
    /**** Doctor ****/

    public void initDoctorWelcomePanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/doctorWelcome.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initDoctorAnalysisPanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/doctorAnalysis.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initDoctorStudyPanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/doctorStudyOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initAnalysisOverviewPane(Analysis analysis) throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/analysisOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initAnalysisResultOverviewPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/analysisResultOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initQuestionPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/questionPane.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initQuestionAddPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/questionAddPane.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initStudyCreationPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/studyCreationPane.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initStudyOverviewPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/studyOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    /**** Secretary ****/

    public void initSecretaryPatientCasePanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/docotorPatientCase.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initSecretaryBillListPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/billList.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initBillOverviewPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/billOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initPatientCaseOverviewPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/patientCaseOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initSecretaryWelcomePanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/secretaryWelcome.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

    public void initVisitCreationPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/visitCreation.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }
}

