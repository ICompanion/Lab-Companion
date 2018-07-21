package business;

public class Proposal {
    private int id;
    private String title;

    /**
     *
     * @param id
     * @param title
     */
    public Proposal(int id, String title) {
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
