import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function loadProjectList() {
  const fileNames = await readDirectory('/content');

  const projectList = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    projectList.push({
      slug: fileName.replace('.mdx', ''),
      ...frontmatter,
    });
  }

  return projectList.sort((p1, p2) => (p1.sortOrder > p2.sortOrder ? 1 : -1));
}

export const loadPageContent = React.cache(async function loadPageContent(
  slug
) {
  let rawContent;

  try {
    rawContent = await readFile(`/content/${slug}.mdx`);
  } catch (err) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
