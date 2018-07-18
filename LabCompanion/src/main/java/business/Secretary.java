package business;

import java.util.Date;

public class Secretary extends Employee {
    public static final int SECRETARY_TYPE = 2;

    public Secretary(int id, String name, String firstname, int type, String mail, String employmentDate, String contractType, String
            adress, String city, int postalCode, String username, int secuNumber) {
        super(id, name, firstname, type, mail, employmentDate, contractType, adress, city, postalCode, username, secuNumber);
    }
}
