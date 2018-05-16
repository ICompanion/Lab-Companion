package dao;

import jdk.nashorn.internal.parser.JSONParser;
import java.net.ConnectException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

public class RequestHelper {

    private static URL obj;

    // TODO find a good api for JSON (not org.json ! :) )
    public static boolean post(String url,
                                  HashMap<String, String> parameters) throws ConnectException {
        JSONParser.quote("ok");
        try{
            obj = new URL(url);
        }catch(Exception ex){

        }

        try{

            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            int responseCode = con.getResponseCode();

            if(responseCode == HttpURLConnection.HTTP_OK) return true;

            else if(responseCode == HttpURLConnection.HTTP_NOT_FOUND) return false;
        }catch(Exception ex)
        {
            throw  new ConnectException("Unable to connect to the API");
        }

        return false;
    }

    // TODO
    public static boolean get(String url,
                               HashMap<String, String> parameters) {
        return false;
    }
}
