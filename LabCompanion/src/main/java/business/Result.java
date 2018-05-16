package business;

public class Result {

    private int id;
    private String title;
    private String description;
    private float value;
    private Category category;

    public Result(int id, String title, String description, float value,
                  Category category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.value = value;
        this.category = category;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
