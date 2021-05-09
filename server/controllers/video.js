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

	const user = await User.findOne({ _id: req.user._id })

	user.playlists.push(newPlaylist._id)
	console.log('user playlists', user.playlists)

	await user.save()
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
		const { playlists } = await User.findOne({ _id }).populate('playlists')
		console.log('User playlists found my mongoose ', playlists)
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
	// Note to self-> playlistIDArray
	const { videoID, newPlaylistName, selectedPlaylists } = req.body

	try {
		const foundVideo = await Video.findOne({ id: videoID })

		const user = await User.findOne({ _id: req.user._id }, { password: 0 })

		const playlists = await Playlist.find({
			_id: {
				$in: selectedPlaylists,
			},
		})

		playlists.forEach(async (playlist) => {
			playlist.videos.push(foundVideo._id)
			await playlist.save()
		})

		// await playlists.save()

		if (newPlaylistName) {
			const newPlaylist = new Playlist({
				playlistName: newPlaylistName,
				creator: user._id,
			})

			newPlaylist.videos.push(foundVideo._id)
			user.playlists.push(newPlaylist._id)
			await newPlaylist.save()
			await user.save()
		}

		const updatedPlaylists = await Playlist.find({
			creator: user._id,
		})

		res.status(200).json({
			success: true,
			msg: 'Video successfully add to playlist(s)',
			updatedPlaylists,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			msg: 'Something went wrong while saving video in playlist.',
			error,
			success: false,
			code: 'ERR_INTERNAL_ERROR',
		})
	}
}

// @TODO -> Remove from playlist
// @TODO-> Delete entire playlist
