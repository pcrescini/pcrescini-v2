import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function loadPageContent(slug) {
  let rawContent;

  try {
    rawContent = await readFile(`/content/${slug}.mdx`);
  } catch (err) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}
