package plugin;

import java.io.File;
import java.net.URI;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.jar.JarFile;

public class PluginLoader {

    /**
     * Files to load.
     */
    private String[] files;
    /**
     * Loaded plugins
     */
    private ArrayList<Plugin> plugins;

    /**
     * Creates a new instance of PluginLoader given the files to load.
     * @param files files to load
     */
    public PluginLoader(String[] files) {
        this.files = files;
        this.plugins = new ArrayList<>();
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
    public ArrayList<Plugin> getPlugins() {
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
                String tmp = enumeration.nextElement().toString();
                // Ensure current file is a .class
                if(tmp.length() > 6 && tmp.substring(tmp.length()-6).compareTo(".class") == 0) {

                    tmp = tmp.substring(0,tmp.length()-6);
                    // Remplacement to write in java format
                    tmp = tmp.replaceAll("/",".");

                    Class tmpClass = Class.forName(tmp ,true,loader);

                    for(int j = 0 ; j < tmpClass.getInterfaces().length; j ++ ){
                        //Check if actual file implements plugin
                        if(tmpClass.getInterfaces()[j].getName().toString().equals("plugins.Plugin") ) {
                            // newInstance to permit cast
                            this.plugins.add((Plugin) tmpClass.newInstance());
                        }
                    }
                }
            }
        }
    }


}
