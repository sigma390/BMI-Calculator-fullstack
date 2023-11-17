

//schemas 

import mongoose from "mongoose";

export const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
})

export const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    bmi:Number
})

// =================> models<==================

export const Admin = mongoose.model('Admin',AdminSchema);
export const User = mongoose.model('User',UserSchema);

module.exports = {
    Admin,
    User
}

