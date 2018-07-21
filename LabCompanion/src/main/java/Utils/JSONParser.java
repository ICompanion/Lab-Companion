package Utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.json.*;


/**
 *
 *This class is an utilities class for JSON parsing.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class JSONParser{

    private static HashMap<String, Object> parsedResult = new HashMap<String, Object>();
    private static JSONObject jsonResult;

    /**
     * This function is a parser of JSON Object into an HashMap.
     *
     * @param object
     * @return a HashMap
     * @throws JSONException
     */
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

    /**
     *This function make an JSON Object from an Hashmap
     *
     * @param values
     * @return a Json Object
     */
    public static JSONObject makeObject(HashMap<String, Object> values){

        jsonResult = new JSONObject(values);
        return jsonResult;
    }

    /**
     *This function make an JSON Object List from an Array
     *
     * @param stringArray
     * @return a List of Json Object
     */
    public static ArrayList<JSONObject> makeObjectList(String stringArray){
        ArrayList<JSONObject> jsonArray = new ArrayList<JSONObject>();

        String[] array;
        stringArray = stringArray.replace("[", "").replace("]", "");
        array = stringArray.split("},");
        for(int i = 0; i < array.length; i++){
            if(i != array.length -1)
            {
                array[i] += "}";
            }
            jsonArray.add(new JSONObject(array[i]));

        }

        return jsonArray;
    }
}
