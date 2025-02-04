import { useEffect } from 'react'
import Block from '../../components/Block/Block'
import { useScrollToTop } from '../../utils/functions/scrollToTop'
import codePicture from '../../assets/images/code.webp'
import styles from './About.module.css'

function About() {
  // Mettre à jour le titre de la page
  useEffect(() => {
    document.title = 'Sarah DAHMANI - À propos'
  }, [])

  // Définir un état pour afficher ou masquer le bouton 'retour en haut de page'
  const [isVisible, scrollToTop] = useScrollToTop()

  return (
    <main role='main'>
      <div className={styles.blockFlex}>
        <section aria-label='Présentation complète' className={styles.block1}>
          <Block>
            <h2 className='visually-hidden'>Présentation</h2>
            <p>Après avoir obtenu mon <strong>baccalauréat sciences et technologies du management et de la gestion spécialité ressources humaines</strong>, je me suis dirigée vers le <strong>domaine du droit</strong>, j'ai occupé un poste <strong>d'assistante juridique</strong>, en cabinet d'avocats et en étude notariale.</p>
            <p>Après sept années passées dans le domaine du juridique, j'ai renssenti le besoin de changer de vie.</p>
            <p>Ayant toujours été passionnée par l'<strong>informatique</strong> et après quelques recherches sur les différents métiers dans ce domaine, j'ai découvert la formation de Développeur Web et me suis intéressée aux langages HTML et CSS, puis au JavaScript.</p>
            <p>Une fois éprise de cette discipline, il m'était impossible de m'arrêter là. J'ai alors pris la décision de débuter une <strong>formation</strong> diplômante, afin d'en apprendre plus sur le métier de <strong>développeur web</strong>.</p>
            <p>Aujourd'hui, je suis en fin de formation chez OpenClassrooms. Mon objectif est de trouver un emploi dans une entreprise afin de me perfectionner.</p>
          </Block>
        </section>
        <div className={styles.block2}>
          <img className={styles.codePicture} src={codePicture} alt='Lignes de code' title='Lignes de code' />
        </div>
        <section aria-label='Ma formation' className={styles.block3}>
          <Block>
            <h2 className='visually-hidden'>Ma formation</h2>
            <p>J'ai réalisé plusieurs projets avec OpenClassrooms, accessibles via la page d'Accueil (avec leurs liens GitHub respectifs). J'ai également été reçue en soutenance par des évaluateurs de l'organisme pour chacun d'entre eux.</p>
            <p>En plus des <strong>compétences</strong> acquises (mentionnées sur la page principale), j'ai aussi appris à devenir <strong>autonome</strong>, et à chercher les réponses à mes questions. J'ai réalisé que j'étais d'un caractère tenace face aux différents 'bugs' que j'ai pu rencontrer, parfois résolus après de nombreuses heures de travail.</p>
            <p>Je suis ravie de m'être lancée dans cette aventure, car j'ai pris beaucoup de <strong>plaisir</strong> à participer à cette formation. Je souhaite poursuivre dans cette direction.</p>
          </Block>
        </section>
      </div>
      {isVisible && (
        <span className='iconeBackContainer'>
          <button onClick={scrollToTop} className='iconeBack'>
            <i className='fa-solid fa-circle-chevron-up fa-4x'></i>
            <span className='visually-hidden'>Retour en haut de page</span>
          </button>
        </span>
      )}
    </main>
  )
}

export default About;
