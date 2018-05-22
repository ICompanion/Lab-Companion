package business;

import java.util.Date;

public class Employee {

    private int id;
    private String name;
    private String firstanme;
    private int type;
    private String mail;
    private Date employmentDate;
    private String contractType;
    private String adress;
    private String city;
    private int postalCode;
    private String password;
    private String username;
    private int secuNumber;

    public Employee(int id, String name, String firstanme, int type, String mail, Date employmentDate,
                            String contractType, String adress, String city, int postalCode, String password,
                            String username, int secuNumber) {
        this.id = id;
        this.name = name;
        this.firstanme = firstanme;
        this.type = type;
        this.mail = mail;
        this.employmentDate = employmentDate;
        this.contractType = contractType;
        this.adress = adress;
        this.city = city;
        this.postalCode = postalCode;
        this.password = password;
        this.username = username;
        this.secuNumber = secuNumber;
    }

    public int getSecuNumber() {
        return secuNumber;
    }

    public void setSecuNumber(int secuNumber) {
        this.secuNumber = secuNumber;
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

    public String getFirstanme() {
        return firstanme;
    }

    public void setFirstanme(String firstanme) {
        this.firstanme = firstanme;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getEmploymentDate() {
        return employmentDate;
    }

    public void setEmploymentDate(Date employmentDate) {
        this.employmentDate = employmentDate;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
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
}
