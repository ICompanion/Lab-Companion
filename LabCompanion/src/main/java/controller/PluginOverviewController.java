/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import business.LabCompanion;
import java.io.IOException;
import java.util.ArrayList;

import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableCell;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import plugin.PluginManager;
import pluginmanager.main.Plugin;

/**
 *This class is the Plugin view controller in which are events and treatments.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class PluginOverviewController {
    
    @FXML
    private Button addPluginButton;
    
    @FXML
    private Button activatePluginButton;
    
    @FXML
    private Button desactivatePluginButton;
    
    @FXML
    private TableView pluginTableView;
    
    @FXML
    private TableColumn nameColumn;
    
    @FXML
    private TableColumn descriptionColumn;
    
    @FXML
    private TableColumn authorColumn;
    
    @FXML
    private TableColumn isActiveColumn;

    private ObservableList<Record> dataList = FXCollections.observableArrayList();

    private PluginManager manager;

    private ArrayList<Plugin> loadedPlugins;

    /**
     * This function initialise the view and make treatments before rendering (tableView initialisation and getting plugins).
     *
     * @throws Exception
     */
    @FXML
    public void initialize() {
        this.manager = new PluginManager();
        this.pluginTableView.setEditable(false);
        this.activatePluginButton.setDisable(true);
        this.desactivatePluginButton.setDisable(true);
        
        this.pluginTableView.getSelectionModel().selectedItemProperty()
                .addListener(new ChangeListener() {
            @Override
            public void changed(ObservableValue observableValue,
                    Object oldValue, Object newValue) {
                if(PluginOverviewController.this.pluginTableView
                        .getSelectionModel().getSelectedItem() != null) 
                {    
                    Record seletedItem = (Record) PluginOverviewController
                            .this.pluginTableView
                            .getSelectionModel().getSelectedItem();

                    if(seletedItem != null) {
                        updateButtonState(seletedItem.getPluginActiveState());
                    }
                    else {
                        PluginOverviewController.this.activatePluginButton.setDisable(true);
                        PluginOverviewController.this.desactivatePluginButton.setDisable(true);
                    }
                 }
             }
        });
        
        this.nameColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginName"));
        this.descriptionColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginDescription"));
        this.authorColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginAuthor"));
        // set cellfactory
        this.isActiveColumn.setCellFactory(tc -> new TableCell<Record, Boolean>() {
            @Override
            protected void updateItem(Boolean item, boolean empty) {
                super.updateItem(item, empty);
                if(empty) {
                    setText(null);
                    PluginOverviewController.this.activatePluginButton.setDisable(true);
                    PluginOverviewController.this.desactivatePluginButton.setDisable(true);
                } else {
                    setText(item.booleanValue() ? "Oui" : "Non");
                    updateButtonState(item.booleanValue());
                }
            }
        });

        this.isActiveColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginActiveState"));
        
        this.loadedPlugins = LabCompanion.singleton.getPlugins();
        if(this.loadedPlugins!=null) {
            for (Plugin current : this.loadedPlugins) {
                Record toAdd = new Record(
                        current.getName(),
                        current.getDescription(),
                        current.getAuthor(),
                        this.manager.isPluginActive(current));
                dataList.add(toAdd);
            }
        }
        pluginTableView.setItems(dataList);
    }

    /**
     * This function is the add button event which set and add a plugin into the plugin manager.
     *
     * @param event
     */
    @FXML
    private void addPluginButtonAction(ActionEvent event) {
        ArrayList<Plugin> toAdd = null;
        try {
            toAdd = this.manager.showPluginChooser();
        } catch (IOException ex) {
            LabCompanion.singleton.initAlertPane(
                    "Erreur de chargement de plugin",
                    "Le plugin sélectionné est déjà intégré.",
                    "Veuillez choisir un autre plugin à intégrer.");
        }
        if(toAdd!=null) {
            LabCompanion.singleton.addToPluginList(toAdd);
            Plugin added = toAdd.get(0);
            dataList.add(new Record(added.getName(),
                    added.getDescription(),
                    added.getAuthor(),
                    true));
            this.pluginTableView.refresh();
        }
    }

    /**
     * This function change a plugin activation state.
     *
     * @param event
     */
    @FXML
    private void switchPluginStateButtonAction(ActionEvent event) {
        Record selectedItem = (Record) this.pluginTableView
            .getSelectionModel().getSelectedItem();
        Plugin selectedPlugin = null;
        for(Plugin current : this.loadedPlugins) {
            if(current.getName().equals(selectedItem.getPluginName())){
                selectedPlugin = current;
            }
        }
        this.manager.switchPluginActiveState(selectedPlugin);
        selectedItem.setPluginActiveState(this.manager.isPluginActive(selectedPlugin));
        this.pluginTableView.refresh();
    }

    /**
     * This function update the state of activate and desactivate buttons from
     * the plugin active state.
     * @param state
     */
    private void updateButtonState(boolean state) {
        if(state) {
            PluginOverviewController.this.activatePluginButton.setDisable(true);
            PluginOverviewController.this.desactivatePluginButton.setDisable(false);
        } else {
            PluginOverviewController.this.activatePluginButton.setDisable(false);
            PluginOverviewController.this.desactivatePluginButton.setDisable(true);
        }
    }

    /**
     * Class which modelise a tableView row.
     */
    public class Record {
        private final SimpleStringProperty pluginName;
        private final SimpleStringProperty pluginDescription;
        private final SimpleStringProperty pluginAuthor;
        private final SimpleBooleanProperty pluginActiveState;

        public Record(String pluginName, String pluginDescription,
                String pluginAuthor, boolean pluginActiveState) {
            this.pluginName = new SimpleStringProperty(pluginName);
            this.pluginDescription = new SimpleStringProperty(pluginDescription);
            this.pluginAuthor = new SimpleStringProperty(pluginAuthor);
            this.pluginActiveState = new SimpleBooleanProperty(pluginActiveState);
        }

        public String getPluginDescription() {
            return pluginDescription.get();
        }

        public String getPluginAuthor() {
            return pluginAuthor.get();
        }

        public String getPluginName() {
            return pluginName.get();
        }

        public boolean getPluginActiveState() {
            return pluginActiveState.get();
        }
        
        public void setPluginName(String newValue) {
            pluginName.set(newValue);
        }
        
        public void setPluginDescription(String newValue) {
            pluginDescription.set(newValue);
        }
        
        public void setPluginAuthor(String newValue) {
            pluginAuthor.set(newValue);
        }
        
        public void setPluginActiveState(boolean state) {
                pluginActiveState.set(state);
        }
        
    }
    
}
