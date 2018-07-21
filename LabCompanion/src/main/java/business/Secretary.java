package business;

/**
 *This class is a class representing an secretary heriting from employee class.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class Secretary extends Employee {
    public static final int SECRETARY_TYPE = 2;

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
    public Secretary(int id, String name, String firstname, int type, String mail, String employmentDate, String contractType, String
            adress, String city, int postalCode, String username, int secuNumber) {
        super(id, name, firstname, type, mail, employmentDate, contractType, adress, city, postalCode, username, secuNumber);
    }
}
