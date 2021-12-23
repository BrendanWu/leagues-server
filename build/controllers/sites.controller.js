"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGateway = exports.getGateways = exports.addSite = exports.getSites = void 0;
const site_modal_1 = __importDefault(require("../models/site.modal"));
const gateway_modal_1 = __importDefault(require("../models/gateway.modal"));
const getSites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sites = yield site_modal_1.default.find();
    res.json({
        success: true,
        sites
    });
});
exports.getSites = getSites;
const addSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const address = req.body.address;
    const s = new site_modal_1.default({
        address
    });
    const doc = yield s.save();
    res.json({
        success: true,
        site: doc
    });
});
exports.addSite = addSite;
const getGateways = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const site = req.params.id;
    const gateways = yield gateway_modal_1.default.find({ site });
    res.json({
        success: true,
        gateways
    });
});
exports.getGateways = getGateways;
const addGateway = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const identifier = req.body.identifier;
    const site = req.body.site;
    console.log(req.body);
    const g = new gateway_modal_1.default({
        identifier,
        site
    });
    const doc = yield g.save();
    const s = yield site_modal_1.default.findOneAndUpdate({ _id: site }, {
        $push: { gateways: doc._id }
    });
    console.log(s);
    res.json({
        success: true,
        gateway: doc
    });
});
exports.addGateway = addGateway;
