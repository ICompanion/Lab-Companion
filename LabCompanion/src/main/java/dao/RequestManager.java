package dao;

import Utils.JSONParser;
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

    //Tested
    public static Employee connect(String username, String password) throws Exception {

        ArrayList<JSONObject> data = RequestHelper.get(url + "/authenticate/employee/" + username + "/" + password);

        if(!data.isEmpty()) {
            JSONObject employeeData = data.get(0);
            EmployeeBuilder employeeBuilder = new EmployeeBuilder();
            Employee connectedEmployee = employeeBuilder
                    .setType(employeeData.getInt("employe_type"))
                    .setAdress(employeeData.getString("adresse"))
                    .setCity(employeeData.getString("ville"))
                    .setContractType(employeeData.getString("type_contrat"))
                    .setEmploymentDate(employeeData.getString("date_embauche"))
                    .setFirstname(employeeData.getString("prenom"))
                    .setName(employeeData.getString("nom"))
                    .setId(employeeData.getInt("id"))
                    .setUsername(employeeData.getString("identifiant"))
                    .setMail(employeeData.getString("mail"))
                    .setPostalCode(employeeData.getInt("cp"))
                    .setSecuNumber(employeeData.getInt("num_secu"))
                    .createEmployee();

            return connectedEmployee;
        }

        EmployeeBuilder employeeBuilder = new EmployeeBuilder();
        Employee connectedEmployee = employeeBuilder.setUsername("false").createEmployee();

        return connectedEmployee;
    }

    //Tested
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


                Patient patient = getPatientById(obj.getInt("patient_id"));
                Analysis analysis = new Analysis(obj.getInt("id"), obj.getString("code_analyse"),
                                                date.parse(obj.getString("date_analyse")),
                                                obj.get("description").toString(), null, patient, doctor);

                analysisResults = getAnalysisResults(analysis);

                analysis.setResults(analysisResults);

                analysisList.add(analysis);
            }

            return analysisList;
        }
        return null;
    }

    //Tested
    public static Analysis getAnalysisById(int id) throws Exception {

        ArrayList<JSONObject> data = RequestHelper.get(url + "/analyse/id/" + id);

        if(data != null)
        {
            ArrayList<AnalysisResult> analysisResults;

            Iterator<JSONObject> it = data.iterator();

            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");
            JSONObject obj = it.next();

            Doctor doctor = getDoctorById(obj.getInt("employe_id"));
            Patient patient = getPatientByCode(obj.getString("patient_id"));

            Analysis analysis = new Analysis(obj.getInt("id"), obj.getString("code_analyse"),
                    date.parse(obj.getString("date_analyse")),
                    obj.get("description").toString(), null, patient, doctor);

            analysisResults = getAnalysisResults(analysis);

            analysis.setResults(analysisResults);

            return analysis;
        }
        return null;
    }

    //Tested
    public static ArrayList<AnalysisResult> getAnalysisResults(Analysis analysis)throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/analyse/"+ analysis.getCode() +"/resultats");

        if(data != null)
        {
            ArrayList<AnalysisResult> resultList = new ArrayList<AnalysisResult>();

            Iterator<JSONObject> it = data.iterator();
            while(it.hasNext()){
                JSONObject obj = it.next();

                Result result = getResult(obj.getInt("id"));

                AnalysisResult analysisResult = new AnalysisResult(obj.getInt("id"), obj.getFloat("valeur"),
                        result, analysis);

                resultList.add(analysisResult);
            }

            return resultList;
        }
        return null;
    }

    //Tested
    public static Result getResult(int id) throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/resultat/" + id);

        if(data != null) {

            Iterator<JSONObject> it = data.iterator();
            JSONObject obj = it.next();

            Category category = getResultCategory(obj.getInt("id"));

            Result result = new Result(obj.getInt("id"), obj.getString("nom"), obj.getString("unit"),
                                        obj.getFloat("valeur_max"), obj.getFloat("valeur_min"), category);

            return result;
        }
        return null;
    }

    //Tested
    public static Category getResultCategory(int id)throws Exception {
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

    //Tested
    public static ArrayList<Survey> getSurveys(Doctor doctor) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/etude/employe/" + doctor.getId());

        if(data != null)
        {
            ArrayList<Survey> surveyList = new ArrayList<Survey>();
            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");

            Iterator<JSONObject> it = data.iterator();

            while(it.hasNext())
            {
                JSONObject obj = it.next();

                Survey survey = new Survey(obj.getInt("id"), obj.getString("code_etude"),
                                            obj.get("nom").toString(),date.parse(obj.getString("date")),
                                            obj.get("description").toString(), doctor);

                surveyList.add(survey);
            }

            return surveyList;
        }
        return null;
    }

    //Tested
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

    //Tested
    public static Patient getPatientById(int id)throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/patient/id/" + id);

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

    //Tested
    public static Patient getPatientByCode(String code)throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/patient/" + code);

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

    //Tested
    public static Doctor getDoctorById(int id) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/employe/id/" + id);
        if(data != null){
            Doctor doctor;
            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");
            Iterator<JSONObject> it = data.iterator();

            JSONObject obj = it.next();

            doctor = new Doctor(obj.getInt("id"), obj.getString("nom"), obj.getString("prenom"),
                                obj.getInt("employe_type"),obj.getString("mail"),
                                obj.getString("date_embauche"), obj.getString("type_contrat"),
                                obj.getString("adresse"), obj.getString("ville"), obj.getInt("cp"), obj.getString("identifiant"),
                                obj.getInt("num_secu"));

            return doctor;
        }
        return null;
    }

    //Tested
    public static ArrayList<Category> getCategories() throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/categorie/all");

        if(data != null){

            Category category;
            ArrayList<Category> categoryList = new ArrayList<Category>();

            Iterator<JSONObject> it = data.iterator();

            while(it.hasNext())
            {
                JSONObject obj = it.next();

                category = new Category(obj.getInt("id"), obj.getString("nom"));

                categoryList.add(category);
            }

            return categoryList;
        }
        return null;
    }

    //Tested
    public static ArrayList<Appointment> getPatientAppointments(Patient patient) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/visite/patient/" + patient.getId());

        if(data != null) {

            SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd H:mm:ss");

            Iterator<JSONObject> it = data.iterator();
            ArrayList<Appointment> appointmentList = new ArrayList<Appointment>();

            while (it.hasNext())
            {
                JSONObject obj = it.next();

                Doctor doctor = getDoctorById(obj.getInt("employe_id"));

                String dateStr = obj.getString("date").substring(0, 9);

                Appointment appointment = new Appointment(obj.getInt("id"),
                        date.parse(dateStr +" "+ obj.getString("heure")),
                        obj.getString("status"), patient, doctor);

                appointmentList.add(appointment);
            }
            return appointmentList;
        }
        return null;
    }

    //Tested
    public static boolean addPatient(Patient patient) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<String, Object>();

        hashMap.put("nom", patient.getName());
        hashMap.put("prenom", patient.getFirstname());
        hashMap.put("cp", patient.getPostalCode());
        hashMap.put("adresse", patient.getAdress());
        hashMap.put("ville", patient.getCity());
        hashMap.put("num_secu", patient.getSecuNumber());
        hashMap.put("identifiant", patient.getUsername());
        hashMap.put("password",patient.getPasswowrd());
        hashMap.put("mail", patient.getMail());
        hashMap.put("date_naissance", patient.getBirthdate());

        JSONParser.makeObject(hashMap);

        boolean result = RequestHelper.postOrPut(url + "/patient/new", hashMap, "POST");

        return result;

    }

    //Tested
    public static boolean addAnalysis(Analysis analysis) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<String, Object>();

        Patient patient  = analysis.getPatient();
        Doctor doctor = analysis.getDoctor();

        hashMap.put("code_analyse", analysis.getCode());
        hashMap.put("date-analyse", analysis.getDateAnalyse());
        hashMap.put("description", analysis.getDescription());
        hashMap.put("patient_id", patient.getUsername());
        hashMap.put("employe_id", doctor.getId());

        JSONParser.makeObject(hashMap);

        boolean result = RequestHelper.postOrPut(url + "/analyse/new", hashMap, "POST");

        return result;
    }

    //Tested
    public static boolean addAnalysisResult(AnalysisResult analysisResult) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<String, Object>();

        Result result  = analysisResult.getResult();
        Analysis analysis = analysisResult.getAnalysis();

        hashMap.put("valeur", analysisResult.getValue());
        hashMap.put("resultat_id", result.getId());
        hashMap.put("analyse_id", analysis.getCode());

        JSONParser.makeObject(hashMap);

        boolean res = RequestHelper.postOrPut(url + "/analyse/result/new", hashMap, "POST");

        return res;
    }

    //Tested
    public static boolean addResult(Result result)throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        Category category  = result.getCategory();

        hashMap.put("nom", result.getTitle());
        hashMap.put("unit", result.getUnit());
        hashMap.put("valeur_min", result.getValue_min());
        hashMap.put("valeur_max", result.getValue_max());
        hashMap.put("categorie_id", category.getId());

        JSONParser.makeObject(hashMap);

        boolean res = RequestHelper.postOrPut(url + "/resultat/new", hashMap, "POST");

        return res;
    }

    //Tested
    public static boolean addCategory(Category category) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("nom", category.getTitle());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/categorie/new", hashMap, "POST");

        return resultat;
    }

    //Tested
    public static boolean addSurvey(Survey survey) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        Doctor doctor  = survey.getDoctor();

        hashMap.put("nom", survey.getName());
        hashMap.put("code_etude", survey.getCode());
        hashMap.put("date", survey.getDate());
        hashMap.put("description", survey.getDescription());
        hashMap.put("employe_id", doctor.getId());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/etude/new", hashMap, "POST");

        return resultat;
    }

    //Tested
    public static boolean addQuestion(Question question) throws Exception{
        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("intitule", question.getTitle());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/question/new", hashMap, "POST");

        return resultat;
    }

    //Tested
    public static boolean addProposal(Proposal proposal) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("intitule", proposal.getTitle());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/proposition/new", hashMap, "POST");

        return resultat;
    }

    //Tested
    public static boolean addAppointment(Appointment appointment) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd", Locale.FRANCE);

        double hours = appointment.getDate().getTime();

        Patient patient = appointment.getPatient();
        Doctor doctor = appointment.getDoctor();

        hashMap.put("date", date.format(appointment.getDate()));
        hashMap.put("heure", date.format(appointment.getDate().getTime()));
        hashMap.put("status", appointment.getStatus());
        hashMap.put("patient_id", patient.getId());
        hashMap.put("employe_id", doctor.getId());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/visite/new", hashMap, "POST");

        return resultat;
    }

    //Tested
    public static boolean addQuestionToSurvey(Survey survey, Question question) throws Exception{
        HashMap<String, Object> hashMap = new HashMap<>();

        return RequestHelper.postOrPut(url + "/etude/" + survey.getId() + "/addQuestion/" + question.getId(),
                                                        hashMap, "POST");

    }

    //Tested
    public static boolean addProposalToQuestion(Question question, Proposal proposal) throws Exception{
        HashMap<String, Object> hashMap = new HashMap<>();

        boolean result = RequestHelper.postOrPut(url + "/question/" + question.getId() + "/reponse/" + proposal.getId(),
                hashMap, "POST");

        return result;
    }

    //Tested
    public static boolean addParticipation(Survey survey, Patient patient) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("statut", true);

        boolean result = RequestHelper.postOrPut(url + "/etude/" + survey.getId() + "/participate/" + patient.getId(),
                hashMap, "POST");

        return result;
    }

    //Tested
    public static boolean updatePatient(Patient patient) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<String, Object>();

        hashMap.put("nom", patient.getName());
        hashMap.put("prenom", patient.getFirstname());
        hashMap.put("cp", patient.getPostalCode());
        hashMap.put("adresse", patient.getAdress());
        hashMap.put("ville", patient.getCity());
        hashMap.put("num_secu", patient.getSecuNumber());
        hashMap.put("identifiant", patient.getUsername());
        hashMap.put("password",patient.getPasswowrd());
        hashMap.put("mail", patient.getMail());
        hashMap.put("date_naissance", patient.getBirthdate());

        JSONParser.makeObject(hashMap);

        boolean result = RequestHelper.postOrPut(url + "/patient/" + patient.getId(), hashMap, "PUT");

        return result;

    }

    //Tested
    public static boolean updateAppointment(Appointment appointment) throws Exception{
        HashMap<String, Object> hashMap = new HashMap<>();

        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd", Locale.FRANCE);

        double hours = appointment.getDate().getTime();

        Patient patient = appointment.getPatient();
        Doctor doctor = appointment.getDoctor();

        hashMap.put("date", date.format(appointment.getDate()));
        hashMap.put("heure", date.format(appointment.getDate().getTime()));
        hashMap.put("status", appointment.getStatus());
        hashMap.put("patient_id", patient.getId());
        hashMap.put("employe_id", doctor.getId());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/visite/" + appointment.getId(), hashMap, "PUT");

        return resultat;
    }

    //to confirm
    public static boolean removeQuestionFromSurvey(Survey survey, Question question) throws Exception{

        boolean result = RequestHelper.delete(url + "/etude/" + survey.getId() + "/question/" + question.getId());

        return result;
    }
}
