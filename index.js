// Dotenv
require('dotenv').config()

// Dependencies
const compression = require('compression')
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

// Variables
const PORT = process.env.PORT
const app = express()

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(compression())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

// Routes
app.use('/api/v1/announcements', require('./routes/announcements'))
app.use('/api/v1/companies', require('./routes/companies'))
app.use('/api/v1/questions', require('./routes/questions'))
app.use('/api/v1/projects', require('./routes/projects'))
app.use('/api/v1/users', require('./routes/users'))

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
			console.log(`Server has been started on PORT ${PORT}`),
		)
	} catch (e) {
		// Error processing
		console.log('Неизвестная ошибка', e.message)
		process.exit(1)
	}
}

start()
