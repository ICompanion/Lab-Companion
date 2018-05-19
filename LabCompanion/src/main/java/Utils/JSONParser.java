package Utils;

import java.util.HashMap;
import java.util.Iterator;

import org.json.*;

public class JSONParser{

    private static HashMap<String, Object> parsedResult;
    private static JSONObject jsonResult;

    public static HashMap<String, Object> parseResults(JSONObject object){

        Iterator<String> keysItr = object.keys();
        while(keysItr.hasNext()) {
            String key = keysItr.next();
            Object value = object.get(key);

            if(value instanceof JSONObject) {
                value = parseResults((JSONObject) value);
            }
            parsedResult.put(key, value);
        }

        return parsedResult;
    }

    public static JSONObject makeObject(HashMap<String, String> values){

        jsonResult = new JSONObject(values);
        return jsonResult;
    }
}
