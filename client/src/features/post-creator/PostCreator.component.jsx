import React, { useRef, useState } from 'react';
import styles from './PostCreator.module.scss'



export const PostCreator = (props) => {
  const refTextarea = useRef();
  const [value, setValue] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleChange = (e) => {
    refTextarea.current.style.height = '36px' 
    let scrollHeight = e.target.scrollHeight
    refTextarea.current.style.height = `${scrollHeight}px` 
    
    console.log(scrollHeight)
    console.log(refTextarea.current.style.height)
    console.log({value:e.target.value})

    setValue(e.target.value)
  }

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = () => {
    setIsActive(false)
  }

  return (
      <div className={styles.PostCreator}
        onClick={() => refTextarea?.current.focus()}>
          <div className={[styles.InputGroup, isActive && styles.active].join(' ')}>
            <textarea className={styles.Textarea} 
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
              ref={refTextarea}
              value={value}
              placeholder={'Что происходит?'}
              onChange={(e) => handleChange(e)}
              name={'postCreator'} 
            ></textarea>
            <div className={styles.InputMessage}></div>
          </div>

          <div className={styles.Control}>
            <button className={styles.SubmitButton} >Готово</button>
          </div>
      </div>
  )
}
