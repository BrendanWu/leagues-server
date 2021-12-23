"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listing_controller_1 = require("../controllers/listing.controller");
const router = (0, express_1.Router)();
router.route("/saveListing").post(listing_controller_1.saveListings);
router.route("/getListings").get(listing_controller_1.getListings);
exports.default = router;
