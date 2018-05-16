package Utils;

import java.util.HashMap;

import netscape.javascript.JSObject;
import org.json.*;

public class JSONParser{

    private static HashMap<String, String> parsedResult;
    private static JSObject jsonResult;

    public static HashMap<String, String> parseResults(){

        return parsedResult;
    }

    public static JSObject makeObject(HashMap<String, String> values){

        return jsonResult;
    }

    private void setParsedResult(HashMap<String, String> result){
        this.parsedResult = result;
    }

    public HashMap<String, String> getParsedResult(){
        return parsedResult;
    }
}
