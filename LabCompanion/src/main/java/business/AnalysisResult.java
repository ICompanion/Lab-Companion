package business;

/**
 *This class is a class representing an Analysis result.
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
public class AnalysisResult {

    private int id;
    private float value;
    Result result;
    Analysis analysis;

    /**
     *
     * @param id
     * @param value
     * @param result
     * @param analysis
     */
    public AnalysisResult(int id, float value, Result result, Analysis analysis) {
        this.id = id;
        this.value = value;
        this.result = result;
        this.analysis = analysis;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public Analysis getAnalysis(){
        return analysis;
    }

    public void setAnalysis(Analysis analysis){
        this.analysis = analysis;
    }
}
