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
    phone: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {},
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
