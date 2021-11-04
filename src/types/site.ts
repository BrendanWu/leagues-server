import mongoose,{Document} from 'mongoose'

export interface ISite extends Document {
    address: String,
    gateways: any
}