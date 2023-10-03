import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { SITE_TITLE } from '@/constants';
import { loadPageContent } from '@/helpers/file-helpers';
import ProjectPageNav from '@/components/ProjectPageNav';

import styles from './projectSlug.module.css';

export async function generateMetadata({ params }) {
  const pageContentData = await loadPageContent(params.projectSlug);

  if (!pageContentData) {
    return null;
  }

  const { frontmatter } = pageContentData;

  return {
    title: `${frontmatter.title} • ${SITE_TITLE}`,
    description: `${frontmatter.abstract}`,
  };
}

export default async function ProjectPage({ params }) {
  const pageContentData = await loadPageContent(params.projectSlug);

  if (!pageContentData) {
    notFound();
  }

  const { frontmatter, content } = pageContentData;

  return (
    <section className={styles.projectPage}>
      <ProjectPageNav
        title={frontmatter.title}
        codeURL={frontmatter.codeURL}
        liveURL={frontmatter.liveURL}
      />

      <MDXRemote source={content} />
    </section>
  );
}
