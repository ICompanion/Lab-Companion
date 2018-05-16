package business;

public class Secretary extends Employee {
    public static final int SECRETARY_TYPE = 0; // have to check if 0 is good

    public Secretary(int id, String name, String firstanme, int type,
                     String mail, String password, String username) {
        super(id, name, firstanme, Secretary.SECRETARY_TYPE, mail, password, username);
    }
}
