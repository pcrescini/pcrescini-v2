import styles from './SkipNav.module.css';

export default function SkipNav() {
  return (
    <a id="skipNav" className={styles.skipNav} href="#mainContent">
      Skip to main content
    </a>
  );
}