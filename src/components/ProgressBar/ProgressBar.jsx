import styles from './ProgressBar.module.css'

function ProgressBar({ percentage, index }) {
  return (
    <div aria-label={`Maîtrise ${percentage}%`} className={styles.container}>
        <div className={styles.progress + ' ' + styles[`progress${percentage}`] + ' ' + styles[`progress${index}`]}></div>
    </div>
  )
}

export default ProgressBar;

