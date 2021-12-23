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
const express = require("express");
const Post_1 = __importDefault(require("../models/Post"));
const router = express.Router();
router.get("/getAllPosts", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Post_1.default.find();
        res.json({ success: true, posts });
    }
    catch (error) {
        res.json({ success: false, msg: JSON.stringify(error) });
    }
}));
router.delete("/deletePostById", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.body._id;
    console.log(_id);
    try {
        yield Post_1.default.findOneAndDelete({ _id });
        const posts = yield Post_1.default.find();
        res.json({ success: true, posts });
    }
    catch (error) {
        res.json({ success: false, msg: JSON.stringify(error) });
    }
}));
router.post("/createNewPost", (req, res, next) => {
    try {
        console.log(req.body);
        const metaForm = req.body.metaForm;
        const markdownString = req.body.markdownString;
        const p = (0, Post_1.default)(Object.assign(Object.assign({}, metaForm), { markdownString }));
        p.save();
        console.log(p);
        res.json({ success: true, post: p });
    }
    catch (error) {
        res.json({ success: false, msg: JSON.stringify(error) });
    }
});
router.get("/getPostsByCategory/:category", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.params.category;
    console.log(category);
    try {
        const posts = yield Post_1.default.find({ category });
        res.json({ success: true, posts });
    }
    catch (error) {
        res.json({ success: false, msg: JSON.stringify(error) });
    }
}));
router.patch("/updatePostById", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.body._id;
    const metaForm = req.body.metaForm;
    const markdownString = req.body.markdownString;
    try {
        const newPost = yield Post_1.default.findOneAndUpdate({ _id }, Object.assign(Object.assign({}, metaForm), { markdownString }), { new: true });
        console.log(newPost);
        const posts = yield Post_1.default.find();
        res.json({ success: true, posts });
    }
    catch (error) {
        res.json({ success: false, msg: JSON.stringify(error) });
    }
}));
exports.default = router;
