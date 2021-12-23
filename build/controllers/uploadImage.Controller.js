"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const profile_modal_1 = __importDefault(require("../models/profile.modal"));
const uploadImage = (req, res) => {
    const storage = multer_1.default.diskStorage({
        destination: "./public/",
        filename: function (req, file, cb) {
            cb(null, "IMAGE-" + Date.now() + path_1.default.extname(file.originalname));
        },
    });
    const upload = (0, multer_1.default)({
        storage: storage,
        limits: { fileSize: 1000000 },
    }).single("myImage");
    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file); //Here you get file.
        profile_modal_1.default.findById(req.params.id, function (err, profile) {
            var _a;
            if (!profile) {
                res.status(404).send("data is not found");
            }
            else {
                profile.image = (_a = req === null || req === void 0 ? void 0 : req.file) === null || _a === void 0 ? void 0 : _a.filename;
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
        });
        /*Now do where ever you want to do*/
        if (!err)
            return res.send(200).end();
    });
};
exports.uploadImage = uploadImage;
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
