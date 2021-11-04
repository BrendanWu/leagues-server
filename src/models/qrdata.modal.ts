import { model, Schema } from "mongoose";
import { IQrData } from "../types/qrData";
const QrDataSchema: Schema = new Schema(
  {
    data: {
      type: String,
    },
    profile_Id: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<IQrData>("QrData", QrDataSchema);
