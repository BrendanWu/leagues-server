const mongoose = require('mongoose');

const schema = new mongoose.Schema({ title: 'string', description: 'string', date: 'string', author: 'string', category: 'string', markdownString: 'string' });
const PostModal = mongoose.model('Post', schema);

export default PostModal