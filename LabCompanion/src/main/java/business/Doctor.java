package business;

import java.util.Date;

public class Doctor extends Employee {

    public static final int DOCTOR_TYPE = 1;

    public Doctor(int id, String name, String firstname, int type, String mail, Date employmentDate, String contractType, String adress,
            String city, int postalCode, String username, int secuNumber) {
        super(id, name, firstname, type, mail, employmentDate, contractType, adress, city, postalCode, username, secuNumber);
    }

    public Doctor(int id, String name, String firstname, int type, String mail, String employmentDate, String contractType, String adress,
                  String city, int postalCode, String username, int secuNumber) {
        super(id, name, firstname, type, mail, employmentDate, contractType, adress, city, postalCode, username, secuNumber);
    }

    public Doctor(Employee employee) {
        super(employee.getId(), employee.getName(), employee.getFirstname(), employee.getType(), employee.getMail(), employee.getEmploymentDate(), employee.getContractType(), employee.getAdress(), employee.getCity(), employee.getPostalCode(), employee.getUsername(), employee.getSecuNumber());
    }

}
