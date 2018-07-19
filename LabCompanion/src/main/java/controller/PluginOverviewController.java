/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import plugin.PluginChooser;
import business.LabCompanion;
import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.beans.property.SimpleStringProperty;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import plugin.Plugin;

/**
 *
 * @author mickael.vilalard
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
    
    @FXML
    public void initialize() {
        this.pluginTableView.setEditable(false);
        
        this.nameColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginName"));
        this.descriptionColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginDescription"));
        this.authorColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginAuthor"));
        this.isActiveColumn.setCellValueFactory(
                new PropertyValueFactory<Record, String>("pluginActiveState"));
        
        ObservableList<Record> dataList = FXCollections.observableArrayList();
        
        ArrayList<Plugin> loadedPlugins = LabCompanion.singleton.getLoadedPlugins();
        if(loadedPlugins!=null) {
            for (Plugin current : loadedPlugins) {
                Record toAdd = new Record(
                        current.getName(),
                        current.getDescription(),
                        current.getAuthor(),
                        isPluginActive(current));
                dataList.add(toAdd);
            }
        }
        pluginTableView.setItems(dataList);
    }

    private static String isPluginActive(Plugin current) {
        return current.getClass().getName();
    }
    
    @FXML
    private void addPluginButtonAction(ActionEvent event) {
        ArrayList<Plugin> toAdd = null;
        try {
            toAdd = PluginChooser.showPluginChooser();
        } catch (IOException ex) {
            Logger.getLogger(PluginOverviewController.class.getName()).log(Level.SEVERE, null, ex);
        }
        if(toAdd!=null) {
            LabCompanion.singleton.addPluginList(toAdd);
        }
    }
    
    @FXML
    private void activatePluginButtonAction(ActionEvent event) {
        
    }
    
    @FXML
    private void desactivatePluginButtonAction(ActionEvent event) {
        
    }
    
    
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
