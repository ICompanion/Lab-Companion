package controller;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;

public class AnalysisResultOverviewController {

    @FXML
    private Label resultName;

    @FXML
    private TableView resultTable;

    @FXML
    private TableColumn elementNameColumn;

    @FXML
    private TableColumn neededQuantityColumn;

    @FXML
    private TableColumn currentQuantityColumn;
}
