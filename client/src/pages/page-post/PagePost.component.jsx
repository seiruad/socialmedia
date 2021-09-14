import { PostCreator } from "features/post-creator/PostCreator.component";
import { Post } from "features/post/Post.component";
import { useAPIGet } from "shared/hooks/useApiGet";
import { Page } from '../page/Page.component'
import styles from './PagePost.module.scss'


export const PagePost = () => {
  const [data, error] = useAPIGet('/post/')


  if (error) return (
    <Page>
      <div className="title">Error</div>
      <div className="error">{JSON.stringify(error.response?.data)}</div>
    </Page>
  )

  if (data) {
    const allPosts = data.map((props, index) => {
      return (
        <Post {...props} />
      )
    })
    return (
      <Page>
        <div className={[styles.Container, styles.CreatorContainer].join(' ')}><PostCreator /></div>
        <div className={[styles.Container, styles.PostsContainer].join(' ')}>{allPosts}</div>
      </Page>
  )}

  return (
    <Page>
      <div className="empty">...Loading...</div>
    </Page>
  )
}