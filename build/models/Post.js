"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const schema = new mongoose.Schema({ title: 'string', description: 'string', date: 'string', author: 'string', category: 'string', markdownString: 'string' });
const PostModal = mongoose.model('Post', schema);
exports.default = PostModal;
