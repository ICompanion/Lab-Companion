package business;

import java.util.ArrayList;
import java.util.Date;

public class Patient {

    private int id;
    private String name;
    private String firstname;
    private Date birthdate;
    private String mail;
    private int secuNumber;
    private String adress;
    private String city;
    private int postalCode;
    private String username;
    private String passwowrd;
    private ArrayList<Bill> bills;

    public Patient(int id, String name, String firstname, Date birthdate,
                   String mail, int secuNumber, String adress, String city,
                   int postalCode, String username, String passwowrd) {
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.birthdate = birthdate;
        this.mail = mail;
        this.secuNumber = secuNumber;
        this.adress = adress;
        this.city = city;
        this.postalCode = postalCode;
        this.username = username;
        this.passwowrd = passwowrd;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public int getSecuNumber() {
        return secuNumber;
    }

    public void setSecuNumber(int secuNumber) {
        this.secuNumber = secuNumber;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswowrd() {
        return passwowrd;
    }

    public void setPasswowrd(String passwowrd) {
        this.passwowrd = passwowrd;
    }

    public ArrayList<Bill> getBills() {
        return bills;
    }

    public void setBills(ArrayList<Bill> bills) {
        this.bills = bills;
    }
}
