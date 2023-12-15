import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  DATABASE_URL=`mongodb+srv://gaurakrishna31:krishgaura31@cluster0.namzbzc.mongodb.net/?retryWrites=true&w=majority`
  try {
    const DB_OPTIONS = {
      dbName: "Auth"
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS)
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB