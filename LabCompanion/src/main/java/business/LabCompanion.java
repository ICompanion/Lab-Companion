package business;

import controller.AnalysisOverviewController;
import controller.LabCompanionController;
import controller.StudyOverviewController;
import controller.VisitCreationController;
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
    
    public static final String USER_LAB_COMPANION_FOLDER =
            System.getProperty("user.home")+"\\LabCompanion";
    public static final String USER_LAB_COMPANION_PLUGIN_ACTIVE_FOLDER = 
            System.getProperty("user.home")+"\\LabCompanion\\active";
    public static final String USER_LAB_COMPANION_PLUGIN_INACTIVE_FOLDER = 
            System.getProperty("user.home")+"\\LabCompanion\\inactive";

    public static LabCompanion singleton;
    
    private Parent root;

    private Stage mainStage;
    
    private Employee connectedEmployee;
    
    private ArrayList<Plugin> activePlugins;
    
    private ArrayList<Plugin> inactivePlugins;

    @Override
    public void start(Stage primaryStage) throws Exception{
        singleton = this;
        this.connectedEmployee = null;
        this.activePlugins = new ArrayList<Plugin>();
        this.inactivePlugins = new ArrayList<Plugin>();
        
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
    
    private void setCurrentEditedPane(Pane currentEditedPane) {
        try {
            FXMLLoader rootLoader = new FXMLLoader();
            URL rootUrl = Paths.get("src/main/java/view/labCompanion.fxml").toUri().toURL();
            rootLoader.setLocation(rootUrl);
            root = (VBox) rootLoader.load();
            LabCompanionController labCompanionController =
                    (LabCompanionController) rootLoader.getController();
            labCompanionController.setEditedPane(currentEditedPane,
                    this.connectedEmployee);

            mainStage.close();
            Scene scene = new Scene(root);
            mainStage.setScene(scene);
            mainStage.show();

        } catch (IOException e) {
            System.out.println("Can't load current editedLoader");
            System.out.println(e);
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
        reloadPlugins();
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
    
    public void initPluginManagerOverview() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/pluginOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);
    }
    
    public void initPlugin(Plugin toLoad) throws MalformedURLException {
        try {
            FXMLLoader rootLoader = new FXMLLoader();
            URL rootUrl = Paths.get("src/main/java/view/labCompanion.fxml").toUri().toURL();
            rootLoader.setLocation(rootUrl);
            root = (VBox) rootLoader.load();
            LabCompanionController labCompanionController =
                    (LabCompanionController) rootLoader.getController();
            Pane currentEditedNode = toLoad.getPane();
            labCompanionController.setEditedPane(currentEditedNode,
                    this.connectedEmployee);

            mainStage.close();
            Scene scene = new Scene(root);
            mainStage.setScene(scene);
            mainStage.show();
        } catch (IOException ex) {
            Logger.getLogger(LabCompanion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void addToActivePluginList(ArrayList<Plugin> toAdd) {
        if(!toAdd.isEmpty()) {
            for(Plugin current : toAdd) {
                for(Plugin loaded : this.getLoadedPlugins()) {
                    if(current.getName().equals(loaded.getName())
                        && current.getDescription().equals(loaded.getDescription())) {
                        toAdd.remove(current);
                    }
                }
            }
            this.activePlugins.addAll(toAdd);
        }
    }
    
    private void reloadPlugins() {
        PluginLoader loader = new PluginLoader(
                LabCompanion.USER_LAB_COMPANION_PLUGIN_ACTIVE_FOLDER);
        this.activePlugins = loader.getPlugins();
        loader = new PluginLoader(
                LabCompanion.USER_LAB_COMPANION_PLUGIN_INACTIVE_FOLDER);
        this.inactivePlugins = loader.getPlugins();
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
    
    public void setConnectedEmployee(Employee connectedEmployee) {
        this.connectedEmployee = connectedEmployee;
    }

    public Employee getConnectedEmployee() {
        return this.connectedEmployee;
    }

    public ArrayList<Plugin> getLoadedPlugins() {
        ArrayList<Plugin> toReturn = new ArrayList<Plugin>();
        if(this.activePlugins != null) {
            toReturn.addAll(this.activePlugins);
        }
        if(this.inactivePlugins != null) {
            toReturn.addAll(this.inactivePlugins);
        }
        return toReturn;
    }

    public ArrayList<Plugin> getActivePlugins() {
        return this.activePlugins;
    }

    public ArrayList<Plugin> getInactivePlugins() {
        return this.inactivePlugins;
    }
    
    /**** Doctor ****/
    
    public void initDoctorWelcomePanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/doctorWelcome.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initDoctorAnalysisPanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/doctorAnalysis.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initDoctorStudyPanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/doctorStudyOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initAnalysisOverviewPane(Analysis analysis) throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/analysisOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }

        AnalysisOverviewController controller = loader.getController();
        controller.setAnalysis(analysis);
        this.setCurrentEditedPane(pane);

    }

    public void initAnalysisResultOverviewPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/analysisResultOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initQuestionPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/questionPane.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initQuestionAddPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/questionAddPane.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initStudyCreationPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/studyCreationPane.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initStudyOverviewPane(Survey survey) throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/studyOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

        StudyOverviewController controller = loader.getController();
        try {
            controller.setSurvey(survey);
        } catch (Exception e) {
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }
    
    /**** Secretary ****/
    
    public void initSecretaryPatientCasePanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/docotorPatientCase.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initSecretaryBillListPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/billList.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initBillOverviewPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/billOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initPatientCaseOverviewPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/patientCaseOverview.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initSecretaryWelcomePanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/secretaryWelcome.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        this.setCurrentEditedPane(pane);

    }

    public void initVisitCreationPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/visitCreation.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        VisitCreationController controller = loader.getController();
        // contrller call function
        this.setCurrentEditedPane(pane);

    }
}

