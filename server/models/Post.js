const { Schema, model, ObjectId } = require('mongoose');

const Post = Schema({
	userId: { type: String, required: true },
	title: { type: String, required: true },
	desc: { type: String, max: 500 },
	image: { type: String },
	likes: { type: Array, default: [] }
},
	{ timestamps: true }
)

module.exports = model('Posts', Post);