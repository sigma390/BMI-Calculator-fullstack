"use strict";
//schemas 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Admin = exports.UserSchema = exports.AdminSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.AdminSchema = new mongoose_1.default.Schema({
    username: String,
    password: String
});
exports.UserSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    bmi: Number
});
// =================> models<==================
exports.Admin = mongoose_1.default.model('Admin', exports.AdminSchema);
exports.User = mongoose_1.default.model('User', exports.UserSchema);
module.exports = {
    Admin: exports.Admin,
    User: exports.User
};
