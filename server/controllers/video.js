const Playlist = require('../models/Playlist')
const User = require('../models/User')
const Video = require('../models/Video')

exports.getVideos = async (req, res) => {
	try {
		const videos = await Video.find({})

		res.status(200).json({
			success: true,
			data: videos,
			code: 'VIDEOS_FOUND',
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: 'Something went wrong while finding videos',
			code: 'VIDEOS_NOT_FOUND',
		})
	}
}

exports.getVideo = async (req, res) => {
	const { videoID } = req.params
	try {
		const foundVideo = await Video.findOne({ videoID })
		if (!foundVideo) {
			return res.status(404).json({
				success: false,
				msg: 'Requested video was not found',
				code: 'VIDEO_NOT_FOUND',
			})
		}
		res.status(200).json({
			msg: 'Video found',
			data: foundVideo,
			code: 'VIDEO_FOUND',
			success: true,
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: 'Something went wrong while finding this video',
			code: 'INTERNAL_SERVER_ERROR',
		})
	}
}

exports.createPlaylist = async (req, res) => {
	const { playlistName } = req.body

	if (!playlistName) {
		return res.status(400).json({
			success: false,
			msg: 'Playlist name is required.',
		})
	}

	const newPlaylist = new Playlist({
		playlistName,
		creator: req.user._id,
	})

	await newPlaylist.save()

	res.status(200).json({
		success: true,
		msg: 'Playlist created',
		playlist: newPlaylist,
	})
}

exports.getUserPlaylists = async (req, res) => {
	const { _id } = req.user
	try {
		const { playlists } = await User.findOne({ _id }, { password: 0 }).populate('playlists')

		res.json({
			playlists,
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Something went wrong',
			error,
			code: 'ERR_INTERNAL_ERROR',
		})
	}

	// console.g(userPlayLists)
}

exports.addToPlaylist = async (req, res) => {
	const { videoID, playlistID } = req.body

	if (!videoID || !playlistID) {
		return res.status(400).json({
			msg: 'Video and Playlist are required.',
			success: false,
			code: 'ERR_BAD_REQUEST',
		})
	}

	try {
		const foundVideo = await Video.findOne({ videoID })

		const user = await User.findOne({ _id: req.user._id }, { password: 0 })

		const playlist = await Playlist.findOne({ playlistID })

		playlist.videos.push(foundVideo)

		await playlist.save()

		await user.save()

		res.status(200).json({
			msg: 'Video has been added to playlist.',
			playlist,
			success: true,
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Something went wrong while saving video in playlist.',
			error,
			success: false,
			code: 'ERR_INTERNAL_ERROR',
		})
	}
}
