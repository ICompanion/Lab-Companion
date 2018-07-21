/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import business.LabCompanion;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import plugin.Plugin;
import plugin.PluginManager;
import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

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

    ObservableList<Record> dataList = FXCollections.observableArrayList();

    /**
     * This function initialise the view and make treatments before rendering (tableView initialisation and getting plugins).
     *
     * @throws Exception
     */
    @FXML
    public void initialize() {
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
                    if(seletedItem.getPluginActiveState().equals("Non")) {
                        PluginOverviewController.this.activatePluginButton.setDisable(false);
                        PluginOverviewController.this.desactivatePluginButton.setDisable(true);
                    } else {
                        PluginOverviewController.this.activatePluginButton.setDisable(true);
                        PluginOverviewController.this.desactivatePluginButton.setDisable(false);
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
        this.isActiveColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginActiveState"));
        
        ArrayList<Plugin> loadedPlugins = LabCompanion.singleton.getLoadedPlugins();
        if(loadedPlugins!=null) {
            for (Plugin current : loadedPlugins) {
                Record toAdd = new Record(
                        current.getName(),
                        current.getDescription(),
                        current.getAuthor(),
                        LabCompanion.singleton.getActivePlugins().contains(current) ? "Oui" : "Non");
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
            toAdd = PluginManager.showPluginChooser();
        } catch (IOException ex) {
            Logger.getLogger(PluginOverviewController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if(toAdd!=null) {
            LabCompanion.singleton.addToActivePluginList(toAdd);
        }
        Plugin added = toAdd.get(0);
        dataList.add(new Record(added.getName(),
                added.getDescription(),
                added.getAuthor(),
                "Oui"));
        this.pluginTableView.refresh();
    }

    /**
     * This function activate a plugin.
     *
     * @param event
     */
    @FXML
    private void activatePluginButtonAction(ActionEvent event) {
        Record seletedItem = (Record) this.pluginTableView
            .getSelectionModel().getSelectedItem();
        PluginManager.activatePlugin(seletedItem.getPluginName());
        seletedItem.setPluginActiveState("Oui");
    }

    /**
     * This function desactivate a plugin.
     *
     * @param event
     */
    @FXML
    private void desactivatePluginButtonAction(ActionEvent event) {
        Record seletedItem = (Record) this.pluginTableView
                .getSelectionModel().getSelectedItem();
        PluginManager.desactivatePlugin(seletedItem.getPluginName());
        seletedItem.setPluginActiveState("Non");
    }

    /**
     * Class which modelise a tableView row.
     */
    public class Record {
        private final SimpleStringProperty pluginName;
        private final SimpleStringProperty pluginDescription;
        private final SimpleStringProperty pluginAuthor;
        private final SimpleStringProperty pluginActiveState;

        public Record(String pluginName, String pluginDescription,
                String pluginAuthor, String pluginActiveState) {
            this.pluginName = new SimpleStringProperty(pluginName);
            this.pluginDescription = new SimpleStringProperty(pluginDescription);
            this.pluginAuthor = new SimpleStringProperty(pluginAuthor);
            this.pluginActiveState = new SimpleStringProperty(pluginActiveState);
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

        public String getPluginActiveState() {
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
        
        public void setPluginActiveState(String newValue) {
            pluginAuthor.set(newValue);
        }
        
    }
    
}
