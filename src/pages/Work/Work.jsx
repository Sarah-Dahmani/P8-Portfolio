import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Block from "../../components/Block/Block";
import worksJson from "../../data/works.json";  // Vérifie que l'import est ici
import styles from "./Work.module.css";

const Work = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Trouver le projet correspondant à l'ID
  const work = worksJson.find((work) => work.id.toString() === id);  // Utilisation de worksJson ici
  console.log("Work trouvé:", work);  // Pour vérifier dans la console si la donnée est trouvée

  // Rediriger si aucun projet trouvé
  useEffect(() => {
    if (!work) {
      navigate("/error");
    }
  }, [work, navigate]);

  if (!work) {
    return <p>Projet non trouvé</p>;
  }
  console.log(work);  // Pour voir les données du projet

  return (
    <Block>
      <div className={styles.workBody}>
        <div className={styles["work-details"]}>
          <div className={`${styles["first-block"]} ${styles["col-mobile-1"]} ${styles["col-desktop-2"]}`}>
            <h1 className={styles["text-primary"]}>{work.title}</h1>
            <p>{work.description}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
            <p>{work.tags?.join(", ")}</p>
          </div>
        </div>
      </div>
    </Block>
  );
};

export default Work;
