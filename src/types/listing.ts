import {Document} from 'mongoose'

export interface IListing extends Document {
    title: String,
    description: String,
    imageUri: String
}