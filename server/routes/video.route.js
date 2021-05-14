const express = require('express')
const router = express.Router()
const {
	getVideos,
	getVideo,
	addToPlaylist,
	createPlaylist,
	getUserPlaylists,
	removeFromPlaylist,
	deletePlaylist,
} = require('../controllers/video')
const { checkAuth } = require('../middlewares/checkAuth')

/**
 * All of these are prefixed with /api/
 * */
/**
 *  Video Routes
 * */
router.route('/videos').get(getVideos)
router.route('/videos/:videoID').get(getVideo)

/**
 *  Playlist Routes
 * */
router.route('/playlists').get(checkAuth, getUserPlaylists)
router.route('/playlist/add-video').post(checkAuth, addToPlaylist)
router.route('/playlist/new').post(checkAuth, createPlaylist)
router.route('/playlist/remove-video').patch(checkAuth, removeFromPlaylist)
router.route('/playlist/delete').put(checkAuth, deletePlaylist)

module.exports = router
