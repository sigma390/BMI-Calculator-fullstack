import express, { Router } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/user",userRouter)
//connection

// const options:any = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb+srv://root:root@cluster0.pphcshu.mongodb.net/BMI',{}
 );

 app.listen(4001,()=>{
    console.log("STARTED ON 4002")
 })
