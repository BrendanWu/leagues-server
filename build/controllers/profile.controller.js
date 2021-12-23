"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.updateprofile = exports.addprofile = exports.getprofilebyid = exports.deleteprofile = exports.getprofile = exports.loginProfile = exports.registerProfile = void 0;
const profile_modal_1 = __importDefault(require("../models/profile.modal"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userValidations_1 = require("../utils/userValidations");
let mongoose = require("mongoose");
const registerProfile = (req, res) => {
    const { name, email, password } = req.body;
    const result = userValidations_1.registerSchema.validate({ name, email, password });
    if (!result.error) {
        profile_modal_1.default.findOne({ email: email }).then((profile) => {
            if (profile)
                return res.status(400).json("Profile already exists");
            const newProfile = new profile_modal_1.default({
                name,
                email,
                password,
                phone: "",
                city: "",
                state: "",
                country: "",
                address: "",
            });
            bcryptjs_1.default.genSalt(12, (err, salt) => bcryptjs_1.default.hash(newProfile.password, salt, (err, hash) => {
                if (err)
                    throw err;
                newProfile.password = hash;
                newProfile
                    .save()
                    .then((profile) => {
                    res.status(200).json({ profile: "Successfully Registered" });
                })
                    .catch((err) => console.log(err));
            }));
        });
    }
    else {
        res.status(422).json(result.error.details[0].message);
    }
};
exports.registerProfile = registerProfile;
const loginProfile = (req, res) => {
    // let uri =
    //   req.body.email === "jimmy11@gmail.com"
    //     ? "mongodb+srv://joharibalti1996:is119821885@cluster0.jjj5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    //     : "mongodb+srv://lifted:lifted@cluster0.sx6un.mongodb.net/test";
    // mongoose
    //   .connect(uri, { useNewUrlParser: true, useCreateIndex: true })
    //   .then(() =>
    //     console.log(
    //       "MongoDB connected " +
    //         "mongodb+srv://joharibalti1996:is119821885@cluster0.jjj5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    //     )
    //   )
    //   .catch((err: string) => console.log(err));
    const { email, password } = req.body;
    const result = userValidations_1.loginSchema.validate({ email, password });
    if (!result.error) {
        profile_modal_1.default.findOne({ email }).then((profile) => {
            if (!profile)
                return res.status(400).json("Incorrect Email or Password");
            bcryptjs_1.default.compare(password, profile.password).then((isMatch) => {
                if (!isMatch)
                    return res.status(400).json("Incorrect Email or Password");
                const token = jsonwebtoken_1.default.sign({ email: profile.email, userId: profile._id }, "secret_this_should_be_longer", { expiresIn: "2h" });
                res.status(200).json({
                    token: token,
                    profile: { email: profile.email, name: profile === null || profile === void 0 ? void 0 : profile.name },
                    expiresIn: 3600000,
                    userId: profile._id,
                });
            });
        });
    }
    else {
        console.log(result.error);
        res.status(422).json(result.error.details[0].message);
    }
};
exports.loginProfile = loginProfile;
const getprofile = (req, res) => {
    profile_modal_1.default.find(function (err, profiles) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(profiles);
        }
    }).sort({ created: -1 });
};
exports.getprofile = getprofile;
const deleteprofile = (req, res) => {
    profile_modal_1.default.remove({ _id: req.params.id }, function (err) {
        if (!err) {
            res.status(200).send({ status: "deleted" });
        }
        else {
            res.status(500).send({ status: "error" });
        }
    });
};
exports.deleteprofile = deleteprofile;
const getprofilebyid = (req, res) => {
    let id = req.params.id;
    profile_modal_1.default.findById(id, function (err, profile) {
        res.json(profile);
    });
};
exports.getprofilebyid = getprofilebyid;
const addprofile = (req, res) => {
    let profile = new profile_modal_1.default(req.body);
    profile
        .save()
        .then((profile) => {
        res.status(200).json({ profile: "profile added successfully" });
    })
        .catch((err) => {
        res.status(400).send("adding new profile failed");
        console.log(err);
    });
};
exports.addprofile = addprofile;
const updateprofile = (req, res) => profile_modal_1.default.findById(req.params.id, function (err, profile) {
    var _a, _b, _c, _d, _e;
    if (!profile) {
        res.status(404).send("data is not found");
    }
    else {
        profile.name = req.body.name;
        profile.email = req.body.email;
        profile.phone = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.phone;
        profile.city = (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.city;
        profile.state = (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.state;
        profile.country = (_d = req === null || req === void 0 ? void 0 : req.body) === null || _d === void 0 ? void 0 : _d.country;
        profile.address = (_e = req === null || req === void 0 ? void 0 : req.body) === null || _e === void 0 ? void 0 : _e.address;
        profile
            .save()
            .then((profile) => {
            res.json("profile updated");
        })
            .catch((err) => {
            res.status(400).send("Update not possible");
            console.log("err");
        });
    }
});
exports.updateprofile = updateprofile;
const logout = (req, res) => {
    try {
        // mongoose.connection.close();
        res.status(200).send("logout successfully");
    }
    catch (error) {
        res.status(400).send("error ");
    }
};
exports.logout = logout;
