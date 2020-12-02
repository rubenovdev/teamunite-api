import mongoose from 'mongoose'
import { config } from './config/config.js'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

export const connect = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, options)
  } catch (e) {
    throw new Error('Error while connecting to MongoDB')
  }
}
