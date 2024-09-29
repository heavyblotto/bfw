import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const releaseNotesDirectory = path.join(process.cwd(), 'src/data/release-notes');

export async function getSortedReleaseNotes() {
  const fileNames = fs.readdirSync(releaseNotesDirectory);
  const allReleaseNotes = await Promise.all(fileNames.map(async (fileName) => {
    const fullPath = path.join(releaseNotesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Ensure the date is a string
    const date = data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date;

    // Parse the markdown content to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug: fileName.replace(/\.md$/, ''),
      version: data.version,
      date: date, // This will now always be a string
      content: contentHtml,
    };
  }));

  return allReleaseNotes
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, 5); // Only return the latest 5 release notes
}
