import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const inputDir = path.join(__dirname, '../src/lib/_data/2025'); // Remplacer par le chemin du dossier contenant les fichiers JSON
const outputDir = path.join(__dirname, 'yamls_export'); // Remplacer par le chemin du dossier où les fichiers YAML seront sauvegardés

fs.readdirSync(inputDir).forEach(file => {
    if (path.extname(file) === '.json') {
        const jsonContent = fs.readFileSync(path.join(inputDir, file), 'utf8');
        const yamlContent = yaml.dump(JSON.parse(jsonContent));
        const yamlFileName = path.basename(file, '.json') + '.yaml';
        fs.writeFileSync(path.join(outputDir, yamlFileName), yamlContent, 'utf8');
    }
});

console.log('Conversion terminée');