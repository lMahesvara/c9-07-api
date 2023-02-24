import mongoose from 'mongoose'
import { MONGODB_URI } from '../config.js'

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Database connected'))
  } catch (error) {
    console.log(error)
  }
}
