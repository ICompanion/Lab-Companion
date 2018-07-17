package business;

import java.util.Date;

public class EmployeeBuilder {
    private int id;
    private String name;
    private String firstname;
    private int type;
    private String mail;
    private String employmentDate;
    private String contractType;
    private String adress;
    private String city;
    private int postalCode;
    private String username;
    private int secuNumber;

    public EmployeeBuilder setId(int id) {
        this.id = id;
        return this;
    }

    public EmployeeBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public EmployeeBuilder setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public EmployeeBuilder setType(int type) {
        this.type = type;
        return this;
    }

    public EmployeeBuilder setMail(String mail) {
        this.mail = mail;
        return this;
    }

    public EmployeeBuilder setEmploymentDate(String employmentDate) {
        this.employmentDate = employmentDate;
        return this;
    }

    public EmployeeBuilder setContractType(String contractType) {
        this.contractType = contractType;
        return this;
    }

    public EmployeeBuilder setAdress(String adress) {
        this.adress = adress;
        return this;
    }

    public EmployeeBuilder setCity(String city) {
        this.city = city;
        return this;
    }

    public EmployeeBuilder setPostalCode(int postalCode) {
        this.postalCode = postalCode;
        return this;
    }

    public EmployeeBuilder setUsername(String username) {
        this.username = username;
        return this;
    }

    public EmployeeBuilder setSecuNumber(int secuNumber) {
        this.secuNumber = secuNumber;
        return this;
    }

    public Employee createEmployee() {
        return new Employee(id, name, firstname, type, mail, employmentDate, contractType, adress, city, postalCode, username,
                secuNumber);
    }
}