package business;

import java.util.ArrayList;
import java.util.Date;

public class Analysis {
    private int id;
    private String code;
    private String name;
    private Date starDate;
    private Date endDate;
    private String description;
    private ArrayList<Result> results;
    private Patient patient;
    private Doctor doctor;

    public Analysis(int id, String code, String name, Date starDate,
                    Date endDate, String description, ArrayList<Result> results) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.starDate = starDate;
        this.endDate = endDate;
        this.description = description;
        this.results = results;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getStarDate() {
        return starDate;
    }

    public void setStarDate(Date starDate) {
        this.starDate = starDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ArrayList<Result> getResults() {
        return results;
    }

    public void setResults(ArrayList<Result> results) {
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
