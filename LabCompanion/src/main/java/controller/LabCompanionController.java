package controller;

import business.Doctor;
import business.Employee;
import business.LabCompanion;
import business.Secretary;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.SplitPane;
import javafx.scene.effect.DropShadow;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.Pane;
import java.awt.*;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import plugin.Plugin;

/**
 *This class is the doctor analysis view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class LabCompanionController {

    public static double maxPaneHeight, maxPaneWidth;

    @FXML
    private BorderPane header;

    @FXML
    private Button disconnectButton;

    @FXML
    private Label usernameInfoLabel;

    @FXML
    private ListView<Button> menuListView;
    private ObservableList<Button> menuButtons = FXCollections.observableArrayList();

    @FXML
    private Pane editedPane;

    @FXML
    private SplitPane editedContainer;

    /**
     * This function initialise the view and make treatments before rendering (initialise main panel, and menu).
     *
     * @throws Exception
     */
    @FXML
    public void initialize() {

        //Layout part
        this.maxPaneHeight = Toolkit.getDefaultToolkit().getScreenSize().getHeight() - header.getHeight();
        this.maxPaneWidth = Toolkit.getDefaultToolkit().getScreenSize().getWidth() - menuListView.getMaxWidth();
        editedContainer.setPrefHeight(this.maxPaneHeight);
        menuListView.setPrefHeight(editedContainer.getHeight());

        //Fill the menu

        menuListView.setItems(menuButtons);
    }

    /**
     * This function set button's CSS.
     *
     * @param btn
     */
    private void setMenuButtonsBounds(Button btn){
        btn.setPrefWidth(menuListView.getMaxWidth()-15);
        btn.getStyleClass().add("btn_primary");
        btn.setEffect(new DropShadow());
    }

    /**
     * This function is the disconnect button event which disconnect a user.
     *
     * @param event
     */
    @FXML
    private void disconnectButtonAction(ActionEvent event) {
        LabCompanion.singleton.disconnect();
    }

    /**
     * This function set an editedPane size.
     *
     * @param editedPane
     * @param connectedEmployee
     */
    public void setEditedPane(Pane editedPane, Employee connectedEmployee) {
        this.initValues(connectedEmployee);
        this.editedPane = editedPane;
        this.editedPane.setPrefWidth(this.maxPaneWidth);
        this.editedPane.setPrefHeight(this.maxPaneHeight);
        this.editedContainer.getItems().set(1, this.editedPane);
    }

    /**
     * This function handle employee type to display the associated menu.
     *
     * @param connectedEmployee
     */
    private void initValues(Employee connectedEmployee) {
        this.usernameInfoLabel.setText(connectedEmployee.getFirstname()
                + " " + connectedEmployee.getName());
        if(connectedEmployee.getType() == Secretary.SECRETARY_TYPE) {
            initSecretaryMenu();
        }
        else if (connectedEmployee.getType() == Doctor.DOCTOR_TYPE) {
            initDoctorMenu();
        }
    }

    /**
     * This function initialise the secretary menu.
     */
    private void initSecretaryMenu() {
        Button billButton = new Button("Factures");
        billButton.setOnAction(this::billButtonHandler);
        Button folderButton = new Button("Dossiers");
        folderButton.setOnAction(this::folderButtonHandler);
        Button addFolderButton = new Button("Créer un dossier");
        addFolderButton.setOnAction(this::addFolderButtonHandler);
        Button optionsButtons = new Button("Paramètres");
        optionsButtons.setOnAction(this::optionsButtonHandler);

        //Styling
        setMenuButtonsBounds(billButton);
        setMenuButtonsBounds(folderButton);
        setMenuButtonsBounds(addFolderButton);
        setMenuButtonsBounds(optionsButtons);

        //Adding to the menu
        menuButtons.add(billButton);
        menuButtons.add(folderButton);
        menuButtons.add(addFolderButton);
        menuButtons.add(optionsButtons);
        
        addEmployeePluginsToMenu(Secretary.SECRETARY_TYPE);
    }

    /**
     * This function initialise the doctor menu.
     */
    private void initDoctorMenu() {
        Button analysisListButton = new Button("Liste de vos analyses");
        analysisListButton.setOnAction(this::analysisListButtonHandler);
        Button analysisButton = new Button("Créer une analyse");
        analysisButton.setOnAction(this::analysisButtonHandler);
        Button studiesListButton = new Button("Liste de vos études");
        studiesListButton.setOnAction(this::studiesListButtonHandler);
        Button studiesButton = new Button("Créer une étude");
        studiesButton.setOnAction(this::studiesButtonHandler);
        Button optionsButtons = new Button("Paramètres");
        optionsButtons.setOnAction(this::optionsButtonHandler);

        //Styling
        setMenuButtonsBounds(analysisButton);
        setMenuButtonsBounds(analysisListButton);
        setMenuButtonsBounds(studiesListButton);
        setMenuButtonsBounds(studiesButton);
        setMenuButtonsBounds(optionsButtons);

        //Adding to the menu
        menuButtons.add(analysisButton);
        menuButtons.add(analysisListButton);
        menuButtons.add(studiesListButton);
        menuButtons.add(studiesButton);
        menuButtons.add(optionsButtons);
        menuButtons.add(createPluginManagerButton());
        
        addEmployeePluginsToMenu(Doctor.DOCTOR_TYPE);
    }

    /**
     * This function create a manager for plugins Buttons and its event.
     *
     * @return Button
     */
    private Button createPluginManagerButton() {
        Button pluginManagerButton = new Button("Gestionnaire de plugin");
        setMenuButtonsBounds(pluginManagerButton);
        pluginManagerButton.setOnAction((ActionEvent e) -> {
            try {
                LabCompanion.singleton.initPluginManagerOverview();
            } catch (MalformedURLException ex) {
                Logger.getLogger(LabCompanionController.class.getName()).log(Level.SEVERE, null, ex);
            }
        });
        return pluginManagerButton;
        
    }

    /**
     * This function add plugin button into menu depending of the employee type.
     *
     * @param employeeType
     */
    private void addEmployeePluginsToMenu(int employeeType) {
        ArrayList<Plugin> loadedPlugins = LabCompanion.singleton.getActivePlugins();
        if(loadedPlugins!= null) {
            for(Plugin current : loadedPlugins) {
                if(current.getEmployeeType() == employeeType) {
                    Button currentPluginButton = createPluginButton(current);
                    menuButtons.add(currentPluginButton);
                }
            }
        }
    }

    /**
     * This function create a plugin Button and its event.
     *
     * @param toCreate
     * @return
     */
    private Button createPluginButton(Plugin toCreate) {
        Button pluginButton = new Button(toCreate.getDisplayName());
        setMenuButtonsBounds(pluginButton);
        pluginButton.setOnAction((ActionEvent e) -> {
            try {
                LabCompanion.singleton.initPlugin(toCreate);
            } catch (MalformedURLException ex) {
                Logger.getLogger(LabCompanionController.class.getName()).log(Level.SEVERE, null, ex);
            }
        });
        return pluginButton;
    }

    //Button handlers

    /**
     * This function is a button event to display to the secretaryBillList view.
     *
     * @param event
     */
    private void billButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initSecretaryBillListPane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is a button event to display to the DoctorPatient view.
     *
     * @param event
     */
    private void folderButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorPatientCasePane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is a button event to display to the patientCreation view.
     *
     * @param event
     */
    private void addFolderButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initCreatePatientCasePane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is a button event to display to the parameters view.
     *
     * @param event
     */
    private void optionsButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initParametersPane(LabCompanion.singleton.getConnectedEmployee());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is a button event to display to the analysisCreation view.
     *
     * @param event
     */
    private void analysisButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initAnalysisCreationPane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is a button event to display to the DcotorAnalysis view.
     *
     * @param event
     */
    private void analysisListButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorAnalysisPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is a button event to display to the StudyCreation view.
     *
     * @param event
     */
    private void studiesButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initStudyCreationPane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is a button event to display to the DoctorStudy view.
     *
     * @param event
     */
    private void studiesListButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorStudyPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }
}
