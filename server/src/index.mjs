import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { mountRoutes } from './api/routes/index.mjs'

const config = dotenv.config()
const PORT = process.env.PORT || 5000

//  Middleware
const app = express()
app.use(cors())
app.use(express.json())
// app.use(express.static(process.env.PWD + '/public'));

//  Routes
mountRoutes(app)
 
app.listen(PORT, () => {
  console.log('Server is running on port: '+ PORT )
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Server has broken! sadly...')
})
