  
export const validateSignIn = (req, res, next) => {
  const { login, password } = req.body

  if (!validateLogin(login) || !validatePassword(password)) {
    return res.status(404).send({
      type: 'DENIED'
    })
  }

  next()
}


export const validateRegister = (req, res, next) => {
  const { login, password, publicName } = req.body

  if (!validateLogin(login) || !validatePassword(password) || !validatePName(publicName)) {
    return res.status(404).send({
      type: 'DENIED'
    })
  }

  next()
}
