// Dotenv
require('dotenv').config()

// Dependencies
const fileUpload = require('express-fileupload')
const compression = require('compression')
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')

// Variables
const PORT = process.env.PORT
const app = express()

// Middleware
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.static(path.resolve(__dirname, 'uploads')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(compression())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(
    fileUpload({
      createParentPath: true,
      abortOnLimit: true,
      responseOnLimit: JSON.stringify({
        message: 'Размер файла слишком большой',
      }),
      limits: {
        fileSize: 10 * 1024 * 1024,
      },
    }),
)

// Routes
app.use('/v1/announcements', require('./routes/announcements'))
app.use('/v1/companies', require('./routes/companies'))
app.use('/v1/projects', require('./routes/projects'))
app.use('/v1/users', require('./routes/users'))

// Docs
app.get('/', (req, res) => {
  res.setHeader(
      'Content-Security-Policy',
      `
        default-src * \'self\'; 
        script-src * \'self\' \'unsafe-inline\'; 
        style-src * \'self\' \'unsafe-inline\'; 
        img-src * \'self\' data: https:;
      `,
  )
  return res.sendFile(path.resolve(__dirname, 'docs', 'index.html'))
})

const start = async () => {
  try {
    // Connect to mongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })

    // Start server
    app.listen(PORT, () =>
      console.log(`Server has been started on PORT ${PORT}`)
    )
  } catch (e) {
    // Error processing
    console.log('Неизвестная ошибка', e.message)
    process.exit(1)
  }
}

start()
