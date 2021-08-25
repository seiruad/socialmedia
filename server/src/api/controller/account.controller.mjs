import { comparePasswords } from '../helpers/auth.helpers.mjs';
import { generateToken } from '../helpers/auth.helpers.mjs';
import { hashPassword } from '../helpers/auth.helpers.mjs';
import accountModel from '../model/account.model.mjs';


export const register = async (req, res, next) => {
  const props = req.body;
  
  try {
    const hasUser = await accountModel.hasUser(props.login)
    if (hasUser) return res.status(404).send({
      type: 'USER_EXIST'
    })// response --function from utility or middleware

    const hashedPassword = await hashPassword(props.password)
    const createdUser = await accountModel.createUser([props.login, hashedPassword, props.publicName])
    const token = generateToken(createdUser)

    res.json({token})
  } catch (err) {
    next(err)
  } 
}


export const login = async (req, res, next) => {
  console.log({body: req.body})
  const { login, password } = req.body;

  console.log({ login, password })

  try {
    const user = await accountModel.getUser([login])
    if (!user) return res.status(404).send({
      type: 'INVALID_CREDENTIALS '
    })

    const isValid = await comparePasswords(password, user.password)
    if  (!isValid) return res.status(404).send({
      type: 'INVALID_CREDENTIALS '
    })

    const token = generateToken(user);

    return res.json({token})

  } catch (err) {
    next(err)
  }
}


export const logOut = async (req, res) => { // NOT USING SESSIONS!!!
  //  ...
}


export const deleteAccount = async (req, res) => { 
  const props = req.body;
  props.account = req.account

  // login
  // delete
  try {
    const user = await accountModel.getUser([props.login])
    if (!user) return res.status(404).send({
      type: 'INVALID_CREDENTIALS '
    })

    const isValid = await comparePasswords(props.password, user.password)
    if  (!isValid) return res.status(404).send({
      type: 'INVALID_CREDENTIALS '
    })

    await accountModel.deleteAccount([props.account.id, props.login])

    return res.json({success: "ACCOUNT_DELETED"})
  } catch (err) {
    next(err)
  }
}



// export const changePassword = (req, res, next) => {

// }
