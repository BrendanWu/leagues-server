import { model, Schema } from "mongoose";
import { IUserRegister } from "../types/user";
const UserProfileSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    qrdata: [
      {
        type: Schema.Types.ObjectId,
        ref: "QrData",
      },
    ],
  },
  { timestamps: true }
);

export default model<IUserRegister>("UserProfile", UserProfileSchema);
