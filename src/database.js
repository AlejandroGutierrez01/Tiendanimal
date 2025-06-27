import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", true);

const connection = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGODB_URL_LOCAL);
    console.log("MongoDB URL:", process.env.MONGODB_URL_LOCAL);
    console.log(`Database conectada en ${conn.connection.host}`);

  } catch (error) {
    console.error("Error al conectar a Mongo:", error);
  }
};

export default connection;