package business;

import java.util.Date;

/**
 *This class is a class representing a doctor heriting from employee class.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class Doctor extends Employee {

    public static final int DOCTOR_TYPE = 1;

    /**
     *
     * @param id
     * @param name
     * @param firstname
     * @param type
     * @param mail
     * @param employmentDate
     * @param contractType
     * @param adress
     * @param city
     * @param postalCode
     * @param username
     * @param secuNumber
     */
    public Doctor(int id, String name, String firstname, int type, String mail, Date employmentDate, String contractType, String adress,
            String city, int postalCode, String username, int secuNumber) {
        super(id, name, firstname, type, mail, employmentDate, contractType, adress, city, postalCode, username, secuNumber);
    }

    /**
     *
     * @param id
     * @param name
     * @param firstname
     * @param type
     * @param mail
     * @param employmentDate
     * @param contractType
     * @param adress
     * @param city
     * @param postalCode
     * @param username
     * @param secuNumber
     */
    public Doctor(int id, String name, String firstname, int type, String mail, String employmentDate, String contractType, String adress,
                  String city, int postalCode, String username, int secuNumber) {
        super(id, name, firstname, type, mail, employmentDate, contractType, adress, city, postalCode, username, secuNumber);
    }

    /**
     *
     * @param employee
     */
    public Doctor(Employee employee) {
        super(employee.getId(), employee.getName(), employee.getFirstname(), employee.getType(), employee.getMail(), employee.getEmploymentDate(), employee.getContractType(), employee.getAdress(), employee.getCity(), employee.getPostalCode(), employee.getUsername(), employee.getSecuNumber());
    }

}
