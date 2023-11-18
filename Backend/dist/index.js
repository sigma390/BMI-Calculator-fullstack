"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.use(express_1.default.json());
app.use("/user", userRouter);
//connection
// const options:any = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose_1.default.connect('mongodb+srv://root:root@cluster0.pphcshu.mongodb.net/BMI', {});
app.listen(4001, () => {
    console.log("STARTED ON 4002");
});
