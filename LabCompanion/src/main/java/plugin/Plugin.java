package plugin;

import javafx.scene.Node;

public interface Plugin {

    /**
     * Return plugin's name to include in Menu.
     * @return plugin's name
     */
    String getName();

    /**
     * Returns plugin's description.
     * @return plugin's description.
     */
    String getDescription();

    /**
     * Return the Node to include in View to be implemented in user's view.
     * @return node view.
     */
    Node getView();

}
