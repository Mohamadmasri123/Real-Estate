import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config";
import authRoutes from "./routes/auth.js"



const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use("/auth",authRoutes)

const PORT= 4000 ;
const connectDB= async()=>{

        await mongoose.connect(process.env.MONGODB_URL).then(() => 
            console.log("connected to the database"));
        
        

    };
connectDB();

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server is started on  http://localhost:${PORT}`);
    } else {
        console.log("Error :" +err);
    }
});