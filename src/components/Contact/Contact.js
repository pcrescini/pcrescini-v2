import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import SocialMediaIcon from '@/components/SocialMediaIcon';

import styles from './Contact.module.css';

const SOCIAL_MEDIA_DATA = [
  {
    id: 'mmail',
    name: 'Email',
    url: 'mailto:paul.c.crescini@gmail.com?subject=Hello%20👋🏽',
    label: 'Email me at paul.c.crescini@gmail.com',
    icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/paulccrescini/',
    label: 'Link to my LinkedIn Profile (opens in new tab)',
    icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
  },
  {
    id: 'github',
    name: 'Github',
    url: 'https://github.com/pcrescini',
    label: 'Link to my Github Profile (opens in new tab)',
    icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/paulccrescini',
    label: 'Link to my Twitter Account (opens in new tab)',
    icon: <FontAwesomeIcon icon={faXTwitter} size="2x" />,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/lets_eat_htx/',
    label: 'Link to my Instagram Account (opens in new tab)',
    icon: <FontAwesomeIcon icon={faInstagram} size="2x" />,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className={styles.container}>
        <div data-aos="zoom-in" data-aos-duration="1000">
          I am currently open to new career opportunities and interest in
          connecting with individuals who share my interests. Whether you have a
          question or simply want to say hello 👋🏽, feel free to reach out and I
          will do my best to respond promptly!
        </div>
        <div
          className={styles.contactSocial}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {SOCIAL_MEDIA_DATA.map(({ id, name, url, label, icon }) => (
            <SocialMediaIcon
              key={id}
              name={name}
              url={url}
              icon={icon}
              label={label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
