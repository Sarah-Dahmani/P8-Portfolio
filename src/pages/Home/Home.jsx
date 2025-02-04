import works from "../../data/works.json"; // ✅ Utilisation de works
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "antd";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Block from "../../components/Block/Block";
import Collapse from "../../components/Collapse/Collapse";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { scrollToTopSpeed, useScrollToTop } from "../../utils/functions/scrollToTop";
import styles from "./Home.module.css";
import bird from "../../assets/images/bird.webp";
import avatar from "../../assets/images/AvatarMaker (1).png";

function Home() {
  // Mettre à jour le titre de la page
  useEffect(() => {
    document.title = "Sarah Dahmani - Accueil";
  }, []);

  // Générer le contenu du carousel à partir des données dans le fichier JSON
  const renderPictures = () => {
    return works.map((work, index) => (
      <div key={`${work.title + index}`}>
        <h3 className="visually-hidden">{work.title}</h3>
        <NavLink to={`/work/${work.id}`} onClick={scrollToTopSpeed} aria-label={`Lien vers le projet ${work.title}`}>
          <img className={styles.carouselPicture} src={work.image} alt={work.title} title={work.title} />
        </NavLink>
      </div>
    ));
  };

  // Définir un état pour afficher ou masquer le bouton 'retour en haut de page'
  const [isVisible, scrollToTop] = useScrollToTop();

  return (
    <ParallaxProvider>
      <main role="main">
        <Parallax className={styles.parallax} translateX={["-2500px", "800px"]}>
          <img src={bird} alt="Oiseau" title="Oiseau" className={styles.bird} />
        </Parallax>
        <section aria-label="Présentation succinte" className={styles.presentationContainer}>
          <h2 className="visually-hidden">Présentation</h2>
          <Block>
            <p>Bonjour, je suis <strong>Sarah Dahmani</strong>.</p>
            <p>Je termine actuellement ma formation de <strong>Développeur Web</strong> chez OpenClassrooms.</p>
            <p>Je souhaite par la suite trouver un emploi en tant que <strong>développeur web junior</strong> pour me perfectionner.</p>
          </Block>
          <div className={styles.decoration}>
            <img className={styles.profilePicture} src={avatar} alt="Avatar de Sarah Dahmani" title="Avatar de Sarah Dahmani" />
          </div>
        </section>
        <section aria-label="Compétences" className={styles.collapseContainer}>
          <h2 className="visually-hidden">Compétences</h2>
          <Collapse
            titleCollapse={<div><i aria-hidden className={styles.icone + " fa-solid fa-code"}></i> Front-end</div>}
            textCollapse={
              <ul className={styles.list}>
                <li>HTML5 <ProgressBar percentage="80" index="1" /></li>
                <li>CSS3 <ProgressBar percentage="80" index="2" /></li>
                <li>JavaScript <ProgressBar percentage="60" index="3" /></li>
                <li>React <ProgressBar percentage="40" index="4" /></li>
              </ul>
            }
          />
          <Collapse
            titleCollapse={<div><i aria-hidden className={styles.icone + " fa-solid fa-server"}></i> Back-end</div>}
            textCollapse={
              <ul className={styles.list}>
                <li>NodeJS <ProgressBar percentage="40" index="1" /></li>
                <li>Express <ProgressBar percentage="40" index="2" /></li>
                <li>Postman <ProgressBar percentage="60" index="3" /></li>
                <li>MongoDB <ProgressBar percentage="60" index="4" /></li>
              </ul>
            }
          />
          <Collapse
            titleCollapse={<div><i aria-hidden className={styles.icone + " fa-solid fa-list"}></i> Gestion de projet</div>}
            textCollapse={
              <ul className={styles.list}>
                <li>Trello</li>
                <li>Git & Github</li>
                <li>Wakelet</li>
                <li>Feedly</li>
              </ul>
            }
          />
          <Collapse
            titleCollapse={<div><i aria-hidden className={styles.icone + " fa-solid fa-bug"}></i> Optimisation et debug</div>}
            textCollapse={
              <ul className={styles.list}>
                <li>Chrome DevTools</li>
                <li>LightHouse</li>
                <li>Wave</li>
                <li>HeadingsMap</li>
                <li>Microdata avec Schema.org</li>
              </ul>
            }
          />
        </section>
        <section aria-label="Mes projets réalisés" className={styles.worksContainer}>
          <Block>
            <h2 className={styles.title}><i aria-hidden className={styles.icone + " fa-solid fa-briefcase"}></i> Mes projets OpenClassrooms réalisés</h2>
            <div className={styles.carouselContainer}>
              <Carousel autoplay>
                {renderPictures()}
              </Carousel>
            </div>
          </Block>
        </section>
        {isVisible && (
          <button onClick={scrollToTop} className="iconeBack">
            <i className="fa-solid fa-circle-chevron-up fa-4x"></i>
            <span className="visually-hidden">Retour en haut de page</span>
          </button>
        )}
      </main>
    </ParallaxProvider>
  );
}

export default Home;

