import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
const config = dotenv.config()

export const checkAuth = async (req, res, next) => {
  const token = req.header('jwtToken')

  // check if token exist
  if (!token) {
    return res.status(404).json({ 
      type: "DENIED" 
    })
  }

  // verify token
  try {
    const verify = await jwt.verify(token, process.env.jwtSecret);

    req.account = verify.user;
    next()
  } catch (err) {
    res.status(404).json({ 
      type: "DENIED" 
    })
  }
}
