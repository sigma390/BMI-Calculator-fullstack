import express, { Router } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';



// Rest of your code remains unchanged




 export let SECRET = "OMKAR";

 export function authenticateJwt(req:any,res:any,next:any){
    const authHead = req.headers.key;
    if (authHead) {
        const tkn = authHead.split(' ')[1];
        jwt.verify(tkn,SECRET,(err:any,user:any)=>{
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        })
        
    }
    else{
        res.sendStatus(401);
    }
 }


module.exports = {
    authenticateJwt,
    SECRET
}