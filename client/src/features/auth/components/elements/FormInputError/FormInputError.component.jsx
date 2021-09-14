import styles from './FormInputError.module.scss';

export function FormInputError (props) {

  return (
    <div className={styles.form__input_error}>
      {props.errorMessage}
    </div>
  )
}