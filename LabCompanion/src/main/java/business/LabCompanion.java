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
import java.net.URL;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.scene.control.Alert;
import javafx.scene.control.DialogPane;
import javafx.scene.layout.GridPane;
import plugin.PluginLoader;
import plugin.PluginManager;
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

    /**
     *This function set size and parameters for the main view.
     *
     * @param currentEditedPane
     */
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

            Scene scene = new Scene(root);
            mainStage.setScene(scene);
            mainStage.show();
            mainStage.setMaximized(true);

        } catch (IOException e) {
            System.out.println("Can't load current editedLoader");
            System.out.println(e);
        }
    }

    /**
     *This function initialise the connection view.
     *
     * @throws MalformedURLException
     */
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

    /**
     *This function initialise the label of the main view.
     *
     * @throws MalformedURLException
     */
    public void initLabCompanionPanel() throws MalformedURLException {
        reloadPlugins();
        try {
            if(connectedEmployee.getType() == Doctor.DOCTOR_TYPE) {
                initWelcomePanel();
            }
            else if (connectedEmployee.getType() == Secretary.SECRETARY_TYPE) {
                initWelcomePanel();
            }
        } catch (IOException ex) {
            Logger.getLogger(LabCompanion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     *This function initialise the pluginManager view.
     *
     * @throws MalformedURLException
     */
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

    /**
     *This function initialise the plugin view.
     *
     * @param toLoad
     * @throws MalformedURLException
     */
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
        try {
            this.initConnectionPanel();
        } catch (MalformedURLException ex) {
            Logger.getLogger(LabCompanion.class.getName()).log(Level.SEVERE, null, ex);
        }
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
     * @throws MalformedURLException
     */
    public void initWelcomePanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/welcome.fxml").toUri().toURL();
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

    /**
     *This function init the doctor Analysis view.
     *
     * @throws MalformedURLException
     */
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

    /**
     *This function init the doctor study view.
     *
     * @throws MalformedURLException
     */
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

    /**
     *This function init the analysis view.
     *
     * @param analysis
     * @throws MalformedURLException
     */
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

    /**
     *This function init the analysis creation view.
     *
     * @throws MalformedURLException
     */
    public void initAnalysisCreationPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/analysisCreation.fxml").toUri().toURL();
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

    /**
     *This function init the study Creation view.
     *
     * @throws MalformedURLException
     */
    public void initStudyCreationPane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/studyCreation.fxml").toUri().toURL();
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

    /**
     *This function init the study view.
     *
     * @param survey
     * @throws MalformedURLException
     */
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

    /**
     *This function init the bill list view.
     *
     * @throws MalformedURLException
     */
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

    /**
     *This function init the bill creation view.
     *
     * @param appointment
     * @throws MalformedURLException
     */
    public void initBillCreationCasePane(Appointment appointment) throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/billCreation.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        BillCreationController controller = loader.getController();
        controller.setAppointment(appointment);
        this.setCurrentEditedPane(pane);
    }

    /**
     *This function init the doctor bill creation view for update.
     *
     * @param bill
     * @throws MalformedURLException
     */
    public void initBillCreationUpdateCasePane(Bill bill) throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/billCreation.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        BillCreationController controller = loader.getController();
        controller.setPatient(bill);
        this.setCurrentEditedPane(pane);
    }

    /**
     *This function init the doctor patient view.
     *
     * @throws MalformedURLException
     */
    public void initDoctorPatientCasePane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/doctorPatientCases.fxml").toUri().toURL();
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

    /**
     *This function init the patient creation view.
     *
     * @throws MalformedURLException
     */
    public void initCreatePatientCasePane() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/patientCreation.fxml").toUri().toURL();
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

    /**
     *This function init the patient creation view for update.
     *
     * @param patient
     * @throws MalformedURLException
     */
    public void initCreatePatientUpdateCasePane(Patient patient) throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/patientCreation.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }
        PatientCreationController controller = loader.getController();
        controller.setPatient(patient);
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the patient view.
     *
     * @param patient
     * @throws MalformedURLException
     */
    public void initPatientCaseOverviewPane(Patient patient) throws MalformedURLException {
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

        PatientCaseOverviewController controller = loader.getController();
        controller.setPatient(patient);
        this.setCurrentEditedPane(pane);

    }

    /**
     *This function init the visit creation view.
     *
     * @param patientId
     * @throws MalformedURLException
     */
    public void initVisitCreationPane(String patientId) throws MalformedURLException {
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
            DialogPane dialogPane = alert.getDialogPane();
            URL cssURL = getClass().getResource("main/java/style/alertPane.css");
            
            if(cssURL != null) {
                dialogPane.getStylesheets().add(cssURL.toExternalForm());
    //            dialogPane.getStylesheets().add(Paths.get("src/main/java/style/alertPane.css").toUri().toURL().toExternalForm());
                dialogPane.getStyleClass().add("alert-pane");
            }
            
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
        DialogPane dialogPane = alert.getDialogPane();
        URL cssURL = getClass().getResource("main/java/style/alertPane.css");

        if(cssURL != null) {
            dialogPane.getStylesheets().add(cssURL.toExternalForm());
            //            dialogPane.getStylesheets().add(Paths.get("src/main/java/style/alertPane.css").toUri().toURL().toExternalForm());
            dialogPane.getStyleClass().add("alert-pane");
        }

        alert.showAndWait();
    }

    /**
     *This function init the parameters pane view.
     *
     * @param employee
     * @throws MalformedURLException
     */
    public void initParametersPane(Employee employee) throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/parameters.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        Pane pane = null;
        try {
            pane = (Pane) loader.load();
        } catch (IOException e) {
            // TODO
            e.printStackTrace();
        }

        ParametersController controller = loader.getController();
        controller.setEmployee(employee);
        this.setCurrentEditedPane(pane);

    }
}

