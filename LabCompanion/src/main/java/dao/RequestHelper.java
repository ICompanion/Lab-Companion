package dao;

import Utils.JSONParser;
import org.json.*;
import java.io.*;
import java.net.*;
import java.util.*;

public class RequestHelper {

    private static URL obj;
    private static HttpURLConnection con;

    public static boolean postOrPut(String url,
                                  HashMap<String, Object> parameters,String requestType)throws Exception
    {
        JSONObject body = JSONParser.makeObject(parameters);

        connect(url,requestType, body);

        if(con.getErrorStream() == null)
        {
            return getRequestState(con.getResponseCode());

        }
        return false;
    }

    public static boolean delete(String url)throws Exception
    {
        connect(url,"DELETE", null);
        if(con.getErrorStream() == null)
        {
            return getRequestState(con.getResponseCode());

        }
        return false;
    }

    public static ArrayList<JSONObject> get(String url)throws Exception
    {
        connect(url,"GET", null);
        if(con.getErrorStream() == null) {
            boolean state = getRequestState(con.getResponseCode());
            if (state) {
                String data = getResponse();
                ArrayList<JSONObject> arrayList = JSONParser.makeObjectList(data);
                return arrayList;
            }
        }
        return null;
    }

    private static void connect(String url, String type, JSONObject body)throws Exception
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

        if (body != null) {
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

    private static String getResponse() throws IOException, JSONException
    {
        StringBuffer response;
        try{
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);

            }
            in.close();
        }
        catch(IOException ex){
            throw new IOException("Error on reading API response");
        }

        return response.toString();
    }
}


