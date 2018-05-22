package business;

import java.util.Date;

public class Doctor extends Employee {

    public static final int DOCTOR_TYPE = 1; // have to check if 1 is good

    public Doctor(int id, String name, String firstanme, int type, String mail, Date employmentDate, String contractType, String adress, String city, int postalCode, String password, String username, int secuNumber) {
        super(id, name, firstanme, type, mail, employmentDate, contractType, adress, city, postalCode, password, username, secuNumber);
    }

}
