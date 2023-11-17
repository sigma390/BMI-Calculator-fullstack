"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJwt = exports.SECRET = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Rest of your code remains unchanged
exports.SECRET = "OMKAR";
function authenticateJwt(req, res, next) {
    const authHead = req.headers.key;
    if (authHead) {
        const tkn = authHead.split(' ')[1];
        jsonwebtoken_1.default.verify(tkn, exports.SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
}
exports.authenticateJwt = authenticateJwt;
module.exports = {
    authenticateJwt,
    SECRET: exports.SECRET
};
