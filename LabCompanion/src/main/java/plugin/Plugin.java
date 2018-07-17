package plugin;

import javafx.scene.layout.Pane;

public interface Plugin {

    /**
     * Return plugin's name.
     * @return plugin's name
     */
    String getName();

    /**
     * Returns plugin's name to be displayed in Menu.
     * @return plusgin's displayable name
     */

    String getDisplayName();
    /**
     * Returns plugin's description.
     * @return plugin's description.
     */
    String getDescription();

    /**
     * Return the type of employee this plugin is for.
     * @return plugin's employee type.
     */
    int getEmployeeType();

    /**
     * Return the Pane to include in user's view.
     * @return plugin's pane.
     */
    Pane getPane();

}
