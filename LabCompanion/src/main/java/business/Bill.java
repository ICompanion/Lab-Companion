package business;

import java.util.Date;

public class Bill {

    private int id;
    private float amount;
    private Date creationDate;
    private boolean payed;
    private String billingAdress;
    private Patient patient;
    private Appointment appointment;
    private Analysis analyse;


    /**
     *
     * @param id
     * @param amount
     * @param creationDate
     * @param payed
     * @param billingAdress
     * @param appointment
     * @param patient
     * @param analyse
     */
    public Bill(int id, float amount, Date creationDate, boolean payed,
                String billingAdress, Appointment appointment, Patient patient, Analysis analyse) {
        this.id = id;
        this.amount = amount;
        this.creationDate = creationDate;
        this.payed = payed;
        this.billingAdress = billingAdress;
        this.patient = patient;
        this.appointment = appointment;
        this.analyse = analyse;

    }

    /**
     *
     * @param amount
     * @param creationDate
     * @param payed
     * @param billingAdress
     * @param appointment
     * @param patient
     * @param analyse
     */
    public Bill(float amount, Date creationDate, boolean payed,
                String billingAdress, Appointment appointment, Patient patient, Analysis analyse) {

        this.amount = amount;
        this.creationDate = creationDate;
        this.payed = payed;
        this.billingAdress = billingAdress;
        this.patient = patient;
        this.appointment = appointment;
        this.analyse = analyse;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public boolean isPayed() {
        return payed;
    }

    public void setPayed(boolean payed) {
        this.payed = payed;
    }

    public String getBillingAdress() {
        return billingAdress;
    }

    public void setBillingAdress(String billingAdress) {
        this.billingAdress = billingAdress;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Appointment getAppointment() {
        return appointment;
    }

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }

    public Analysis getAnalyse() {
        return analyse;
    }

    public void setAnalyse(Analysis analyse) {
        this.analyse = analyse;
    }
}
