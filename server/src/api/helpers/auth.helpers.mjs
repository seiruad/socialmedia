import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
const config = dotenv.config()


export const hashPassword = async (password) => {
  
  const salt = await bcrypt.genSalt(10)
  const bcryptPassword = await bcrypt.hash(password, salt)
  console.log({bcryptPassword})
  return bcryptPassword
}

export const comparePasswords = async (password, hashedPassword) => {
  const compare = await bcrypt.compare(password, hashedPassword)
  return compare
}



export const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      publicName: user.public_name,
      imageColor: user.image_color,
      about: user.about

      // id: user.id,
      // username: user.username
    }
  }
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}
