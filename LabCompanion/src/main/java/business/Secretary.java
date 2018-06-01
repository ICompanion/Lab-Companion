package business;

import java.util.Date;

public class Secretary extends Employee {
    public static final int SECRETARY_TYPE = 0; // have to check if 0 is good

    public Secretary(int id, String name, String firstanme, int type, String mail, Date employmentDate, String contractType, String adress, String city, int postalCode, String password, String username, int secuNumber) {
        super(id, name, firstanme, type, mail, employmentDate, contractType, adress, city, postalCode, password, username, secuNumber);
    }
}
