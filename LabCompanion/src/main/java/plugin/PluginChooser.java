package plugin;

import javafx.stage.FileChooser;

import java.io.File;

public class PluginChooser {

    private void temp() {
        FileChooser chooser = new FileChooser();
        chooser.setTitle("Choix du Plugin à importer");

        File seletecFile = chooser.showOpenDialog(null);
        PluginLoader loader = new PluginLoader(new String[] {seletecFile.getPath()});

        // @TODO Faire un truc de ce style pour charger le plugin dans l'appli :
        // myView.getPluginMenu.addChild(loader.getPlugins());
    }
}
