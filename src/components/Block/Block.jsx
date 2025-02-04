import styles from './Block.module.css'

function Block({ children }) {
  return (
    <div className={styles.block}>
      {children}
    </div>
  )
}

export default Block;

