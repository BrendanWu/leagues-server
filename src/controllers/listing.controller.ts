import { Mongoose } from "mongoose";
import Listing from "../models/listing.modal";
import eachSeries from 'async/eachSeries';
import moment from "moment";


export const getListings = async (req,res) =>{
    const listings = await Listing.find().limit(100).sort({date:-1});
    res.json({
        success: true,
        listings
    })
}


export const saveListings = async (listings) => {

    const savedListings = []
    await eachSeries(listings, async function(listing, cb) {
        const {title,description, image, date, info, link} = listing
      
        const listingObject = new Listing({
            title,
            description,
            imageUri: image,
            info,
            link,
            date: moment(date)
        })
    
    
        const exists = await Listing.exists({
            title
        })
        // console.log(exists)
        try {
            let saved;

            if(!exists) saved = await listingObject.save();
            saved && savedListings.push(saved)
        } catch (error) {
            console.log(error)
            // return error;
        }
        cb()
    
    })
    // console.log(savedListings.length)
    return savedListings;

}