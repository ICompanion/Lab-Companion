package business;

public class Doctor extends Employee {

    public static final int DOCTOR_TYPE = 1; // have to check if 1 is good

    public Doctor(int id, String name, String firstanme, int type, String mail, String password, String username) {
        super(id, name, firstanme, type, mail, password, username);
    }
}
