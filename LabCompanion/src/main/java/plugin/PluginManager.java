package plugin;

import business.LabCompanion;
import javafx.stage.FileChooser;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import pluginmanager.main.Plugin;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.CopyOption;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;

/**
 *
 * This class manages plugins.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class PluginManager {

    public String pluginConfFilePath =
            LabCompanion.USER_LAB_COMPANION_CONF_FOLDER + "\\plugins.conf";

    /**
     * Show a dialog to choose a plugin.
     * @return
     * @throws IOException
     */
    public ArrayList<Plugin> showPluginChooser() throws IOException {
        FileChooser chooser = new FileChooser();
        chooser.setTitle("Choix du Plugin à importer");

        File seletecFile = chooser.showOpenDialog(null);

        Path currentPath = null;
        if(seletecFile == null) {
            return null;
        }

        Path userLabCompanionFolder =
                Paths.get(LabCompanion.USER_LAB_COMPANION_FOLDER);
        Path userLabCompanionPluginFolder =
                Paths.get(LabCompanion.USER_LAB_COMPANION_PLUGIN_FOLDER);

        if(!Files.exists(userLabCompanionFolder)) {
            Files.createDirectory(userLabCompanionFolder);
        }
        if(!Files.exists(userLabCompanionPluginFolder)) {
            Files.createDirectory(userLabCompanionPluginFolder);
        }

        currentPath = Paths.get(seletecFile.getPath());

        CopyOption[] options = new CopyOption[] {
                StandardCopyOption.REPLACE_EXISTING
        }; 
        
        Path targetPath = userLabCompanionPluginFolder.resolve(
                currentPath.getFileName());

        if(Files.exists(targetPath)) {
            return null;
        }

        Files.copy(currentPath, targetPath, options);
        
        PluginLoader loader = new PluginLoader(new String[] {targetPath.toString()});
        
        return loader.getPlugins();
    }

    /**
     * Changes the activation state of  a plugin in the conf file.
     * @param plugin
     */
    public void switchPluginActiveState(Plugin plugin) {
        try {
            Path confPath = Paths.get(this.pluginConfFilePath);
            JSONParser parser = new JSONParser();
            FileReader reader = new FileReader(confPath.toString());
            Object test = parser.parse(reader);
            JSONObject confObject = (JSONObject) test;
            JSONObject pluginsObject = (JSONObject) confObject.get("plugins");
            JSONObject toChange = null;
            int i = 1;
            while(toChange == null && i < pluginsObject.size()+1) {
                JSONObject currentPlugin = (JSONObject) pluginsObject.get(
                        String.valueOf(i));
                if(currentPlugin.get("name").equals(plugin.getName())) {
                    toChange = currentPlugin;
                }
                i++;
            }
            boolean activeState = (boolean) toChange.get("isActive");
            toChange.put("isActive", !activeState);
            FileWriter writer = new FileWriter(confPath.toString());
            writer.write(confObject.toJSONString());
            writer.flush();
            writer.close();
        } catch (ParseException | IOException e) {
            LabCompanion.singleton.initAlertPane("Lecture des plugins",
                    "Erreur durant la lecture des plugins",
                    "Le fichier de oonfiguration des plugins n'as pas pu être lu.");
        }
    }

    /**
     * Returns the active state of given plugin.
     * @param plugin plugin to check
     * @return plugin active state
     */
    public boolean isPluginActive(Plugin plugin) {
        try {
            Path confPath = Paths.get(this.pluginConfFilePath);
            JSONParser parser = new JSONParser();
            FileReader reader = new FileReader(confPath.toString());
            Object test = parser.parse(reader);
            JSONObject confObject = (JSONObject) test;
            JSONObject pluginsObject = (JSONObject) confObject.get("plugins");
            JSONObject toChange = null;
            int i = 1;
            while(toChange == null && i < pluginsObject.size()+1) {
                JSONObject currentPlugin = (JSONObject) pluginsObject.get(String.valueOf(i));
                if(currentPlugin.get("name").equals(plugin.getName())) {
                    toChange = currentPlugin;
                }
                i++;
            }
            return (boolean) toChange.get("isActive");
        } catch (ParseException | IOException e) {
            LabCompanion.singleton.initAlertPane("Lecture des plugins",
                    "Erreur durant la lecture des plugins",
                    "Le fichier de oonfiguration des plugins n'as pas pu être lu.");
            return false;
        }
    }


}
