import styles from './ContactIcon.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default ContactIcon({ href, icon, children }) {
  return (
<a href={href} target="_blank" rel="noreferrer" aria-label={label}>
<FontAwesomeIcon icon={icon} />
{children}
</a>
  )
}