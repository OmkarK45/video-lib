const express = require('express')
const router = express.Router()
const {
	getVideos,
	getVideo,
	addToPlaylist,
	createPlaylist,
	getUserPlaylists,
	removeFromPlaylist,
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
// @TODO -> remove an playlist itself
router.route('/playlist/remove-video').patch(checkAuth, removeFromPlaylist)
module.exports = router
