import styles from './FormText.module.scss';

export function FormText (props) {

  return (
    <p className={styles.form__text} >
      {props.text}
      <a 
        className={styles.form__link} href='./'  
        onClick={e => props.onClick(e)}
        >{props.linkText || props.children}
      </a>
    </p>
  )
}