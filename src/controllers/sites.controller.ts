import { Mongoose } from "mongoose";
import Site from "../models/site.modal";
import Gateway from "../models/gateway.modal";

export const getSites = async (req,res) =>{
    const sites = await Site.find();
    res.json({
        success: true,
        sites
    })
}
export const addSite = async (req,res) => {
    const address = req.body.address;

    const s  = new Site({
        address
    })
   const doc = await s.save()
   res.json({
       success:true,
       site: doc
   })
}
export const getGateways = async (req,res) =>{
    const site = req.params.id;
    const gateways = await Gateway.find({site});
    res.json({
        success: true,
        gateways
    })
}
export const addGateway = async (req,res) => {
    console.log(req.body)
    const identifier = req.body.identifier;
    const site = req.body.site;
    console.log(req.body)

    const g  = new Gateway({
        identifier,
        site
    })
   const doc = await g.save()
   const s = await Site.findOneAndUpdate({_id: site}, {
       $push: {gateways: doc._id}
   })
   console.log(s)

   res.json({
       success:true,
       gateway: doc
   })
}