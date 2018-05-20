package business;

public class Employee {

    private int id;
    private String name;
    private String firstanme;
    private int type;
    private String mail;
    private String password;
    private String username;

    public Employee(int id, String name, String firstanme, int type
            , String mail, String password, String username) {
        this.id = id;
        this.name = name;
        this.firstanme = firstanme;
        this.type = type;
        this.mail = mail;
        this.password = password;
        this.username = username;
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
}
