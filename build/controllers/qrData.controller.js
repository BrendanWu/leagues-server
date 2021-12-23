"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQrData = exports.addQrData = void 0;
const profile_modal_1 = __importDefault(require("../models/profile.modal"));
const qrdata_modal_1 = __importDefault(require("../models/qrdata.modal"));
const addQrData = (req, res) => {
    var _a;
    console.log("api callredd");
    let qrData = new qrdata_modal_1.default(req.body);
    let _id = (_a = req.body) === null || _a === void 0 ? void 0 : _a.profile_Id;
    qrData
        .save()
        .then((qrData) => {
        profile_modal_1.default.findById(_id, (err, profile) => {
            console.log("_id", _id);
            if (profile) {
                profile.qrdata.push(qrData);
                profile.save();
                console.log("qr Data", profile);
                res.status(200).json({ qrData: "qrData added successfully" });
            }
            else {
                res.status(400).send("Profile/User not found");
            }
        });
    })
        .catch((err) => {
        res.status(400).send("adding new qrData failed");
        console.log(err);
    });
};
exports.addQrData = addQrData;
const getQrData = (req, res) => {
    let id = req.params.profile_Id;
    console.log("idddd, id");
    qrdata_modal_1.default.find({ profile_Id: id }, function (err, data) {
        res.json(data);
    });
};
exports.getQrData = getQrData;
