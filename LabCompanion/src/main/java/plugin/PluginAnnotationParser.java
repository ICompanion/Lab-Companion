package plugin;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;

import business.LabCompanion;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import pluginmanager.annotation.Plugin;

/**
 * This class gives methods to parse a given plugin.
 */
public class PluginAnnotationParser {

    /**
     * Write the given plugin class in the user plugin configuration file.
     * @param pluginToAdd plugin to write
     */
    public static void writeInConfFile(pluginmanager.main.Plugin pluginToAdd)  {
        Plugin pluginAnnotation = (Plugin)  pluginToAdd.getClass()
                .getAnnotation(Plugin.class);

        try {
            Path confPath = Paths.get(new PluginManager().pluginConfFilePath);
            if(!Files.exists(confPath)) {
                createConfFile();
            }
            JSONParser parser = new JSONParser();
            FileReader reader = new FileReader(confPath.toString());
            Object test = parser.parse(reader);
            JSONObject confObject = (JSONObject) test;
            JSONObject pluginsObject = (JSONObject) confObject.get("plugins");

            boolean found = false;
            int i = 1;
            while(!found && i < pluginsObject.size()+1) {
                JSONObject currentPluginObject = (JSONObject) pluginsObject.get(String.valueOf(i));
                if(currentPluginObject!= null &&
                        currentPluginObject.get("name").equals(pluginAnnotation.name())) {
                    found = true;
                }
                i++;
            }
            if(!found) {
                HashMap map = new HashMap();
                JSONObject onePlugin = new JSONObject();
                onePlugin.put("name", pluginAnnotation.name());
                onePlugin.put("description", pluginAnnotation.description());
                onePlugin.put("version", pluginAnnotation.version());
                onePlugin.put("author", pluginAnnotation.author());
                onePlugin.put("isActive", true);
                pluginsObject.put(pluginsObject.size()+1, onePlugin);
            }
            PrintWriter writer = new PrintWriter(confPath.toString());
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
     * Creates the user plugin configuration file.
     * @throws IOException when the file can't be created
     */
    private static void createConfFile() throws IOException {
        Path confPath = Paths.get(new PluginManager().pluginConfFilePath);
        Files.createFile(confPath);

        JSONObject conf = new JSONObject();
        JSONObject pluginsObject = new JSONObject();
        conf.put("plugins", pluginsObject);

        FileWriter writer = new FileWriter(confPath.toString());
        writer.write(conf.toJSONString());
        writer.flush();
        writer.close();
    }
}
