import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

export function getDataFromFile(filePath: string) {
  // Construct the full path to the file
  const fullPath = path.join(process.cwd(), 'data', filePath);
  
  // Read the file contents
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Parse the file contents using gray-matter
  const { data, content } = matter(fileContents, {
    engines: {
      // Use js-yaml to parse YAML front matter
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
    }
  });

  // Return the parsed data and content
  return { data, content };
}
