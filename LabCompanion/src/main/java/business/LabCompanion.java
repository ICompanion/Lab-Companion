package business;

import controller.*;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.awt.*;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.scene.control.Alert;
import javafx.scene.layout.GridPane;
import plugin.PluginLoader;
import pluginmanager.main.Plugin;

/**
 *This class is class is the main class of the application,
 * here is initialised main view and its components.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class LabCompanion extends Application {

    public static final String USER_LAB_COMPANION_FOLDER =
            System.getProperty("user.home")+"\\LabCompanion";
    public static final String USER_LAB_COMPANION_PLUGIN_FOLDER =
            System.getProperty("user.home")+"\\LabCompanion\\plugins";
    public static final String USER_LAB_COMPANION_CONF_FOLDER =
            System.getProperty("user.home")+"\\LabCompanion\\conf";

    public static LabCompanion singleton;

    private Parent root;

    private Stage mainStage;

    private Employee connectedEmployee;

    private ArrayList<Plugin> pluginList;

    /**
     *This function init and display the main view.
     *
     * @param primaryStage
     * @throws Exception
     */
    @Override
    public void start(Stage primaryStage) throws Exception{
        singleton = this;
        this.connectedEmployee = null;

        this.mainStage = primaryStage;
        mainStage.setWidth(Toolkit.getDefaultToolkit().getScreenSize().getWidth());
        mainStage.setHeight(Toolkit.getDefaultToolkit().getScreenSize().getHeight());

        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/connexion.fxml"));
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

    /**
     *This function set size and parameters for the main view.
     *
     * @param currentEditedPane
     */
    private void setCurrentEditedPane(Pane currentEditedPane) {
        try {
            FXMLLoader rootLoader = new FXMLLoader(getClass().getResource("/view/labCompanion.fxml"));
            root = (VBox) rootLoader.load();
            LabCompanionController labCompanionController =
                    (LabCompanionController) rootLoader.getController();
            labCompanionController.setEditedPane(currentEditedPane,
                    this.connectedEmployee);

            Scene scene = new Scene(root);
            mainStage.setScene(scene);
            mainStage.show();
            mainStage.setMaximized(true);

        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre n'as pas pu être chargée",
                    "Panneau : " + currentEditedPane.getId());
        }
    }

    /**
     *This function initialise the connection view.
     *
     */
    public void initConnectionPanel() {
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/connexion.fxml"));
            root = (GridPane) loader.load();

            Scene scene = new Scene(root);
            mainStage.setScene(scene);
        } catch (IOException ex) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de connexion n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }

    }

    /**
     *This function initialise the label of the main view.
     *
     */
    public void initLabCompanionPanel() {
        reloadPlugins();
        initWelcomePanel();
    }

    /**
     *This function initialise the pluginManager view.
     *
     */
    public void initPluginManagerOverview() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/pluginOverview.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de vue d'ensemble de plugin n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);
    }

    /**
     *This function initialise the plugin view.
     *
     * @param toLoad
     */
    public void initPlugin(Plugin toLoad) {
        Pane currentEditedNode = toLoad.getPane();
        singleton.setCurrentEditedPane(currentEditedNode);
    }

    /**
     * This function add plugins into activate plugins.
     *
     * @param toAdd
     */
    public void addToPluginList(ArrayList<Plugin> toAdd) {
        if(!toAdd.isEmpty()) {
            for(Plugin current : toAdd) {
                for(Plugin loaded : this.pluginList) {
                    if(current.getName().equals(loaded.getName())
                        && current.getDescription().equals(loaded.getDescription())) {
                        toAdd.remove(current);
                    }
                }
            }
            this.pluginList.addAll(toAdd);
        }
    }

    /**
     * This function refresh plugin.
     */
    private void reloadPlugins() {
        PluginLoader loader = new PluginLoader(
                LabCompanion.USER_LAB_COMPANION_PLUGIN_FOLDER);
        ArrayList<Plugin> loadedPlugins = loader.getPlugins();
        if (loadedPlugins != null) {
            this.pluginList = loadedPlugins;
        } else {
            this.pluginList = new ArrayList<Plugin>();
        }
    }

    /**
     * This function disconnect the user from the application.
     */
    public void disconnect() {
        this.setConnectedEmployee(null);
        this.initConnectionPanel();
    }

    /**
     *This function set the actual user.
     *
     * @param connectedEmployee
     */
    public void setConnectedEmployee(Employee connectedEmployee) {
        this.connectedEmployee = connectedEmployee;
    }

    /**
     *This function get the actual user.
     * @return connectedEmployee
     */
    public Employee getConnectedEmployee() {
        return this.connectedEmployee;
    }

    /**
     *This function get all plugins.
     *
     * @return List of plugins
     */
    public ArrayList<Plugin> getPlugins() {
        return this.pluginList;
    }

    /**** Doctor ****/

    /**
     *This function init the welcome view.
     *
     */
    public void initWelcomePanel() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/welcome.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre d'accueil n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the doctor Analysis view.
     *
     */
    public void initDoctorAnalysisPanel() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/doctorAnalysis.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre des analyses d'un docteur n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the doctor study view.
     *
     */
    public void initDoctorStudyPanel() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/doctorStudyOverview.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre des études d'un docteur n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the analysis view.
     *
     * @param analysis
     */
    public void initAnalysisOverviewPane(Analysis analysis) {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/analysisOverview.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre du détail d'une analyse n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }

        AnalysisOverviewController controller = loader.getController();
        controller.setAnalysis(analysis);
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the analysis creation view.
     *
     */
    public void initAnalysisCreationPane() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/analysisCreation.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de création d'une analyse n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the study Creation view.
     *
     */
    public void initStudyCreationPane() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/studyCreation.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de création d'une étude n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the study view.
     *
     * @param survey
     */
    public void initStudyOverviewPane(Survey survey) {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/studyOverview.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre détaillant une étude n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
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

    /**
     *This function init the bill list view.
     *
     */
    public void initSecretaryBillListPane() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/billList.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre des factures n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the bill creation view.
     *
     * @param appointment
     */
    public void initBillCreationCasePane(Appointment appointment) {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/billCreation.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de création d'une facture n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        BillCreationController controller = loader.getController();
        controller.setAppointment(appointment);
        this.setCurrentEditedPane(pane);
    }

    /**
     *This function init the doctor bill creation view for update.
     *
     * @param bill
     */
    public void initBillCreationUpdateCasePane(Bill bill) {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/billCreation.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de modification d'une facture n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        BillCreationController controller = loader.getController();
        controller.setPatient(bill);
        this.setCurrentEditedPane(pane);
    }

    /**
     *This function init the doctor patient view.
     *
     */
    public void initDoctorPatientCasePane() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/doctorPatientCases.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de la liste des patients d'un docteur n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the patient creation view.
     *
     */
    public void initCreatePatientCasePane() {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/patientCreation.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de création d'un patient n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the patient creation view for update.
     *
     * @param patient
     */
    public void initCreatePatientUpdateCasePane(Patient patient) {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/patientCreation..fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de modification d'un patient n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        PatientCreationController controller = loader.getController();
        controller.setPatient(patient);
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the patient view.
     *
     * @param patient
     */
    public void initPatientCaseOverviewPane(Patient patient) {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/patientCaseOverview.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre détaillant un dossier patient n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }

        PatientCaseOverviewController controller = loader.getController();
        controller.setPatient(patient);
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the visit creation view.
     *
     * @param patientId
     */
    public void initVisitCreationPane(String patientId) {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/visitCreation.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre de création d'une visite n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        VisitCreationController controller = loader.getController();
        controller.setPatientId(patientId);
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the alert pane view.
     *
     * @param title
     * @param description
     * @param message
     */
    public void initAlertPane(String title, String description, String message) {
            Alert alert = new Alert(Alert.AlertType.ERROR);
            alert.setTitle(title);
            alert.setHeaderText(description);
            alert.setContentText(message);
            alert.showAndWait();
    }

    /**
     *This function init the alert success pane view.
     *
     * @param title
     * @param description
     * @param message
     */
    public void initSuccessPane(String title, String description, String message) {
        Alert alert = new Alert(Alert.AlertType.INFORMATION);
        alert.setTitle(title);
        alert.setHeaderText(description);
        alert.setContentText(message);
        alert.showAndWait();
    }

    /**
     *This function init the parameters pane view.
     *
     * @param employee
     */
    public void initParametersPane(Employee employee) {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/view/parameters.fxml"));
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            initAlertPane("Erreur de chargement",
                    "La fenêtre des paramètres n'as pas pu être chargée",
                    "Le fichier fxml n'a pas été trouvé.");
        }
        ParametersController controller = loader.getController();
        controller.setEmployee(employee);
        this.setCurrentEditedPane(pane);

    }
}

