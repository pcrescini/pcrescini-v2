import React from 'react';

import ProjectCard from '@/components/ProjectCard';

import styles from './Projects.module.css';

const PROJECTS_DATA = [
  {
    id: 'man-refined',
    name: 'TheManRefined',
    category: 'ecommerce',
    platform: 'cart storefront',
    imgSrc: '/man-refined.png',
    description:
      "TheManRefined is an independent menswear retailer that specializes in making high-quality, custom-made garments that don't break the bank.",
  },
  {
    id: 'knwblegrwn',
    name: 'Knwble Grwn',
    category: 'ecommerce',
    platform: 'cart storefront',
    imgSrc: '/knwble-grwn.png',
    description:
      'Knwble Grwn is a brand with a mission to support what matters to most people and the planet. Their products are produced by small or traditionally underrepresented farmers who use regenerative agricultural practices to help protect the environment.',
  },
  {
    id: 'vulcan',
    name: 'Vulcan',
    category: 'ecommerce',
    platform: 'shopify',
    imgSrc: '/vulcan-weatherlock-bags.png',
    description:
      'Vulcan is the leading direct to consumer brand for premium firearm accessories. By cutting out the middlemen, leveraging social media, and utilizing global distribution networks, we can provide innovative and premium products at affordable prices worldwide.',
  },
  {
    id: 'ivzindexing',
    name: 'Invesco Indexing',
    category: 'finance',
    platform: 'magnolia cms',
    imgSrc: '/invesco-indexing.png',
    description:
      "Invesco Indexing develops and licenses customized, proprietary indexes that leverage the global scale of Invesco — one of the world's premiere global investment management firms.",
  },
  {
    id: 'speech-timer',
    name: 'Speech Timer',
    category: 'personal project',
    platform: '',
    imgSrc: '/speech-timer.png',
    description:
      'Speech Timer is a tool geared towards timing speeches that follow Toastmaters International speech formats.',
  },
  {
    id: 'bullseye',
    name: 'Bullseye! JavaScript Game',
    category: 'personal project',
    platform: '',
    imgSrc: '/js-web-game.png',
    description:
      'Bullseye! is 2D game created using vanilla JavaScript, HTML5, CSS3, and HTML Canvas.',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className={styles.container}>
        {PROJECTS_DATA.map(
          ({ id, name, category, platform, description, imgSrc }) => (
            <ProjectCard
              key={id}
              id={id}
              name={name}
              category={category}
              platform={platform}
              imgSrc={imgSrc}
              description={description}
            />
          )
        )}
      </div>
    </section>
  );
}
