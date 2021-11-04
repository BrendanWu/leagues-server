import env from "./config";
import mongoose from "mongoose";
const uri = env.sandbox
  ? "mongodb+srv://lifted:lifted@cluster0.sx6un.mongodb.net/test"
  : "mongodb+srv://joharibalti1996:is119821885@cluster0.jjj5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export const MongoURI: string = uri;
