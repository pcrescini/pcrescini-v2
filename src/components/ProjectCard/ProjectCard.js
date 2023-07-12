import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ProjectCard.module.css';

const montserrat = Montserrat({ subsets: ['latin'] });

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
        <Link href={`/projects/${id}`} className={styles.imageLink}>
          <Image fill src={imgSrc} alt={name} />
        </Link>
      </div>
      <div className={styles.content}>
        <h3 className={montserrat.className}>{name}</h3>
        <p className={styles.tag}>
          {category} {platform && ` | ${platform}`}
        </p>
        <p>{description}</p>
        <p className={styles.link}>
          <a href={`/projects/${id}`}>Learn more →</a>
        </p>
      </div>
    </div>
  );
}
