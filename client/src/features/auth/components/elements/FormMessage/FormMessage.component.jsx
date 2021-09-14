import { useFormMessage } from 'features/auth/hooks/useFormMessage'
import styles from './FormMessage.module.scss'


export const FormMessage = (props) => {
  const message = useFormMessage()
  return (
    <div className={[styles.FormMessage, styles.MessageError].join(' ')}>{message}</div>
  )
}