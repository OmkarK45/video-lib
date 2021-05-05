const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema({
	playlistName: {
		type: String,
		default: 'A New Playlist',
	},
	videos: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Video',
		},
	],
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
})

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist
