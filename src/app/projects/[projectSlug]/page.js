import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { MDXRemote } from 'next-mdx-remote/rsc';

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
    title: `${frontmatter.title} • Paul C Crescini | Front-end Web Developer`,
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
      <ProjectPageNav title={frontmatter.title} />

      <MDXRemote
        source={content}
        components={{ FontAwesomeIcon, faUpRightFromSquare }}
      />
    </section>
  );
}
