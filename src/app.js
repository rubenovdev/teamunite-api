import compression from 'compression'
import { fileURLToPath } from 'url'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'

import { authRoutes } from './routes/auth.js'
import { tasksRoutes } from './routes/tasks.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(cors())

app.use('/v1/auth', authRoutes)
app.use('/v1/tasks', tasksRoutes)

app.get('*', (req, res) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src * 'self'; script-src * 'self' 'unsafe-inline'; style-src * 'self' 'unsafe-inline'; img-src * 'self' data: https:;"
  )
  return res.sendFile(path.resolve(__dirname, '..', 'docs', 'index.html'))
})

export default app
