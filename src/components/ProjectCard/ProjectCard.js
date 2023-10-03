import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ProjectCard.module.css';

export default function ProjectCard({
  id,
  name,
  category,
  platform,
  description,
  imgSrc,
}) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      key={id}
      className={styles.card}
    >
      <div className={styles.imageContainer}>
        <Link
          href={`/projects/${id}`}
          scroll={true}
          className={styles.imageLink}
        >
          <Image
            fill
            src={imgSrc}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={name}
          />
        </Link>
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.tag}>
          {category} {platform && ` | ${platform}`}
        </p>
        <p>{description}</p>
        <p className={styles.link}>
          <Link href={`/projects/${id}`} scroll={true}>
            Learn more →
          </Link>
        </p>
      </div>
    </div>
  );
}
