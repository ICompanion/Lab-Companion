package annotations;

import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.RoundEnvironment;
import javax.lang.model.element.Element;
import javax.lang.model.element.Modifier;
import javax.lang.model.element.TypeElement;
import javax.lang.model.element.VariableElement;
import java.util.Set;
import javax.tools.Diagnostic;

public class PluginAnnotationProcessor extends AbstractProcessor {
    @Override
    public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
        for( final Element element: roundEnv.getElementsAnnotatedWith( Plugin.class ) ) {
            if( element instanceof TypeElement ) {
                final TypeElement typeElement = ( TypeElement )element;
                writeFile(element.getClass());
            }
        }

        return true;
    }

    private void writeFile(Class theClass) {
        Plugin annot = (Plugin) theClass.getAnnotation(Plugin.class);

    }
}