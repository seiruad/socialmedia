import styles from './FormButton.module.scss'


export function FormButton (props) {
  return (
    <>
      <button 
        type={props.type}
        onClick={props.handleClick}
        className={styles.form__button}
        > {props.children}
      </button>
    </>
  )
}