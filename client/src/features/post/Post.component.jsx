import React from 'react';
import styles from './Post.module.scss'



export const Post = (props) => {
  const filterDate = (date) => {
    return new Date(props.createdAt.replace(' ', 'T')).toLocaleString('ru', {month: 'long',day: 'numeric',hour: 'numeric', minute: 'numeric'})

  }

  const filterPublicName = (publicName) => {
    if (publicName.length < 19) return  publicName

    publicName = publicName.slice(0, 17) + '...'
    return publicName
  }

  return (
    <div key={props.id} 
      className={styles.Post}>
      <div className={styles.Left}>
        <div className={styles.Avatar}>
          <img src={`https://i.pravatar.cc/450?u=${props.accountId}`} alt="" />
          <div className={styles.Filter}></div>
        </div>
      </div>
      <div className={styles.Body}>
        <div className={styles.Header}>
          <span className={styles.PublicName}>{filterPublicName(props.publicName)}</span>
          <span className={styles.Date}>{filterDate(props.createdAt)}</span>
        </div>
        <div className={styles.Content}>
          {props.content}
        </div>
        
        {/* {props.createdAt} */}
        </div>
      <span></span>
    </div>
  )  
}
