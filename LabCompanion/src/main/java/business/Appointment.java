package business;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Appointment {

    private int id;
    private Date date;
    private String status;
    private Patient patient;
    private Doctor doctor;

    public Appointment(int id, Date date, String status, Patient patient, Doctor doctor) {
        this.id = id;
        this.date = date;
        this.status = status;
        this.patient = patient;
        this.doctor = doctor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
