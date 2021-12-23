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
exports.saveListings = exports.getListings = void 0;
const listing_modal_1 = __importDefault(require("../models/listing.modal"));
const eachSeries_1 = __importDefault(require("async/eachSeries"));
const moment_1 = __importDefault(require("moment"));
const getListings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listings = yield listing_modal_1.default.find().limit(100).sort({ date: -1 });
    res.json({
        success: true,
        listings
    });
});
exports.getListings = getListings;
const saveListings = (listings) => __awaiter(void 0, void 0, void 0, function* () {
    const savedListings = [];
    yield (0, eachSeries_1.default)(listings, function (listing, cb) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, image, date, info, link } = listing;
            const listingObject = new listing_modal_1.default({
                title,
                description,
                imageUri: image,
                info,
                link,
                date: (0, moment_1.default)(date)
            });
            const exists = yield listing_modal_1.default.exists({
                title
            });
            // console.log(exists)
            try {
                let saved;
                if (!exists)
                    saved = yield listingObject.save();
                saved && savedListings.push(saved);
            }
            catch (error) {
                console.log(error);
                // return error;
            }
            cb();
        });
    });
    // console.log(savedListings.length)
    return savedListings;
});
exports.saveListings = saveListings;
