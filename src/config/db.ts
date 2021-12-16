import env from "./config";
import mongoose from "mongoose";
const uri = env.sandbox
  ? "mongodb+srv://lifted:lifted@cluster0.sx6un.mongodb.net/test"
  : "mongodb+srv://lifted:lifted@cluster0.sx6un.mongodb.net/test";

export const MongoURI: string = uri;
