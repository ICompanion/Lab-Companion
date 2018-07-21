package plugin;

import business.LabCompanion;
import javafx.stage.FileChooser;

import java.io.File;
import java.io.IOException;
import java.nio.file.CopyOption;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
/**
 *
 *This class
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class PluginChooser {

    /**
     *
     * @return
     * @throws IOException
     */
    public static ArrayList<Plugin> showPluginChooser() throws IOException {
        FileChooser chooser = new FileChooser();
        chooser.setTitle("Choix du Plugin à importer");

        File seletecFile = chooser.showOpenDialog(null);
        
        Path userLabCompanionFolder = 
                Paths.get(LabCompanion.USER_LAB_COMPANION_FOLDER);
        Path userLabCompanionActiveFolder = 
                Paths.get(LabCompanion.USER_LAB_COMPANION_PLUGIN_ACTIVE_FOLDER);
        Path userLabCompanionInactiveFolder = 
                Paths.get(LabCompanion.USER_LAB_COMPANION_PLUGIN_INACTIVE_FOLDER);

        if(!Files.exists(userLabCompanionFolder)) {
            Files.createDirectory(userLabCompanionFolder);
            Files.createDirectory(userLabCompanionActiveFolder);
            Files.createDirectory(userLabCompanionInactiveFolder);
        }
        
        Path currentPath = Paths.get(seletecFile.getPath());
        
        CopyOption[] options = new CopyOption[] {
                StandardCopyOption.REPLACE_EXISTING
        }; 
        
        Path targetPath = userLabCompanionActiveFolder.resolve(
                currentPath.getFileName());
        
        Files.move(currentPath, targetPath, options);
        
        PluginLoader loader = new PluginLoader(new String[] {targetPath.toString()});
        
        return loader.getPlugins();
    }
}
