"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoURI = void 0;
const config_1 = __importDefault(require("./config"));
const uri = config_1.default.sandbox
    ? "mongodb+srv://lifted:lifted@cluster0.sx6un.mongodb.net/test"
    : "mongodb+srv://lifted:lifted@cluster0.sx6un.mongodb.net/test";
exports.MongoURI = uri;
