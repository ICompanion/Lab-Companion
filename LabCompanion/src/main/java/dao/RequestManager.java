package dao;

import business.*;
import org.json.JSONObject;
import java.text.SimpleDateFormat;
import java.util.*;

public class RequestManager {

    private static String url = "http://localhost:8080";

    public static String getUrl() {
        return url;
    }

    public static void setUrl(String url) {
        RequestManager.url = url;
    }

    public static boolean connect(String username, String password) throws Exception {

        ArrayList<JSONObject> data = RequestHelper.get(url + "/authenticate/" + username + "/" + password);

        if(!data.isEmpty()) return true;

        return false;
    }


    public static ArrayList<Analysis> getAnalysis(Doctor doctor) throws Exception {

        ArrayList<JSONObject> data = RequestHelper.get(url + "/analyse/employe/" + doctor.getUsername());

        if(data != null)
        {
            ArrayList<Analysis> analysisList = new ArrayList<Analysis>();
            ArrayList<AnalysisResult> analysisResults;

            Iterator<JSONObject> it = data.iterator();
            while(it.hasNext()){

                SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");
                JSONObject obj = it.next();

                analysisResults = getAnalysisResults(obj.getString("code_analyse"));
                Patient patient = getPatientById(obj.getInt("patient_id"));
                Analysis analysis = new Analysis(obj.getInt("id"), obj.getString("code_analyse"),
                                                date.parse(obj.getString("date_analyse")),
                                                obj.get("description").toString(), analysisResults, patient, doctor);

                analysisList.add(analysis);
            }

            return analysisList;
        }
        return null;
    }

    public static ArrayList<AnalysisResult> getAnalysisResults(String code)throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/analyse/"+ code +"/resultats");

        if(data != null)
        {
            ArrayList<AnalysisResult> resultList = new ArrayList<AnalysisResult>();

            Iterator<JSONObject> it = data.iterator();
            while(it.hasNext()){
                JSONObject obj = it.next();

                Result result = getResult(obj.getInt("id"));

                AnalysisResult analysisResult = new AnalysisResult(obj.getInt("id"), obj.getFloat("valeur"),
                        result);

                resultList.add(analysisResult);
            }

            return resultList;
        }
        return null;
    }

    public static Result getResult(int id) throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/resultat/" + id);

        if(data != null) {

            Iterator<JSONObject> it = data.iterator();
            JSONObject obj = it.next();

            Category category = getResultCategory(obj.getInt("id"));

            Result result = new Result(obj.getInt("id"), obj.getString("nom"), obj.getString("unit"),
                                        obj.getFloat("valeur_min"), obj.getFloat("valeur_max"), category);

            return result;
        }
        return null;
    }

    public static Category getResultCategory(int id)throws Exception
    {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/resultat/"+id+"/categorie");
        if(data != null){
            Category category;
            Iterator<JSONObject> it = data.iterator();

            JSONObject obj = it.next();

            category = new Category(obj.getInt("id"), obj.getString("nom"));

            return category;
        }
        return null;
    }

    // TODO
    public static ArrayList<Survey> getSurveys(Doctor doctor) {
        return null;
    }

    public static ArrayList<Patient> getPatients() throws Exception {

        ArrayList<JSONObject> data = RequestHelper.get(url + "/patient/all");

        if(data != null) {

            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");
            Iterator<JSONObject> it = data.iterator();
            ArrayList<Patient> patientList = new ArrayList<Patient>();

            while (it.hasNext())
            {
                JSONObject obj = it.next();

                Patient patient = new Patient(obj.getInt("id"), obj.getString("nom"), obj.getString("prenom"),
                                            date.parse(obj.getString("date_naissance")), obj.getString("mail"),
                                            obj.getInt("num_secu"), obj.getString("adresse"),
                                            obj.getString("ville"), obj.getInt("cp"), obj.getString("identifiant"),
                                            obj.getString("password"));

                patientList.add(patient);
            }
            return patientList;
        }
        return null;
    }

    public static Patient getPatientById(int id)throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/patient/" + id);
        if(data != null){
            Patient patient;
            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");
            Iterator<JSONObject> it = data.iterator();

            JSONObject obj = it.next();

            patient = new Patient(obj.getInt("id"), obj.getString("nom"), obj.getString("prenom"),
                                    date.parse(obj.getString("date_naissance")), obj.getString("mail"),
                                    obj.getInt("num_secu"), obj.getString("adresse"),
                                    obj.getString("ville"), obj.getInt("cp"), obj.getString("identifiant"),
                                    obj.getString("password"));

            return patient;
        }
        return null;
    }

    public Doctor getDoctorById(int id) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/employe/" + id);
        if(data != null){
            Doctor doctor;
            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");
            Iterator<JSONObject> it = data.iterator();

            JSONObject obj = it.next();

            doctor = new Doctor(obj.getInt("id"), obj.getString("nom"), obj.getString("prenom"),
                                obj.getInt("employe_type"),obj.getString("mail"),
                                date.parse(obj.getString("date_embauche")), obj.getString("type_contrat"),
                                obj.getString("adresse"), obj.getString("ville"), obj.getInt("cp"),
                                obj.getString("identifiant"), obj.getString("password"),
                                obj.getInt("num_secu"));

            return doctor;
        }
        return null;
    }

    // TODO
    public ArrayList<Category> getCategories() {
        return null;
    }

    // TODO
    public ArrayList<Appointment> getPatientAppointments(Patient patient) {
        return null;
    }

    // TODO
    public void addPatientToDatabase(Patient patient) {

    }

    // TODO
    public void addAnalysisToDatabase(Analysis analysis) {

    }

    // TODO
    public void addResultToDatabase(Result result) {

    }

    // TODO
    public void addCategoryToDatabase(Category category) {

    }

    // TODO
    public void addSurveyToDatabase(Survey survey) {

    }

    // TODO
    public void addQuestionToDatabase(Question question) {

    }

    // TODO
    public void addProposalToDatabase(Proposal proposal) {

    }

    // TODO
    public void addAppointmentToDatabase(Appointment appointment) {

    }


    private ArrayList resultToArrayList(String result, ArrayList arrayList){


        return arrayList;
    }
}
