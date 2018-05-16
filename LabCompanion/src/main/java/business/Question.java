package business;

import java.util.ArrayList;
import java.util.Date;

public class Question {

    private int id;
    private String title;
    private Date date;
    private String description;
    private ArrayList<Proposal> proposals;

    public Question(int id, String title, Date date, String description,
                    ArrayList<Proposal> proposals) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.proposals = proposals;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ArrayList<Proposal> getProposals() {
        return proposals;
    }

    public void setProposals(ArrayList<Proposal> proposals) {
        this.proposals = proposals;
    }
}
