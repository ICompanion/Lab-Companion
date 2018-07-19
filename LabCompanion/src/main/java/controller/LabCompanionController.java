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

    private double maxPaneHeight, maxPaneWidth;

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
        Button billButton = new Button("Factures");
        Button folderButton = new Button("Dossiers");
        Button addFolderButton = new Button("Créer un dossier");
        Button optionsButtons = new Button("Paramètres");

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
        Button analysisButton = new Button("Créer une analyse");
        Button studiesListButton = new Button("Liste de vos études");
        Button studiesButton = new Button("Créer une étude");
        Button optionsButtons = new Button("Paramètres");

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
        ArrayList<Plugin> loadedPlugins = LabCompanion.singleton.getLoadedPlugins();
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
    
}
