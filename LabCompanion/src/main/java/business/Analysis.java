package business;

import java.util.ArrayList;
import java.util.Date;

/**
 *This class is a class representing an analysis.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class Analysis {
    private int id;
    private String code;
    private Date dateAnalyse;
    private String description;
    private ArrayList<AnalysisResult> results;
    private Patient patient;
    private Doctor doctor;

    /**
     *
     * @param id
     * @param code
     * @param dateAnalyse
     * @param description
     * @param results
     * @param patient
     * @param doctor
     */
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
