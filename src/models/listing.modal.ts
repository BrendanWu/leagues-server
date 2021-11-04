import { model, Schema } from "mongoose";
import {IListing} from '../types/listing'

const ListingSchema : Schema = new Schema({
    title: {
        type: String,
        // unique: true
    },
    description: {
        type: String
    },
    imageUri: {
        type: String
    },
    date: {
        type: Date
    },
    info: {
        type:String
    },
    link: {
        type: String
    }
}, {timestamps: true});

export default model<IListing>('Listing', ListingSchema);

