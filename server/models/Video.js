const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
	id: String,
	title: String,
	description: String,
	duration: Number,
	views: Number,
	likes: Number,
	dislikes: Number,
	channel: String,
	channel_img: String,
})

const Video = mongoose.model('Video', videoSchema)
module.exports = Video
