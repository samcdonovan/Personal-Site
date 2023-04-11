import styles from '../styles/components/Footer.module.css';

export default function Footer() {
    return (
        <div className="bottom-container">
            <a className={styles['footer-link']} href="https://github.com/samcdonovan">GitHub</a>
            <a className={styles['footer-link']} href="https://www.linkedin.com/in/samuel-c-donovan/">LinkedIn</a>
            <p className={styles['copyright']}>© Samuel Donovan</p>
        </div>
    );
}