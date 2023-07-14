import styles from './Footer.module.css';

export default function Footer() {
  const dateObj = new Date();
  const currentYear = dateObj.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {currentYear} Paul C Crescini</p>
      </div>
    </footer>
  );
}
