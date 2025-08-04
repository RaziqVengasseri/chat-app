import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import cookieParser from "cookie-parser"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in .env");
  process.exit(1);
}


app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)

connectDB().then(()=>{ 
  console.log("The database connected successfully")
  app.listen(PORT, ()=>{
    console.log(`server is running on PORT no: ${PORT}`);
})
}).catch((err)=>{
  console.error("Database connection failed"+err.message);
  process.exit(1)
})




