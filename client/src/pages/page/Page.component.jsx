import { useEffect } from 'react'
import styles from './Page.module.scss'

export const Page = (props) => {

  return (
    <div className={styles.Container}>
      <div className={styles.Navbar}></div>
      <div className={styles.Page}>
        {props.children}
      </div>
    </div>
  )
}
