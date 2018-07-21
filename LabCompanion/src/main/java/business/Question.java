package business;

import java.util.ArrayList;

/**
 *This class is a class representing an patient.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class Question {

    private int id;
    private String title;
    private ArrayList<Proposal> proposals;

    /**
     *
     * @param id
     * @param title
     * @param proposals
     */
    public Question(int id, String title, ArrayList<Proposal> proposals) {
        this.id = id;
        this.title = title;
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

    public ArrayList<Proposal> getProposals() {
        return proposals;
    }

    public void setProposals(ArrayList<Proposal> proposals) {
        this.proposals = proposals;
    }
}
