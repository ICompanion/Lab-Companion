package business;

/**
 *This class is a class representing an result.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class Result {

    private int id;
    private String title;
    private String unit;
    private float value_max;
    private float value_min;
    private Category category;

    /**
     *
     * @param id
     * @param title
     * @param unit
     * @param value_max
     * @param value_min
     * @param category
     */
    public Result(int id, String title, String unit, float value_max, float value_min,
                  Category category) {
        this.id = id;
        this.title = title;
        this.unit = unit;

        this.value_max = value_max;
        this.value_min = value_min;
        this.category = category;
    }


    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
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

    public String getValue() {
        return unit;
    }

    public void setValue(String value) {
        this.unit = value;
    }

    public float getValue_max() {
        return value_max;
    }

    public void setValue_max(float value_max) {
        this.value_max = value_max;
    }

    public float getValue_min() {
        return value_min;
    }

    public void setValue_min(float value_min) {
        this.value_min = value_min;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
