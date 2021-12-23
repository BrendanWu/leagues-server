"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playgrounds_controller_1 = require("../controllers/playgrounds.controller");
const router = (0, express_1.Router)();
router.route("/").get(playgrounds_controller_1.Playgrounds);
exports.default = router;
