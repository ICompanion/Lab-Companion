package annotations;

import java.lang.annotation.*;

/**
 *This class is
 *
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE) // utilisable sur les classes
public @interface Plugin {
    String name();
    String description();
    String version();
    String author();
}
