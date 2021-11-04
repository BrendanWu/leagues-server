import mongoose, { model, Schema } from "mongoose";
// import {IListing} from '../types/listing'

const GatewaySchema : Schema = new Schema({
    identifier: {
        type: String,
        // unique: true
    },
    site: {
        type: mongoose.SchemaTypes.ObjectId
    },
}, {timestamps: true});

export default model<any>('Gateway', GatewaySchema);

