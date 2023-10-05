import React from 'react';

import { loadProjectList } from '@/helpers/file-helpers';
import ProjectCard from '@/components/ProjectCard';

import styles from './Projects.module.css';

const PROJECT_LIST = await loadProjectList();

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className={styles.container}>
        {PROJECT_LIST.map(({ slug, title, tags, description, imgSrc }) => (
          <ProjectCard
            key={slug}
            slug={slug}
            title={title}
            tags={tags}
            imgSrc={imgSrc}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
