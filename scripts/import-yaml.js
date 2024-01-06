import fs from 'fs';
import yaml from 'js-yaml';

try {
    // Remplacez 'path/to/your/file.yaml' par le chemin vers votre fichier YAML
    const fileContents = fs.readFileSync('yamls_export/22-week.yaml', 'utf8');
    const data = yaml.load(fileContents);
    console.log(data);
} catch (e) {
    console.error(e);
}