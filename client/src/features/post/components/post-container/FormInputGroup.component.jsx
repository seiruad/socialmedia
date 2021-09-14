import { useInputGroup } from 'features/auth/hooks/useInputGroup';
import styles from './FormInputGroup.module.scss';

export function FormInputGroup (props) {
  const inputGroup = useInputGroup(props.name)

  // console.log({in: 'FormInputGroup', inputGroup})
  // console.log({in: `FormInputGroup : ${props.name}`, values: inputGroup.value, messages: inputGroup.message})

  return (
    <div className={styles.form__input_group}>
        <span
          className={`${styles.form__icon}`} 
          >{props.icon}</span>
        <input 
          name={props.name}
          type={props.type}
          value={inputGroup.value}
          placeholder={props.placeholder}
          autoComplete='off'
          onBlur={props.handleBlur}
          onChange={(e) => inputGroup.handleChange(e)}
          className={`${styles.form__input} ${inputGroup.message && styles.form__input__error}` }
          {...props}
        />

      <div className={styles.form__input_message}>{inputGroup.message !== '_' && inputGroup.message}</div>
    </div>
  )
}
