import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // marques
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // solide
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer role="contentinfo" className={styles.footer}>
      <div className={styles.contact}>
        <span>Sarah DAHMANI</span>
        <span className={styles.italic}>Développeuse Web Junior</span>
      </div>
      <div className={styles.links}>
        {/* Utilisation des icônes FontAwesome pour les liens */}
        <a href="mailto:saarah.dahmani@hotmail.fr" className={styles.socialNetworks}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <span className="visually-hidden">M'envoyer un e-mail</span>
        </a>
        <a href="https://github.com/Sarah-Dahmani" rel="noreferrer" target="_blank" className={styles.socialNetworks}>
          {/* Icône GitHub */}
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <span className="visually-hidden">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/sarah-dahmani-5821b8207/" rel="noreferrer" target="_blank" className={styles.socialNetworks}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <span className="visually-hidden">Linkedin</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

