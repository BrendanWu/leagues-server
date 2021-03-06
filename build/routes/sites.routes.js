"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sites_controller_1 = require("../controllers/sites.controller");
const router = (0, express_1.Router)();
router.route("/addSite").post(sites_controller_1.addSite);
router.route("/getSites").get(sites_controller_1.getSites);
router.route("/getGateways/:id").get(sites_controller_1.getGateways);
router.route("/addGateway").post(sites_controller_1.addGateway);
exports.default = router;
// module.exports = router;
