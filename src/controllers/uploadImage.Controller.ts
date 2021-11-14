import path from "path";
import multer from "multer";
import Profile from "../models/profile.modal";
import { IUserRegister, IUserLogin } from "../types/user";

export const uploadImage = (req: any, res: any) => {
  const storage = multer.diskStorage({
    destination: "./public/",
    filename: function (req: any, file: any, cb) {
      cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
  }).single("myImage");
  upload(req, res, (err) => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file); //Here you get file.
    Profile.findById(
      req.params.id,
      function (err: string | null, profile: IUserRegister) {
        if (!profile) {
          res.status(404).send("data is not found");
        } else {
          profile.image = req?.file?.filename;
          profile
            .save()
            .then((profile) => {
              res.json("profile updated");
            })
            .catch((err) => {
              //   res.status(400).send("Update not possible");
              console.log("err");
            });
        }
      }
    );
    /*Now do where ever you want to do*/
    if (!err) return res.send(200).end();
  });
};

// const router = express.Router();
// router.post("/upload", {
//    upload(req, res, (err) => {
//       console.log("Request ---", req.body);
//       console.log("Request file ---", req.file);//Here you get file.
//       /*Now do where ever you want to do*/
//       if(!err)
//          return res.send(200).end();
//    });
// };);
