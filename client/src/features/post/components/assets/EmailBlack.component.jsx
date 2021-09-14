import styles from './assets.module.scss'

export function EmailIcon (props) {

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      viewBox="0 0 24 24" 
      width="24px" 
      // fill="#ff0000"
      className={`${styles.authIcon} ${styles.icon}`}>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
  )
}



