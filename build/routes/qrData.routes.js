"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const qrData_controller_1 = require("../controllers/qrData.controller");
const auth_check_1 = __importDefault(require("../utils/auth_check"));
const router = (0, express_1.Router)();
router.route("/addqrdata").post(auth_check_1.default, qrData_controller_1.addQrData);
router.route("/getqrdata/:profile_id").get(auth_check_1.default, qrData_controller_1.getQrData);
exports.default = router;
