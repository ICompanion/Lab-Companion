package business;

public class Proposal {
    private int id;
    private String title;
    private int choiceNumber;

    public Proposal(int id, String title, int choiceNumber) {
        this.id = id;
        this.title = title;
        this.choiceNumber = choiceNumber;
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

    public int getChoiceNumber() {
        return choiceNumber;
    }

    public void setChoiceNumber(int choiceNumber) {
        this.choiceNumber = choiceNumber;
    }
}
