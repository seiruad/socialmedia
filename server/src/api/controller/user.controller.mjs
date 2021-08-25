import userModel from '../model/user.model.mjs'


export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.getAllUsers()

    res.json(users)
  } catch (err) {
    next (err)
  }
}


export const getUser = async (req, res, next) => {
  const { id } = req.params
  try {
    const posts = await userModel.getUser([id])

    res.json(posts)
  } catch (err) {
    next (err)
  }
}


export const getMyPage = async (req, res, next) => {
  const props = {}
  props.account = req.account

  console.log({account: props.account})

  try {
    const user = await userModel.getMyPage([props.account.id])

    res.json(user)
  } catch (err) {
    next (err)
  }
}
