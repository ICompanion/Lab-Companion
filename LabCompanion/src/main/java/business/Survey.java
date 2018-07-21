package business;

import java.util.ArrayList;
import java.util.Date;

/**
 *This class is a class representing an survey.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class Survey {

    private int id;
    private String code;
    private String name;
    private Date date;
    private String description;
    private Doctor doctor;
    private ArrayList<Question> questions;

    /**
     *
     * @param id
     * @param code
     * @param name
     * @param date
     * @param description
     * @param doctor
     * @param questions
     */
    public Survey(int id, String code, String name, Date date,
                  String description, Doctor doctor, ArrayList<Question> questions) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.date = date;
        this.description = description;
        this.doctor = doctor;
        this.questions = questions;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public ArrayList<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<Question> questions) {
        this.questions = questions;
    }
}
