import { Document } from "mongoose";
import { IQrData } from "./qrData";
export interface IUserRegister extends Document {
  name: string;
  email: string;
  password: string;
  qrdata: IQrData[];
}

export interface IUserLogin extends Document {
  email: string;
  password: string;
}
