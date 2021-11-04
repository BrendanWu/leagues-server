import mongoose, { model, Schema, SchemaType } from "mongoose";
import {ISite} from '../types/site'

const SiteSchema : Schema = new Schema({
    address: {
        type: String,
        // unique: true
    },
    gateways: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Gateway",
        default : []
    }
}, {timestamps: true});

export default model<ISite>('Site', SiteSchema);

