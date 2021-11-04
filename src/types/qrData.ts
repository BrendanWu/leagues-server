import { Document } from "mongoose";

export interface IQrData extends Document {
  data: string;
  profile_id: string;
}
