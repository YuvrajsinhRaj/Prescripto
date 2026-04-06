import express from 'express'
import cors from 'cors'
import'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoutes.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB().catch(err => {
  console.error('MongoDB connection failed:', err);
  process.exit(1);
});
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
})); //it allow frontend to connect with backend 

//api end points
app.use('/api/admin',adminRouter)
//localhost:4000/api/admin/add-doctor
app.use('/api/doctor',doctorRouter)
app.use('/api/user', userRouter)

app.get('/',(req,res)=>{
    res.send('API working')
})
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

app.listen(port,()=>{
    console.log("server started", port);
    
})
