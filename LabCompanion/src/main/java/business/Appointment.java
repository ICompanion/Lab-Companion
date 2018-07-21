package business;

import java.util.Date;

/**
 *This class is a class representing an appointment.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class Appointment {

    private int id;
    private Date date;
    private String status;
    private Patient patient;
    private Doctor doctor;

    /**
     *
     * @param date
     * @param status
     * @param patient
     * @param doctor
     */
    public Appointment(Date date, String status, Patient patient, Doctor doctor) {
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
