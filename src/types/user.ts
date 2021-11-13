import { Document } from "mongoose";
import { IQrData } from "./qrData";
export interface IUserRegister extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
  address?: string;
  qrdata: IQrData[];
}

export interface IUserLogin extends Document {
  email: string;
  password: string;
}
