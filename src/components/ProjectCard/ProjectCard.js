import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ProjectCard.module.css';

export default function ProjectCard({
  slug,
  title,
  tags,
  imgSrc,
  description,
}) {
  const href = `/projects/${slug}`;

  return (
    <div key={slug} className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={href} scroll={true} className={styles.imageLink}>
          <Image
            fill
            src={imgSrc}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={title}
          />
        </Link>
      </div>
      <div className={styles.content}>
        <h3>
          <Link href={href} scroll={true}>
            {title}
          </Link>
        </h3>
        <p className={styles.tag}>{tags}</p>
        <p>{description}</p>
        <p className={styles.link}>
          <Link href={href} scroll={true}>
            Learn more →
          </Link>
        </p>
      </div>
    </div>
  );
}
