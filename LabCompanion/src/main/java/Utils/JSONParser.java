package Utils;

import java.util.HashMap;
import java.util.Iterator;

import org.json.*;

public class JSONParser{

    private static HashMap<String, Object> parsedResult = new HashMap<String, Object>();
    private static JSONObject jsonResult;

    public static HashMap<String, Object> parseResults(JSONObject object)throws JSONException{

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

    public static JSONObject makeObject(HashMap<String, Object> values){

        jsonResult = new JSONObject(values);
        return jsonResult;
    }
}
