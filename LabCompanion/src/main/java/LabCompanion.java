import controller.LabCompanionController;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
import sample.Controller;

import java.awt.*;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Paths;
import java.util.logging.Logger;

public class LabCompanion extends Application {

    private Parent root;

    private Stage mainStage;

    @Override
    public void start(Stage primaryStage) throws Exception{
        this.mainStage = primaryStage;

        URL loaded = Paths.get("src/main/java/view/labCompanion.fxml").toUri().toURL();
        FXMLLoader loader = new FXMLLoader(loaded);
        root = (VBox) loader.load();

        Scene scene = new Scene(root);
        primaryStage.setScene(scene);
        primaryStage.setMaximized(true);
        primaryStage.setResizable(false);
        primaryStage.show();

        initConnectionPanel();

    }


    public static void main(String[] args) {
        launch(args);
    }

    private void setCurrentEditedPane(FXMLLoader currentEditedLoader) {
        try {
            FXMLLoader rootLoader = new FXMLLoader();
            URL rootUrl = Paths.get("src/main/java/view/labCompanion.fxml").toUri().toURL();
            rootLoader.setLocation(rootUrl);
            root = (VBox) rootLoader.load();
            LabCompanionController labCompanionController =
                    (LabCompanionController) rootLoader.getController();
            Pane currentEditedNode = currentEditedLoader.load();
            labCompanionController.setEditedPane(currentEditedNode);

            mainStage.close();
            Scene scene = new Scene(root);
            mainStage.setScene(scene);
            mainStage.show();

        } catch (IOException e) {
            System.out.println("Can't load current editedLoader");
        }
    }

    private void initConnectionPanel() throws MalformedURLException {
        FXMLLoader loader = new FXMLLoader();
        URL rootUrl = Paths.get("src/main/java/view/doctorWelcome.fxml").toUri().toURL();
        loader.setLocation(rootUrl);
        this.setCurrentEditedPane(loader);

    }

}

