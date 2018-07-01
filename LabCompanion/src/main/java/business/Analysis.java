package business;

import java.util.ArrayList;
import java.util.Date;

public class Analysis {
    private int id;
    private String code;
    private Date dateAnalyse;
    private String description;
    private ArrayList<AnalysisResult> results;
    private Patient patient;
    private Doctor doctor;

    public Analysis(int id, String code, Date dateAnalyse, String description, ArrayList<AnalysisResult> results, Patient patient, Doctor doctor) {
        this.id = id;
        this.code = code;
        this.dateAnalyse = dateAnalyse;
        this.description = description;
        this.results = results;
        this.patient = patient;
        this.doctor = doctor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Date getDateAnalyse() {
        return dateAnalyse;
    }

    public void setDateAnalyse(Date starDate) {
        this.dateAnalyse = starDate;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ArrayList<AnalysisResult> getResults() {
        return results;
    }

    public void setResults(ArrayList<AnalysisResult> results) {
        this.results = results;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }
}
