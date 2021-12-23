"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserProfileSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    address: {
        type: String,
    },
    country: { type: String },
    image: { type: String },
    qrdata: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "QrData",
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("UserProfile", UserProfileSchema);
