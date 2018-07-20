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

    private void setMenuButtonsBounds(Button btn){
        btn.setPrefWidth(menuListView.getMaxWidth()-15);
        btn.getStyleClass().add("btn_primary");
        btn.setEffect(new DropShadow());
    }

    @FXML
    private void disconnectButtonAction(ActionEvent event) {
        LabCompanion.singleton.disconnect();
    }

    public void setEditedPane(Pane editedPane, Employee connectedEmployee) {
        this.initValues(connectedEmployee);
        this.editedPane = editedPane;
        this.editedPane.setPrefWidth(this.maxPaneWidth);
        this.editedPane.setPrefHeight(this.maxPaneHeight);
        this.editedContainer.getItems().set(1, this.editedPane);
    }

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

    private void initSecretaryMenu() {
        Button rdvButton = new Button("Rendez-vous");
        rdvButton.setOnAction(this::rdvButtonHandler);
        Button billButton = new Button("Factures");
        billButton.setOnAction(this::billButtonHandler);
        Button folderButton = new Button("Dossiers");
        folderButton.setOnAction(this::folderButtonHandler);
        Button addFolderButton = new Button("Créer un dossier");
        addFolderButton.setOnAction(this::addFolderButtonHandler);
        Button optionsButtons = new Button("Paramètres");
        optionsButtons.setOnAction(this::optionsButtonHandler);

        //Styling
        setMenuButtonsBounds(rdvButton);
        setMenuButtonsBounds(billButton);
        setMenuButtonsBounds(folderButton);
        setMenuButtonsBounds(addFolderButton);
        setMenuButtonsBounds(optionsButtons);

        //Adding to the menu
        menuButtons.add(rdvButton);
        menuButtons.add(billButton);
        menuButtons.add(folderButton);
        menuButtons.add(addFolderButton);
        menuButtons.add(optionsButtons);
        
        addEmployeePluginsToMenu(Secretary.SECRETARY_TYPE);
    }

    private void initDoctorMenu() {
        Button analysisListButton = new Button("Liste de vos analyses");
        analysisListButton.setOnAction(this::analysisListButtonHandler);
        Button analysisButton = new Button("Créer une analyse");
        analysisButton.setOnAction(this::analysisButtonHandler);
        Button studiesListButton = new Button("Liste de vos études");
        studiesListButton.setOnAction(this::studiesListButtonHandler);
        Button studiesButton = new Button("Créer une étude");
        studiesListButton.setOnAction(this::studiesButtonHandler);
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

    private void rdvButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initVisitCreationPane("1");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    private void billButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initBillOverviewPane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    private void folderButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorPatientCasePane();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    private void addFolderButtonHandler(ActionEvent event) {
        //TODO view
    }

    private void optionsButtonHandler(ActionEvent event) {
        //TODO view
    }

    private void analysisButtonHandler(ActionEvent event) {
        //TODO view
    }

    private void analysisListButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorAnalysisPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    private void studiesButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorStudyPanel(); //TODO change the init
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    private void studiesListButtonHandler(ActionEvent event) {
        try {
            LabCompanion.singleton.initDoctorStudyPanel();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }
}
