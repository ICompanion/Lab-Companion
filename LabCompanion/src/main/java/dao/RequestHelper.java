package dao;

import org.json.JSONException;
import org.json.JSONObject;
import Utils.JSONParser;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ConnectException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

public class RequestHelper {

    private static URL obj;
    private static HttpURLConnection con;

    public static boolean postOrPut(String url,
                                  HashMap<String, String> parameters,String requestType)throws Exception
    {
        JSONObject body = JSONParser.makeObject(parameters);

        connect(url,requestType, body);

        return getRequestState(con.getResponseCode());
    }

    public static boolean delete(String url)throws Exception
    {
        connect(url,"DELETE", null);

        return getRequestState(con.getResponseCode());
    }

    public static JSONObject get(String url)throws Exception
    {
        connect(url,"GET", null);
        boolean state =  getRequestState(con.getResponseCode());
        if(state){
            JSONObject data =  getResponse();
            return data;
        }

        return null;
    }

    public static void connect(String url, String type, JSONObject body)throws Exception
    {
        try{
            obj = new URL(url);
            con = (HttpURLConnection) obj.openConnection();
            con.setConnectTimeout(5000);
            con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            con.setDoOutput(true);
            con.setDoInput(true);
            con.setRequestMethod(type);

        }catch(ConnectException ex)
        {
            throw  new ConnectException("Unable to connect to the API");
        }

        if(body != null){
            sendBody(body);
        }
    }

    private static void sendBody(JSONObject body) throws IOException
    {
        try{
            OutputStream os = con.getOutputStream();
            os.write(body.toString().getBytes("UTF-8"));
            os.close();
        }
        catch(IOException ex){
            throw new IOException("Error on sending body parameters");
        }
    }

    private static boolean getRequestState(int responseCode)
    {
        boolean state = false;

        if(responseCode == HttpURLConnection.HTTP_OK) state = true;
        else if(responseCode == HttpURLConnection.HTTP_INTERNAL_ERROR) state = false;
        else if(responseCode == HttpURLConnection.HTTP_NOT_FOUND) state = false;

        return state;
    }

    private static JSONObject getResponse() throws IOException, JSONException
    {
        JSONObject jsonObject;
        try{
            InputStream in = new BufferedInputStream(con.getInputStream());
            String result = new String (in.toString().getBytes(), "UTF-8");
            jsonObject = new JSONObject(result);
        }
        catch(IOException ex){
            throw new IOException("Error on reading API response");
        }

        return jsonObject;
    }
}


