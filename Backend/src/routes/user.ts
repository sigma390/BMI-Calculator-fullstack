import express, { Router } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { User, Admin } from '../db/db';
import { SECRET } from '../middleware/auth';
import { authenticateJwt } from '../middleware/auth';


const router = express.Router();


 router.post("/signup",async (req:any,res:any) => {
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if (user) {
        res.status(403).json({ message: 'User already exists' });
    }
    else{
        const newUser = new User({username,password});
        await newUser.save();
        const token:string = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' })
        res.json("User Signed Up Succesfully!!!",token)
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

  module.exports = router;