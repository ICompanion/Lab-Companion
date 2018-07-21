package dao;

import Utils.JSONParser;
import business.*;
import org.json.JSONObject;

import java.lang.reflect.Array;
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

    /**
     *
     * @param username
     * @param password
     * @return an Employe or null
     * @throws Exception
     */
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
        return null;
    }

    /**
     *
     * @param doctor
     * @return an analysis list or null
     * @throws Exception
     */
    public static ArrayList<Analysis> getAnalysis(Doctor doctor) throws Exception {

        ArrayList<JSONObject> data = RequestHelper.get(url + "/analyse/employe/" + doctor.getId());

        if(data != null)
        {
            ArrayList<Analysis> analysisList = new ArrayList<Analysis>();
            ArrayList<AnalysisResult> analysisResults;

            Iterator<JSONObject> it = data.iterator();
            while(it.hasNext()){

                SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
                JSONObject obj = it.next();


                Patient patient = getPatientByCode(obj.getString("patient_id"));
                Analysis analysis = new Analysis(obj.getInt("id"), obj.getString("code_analyse"),
                                                date.parse(obj.getString("date_analyse").substring(0,10)),
                                                null, null, patient, doctor);

                analysisResults = getAnalysisResults(analysis);

                analysis.setResults(analysisResults);

                analysisList.add(analysis);
            }

            return analysisList;
        }
        return null;
    }

    /**
     *
     * @param id
     * @return an analysis or null
     * @throws Exception
     */
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

    /**
     *
     * @param code
     * @return an analysis or null
     * @throws Exception
     */
    public static Analysis getAnalysisByCode(String code) throws Exception {

        ArrayList<JSONObject> data = RequestHelper.get(url + "/analyse/" + code);

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


    /**
     *
     * @param analysis
     * @return an analysis list or null
     * @throws Exception
     */
    public static ArrayList<AnalysisResult> getAnalysisResults(Analysis analysis)throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/analyse/"+ analysis.getCode() +"/resultats");

        if(data != null)
        {
            ArrayList<AnalysisResult> resultList = new ArrayList<AnalysisResult>();

            Iterator<JSONObject> it = data.iterator();
            while(it.hasNext()){
                JSONObject obj = it.next();

                Result result = getResult(obj.getInt("resultat_id"));

                AnalysisResult analysisResult = new AnalysisResult(obj.getInt("id"), obj.getFloat("valeur"),
                        result, analysis);

                resultList.add(analysisResult);
            }

            return resultList;
        }
        return null;
    }

    /**
     *
     * @param id
     * @return a result or null
     * @throws Exception
     */
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

    /**
     *
     * @return an result list or null
     * @throws Exception
     */
    public static ArrayList<Result> getAllResult() throws Exception{

        ArrayList<JSONObject> data = RequestHelper.get(url + "/resultat/all/");
        ArrayList<Result> results = new ArrayList<>();

        if(data != null) {

            Iterator<JSONObject> it = data.iterator();
            while(it.hasNext()){
                JSONObject obj = it.next();

                Category category = getResultCategory(obj.getInt("categorie_id"));

                Result result = new Result(obj.getInt("id"), obj.getString("nom"), obj.getString("unit"),
                        obj.getFloat("valeur_max"), obj.getFloat("valeur_min"), category);

                results.add(result);
            }

            return results;
        }
        return null;
    }

    /**
     *
     * @param id
     * @return a category or null
     * @throws Exception
     */
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

    /**
     *
     * @param doctor
     * @return Survey list or null
     * @throws Exception
     */
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
                                            obj.get("description").toString(), doctor, null);

                survey.setQuestions(RequestManager.getQuestions(survey));

                surveyList.add(survey);
            }

            return surveyList;
        }
        return null;
    }

    /**
     *
     * @return a Survey list or null
     * @throws Exception
     */
    public static ArrayList<Survey> getAllSurveys() throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/etude/allSurveyx");

        if(data != null)
        {
            ArrayList<Survey> surveyList = new ArrayList<Survey>();
            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");

            Iterator<JSONObject> it = data.iterator();

            while(it.hasNext())
            {
                JSONObject obj = it.next();
                Doctor doctor = getDoctorById(obj.getInt("employe_id"));

                Survey survey = new Survey(obj.getInt("id"), obj.getString("code_etude"),
                        obj.get("nom").toString(),date.parse(obj.getString("date")),
                        obj.get("description").toString(), doctor, null);

                survey.setQuestions(RequestManager.getQuestions(survey));

                surveyList.add(survey);
            }

            return surveyList;
        }
        return null;
    }

    /**
     *
     * @param survey
     * @return question list or null
     * @throws Exception
     */
    public static ArrayList<Question> getQuestions(Survey survey) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/etude/" + survey.getCode() + "/questions");
        Question precQuestion = new Question(0, null, null);
        if (data != null) {
            Iterator<JSONObject> it = data.iterator();
            ArrayList<Question> questionsList = new ArrayList<Question>();
            while (it.hasNext()) {
                JSONObject obj = it.next();

                Question question = new Question(obj.getInt("id_question"), obj.getString("intitule"), null);
                question.setProposals(RequestManager.getAnswers(question));

                if (precQuestion.getId() != question.getId()) {
                    questionsList.add(question);
                }

                precQuestion = question;
            }

            return questionsList;
        } else {
            return null;
        }
    }

    /**
     *
     * @param question
     * @return proposal list or null
     * @throws Exception
     */
    public static ArrayList<Proposal> getAnswers(Question question) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/etude/" + question.getId() + "/reponses");
        if (data != null) {
            Iterator<JSONObject> it = data.iterator();
            ArrayList<Proposal> proposalList = new ArrayList<Proposal>();
            while (it.hasNext()) {
                JSONObject obj = it.next();

                Proposal proposal = new Proposal(obj.getInt("id_reponse"), obj.getString("intitule"));

                proposalList.add(proposal);
            }
            return proposalList;
        } else {
            return null;
        }
    }

    /**
     *
     * @return Patient list or null
     * @throws Exception
     */
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

    /**
     *
     * @param id
     * @return a Patient or null
     * @throws Exception
     */
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

    /**
     *
     * @param code
     * @return a Patient or null
     * @throws Exception
     */
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

    /**
     *
     * @param id
     * @return a doctor or null
     * @throws Exception
     */
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

    /**
     *
     * @return an doctor list or null
     * @throws Exception
     */
    public static ArrayList<Doctor> getAllDoctor() throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/employe/doctors/");

        if(data != null){

            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");
            Iterator<JSONObject> it = data.iterator();
            ArrayList<Doctor> doctorList = new ArrayList<>();

            while(it.hasNext()) {
                JSONObject obj = it.next();

                doctorList.add(new Doctor(obj.getInt("id"), obj.getString("nom"), obj.getString("prenom"),
                        obj.getInt("employe_type"), obj.getString("mail"),
                        obj.getString("date_embauche"), obj.getString("type_contrat"),
                        obj.getString("adresse"), obj.getString("ville"), obj.getInt("cp"), obj.getString("identifiant"),
                        obj.getInt("num_secu")));
            }
            return doctorList;
        }
        return null;
    }

    /**
     *
     * @return a Category list or null
     * @throws Exception
     */
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

    /**
     *
     * @param patient
     * @return an appointment list or null
     * @throws Exception
     */
    public static ArrayList<Appointment> getPatientAppointments(Patient patient) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/visite/patient/" + patient.getId());

        if(data != null) {

            SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");

            Iterator<JSONObject> it = data.iterator();
            ArrayList<Appointment> appointmentList = new ArrayList<Appointment>();

            while (it.hasNext())
            {
                JSONObject obj = it.next();

                Doctor doctor = getDoctorById(obj.getInt("employe_id"));

                String dateStr = obj.getString("date").substring(0, 19);
                Appointment appointment = new Appointment( date.parse(dateStr),
                        obj.getString("status"), patient, doctor);
                appointment.setId(obj.getInt("id"));

                appointmentList.add(appointment);
            }
            return appointmentList;
        }
        return null;
    }

    /**
     *
     * @param id
     * @return an appointment or null
     * @throws Exception
     */
    public static Appointment getAppointmentById(int id) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/visite/" + id);

        if(data != null) {

        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");

        Iterator<JSONObject> it = data.iterator();

        JSONObject obj = it.next();

        Doctor doctor = getDoctorById(obj.getInt("employe_id"));
        Patient patient  = getPatientById(obj.getInt("patient_id"));

        String dateStr = obj.getString("date").substring(0, 19);

        Appointment appointment = new Appointment( date.parse(dateStr),  obj.getString("status"), patient, doctor);
        appointment.setId(obj.getInt("id"));
        return appointment;
        }
        return null;
    }

    /**
     *
     * @return an Bill list or null
     * @throws Exception
     */
    public static ArrayList<Bill> getBills() throws Exception {

        ArrayList<JSONObject> data = RequestHelper.get(url + "/facture/all");

        if(data != null) {

            SimpleDateFormat date = new SimpleDateFormat("yy-MM-dd");
            Iterator<JSONObject> it = data.iterator();
            ArrayList<Bill> billList = new ArrayList<>();

            while (it.hasNext())
            {
                JSONObject obj = it.next();

                Patient patient = getPatientById(obj.getInt("patient_id"));
                Analysis analyse = getAnalysisById(obj.getInt("analyse_id"));
                Appointment appointment = getAppointmentById(obj.getInt("visite_id"));

                Bill bill = new Bill(obj.getInt("id"), obj.getFloat("montant"),
                        date.parse(obj.get("date_creation").toString()), obj.getBoolean("acquitte"),
                        obj.getString("adresse_facturation"), appointment, patient, analyse);

                billList.add(bill);
            }
            return billList;
        }
        return null;
    }

    /**
     *
     * @param patient
     * @return bool
     * @throws Exception
     */
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

    /**
     *
     * @param analysis
     * @return bool
     * @throws Exception
     */
    public static boolean addAnalysis(Analysis analysis) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<String, Object>();

        Patient patient  = analysis.getPatient();
        Doctor doctor = analysis.getDoctor();

        hashMap.put("code_analyse", analysis.getCode());
        hashMap.put("date_analyse", analysis.getDateAnalyse().toString());
        hashMap.put("description", analysis.getDescription());
        hashMap.put("patient_id", patient.getUsername());
        hashMap.put("employe_id", doctor.getId());

        JSONParser.makeObject(hashMap);

        boolean result = RequestHelper.postOrPut(url + "/analyse/new", hashMap, "POST");

        for (AnalysisResult resultToPush : analysis.getResults()) {
            addAnalysisResult(resultToPush);
        }

        return result;
    }

    /**
     *
     * @param analysisResult
     * @return bool
     * @throws Exception
     */
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

    /**
     *
     * @param result
     * @return bool
     * @throws Exception
     */
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

    /**
     *
     * @param category
     * @return bool
     * @throws Exception
     */
    public static boolean addCategory(Category category) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("nom", category.getTitle());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/categorie/new", hashMap, "POST");

        return resultat;
    }

    /**
     *
     * @param survey
     * @return bool
     * @throws Exception
     */
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

    /**
     *
     * @param question
     * @return bool
     * @throws Exception
     */
    public static boolean addQuestion(Question question) throws Exception{
        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("intitule", question.getTitle());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/question/new", hashMap, "POST");

        return resultat;
    }

    /**
     *
     * @param proposal
     * @return bool
     * @throws Exception
     */
    public static boolean addProposal(Proposal proposal) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("intitule", proposal.getTitle());

        JSONParser.makeObject(hashMap);

        boolean resultat = RequestHelper.postOrPut(url + "/proposition/new", hashMap, "POST");

        return resultat;
    }

    /**
     *
     * @param appointment
     * @return bool
     * @throws Exception
     */
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

    /**
     *
     * @param survey
     * @param question
     * @return bool
     * @throws Exception
     */
    public static boolean addQuestionToSurvey(Survey survey, Question question) throws Exception{
        HashMap<String, Object> hashMap = new HashMap<>();

        return RequestHelper.postOrPut(url + "/etude/" + survey.getId() + "/addQuestion/" + question.getId(),
                                                        hashMap, "POST");

    }

    /**
     *
     * @param question
     * @param proposal
     * @return bool
     * @throws Exception
     */
    public static boolean addProposalToQuestion(Question question, Proposal proposal) throws Exception{
        HashMap<String, Object> hashMap = new HashMap<>();

        boolean result = RequestHelper.postOrPut(url + "/question/" + question.getId() + "/reponse/" + proposal.getId(),
                hashMap, "POST");

        return result;
    }

    /**
     *
     * @param survey
     * @param patient
     * @return bool
     * @throws Exception
     */
    public static boolean addParticipation(Survey survey, Patient patient) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("statut", false);

        boolean result = RequestHelper.postOrPut(url + "/etude/" + patient.getId() + "/participate/" + survey.getId(),
                hashMap, "POST");

        return result;
    }

    /**
     *
     * @param bill
     * @return bool
     * @throws Exception
     */
    public static boolean addBill(Bill bill) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("montant", bill.getAmount());
        hashMap.put("date_creation", bill.getCreationDate());
        hashMap.put("acquitte", bill.isPayed());
        hashMap.put("adresse_facturation", bill.getBillingAdress());
        hashMap.put("visite_id", bill.getAppointment().getId());
        hashMap.put("patient_id", bill.getPatient().getId());
        hashMap.put("analyse_id", 50);

        boolean result = RequestHelper.postOrPut(url + "/facture/new",
                hashMap, "POST");

        return result;
    }

    /**
     *
     * @param bill
     * @return bool
     * @throws Exception
     */
    public static boolean updateBill(Bill bill) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<>();

        System.out.println(bill.getId());

        hashMap.put("id", bill.getId());
        hashMap.put("montant", bill.getAmount());
        hashMap.put("date_creation", bill.getCreationDate());
        hashMap.put("acquitte", bill.isPayed());
        hashMap.put("adresse_facturation", bill.getBillingAdress());
        hashMap.put("visite_id", bill.getAppointment().getId());
        hashMap.put("patient_id", bill.getPatient().getId());
        hashMap.put("analyse_id", bill.getAnalyse().getId());

        boolean result = RequestHelper.postOrPut(url + "/facture/" + bill.getId(),
                hashMap, "PUT");

        return result;
    }

    /**
     *
     * @param employee
     * @return bool
     * @throws Exception
     */
    public static boolean updateEmploye(Employee employee, String password) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<String, Object>();

        hashMap.put("nom", employee.getName());
        hashMap.put("prenom", employee.getFirstname());
        hashMap.put("cp", employee.getPostalCode());
        hashMap.put("adresse", employee.getAdress());
        hashMap.put("ville", employee.getCity());
        hashMap.put("num_secu", employee.getSecuNumber());
        hashMap.put("identifiant", employee.getUsername());
        hashMap.put("mail", employee.getMail());
        hashMap.put("password",password);
        hashMap.put("date_embauche",employee.getEmploymentDate());

        JSONParser.makeObject(hashMap);

        boolean result = RequestHelper.postOrPut(url + "/employe/" + employee.getId(), hashMap, "PUT");

        return result;
    }

    /**
     *
     * @param employee
     * @return bool
     * @throws Exception
     */
    public static boolean updateEmployeEmail(Employee employee, String email) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<String, Object>();

        hashMap.put("nom", employee.getName());
        hashMap.put("prenom", employee.getFirstname());
        hashMap.put("cp", employee.getPostalCode());
        hashMap.put("adresse", employee.getAdress());
        hashMap.put("ville", employee.getCity());
        hashMap.put("num_secu", employee.getSecuNumber());
        hashMap.put("identifiant", employee.getUsername());
        hashMap.put("mail", email);
        hashMap.put("date_embauche",employee.getEmploymentDate());

        JSONParser.makeObject(hashMap);

        boolean result = RequestHelper.postOrPut(url + "/employe/" + employee.getId(), hashMap, "PUT");

        return result;
    }

    /**
     *
     * @param patient
     * @return bool
     * @throws Exception
     */
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

    /**
     *
     * @param appointment
     * @return bool
     * @throws Exception
     */
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

    /**
     *
     * @param survey
     * @param question
     * @return bool
     * @throws Exception
     */
    public static boolean removeQuestionFromSurvey(Survey survey, Question question) throws Exception{

        boolean result = RequestHelper.delete(url + "/etude/" + survey.getId() + "/question/" + question.getId());

        return result;
    }

    /**
     *
     * @param idSurvey
     * @param idQuestion
     * @param idReponse
     * @return bool
     * @throws Exception
     */
    public static int statsByReponse(int idSurvey, int idQuestion, int idReponse) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/etude/nbReponses/" + idSurvey + "/" + idQuestion + "/" + idReponse);

        if (data != null) {

            Iterator<JSONObject> it = data.iterator();

            int value = it.next().getInt("nbreponses");
            return value;
        }

        return -1;
    }

    /**
     *
     * @param idSurvey
     * @return bool
     * @throws Exception
     */
    public static int statsByParticipation(int idSurvey) throws Exception {
        ArrayList<JSONObject> data = RequestHelper.get(url + "/etude/nbParticipations/" + idSurvey);

        if (data != null) {

            Iterator<JSONObject> it = data.iterator();

            int value = it.next().getInt("nbparticipations");
            return value;
        }

        return -1;
    }
}
