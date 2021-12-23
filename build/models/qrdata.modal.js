"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const QrDataSchema = new mongoose_1.Schema({
    data: {
        type: String,
    },
    profile_Id: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("QrData", QrDataSchema);
