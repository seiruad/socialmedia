import postModel from '../model/post.model.mjs'


export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postModel.getAllPosts()

    res.json(posts)
  } catch (err) {
    next (err)
  }
}


export const getPost = async (req, res, next) => {
  const { id } = req.params
  try {
    const posts = await postModel.getPost([id])

    res.json(posts)
  } catch (err) {
    next (err)
  }
}


export const createPost = async (req, res, next) => {
  const props = req.body
  props.account = req.account
  
  try {
    const post = await postModel.addPost([props.content, props.account.id])

    res.json(post)
  } catch (err) {
    next(err)
  } 
}


export const deletePost = async (req, res, next) => {
  const props = {}
  props.id = req.params.id
  props.account = req.account

  try {
    const hasPost = await postModel.hasPost([props.id, props.account.id])
    if (!hasPost) return res.status(404).send({
      type: 'DENIED'
    }) 

    await postModel.removePost([props.id])

    res.json({ success: "POST_DELETED" })
  } catch (err) {
    next (err)
  }
}
