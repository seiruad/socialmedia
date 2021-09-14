import { useEffect, useState } from 'react';
import styles from './Form.module.scss';

export function Form (props) {
  const [opacity, setOpacity] = useState(1)
  useEffect(() => {
    setOpacity(1)
  }, [])
  return (
    <>
      <form 
        onSubmit={props.handleSubmit || ((e) => e.preventDefault())}
        className={styles.form}
        style={{opacity}}
        > {props.children} 
      </form>
    </>
  )
}