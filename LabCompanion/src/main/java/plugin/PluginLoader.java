package plugin;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.jar.JarFile;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *This class is.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class PluginLoader {
    
    /**
     * Files to load.
     */
    private String[] files;
    /**
     * Loaded plugins
     */
    private final ArrayList<Plugin> plugins;

    /**
     * Creates a new instance of PluginLoader given the files to load.
     * @param files files to load
     */
    public PluginLoader(String[] files) {
        this.files = files;
        this.plugins = new ArrayList<>();
    }
    
    public PluginLoader(String folderPath) {
        Path folder = Paths.get(folderPath);
        this.plugins = new ArrayList<>();
        if(Files.exists(folder)){
            ArrayList<String> folderFilesPath = new ArrayList<>();
            if(Files.isDirectory(folder)) {
                try {
                    Files.list(folder).forEach(filePath ->
                            folderFilesPath.add(filePath.toString()));
                } catch (IOException ex) {
                    Logger.getLogger(PluginLoader.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            setFiles(folderFilesPath.toArray(new String[0]));
        }
    }

    /**
     * Set files to load for thi loader.
     * @param files files to load.
     */
    public void setFiles(String[] files) {
        this.files = files;
    }

    /**
     * Get loaded plugins.
     * @return loaded plugins.
     */
    public ArrayList<Plugin> getPlugins(){
        try {
            this.initializeLoader();
        } catch (Exception ex) {
            return null;
        }
        return this.plugins;
    }

    /**
     * Loads the files.
     * Check if .class files implements plugin.Plugin
     * Creates an instance for each one.
     * @throws Exception If there is no files to load.
     */
    private void initializeLoader() throws Exception {
        //Check if files to load are initialized
        if(this.files == null || this.files.length == 0 ){
            throw new Exception("Pas de fichier spécifié");
        }

        File[] f = new File[this.files.length];

        for (int i = 0; i < f.length; i++) {
            f[i] = new File(this.files[i]);
            URI uri = f[i].toURI();
            //to enable loading jar that are not currently in the software
            URLClassLoader loader = new URLClassLoader(new URL[] {uri.toURL()});
            //load jar
            JarFile jar = new JarFile(f[i].getAbsolutePath());
            //get jar content
            Enumeration enumeration = jar.entries();

            // Read each jar element
            while(enumeration.hasMoreElements()){
                String currentFile = enumeration.nextElement().toString();
                // Ensure current file is a .class
                if(currentFile.length() > 6 && currentFile.substring(
                        currentFile.length()-6).compareTo(".class") == 0) {

                    currentFile = currentFile.substring(0,currentFile.length()-6);
                    // Replacement to write in java format
                    currentFile = currentFile.replaceAll("/",".");

                    Class tmpClass = Class.forName(currentFile ,true,loader);

                    for (Class current : tmpClass.getInterfaces()) {
                        //Check if actual file implements plugin
                        if (current.getName().equals("plugin.Plugin")) {
                            // newInstance to permit cast
                            this.plugins.add((Plugin) tmpClass.newInstance());
                        }
                    }
                }
            }
        }
    }
}
