import { useState } from 'react'
import styles from './AddWork.module.css'
import Block from '../../components/Block/Block'

function AddWork() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [title, setTitle] = useState('')
  const [imageMain, setImageMain] = useState(null)
  const [description, setDescription] = useState('')
  const [problems, setProblems] = useState('')
  const [technos, setTechnos] = useState([])
  const [skills, setSkills] = useState([])
  const [linkGH, setLinkGH] = useState('')
  const [link, setLink] = useState('')
  const [model, setModel] = useState(null)
  const [modelMob, setModelMob] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()

    const newWork = {
      title: title,
      description: description,
      problems: problems,
      technos: technos,
      skills: skills,
      linkGH: linkGH,
      link: link,
      imageMain: imageMain ? URL.createObjectURL(imageMain) : null,
      model: model ? URL.createObjectURL(model) : null,
      modelMob: modelMob ? URL.createObjectURL(modelMob) : null,
    }

    const existingWorks = JSON.parse(localStorage.getItem('works')) || []
    existingWorks.push(newWork)
    localStorage.setItem('works', JSON.stringify(existingWorks))

    setIsFormSubmitted(true)

    // Réinitialiser les champs
    document.getElementById('form').reset()
    setTitle('')
    setImageMain(null)
    setDescription('')
    setProblems('')
    setTechnos([])
    setSkills([])
    setLinkGH('')
    setLink('')
    setModel(null)
    setModelMob(null)
  }

  // Définition des gestionnaires de changement
  const handleTitleChange = (event) => setTitle(event.target.value)
  const handleImageMainChange = (event) => setImageMain(event.target.files[0])
  const handleDescriptionBlur = (event) => setDescription(event.target.value)
  const handleProblemsChange = (event) => setProblems(event.target.value)
  
  const handleTechnosChange = (event) => {
    const updatedTechnos = [...technos]
    updatedTechnos[event.target.dataset.index] = event.target.value
    setTechnos(updatedTechnos)
  }

  const handleSkillsChange = (event) => {
    const updatedSkills = [...skills]
    updatedSkills[event.target.dataset.index] = event.target.value
    setSkills(updatedSkills)
  }

  const handlelinkGHChange = (event) => setLinkGH(event.target.value)
  const handlelinkChange = (event) => setLink(event.target.value)
  const handleModelChange = (event) => setModel(event.target.files[0])
  const handleModelMobChange = (event) => setModelMob(event.target.files[0])

  return (
    <main role='main'>
      <Block>
        <form onSubmit={handleSubmit} id='form' className={styles.form}>
          <fieldset>
            <legend>Ajouter un projet</legend>
            <div>
              <label htmlFor='title'>Titre</label>
              <input type='text' id='title' onBlur={handleTitleChange} required />
            </div>
            <div>
              <label htmlFor='imageMain'>Image principale</label>
              <input type='file' id='imageMain' onBlur={handleImageMainChange} required />
            </div>
            <div>
              <label htmlFor='description'>Description</label>
              <textarea id='description' onBlur={handleDescriptionBlur} required />
            </div>
            <div>
              <label htmlFor='problems'>Problèmes rencontrés</label>
              <textarea id='problems' onBlur={handleProblemsChange} />
            </div>
            <div className={styles.technos}>
              <label htmlFor='technos'>Technologies utilisées</label>
              {[...Array(6)].map((_, index) => (
                <input
                  type='text'
                  key={`technos-${index}`}
                  id={`technos${index}`}
                  data-index={index}
                  onBlur={handleTechnosChange}
                />
              ))}
            </div>
            <div className={styles.skills}>
              <label htmlFor='skills'>Compétences</label>
              {[...Array(6)].map((_, index) => (
                <input
                  type='text'
                  key={`skills-${index}`}
                  id={`skills${index}`}
                  data-index={index}
                  onBlur={handleSkillsChange}
                />
              ))}
            </div>
            <div>
              <label htmlFor='linkGH'>Lien Github</label>
              <input type='text' id='linkGH' onBlur={handlelinkGHChange} required />
            </div>
            <div>
              <label htmlFor='link'>Lien</label>
              <input type='text' id='link' onBlur={handlelinkChange} />
            </div>
            <div>
              <label htmlFor='model'>Maquette</label>
              <input type='file' id='model' onBlur={handleModelChange} required />
            </div>
            <div>
              <label htmlFor='modelMob'>Maquette mobile</label>
              <input type='file' id='modelMob' onBlur={handleModelMobChange} />
            </div>
            <div className={styles.button}>
              <input type='submit' id='buttonSubmit' className={styles.buttonSubmit} value='Ajouter le travail'/>
              {isFormSubmitted && <p>Envoyé !</p>}
            </div>
          </fieldset>
        </form>
      </Block>
    </main>
  )
}

export default AddWork
