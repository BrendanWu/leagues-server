import Profile from "../models/profile.modal";
import QrData from "../models/qrdata.modal";
import { Response, Request } from "express";

export const addQrData = (req: Request, res: Response) => {
  console.log("api callredd");
  let qrData = new QrData(req.body);
  let _id = req.body?.profile_Id;

  qrData
    .save()
    .then((qrData) => {
      Profile.findById(_id, (err, profile) => {
        console.log("_id", _id);
        if (profile) {
          profile.qrdata.push(qrData);
          profile.save();
          console.log("qr Data", profile);
          res.status(200).json({ qrData: "qrData added successfully" });
        } else {
          res.status(400).send("Profile/User not found");
        }
      });
    })
    .catch((err) => {
      res.status(400).send("adding new qrData failed");
      console.log(err);
    });
};

export const getQrData = (req: Request, res: Response) => {
  let id = req.params.profile_Id;
  console.log("idddd, id");
  QrData.find({ profile_Id: id }, function (err: string | null, data: any) {
    res.json(data);
  });
};
