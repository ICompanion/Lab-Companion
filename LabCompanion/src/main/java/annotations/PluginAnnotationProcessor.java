package annotations;

import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.RoundEnvironment;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Set;
import org.json.*;
import sun.misc.IOUtils;

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


        try {
            //get relative file path
            String filePath = new File("conf/Configuration.txt").getAbsolutePath();
            /// file contente
            String content = new String(Files.readAllBytes(Paths.get(filePath)));
            // transform file content to json object
            JSONObject jsonObject = new JSONObject(content);
            // get plugins group project
            JSONObject pluginsObject = jsonObject.getJSONObject("plugins");

            // Create a new plugin object
            HashMap map = new HashMap<>();
            map.put("name", annot.name());
            map.put("description", annot.description());
            map.put("version", annot.version());
            map.put("author", annot.author());
            JSONObject onePlugin = new JSONObject(map);

            // add new plugin to plugins groupe
            jsonObject.append("plugins", onePlugin);

            // rewrite file
            PrintWriter writer = new PrintWriter(filePath);
            writer.write(jsonObject.toString());

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}