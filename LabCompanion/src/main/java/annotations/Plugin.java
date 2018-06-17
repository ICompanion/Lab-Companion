package annotations;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE) // utilisable sur les classes
public @interface Plugin {
    String name();
    String description();
    String version();
    String author();
}
