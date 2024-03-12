import mongoose from "mongoose"

let isConnected = false // track the connection?

export const connectToDB = async () => {
  mongoose.set()
  if (isConnected) {
    console.log("MongoDB is connected")
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "artify",
      useNewUrlParser: true,
      useUnifiedTopology: true,

    }) 

    isConnected = true

    console.log("MongoDB Connected")
  } catch (err) {
    console.log(err)
  }
}